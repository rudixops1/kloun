/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import { gql } from '@apollo/client';
import Link from 'next/link';

import { Main } from '@/components/Layouts/Main';
import { Meta } from '@/components/Layouts/Meta';
import { Pagination } from '@/components/Pagination';
import client from '@/data/client';

export type User = {
  id: string;
};

const Index = ({
  twusers,
  page,
}: {
  twusers: User[];
  page: number;
}): JSX.Element => {
  return (
    <Main
      hideFooter
      meta={<Meta title='Twitter DB' description='Twitter DB' />}
    >
      <ul className='menu menu-compact flex-row flex-wrap justify-center p-0'>
        {twusers.map((user) => (
          <li key={user.id} className='m-1'>
            <Link href={`https://twitter.com/${user.id}`}>
              <a
                className='active flex gap-4 bg-slate-900'
                rel='nofollow noreferrer'
                target='_blank'
              >
                {user.id}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination pages={365195} pagenum={page} cat='/tw/?page=' hideStats />
    </Main>
  );
};

export const USERS = gql`
  query MyQuery($offset: Int!) {
    twusers(
      order_by: { nid: asc }
      where: { nid: { _gte: $offset } }
      limit: 300
    ) {
      id
    }
  }
`;

export const getServerSideProps = async ({
  query,
}: {
  query: { page: string };
}) => {
  const { page } = query;
  const rpage = Number(page ? page.replace('/', '') : 1);
  const offset = (rpage - 1) * 300;

  const { data } = await client.query({ query: USERS, variables: { offset } });

  return {
    props: {
      twusers: data.twusers,
      page: rpage,
    },
  };
};
export default Index;
