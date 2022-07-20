/* eslint-disable no-console */
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { dialogAtom } from '@/atoms/dialog';

export interface Item {
  id: number;
  promoted: number;
  userId: number;
  up: number;
  down: number;
  created: number;
  image: string;
  thumb: string;
  fullsize: string;
  width: number;
  height: number;
  audio: boolean;
  source: string;
  flags: number;
  user: string;
  mark: number;
  gift: number;
}

export interface RootObject {
  atEnd: boolean;
  atStart: boolean;
  error?: any;
  items: Item[];
  ts: number;
  cache: string;
  rt: number;
  qc: number;
}

const Program = ({
  limit,
  className
}: {
  limit?: number;
  className: string;
}) => {
  const setDialog = useSetRecoilState(dialogAtom);
  const [items, setItems] = React.useState<Item[]>([]);
  const [item, setItem] = React.useState<number>();

  async function fetchMyAPI(older?: number) {
    const response = await axios.get<RootObject>(
      `https://api.codetabs.com/v1/proxy?quest=https://pr0gramm.com/api/items/get?flags=1&promoted=1${
        older ? `&older=${older}` : ''
      }`
    );
    if (older) {
      setItems((itemz) => itemz.concat(response.data.items));
      setItem(response.data.items[response.data.items.length - 1]!.promoted);
    } else {
      setItems(response.data.items);
      setItem(response.data.items[response.data.items.length - 1]!.promoted);
    }
  }

  const setLoaded = (id: number) => {
    if (id === item) {
      fetchMyAPI(id);
    }
  };
  useEffect(() => {
    // initial fetch
    fetchMyAPI();
  }, []);

  if (!items) {
    return <div>Loading...</div>;
  }

  return (
    <div className={className}>
      {items
        .slice(0, limit || items.length)
        .map(
          ({
            thumb,
            fullsize,
            image,
            id,
            promoted
          }: {
            thumb: string;
            fullsize?: string;
            image?: string;
            id: number;
            promoted: number;
          }) => (
            <div
              key={id}
              className="m-2 flex cursor-pointer items-center justify-center hover:animate-pulse">
              <div className="flex snap-start rounded-lg bg-gradient-to-r from-purple-900 to-pink-600 p-1">
                <Image
                  onLoadingComplete={() => setLoaded(promoted)}
                  className="rounded-lg"
                  onClick={(): void => {
                    document.body.style.overflow = 'hidden';
                    setDialog(() => {
                      return {
                        imgid: `https://img.pr0gramm.com/${fullsize || image}`
                      };
                    });
                  }}
                  alt="pr0gramm"
                  placeholder="empty"
                  width={128}
                  height={128}
                  src={`https://thumb.pr0gramm.com/${thumb}`}
                  layout="fixed"
                />
              </div>
            </div>
          )
        )}
    </div>
  );
};
export { Program };
