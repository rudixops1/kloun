/* eslint-disable no-underscore-dangle */
import dynamic from 'next/dynamic';
import type { FC, MouseEvent, ReactElement } from 'react';
import React from 'react';
import { useSetRecoilState } from 'recoil';

import { dialogAtom } from '@/atoms/dialog';
import { FormatJoke } from '@/components/JokeText';
import { AppConfig } from '@/utils/AppConfig';

import type { Doc } from '../data/structure';

const FacebookShare = dynamic(() => import('@/components/FacebookShare'), {
  ssr: false,
});

interface Props {
  item: Doc;
  id?: string;
  showcats?: boolean;
  short: boolean;
  hideReadMore?: boolean;
  onClick?: (event: MouseEvent) => void;
}

export const JokeThumbnail: FC<Props> = ({
  item,
  showcats,
  short,
  hideReadMore,
}): ReactElement => {
  const { joke, cat } = item;
  const jlen = joke.length <= 150;
  const setDialog = useSetRecoilState(dialogAtom);
  return (
    <article className='joke'>
      {showcats && item.cat !== 'Разни' && (
        <a
          className='joketop'
          href={`${AppConfig.link}/cat/${cat.replace(/ /g, '%20')}/`}
        >
          <h2>{cat}</h2>
        </a>
      )}
      <div className='jokewrap'>
        <div className='py-5'>
          <FormatJoke joke={joke} short={short} />
        </div>
      </div>
      {!hideReadMore &&
        (!jlen ? (
          <a
            onClick={(e: MouseEvent): void => {
              e.preventDefault();
              document.body.style.overflow = 'hidden';
              setDialog(() => {
                return { id: item._id };
              });
            }}
            className='jokebottom'
            href={`${AppConfig.link}/joke/${item._id}`}
          >
            Прочети
            <svg
              className='ml-2 '
              fill='#FFF'
              height={24}
              width={24}
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipRule='evenodd' fillRule='evenodd'>
                <path d='M10.43 7.354c.3-.3.788-.3 1.088 0l3.378 3.377a1.795 1.795 0 0 1 0 2.538l-3.378 3.378a.77.77 0 0 1-1.088-1.088l3.378-3.378c.1-.1.1-.262 0-.362L10.43 8.44a.77.77 0 0 1 0-1.087z' />
                <path d='M12 3.538c-2.17 0-5.134.2-6.985.343a1.228 1.228 0 0 0-1.134 1.134C3.738 6.866 3.538 9.831 3.538 12c0 2.17.2 5.134.343 6.985a1.228 1.228 0 0 0 1.134 1.134c1.851.143 4.816.342 6.985.342 2.17 0 5.134-.198 6.985-.342a1.229 1.229 0 0 0 1.134-1.134c.143-1.851.342-4.816.342-6.985 0-2.17-.198-5.134-.342-6.985a1.228 1.228 0 0 0-1.134-1.134c-1.851-.143-4.816-.343-6.985-.343zm-7.104-1.19C6.748 2.203 9.766 2 12 2c2.235 0 5.252.204 7.104.347a2.767 2.767 0 0 1 2.549 2.55C21.796 6.747 22 9.764 22 12c0 2.235-.204 5.252-.347 7.104a2.767 2.767 0 0 1-2.55 2.549C17.253 21.796 14.235 22 12 22c-2.235 0-5.252-.204-7.104-.347a2.767 2.767 0 0 1-2.549-2.55C2.204 17.253 2 14.235 2 12c0-2.235.204-5.252.347-7.104a2.767 2.767 0 0 1 2.55-2.549z' />
              </g>
            </svg>
          </a>
        ) : (
          <div className=' absolute right-5 -mt-8'>
            <FacebookShare
              id={`https://www.kloun.lol/joke/${item._id}`}
              noText
              noWrapper
            />
          </div>
        ))}
    </article>
  );
};
