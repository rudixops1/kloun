/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import type { GetServerSideProps } from 'next';

import { Main } from '@/components/Layouts/Main';
import { Meta } from '@/components/Layouts/Meta';
import NewsThumbnail from '@/components/NewsThumbnail';
import { Pagination } from '@/components/Pagination';
import client from '@/data/client';
import type { RootNewsProps } from '@/pages/news/';
import { DATA_AGREGATE, DATA_QUERY } from '@/pages/news/';

const PagingNews = ({
  newsbg,
  newsbg_aggregate,
  pagenum,
}: RootNewsProps): JSX.Element => {
  return (
    <Main
      hideFooter
      meta={
        <Meta
          title='Новини'
          description='Новини'
          cat='Новини'
          url={`https://www.kloun.lol/news/${pagenum}`}
        />
      }
    >
      <div className='my-10 flex w-full flex-col'>
        <div className='flex flex-wrap'>
          {newsbg.map((item) => (
            <div className='joke' key={item.slug}>
              <div className='jokewrap'>
                <NewsThumbnail {...item} />
              </div>
            </div>
          ))}
        </div>
        <Pagination
          pages={newsbg_aggregate.aggregate.max.nid}
          pagenum={Number(pagenum)}
          cat='/news'
          hideStats
        />
      </div>
    </Main>
  );
};
export default PagingNews;

export const getServerSideProps: GetServerSideProps = async ({
  query,
  res,
}) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  const { pagenum } = query;
  const agregate = await client.query({ query: DATA_AGREGATE });

  const end =
    agregate.data.newsbg_aggregate.aggregate.max.nid -
    (Number(pagenum) - 1) * 30;

  const { data } = await client.query({
    query: DATA_QUERY,
    variables: { pagenum, end },
  });

  return {
    props: {
      newsbg: data.newsbg,
      newsbg_aggregate: agregate.data.newsbg_aggregate,
      pagenum,
    },
  };
};
