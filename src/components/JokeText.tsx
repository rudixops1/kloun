/* eslint-disable no-cond-assign */
/* eslint-disable no-nested-ternary */
import type { FC, ReactElement } from 'react';
import React from 'react';

export const formattedjoke = (joke: string): string => {
  return joke
    .replaceAll('- А', '\n- А')
    .replaceAll('- Б', '\n- Б')
    .replaceAll('- В', '\n- В')
    .replaceAll('- Г', '\n- Г')
    .replaceAll('- Д', '\n- Д')
    .replaceAll('- Е', '\n- Е')
    .replaceAll('- Ж', '\n- Ж')
    .replaceAll('- З', '\n- З')
    .replaceAll('- И', '\n- И')
    .replaceAll('- Й', '\n- Й')
    .replaceAll('- К', '\n- К')
    .replaceAll('- Л', '\n- Л')
    .replaceAll('- М', '\n- М')
    .replaceAll('- Н', '\n- Н')
    .replaceAll('- О', '\n- О')
    .replaceAll('- П', '\n- П')
    .replaceAll('- Р', '\n- Р')
    .replaceAll('- С', '\n- С')
    .replaceAll('- Т', '\n- Т')
    .replaceAll('- У', '\n- У')
    .replaceAll('- Ф', '\n- Ф')
    .replaceAll('- Х', '\n- Х')
    .replaceAll('- Ц', '\n- Ц')
    .replaceAll('- Ч', '\n- Ч')
    .replaceAll('- Ш', '\n- Ш')
    .replaceAll('- Щ', '\n- Щ')
    .replaceAll('- Ю', '\n- Ю')
    .replaceAll('- Я', '\n- Я')
    .replaceAll('-А', '\n-А')
    .replaceAll('-Б', '\n-Б')
    .replaceAll('-В', '\n-В')
    .replaceAll('-Г', '\n-Г')
    .replaceAll('-Д', '\n-Д')
    .replaceAll('-Е', '\n-Е')
    .replaceAll('-Ж', '\n-Ж')
    .replaceAll('-З', '\n-З')
    .replaceAll('-И', '\n-И')
    .replaceAll('-Й', '\n-Й')
    .replaceAll('-К', '\n-К')
    .replaceAll('-Л', '\n-Л')
    .replaceAll('-М', '\n-М')
    .replaceAll('-Н', '\n-Н')
    .replaceAll('-О', '\n-О')
    .replaceAll('-П', '\n-П')
    .replaceAll('-Р', '\n-Р')
    .replaceAll('-С', '\n-С')
    .replaceAll('-Т', '\n-Т')
    .replaceAll('-У', '\n-У')
    .replaceAll('-Ф', '\n-Ф')
    .replaceAll('-Х', '\n-Х')
    .replaceAll('-Ц', '\n-Ц')
    .replaceAll('-Ч', '\n-Ч')
    .replaceAll('-Ш', '\n-Ш')
    .replaceAll('-Щ', '\n-Щ')
    .replaceAll('-Ю', '\n-Ю')
    .replaceAll('-Я', '\n-Я')
    .replaceAll('—', '\n-');
};

interface Props {
  joke: string;
  short?: boolean;
}

export const FormatJoke: FC<Props> = ({ joke, short }): ReactElement => {
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
