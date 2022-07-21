/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import { gql } from '@apollo/client';
import type { GetServerSideProps } from 'next';

import client from '@/data/client';

import { Main } from '@/components/Layouts/Main';
import { Meta } from '@/components/Layouts/Meta';
import NewsThumbnail from '@/components/NewsThumbnail';
import { Pagination } from '@/components/Pagination';

export interface RootNewsProps {
  newsbg: News[];
  newsbg_aggregate: NewsAggregate;
  newsbg_by_pk: NewsByPk;
  npagenum?: number;
  shuffled?: string[];
}

export interface News {
  __typename: string;
  uid: string;
  title: string;
  image: string;
  slug: string;
}

export interface NewsAggregate {
  __typename: string;
  aggregate: Aggregate;
}

export interface Aggregate {
  __typename: string;
  max: { nid: number };
}

export interface NewsByPk {
  __typename: string;
  date: string;
  title: string;
  image: string;
  slug: string;
  uid: string;
  href: string;
  source: string;
  content: {
    html: string[];
    description?: string;
    image?: string;
  };
}

const Index = ({ newsbg, newsbg_aggregate }: RootNewsProps): JSX.Element => {
  return (
    <Main
      hideFooter
      meta={
        <Meta
          title='Новини'
          description='Новини'
          cat='Новини'
          url='https://www.kloun.lol/news/'
        />
      }
    >
      <div className='my-10 flex w-full flex-col'>
        <div className='flex flex-wrap'>
          {newsbg.map((item) => (
            <NewsThumbnail key={item.uid} {...item} />
          ))}
          <Pagination
            pages={newsbg_aggregate.aggregate.max.nid}
            pagenum={1}
            cat='/news'
            hideStats
          />
        </div>
      </div>
    </Main>
  );
};
export const DATA_AGREGATE = gql`
  query MyQuery {
    newsbg_aggregate {
      aggregate {
        max {
          nid
        }
      }
    }
  }
`;

export const DATA_QUERY = gql`
  query MyQuery($end: Int!) {
    newsbg(limit: 30, where: { nid: { _lte: $end } }, order_by: { nid: desc }) {
      title
      image
      uid
      slug
    }
  }
`;
export const getServerSideProps: GetServerSideProps = async () => {
  const npagenum = 1;
  const agregate = await client.query({ query: DATA_AGREGATE });

  const start =
    agregate.data.newsbg_aggregate.aggregate.max.nid -
    (Number(npagenum) - 1) * 30;
  const end = start;

  const { data } = await client.query({
    query: DATA_QUERY,
    variables: { npagenum, start, end },
  });

  return {
    props: {
      newsbg: data.newsbg,
      newsbg_aggregate: agregate.data.newsbg_aggregate,
      npagenum,
    },
  };
};
export default Index;
