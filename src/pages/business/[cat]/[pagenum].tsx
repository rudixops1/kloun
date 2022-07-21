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
  pagenum,
}: {
  cats: Cat[];
  cat: string;
  pages: number;
  pagenum: number;
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
      <Pagination pages={pages} pagenum={pagenum} cat={`/business/${cat}`} />
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { cat, pagenum } = context.query;
  const agregate = await client.query({ query: DATA_AGREGATE });
  const offset = (Number(pagenum) - 1) * 30;
  // const agregate = await client.query({ query: DATA_AGREGATE });
  const { data } = await client.query({
    query: CITY_DATA,
    variables: { location: cat, offset },
  });

  return {
    props: {
      pages: agregate.data.companies_count.find((c: Cat) => c.cat === cat)
        .count,
      cats: data.cats,
      cat,
      pagenum: Number(pagenum),
    },
  };
};
export default Index;
