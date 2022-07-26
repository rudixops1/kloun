/* eslint-disable no-cond-assign */
/* eslint-disable no-nested-ternary */
import React from 'react';

import { formattedjoke } from '@/utils/formatter';

export const FormatJoke = ({
  joke,
  short,
}: {
  joke: string;
  short?: boolean;
}): JSX.Element => {
  if (short) {
    const substr = joke.slice(0, 150);
    const jlen = joke.length <= 150;
    const lines = formattedjoke(substr).split('\n').slice(0, 3);
    return (
      <>
        {lines.map((line: string, i: number) => (
          <p key={i}>{i === 2 && !jlen ? <>{`${line}...`}</> : line}</p>
        ))}
        {substr.length >= 149 && lines.length <= 2 && <>...</>}
      </>
    );
  }
  let i1 = 0;

  const remapped = formattedjoke(joke)
    .split('\n')
    .map((line, i) => {
      const num =
        line.startsWith('-') ||
        line.startsWith(' -') ||
        line.startsWith('–') ||
        line.startsWith('  -')
          ? (i1 += 1) % 2 === 0
            ? 'even'
            : 'odd'
          : false;

      return {
        key: i,
        line:
          num === 'odd' || num === 'even'
            ? line.replace('-', '').replace('–', '')
            : line,
        ...(num && { oddness: num }),
      };
    });

  return (
    <>
      {remapped.map(
        ({
          oddness,
          line,
          key,
        }: {
          oddness?: string;
          line: string;
          key: number;
        }) =>
          oddness ? (
            <div
              className={`flex flex-wrap pb-4 ${
                oddness === 'even' ? 'flex-row-reverse' : ''
              }`}
              key={key}
            >
              <div
                className={`relative whitespace-pre-wrap rounded-lg p-2 font-sans font-medium shadow-2xl ${
                  oddness === 'even'
                    ? 'bg-violet-900 text-right'
                    : 'bg-indigo-700 text-left'
                }`}
              >
                {oddness === 'odd' ? (
                  <div className='absolute -left-4 top-3 inline-block w-4 overflow-hidden'>
                    <div className='h-16  origin-top-right -rotate-45 bg-indigo-700'></div>
                  </div>
                ) : (
                  <div className='absolute -right-4 top-3 inline-block w-4 overflow-hidden'>
                    <div className=' h-16  origin-top-left rotate-45 bg-violet-900'></div>
                  </div>
                )}
                {line}
              </div>
            </div>
          ) : (
            <div key={key} className='block pb-4 text-lg'>
              {line}
            </div>
          )
      )}
    </>
  );
};
