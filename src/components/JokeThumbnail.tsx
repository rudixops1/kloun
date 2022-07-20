/* eslint-disable no-underscore-dangle */
import dynamic from 'next/dynamic';
import type { FC, MouseEvent, ReactElement } from 'react';
import React from 'react';
import { useSetRecoilState } from 'recoil';

import { dialogAtom } from '@/atoms/dialog';
import { FormatJoke } from '@/components/JokeText';

import type { Doc } from '../data/structure';

const FacebookShare = dynamic(() => import('@/components/FacebookShare'), {
  ssr: false
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
  hideReadMore
}): ReactElement => {
  const { joke, cat } = item;
  const jlen = joke.length <= 150;
  const setDialog = useSetRecoilState(dialogAtom);
  return (
    <div className="joke">
      {showcats && item.cat !== 'Разни' && (
        <a className="joketop" href={`/cat/${cat.replace(/ /g, '%20')}/`}>
          {cat}
        </a>
      )}
      <div className="jokewrap">
        <div className="py-5">
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
            className="jokebottom"
            href={`/joke/${item._id}`}
          >
            Прочети
            <img src="/images/arrow.svg" className="ml-2 h-4 w-4" alt="" />
          </a>
        ) : (
          <div className=" absolute right-5 -mt-8">
            <FacebookShare id={item._id} noText noWrapper />
          </div>
        ))}
    </div>
  );
};
