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
  npagenum
}: RootNewsProps): JSX.Element => {
  return (
    <Main
      hideFooter
      meta={
        <Meta
          title="Новини"
          description="Новини"
          cat="Новини"
          url={`https://kloun.lol/news/${npagenum}`}
        />
      }>
      <div className="my-10 flex w-full flex-col">
        <div className="flex flex-wrap">
          {newsbg.map((item) => (
            <NewsThumbnail key={item.slug} {...item} />
          ))}
        </div>
        <Pagination
          pages={newsbg_aggregate.aggregate.max.nid}
          pagenum={Number(npagenum)}
          cat={`/news/`}
          hideStats
        />
      </div>
    </Main>
  );
};
export default PagingNews;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { npagenum } = context.query;
  const agregate = await client.query({ query: DATA_AGREGATE });
  const start =
    agregate.data.newsbg_aggregate.aggregate.max.nid -
    (Number(npagenum) - 1) * 30;
  const end = start;

  const { data } = await client.query({
    query: DATA_QUERY,
    variables: { npagenum, start, end }
  });

  return {
    props: {
      newsbg: data.newsbg,
      newsbg_aggregate: agregate.data.newsbg_aggregate,
      npagenum
    }
  };
};
