/* eslint-disable no-cond-assign */
/* eslint-disable no-nested-ternary */
import type { FC, ReactElement } from 'react'
import React from 'react'

interface Props {
  joke: string
  short?: boolean
}

export const FormatJoke: FC<Props> = ({ joke, short }): ReactElement => {
  if (short) {
    const substr = joke.substring(0, 150)
    const jlen = joke.length <= 150
    const lines = substr.split('\n').slice(0, 3)
    return (
      <>
        {lines.map((line: string, i: number) => (
          <p key={i}>{i === 2 && !jlen ? <>{`${line}...`}</> : line}</p>
        ))}
        {substr.length >= 149 && lines.length <= 2 && <>{'...'}</>}
      </>
    )
  }
  let i1 = 0

  const remapped = joke.split('\n').map((line, i) => {
    const num =
      line.startsWith('-') ||
      line.startsWith(' -') ||
      line.startsWith('–') ||
      line.startsWith('  -')
        ? (i1 += 1) % 2 === 0
          ? 'even'
          : 'odd'
        : false

    return {
      key: i,
      line:
        num === 'odd' || num === 'even'
          ? line.replace('-', '').replace('–', '')
          : line,
      ...(num && { oddness: num }),
    }
  })

  return (
    <div>
      {remapped.map(
        ({
          oddness,
          line,
          key,
        }: {
          oddness?: string
          line: string
          key: number
        }) =>
          oddness ? (
            <div
              className={`flex flex-wrap pb-4 ${
                oddness === 'even' ? 'flex-row-reverse' : ''
              }`}
              key={key}
            >
              <div
                className={`whitespace-pre-wrap rounded-lg p-2 font-sans font-medium shadow-2xl ${
                  oddness === 'even'
                    ? 'bg-violet-900 text-right'
                    : 'bg-indigo-700 text-left'
                }`}
              >
                {line}
              </div>
            </div>
          ) : (
            <div key={key} className="block pb-4 text-lg">
              {line}
            </div>
          )
      )}
    </div>
  )
}
