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
  return (
    <div>
      {joke.split('\n').map((line: string, i: number) =>
        line.startsWith('-') ? (
          <div className="flex flex-wrap odd:flex-row-reverse" key={i}>
            <div
              className={`${
                i % 2 === 0
                  ? 'speech-bubble-even bg-gradient-to-r text-right'
                  : 'speech-bubble-odd bg-gradient-to-l text-left'
              } speech-bubble my-3 rounded from-purple-900 to-pink-600 p-3 `}
            >
              <div>{line.replace('-', '')}</div>
            </div>
          </div>
        ) : (
          <div key={i} className="block">
            {line}
          </div>
        )
      )}
    </div>
  )
}
