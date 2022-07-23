import Link from 'next/link';

import { AppConfig } from '@/utils/AppConfig';

export interface Cat {
  cat: string;
  count: number;
  altcount?: number;
  althref?: string;
}
export interface NavProps {
  cats: Cat[];
  limit?: number;
  prefix: string;
  formatlength?: boolean;
}

const Nav = ({ cats, limit, prefix, formatlength }: NavProps) => {
  const newcats = cats.slice(0, limit || cats.length);
  const formatcount = (count: number) => {
    if (count > 1000) {
      return `${Math.floor(count / 1000)}k`;
    }
    return count;
  };

  return (
    <div className='flex flex-wrap sm:mx-auto sm:mb-2 '>
      {newcats.map(
        (d: {
          cat: string;
          count: number;
          altcount?: number;
          althref?: string;
        }) => (
          <Link
            key={d.cat}
            href={`${AppConfig.link}/${prefix}/${
              d.althref || d.cat.replace(/ /g, '%20')
            }/`}
            passHref
          >
            <a className='w-full grow p-2 sm:w-1/2 md:w-1/3   lg:w-1/4 xl:w-1/5 '>
              <div className='flex h-full items-center rounded bg-gray-800 p-4'>
                <div className='flex-1  justify-center align-middle font-medium text-white'>
                  {formatlength ? (
                    <span className='text-xs'>{d.cat}</span>
                  ) : (
                    <span>{d.cat}</span>
                  )}
                </div>
                {d.count !== 0 && (
                  <div className='btn1-count'>{formatcount(d.count)}</div>
                )}
                {d.altcount !== undefined && (
                  <div className='flex-none  rounded bg-green-700 px-2 text-2xl font-extralight'>
                    {d.altcount}
                  </div>
                )}
              </div>
            </a>
          </Link>
        )
      )}
    </div>
  );
};

export default Nav;
