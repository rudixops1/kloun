/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import { gql } from '@apollo/client';
import type { GetServerSideProps } from 'next';

import Main from '@/components/Layouts/Main';
import Meta from '@/components/Layouts/Meta';
import type { Cat } from '@/components/Nav';
import Nav from '@/components/Nav';

import { businessdata } from '../../utils/formatter';

export type Company = {
  _id: string;
  name: string;
  zip: number;
  location: string;
  uid?: string;
  created_at: number;
};

const Index = ({ cats }: { cats: Cat[] }): JSX.Element => {
  return (
    <Main
      meta={
        <Meta
          title='Бизнес фирми'
          description='Бизнес фирми'
          cat='Business'
          url='https://www.kloun.lol/business/'
        />
      }
    >
      <Nav cats={cats} prefix='business' limit={50} />
      <div className='my-10 flex w-full flex-col'>
        <div className='flex flex-wrap'></div>
      </div>
      <p className='text-center text-xs font-thin'>
        Източник на информацията: Официални регистри на Националната агенция по
        приходите и Комисия за защита на личните данни.
      </p>
    </Main>
  );
};

export const CITY_DATA = gql`
  query MyQuery($location: String!, $offset: Int!) {
    cats: companies(
      limit: 30
      offset: $offset
      where: { location: { _eq: $location } }
    ) {
      _id
      cat: name
      althref: _id
      altcount: created_at
    }
  }
`;

export const COMPANY_INFO = gql`
  query MyQuery($id: Int = 10) {
    companies_by_pk(_id: $id) {
      created_at
      location
      name
      zip
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');

  return {
    props: {
      cats: businessdata,
    },
  };
};
export default Index;
