/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import { gql } from '@apollo/client';

import { Main } from '@/components/Layouts/Main';
import { Meta } from '@/components/Layouts/Meta';
import { Pagination } from '@/components/Pagination';
import client from '@/data/client';

export type Movie = {
  title: string;
  slug: string;
  description: string;
};

const Index = ({
  movies,
  page,
  pages,
}: {
  movies: Movie[];
  page: number;
  pages: number;
}): JSX.Element => {
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
      <div className='flex flex-wrap gap-4'>
        {movies.map(({ slug, title, description }) => (
          <div className='card bg-base-100 shadow-xl lg:card-side' key={slug}>
            <figure>
              <img
                src={`https://klounda-s3.s3.us-east-1.amazonaws.com/public/filmi/${slug}.jpg`}
                alt={title}
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{title}</h2>
              <p>
                {description.length > 100 ? (
                  <>{description.slice(0, 100)} ...</>
                ) : (
                  description
                )}
              </p>
              <div className='card-actions justify-end'>
                <button className='btn btn-primary'>Listen</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination pages={pages} pagenum={page} cat='/movies/?page=' hideStats />
    </Main>
  );
};

export const USERS = gql`
  query MyQuery2($offset: Int!) {
    movies_aggregate {
      aggregate {
        count
      }
    }
    movies(limit: 30, offset: $offset) {
      id
      slug
      title
      year
      description
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
  const offset = (rpage - 1) * 30;

  const { data } = await client.query({ query: USERS, variables: { offset } });
  const pages = data.movies_aggregate.aggregate.count;
  return {
    props: {
      movies: data.movies,
      page: rpage,
      pages,
    },
  };
};
export default Index;
