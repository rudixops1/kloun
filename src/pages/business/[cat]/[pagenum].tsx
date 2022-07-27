/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import type { GetServerSideProps } from 'next';

import Main from '@/components/Layouts/Main';
import Meta from '@/components/Layouts/Meta';
import Nav from '@/components/Nav';
import { Pagination } from '@/components/Pagination';
import client from '@/data/client';
import type { Cat } from '@/utils/formatter';
import { businessdata, deslugify } from '@/utils/formatter';

import { CITY_DATA } from '..';

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

export const getServerSideProps: GetServerSideProps = async ({
  res,
  query,
}) => {
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  const { cat, pagenum } = query as { cat: string; pagenum: string };

  const offset = (Number(pagenum) - 1) * 30;
  // const agregate = await client.query({ query: DATA_AGREGATE });
  const { data } = await client.query({
    query: CITY_DATA,
    variables: { location: deslugify(cat), offset },
  });
  const pages = businessdata.find((c) => c.slug === cat)!.count;
  return {
    props: {
      pages,
      cats: data.cats,
      cat,
      pagenum: Number(pagenum),
    },
  };
};
export default Index;
