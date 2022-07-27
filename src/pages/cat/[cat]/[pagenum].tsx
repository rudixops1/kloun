/* eslint-disable no-underscore-dangle */

import type { GetServerSideProps } from 'next';
import Link from 'next/link';

import { JokeThumbnail } from '@/components/JokeThumbnail';
import Main from '@/components/Layouts/Main';
import Meta from '@/components/Layouts/Meta';
import { Pagination } from '@/components/Pagination';
import client from '@/data/client';
import type { Doc } from '@/data/structure';
import { AppConfig } from '@/utils/AppConfig';
import { deslugify } from '@/utils/formatter';

import { DATA_QUERY_CAT } from './index';

const CatPage = ({
  jokes,
  pages,
  pagenum,
  cat,
}: {
  jokes: Doc[];
  pages: number;
  pagenum: number;
  cat: string;
}): JSX.Element => {
  return (
    <Main
      hideFooter
      meta={
        <Meta
          title={`Вицове от ${deslugify(cat)} на страница ${pagenum}`}
          description={`Вицове от ${deslugify(cat)} ${jokes[0].joke}`}
        />
      }
    >
      <div className='breadcrumbs text-sm'>
        <ul>
          <li>
            <Link href={`${AppConfig.link}/?type=Jokes`}>Вицове</Link>
          </li>
          <li>
            <Link href={`${AppConfig.link}/cat/${cat}`}>{deslugify(cat)}</Link>
          </li>
          <li>
            <Link href={`${AppConfig.link}/cat/${cat}/${pagenum}`}>
              {pagenum}
            </Link>
          </li>
        </ul>
      </div>
      <div className='fixed bottom-0 left-0 z-10 flex w-full justify-center bg-black/30 p-4 backdrop-blur-sm'>
        <Pagination
          pages={pages}
          pagenum={pagenum}
          cat={`/cat/${cat}`}
          hideStats
        />
      </div>
      <div className='flex flex-wrap'>
        {jokes.map((item) => (
          <JokeThumbnail
            item={item}
            key={item._id}
            showcats={false}
            short={true}
          />
        ))}
      </div>
    </Main>
  );
};

export default CatPage;

export const getServerSideProps: GetServerSideProps = async ({
  query,
  res,
}) => {
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  const { cat, pagenum } = query as { cat: string; pagenum: string };
  const offset = (Number(pagenum) - 1) * 30;

  const { data } = await client.query({
    query: DATA_QUERY_CAT,
    variables: { pagenum, offset, cat: deslugify(cat) },
  });

  return {
    props: {
      jokes: data.jokes,
      pagenum,
      cat,
      pages: data.jokes_aggregate.aggregate.count,
    },
  };
};
