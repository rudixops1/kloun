/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import type { GetServerSideProps } from 'next';

import Main from '@/components/Layouts/Main';
import Meta from '@/components/Layouts/Meta';
import Nav from '@/components/Nav';
import { Pagination } from '@/components/Pagination';
import client from '@/data/client';
import { CITY_DATA } from '@/pages/business';
import type { Cat } from '@/utils/formatter';
import { businessdata, deslugify } from '@/utils/formatter';

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
      {JSON.stringify(cats)}
      <Nav cats={cats} prefix='business/_company' formatlength={true} />
      <Pagination pages={pages} pagenum={1} cat={`/business/${cat}`} />
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query,
  res,
}) => {
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  const { cat } = query as { cat: string };

  const { data } = await client.query({
    query: CITY_DATA,
    variables: { location: deslugify(cat), offset: 0 },
  });
  const pages = businessdata.find((c) => c.slug === cat)!.count;
  return {
    props: {
      cats: data.cats,
      cat,
      pages,
    },
  };
};
export default Index;
