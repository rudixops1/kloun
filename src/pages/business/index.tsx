/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import { gql } from '@apollo/client';
import type { GetServerSideProps } from 'next';

import type { Cat } from '@/components/Nav';
import Nav from '@/components/Nav';
import { Main } from '@/components/Layouts/Main';
import { Meta } from '@/components/Layouts/Meta';
import client from '@/data/client';

const Index = ({ cats }: { cats: Cat[] }): JSX.Element => {
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
      <Nav cats={cats} prefix='business' />
      <div className='my-10 flex w-full flex-col'>
        <div className='flex flex-wrap'></div>
      </div>
    </Main>
  );
};
export const DATA_AGREGATE = gql`
  query MyQuery {
    companies_count(order_by: { count: desc }, limit: 100) {
      count
      cat: location
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({ query: DATA_AGREGATE });

  return {
    props: {
      cats: data.companies_count,
    },
  };
};
export default Index;
