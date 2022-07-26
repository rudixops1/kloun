/* eslint-disable no-underscore-dangle */
import dynamic from 'next/dynamic';
import Image from 'next/image';
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
          className='joketop text-shadow'
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
            className='jokebottom text-shadow'
            href={`${AppConfig.link}/joke/${item._id}`}
          >
            Прочети
            <span className='ml-1'>
              <Image
                src='/images/readmore.svg'
                width={33}
                height={14}
                alt='прочети'
              />
            </span>
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
