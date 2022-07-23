/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import { gql } from '@apollo/client';
import type { GetServerSideProps } from 'next';
import Link from 'next/link';

import { Main } from '@/components/Layouts/Main';
import { Meta } from '@/components/Layouts/Meta';
import { Pagination } from '@/components/Pagination';
import client from '@/data/client';

export type User = {
  id: string;
};

const Index = ({ twusers }: { twusers: User[] }): JSX.Element => {
  return (
    <Main
      hideFooter
      meta={
        <Meta
          title='Twitter DB'
          description='Twitter DB'
          cat='Twitter'
          url='https://www.kloun.lol/business/'
        />
      }
    >
      <ul className='menu menu-compact flex-row flex-wrap justify-center p-0'>
        {twusers.map((user) => (
          <li key={user.id} className='m-1'>
            <Link href={`https://twitter.com/${user.id}`}>
              <a
                className='active flex gap-4 bg-slate-900'
                rel='nofollow noreferrer'
                target={'_blank'}
              >
                <span className='flex-1'>{user.id}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination pages={365195} pagenum={1} cat='/tw?page=' hideStats />
      <div className='btn-group mt-10 justify-center'>
        <button className='btn'>1</button>
        <button className='btn btn-active'>2</button>
        <button className='btn'>3</button>
        <button className='btn'>4</button>
      </div>
    </Main>
  );
};

export const USERS = gql`
  query MyQuery {
    twusers(order_by: { uid: asc }, limit: 300) {
      id
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({ query: USERS });

  return {
    props: {
      twusers: data.twusers,
    },
  };
};
export default Index;
