/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import { gql } from '@apollo/client';
import Image from 'next/image';

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
      <div className='mb-10 flex flex-wrap'>
        {movies.map(({ slug, title, description }) => (
          <article key={slug} className='mb-4 md:w-1/2 lg:w-1/3'>
            <div className='m-2 flex h-full rounded-lg bg-base-100'>
              <figure className='relative flex w-1/2  overflow-hidden rounded-l-lg'>
                <div className='absolute inset-0  left-0 h-full'>
                  <Image src={`/filmi/${slug}.jpg`} alt={title} layout='fill' />
                </div>
              </figure>

              <div className='w-3/4 px-4'>
                <h2 className='my-4 text-2xl font-bold'>{title}</h2>
                <p className='mb-8 md:text-sm lg:text-xs'>
                  {description.length > 200 ? (
                    <>{description.slice(0, 200)} ...</>
                  ) : (
                    description
                  )}
                </p>
              </div>
            </div>
            <div className='card-actions -mt-14 mr-2 justify-end'>
              <button className='btn btn-primary rounded-l-none rounded-t-none'>
                още
              </button>
            </div>
          </article>
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
