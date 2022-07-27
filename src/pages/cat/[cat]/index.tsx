/* eslint-disable no-underscore-dangle */

import { gql } from '@apollo/client';
import type { GetServerSideProps } from 'next';
import Link from 'next/link';

import { JokeThumbnail } from '@/components/JokeThumbnail';
import Main from '@/components/Layouts/Main';
import Meta from '@/components/Layouts/Meta';
import { Pagination } from '@/components/Pagination';
import client from '@/data/client';
import type { Doc } from '@/data/structure';
import { AppConfig } from '@/utils/AppConfig';

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
      meta={
        <Meta
          title={`Вицове от ${cat} на страница ${pagenum}`}
          description={`Вицове от ${cat}${jokes[0].joke
            .split('\n')
            .join(' ')
            .substring(0, 100)}`}
        />
      }
    >
      <div className='breadcrumbs text-sm'>
        <ul>
          <li>
            <Link href={`${AppConfig.link}/?type=Jokes`}>Вицове</Link>
          </li>
          <li>
            <Link href={`${AppConfig.link}/cat/${cat}`}>{cat}</Link>
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

export const DATA_QUERY_CAT = gql`
  query MyQuery($cat: String!, $offset: Int!) {
    jokes_aggregate(where: { cat: { _eq: $cat } }) {
      aggregate {
        count(columns: _id)
      }
    }
    jokes(
      where: { cat: { _eq: $cat } }
      limit: 30
      offset: $offset
      order_by: { nid: desc }
    ) {
      _id
      joke
    }
  }
`;
// order_by: { nid: desc }

export const getServerSideProps: GetServerSideProps = async ({
  res,
  query,
}) => {
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  const { cat } = query;

  const { data } = await client.query({
    query: DATA_QUERY_CAT,
    variables: { pagenum: 1, offset: 0, cat },
  });

  return {
    props: {
      jokes: data.jokes,
      pagenum: 1,
      cat,
      pages: data.jokes_aggregate.aggregate.count,
    },
  };
};
