/* eslint-disable no-underscore-dangle */

import { gql } from '@apollo/client';
import type { GetServerSideProps } from 'next';

import { JokeThumbnail } from '@/components/JokeThumbnail';
import { Main } from '@/components/Layouts/Main';
import { Meta } from '@/components/Layouts/Meta';
import { Pagination } from '@/components/Pagination';
import client from '@/data/client';
import type { Doc } from '@/data/structure';

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
          title={`Вицове  на страница ${pagenum}`}
          description={`Вицове от  ${jokes[0].joke
            .split('\n')
            .join(' ')
            .substring(0, 100)}`}
        />
      }
    >
      <Pagination pages={pages} pagenum={pagenum} cat='/cat/all' />
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
      <div className='fixed bottom-0 left-0 z-10 flex w-full justify-center bg-black/30 backdrop-blur-sm'>
        <Pagination
          pages={pages}
          pagenum={pagenum}
          cat={`/cat/${cat}`}
          hideStats
        />
      </div>
    </Main>
  );
};

export default CatPage;

const DATA_ALL = gql`
  query MyQuery($offset: Int!) {
    jokes_aggregate {
      aggregate {
        count
      }
    }
    jokes(order_by: { nid: desc }, limit: 30, offset: $offset) {
      _id
      joke
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: DATA_ALL,
    variables: { pagenum: 1, offset: 0 },
  });

  return {
    props: {
      jokes: data.jokes,
      pagenum: 1,
      pages: data.jokes_aggregate.aggregate.count,
    },
  };
};
