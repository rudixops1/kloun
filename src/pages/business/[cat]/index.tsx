/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import type { GetServerSideProps } from 'next';

import { Main } from '@/components/Layouts/Main';
import { Meta } from '@/components/Layouts/Meta';
import type { Cat } from '@/components/Nav';
import Nav from '@/components/Nav';
import client from '@/data/client';

import { CITY_DATA } from '..';

const Index = ({ cats, cat }: { cats: Cat[]; cat: string }): JSX.Element => {
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
      <Nav cats={cats} prefix='business/i' formatlength={true} />
      <div className='my-10 flex w-full flex-col'>
        <div className='flex flex-wrap'></div>
      </div>
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { cat } = context.query;

  // const agregate = await client.query({ query: DATA_AGREGATE });
  const { data } = await client.query({
    query: CITY_DATA,
    variables: { location: cat },
  });

  return {
    props: {
      cats: data.cats,
      cat,
    },
  };
};
export default Index;
