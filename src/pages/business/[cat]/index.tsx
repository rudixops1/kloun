/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import type { GetServerSideProps } from 'next';

import { Main } from '@/components/Layouts/Main';
import { Meta } from '@/components/Layouts/Meta';
import type { Cat } from '@/components/Nav';
import Nav from '@/components/Nav';
import { Pagination } from '@/components/Pagination';
import client from '@/data/client';

import { CITY_DATA, DATA_AGREGATE } from '..';

const Index = ({
  cats,
  cat,
  pages,
}: {
  cats: Cat[];
  cat: string;
  pages: number;
}): JSX.Element => {
  return (
    <Main
      hideFooter
      title={`Фирми от ${cat}`}
      meta={
        <Meta
          title={`Бизнес фирми във ${cat}`}
          description='Новини'
          cat='Новини'
          url='https://www.kloun.lol/news/'
        />
      }
    >
      <Nav cats={cats} prefix='business/_company' formatlength={true} />
      <Pagination pages={pages} pagenum={1} cat={`/business/${cat}`} />
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query,
  res,
}) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  const { cat } = query;

  const agregate = await client.query({ query: DATA_AGREGATE });

  const { data } = await client.query({
    query: CITY_DATA,
    variables: { location: cat, offset: 0 },
  });

  return {
    props: {
      cats: data.cats,
      cat,
      pages: agregate.data.companies_count.find((c: Cat) => c.cat === cat)
        .count,
    },
  };
};
export default Index;
