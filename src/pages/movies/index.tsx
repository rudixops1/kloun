/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import { gql } from '@apollo/client';
import Image from 'next/image';
import Link from 'next/link';

import { Main } from '@/components/Layouts/Main';
import { Meta } from '@/components/Layouts/Meta';
import { Pagination } from '@/components/Pagination';
import client from '@/data/client';
import { AppConfig } from '@/utils/AppConfig';

export type Movie = {
  title: string;
  slug: string;
  description: string;
  id: number;
  year: number;
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
    <Main meta={<Meta title='Филми DB' description='Филми DB' cat='Filmi' />}>
      <div className='mb-10 flex flex-wrap justify-center'>
        {movies.map(({ slug, title, description, id }) => (
          <article
            key={slug}
            className='mb-4 w-fit sm:w-fit md:w-3/4 lg:w-2/3 xl:w-2/4 2xl:w-2/5'
          >
            <div className='m-2 flex h-full rounded-lg bg-base-100'>
              <figure className='relative flex w-1/2  overflow-hidden rounded-l-lg'>
                <div className='absolute inset-0  left-0 h-full'>
                  <Link href={`/movies/${slug}-${id}`}>
                    <Image
                      src={`/filmi/${slug}.jpg`}
                      alt={title}
                      layout='fill'
                    />
                  </Link>
                </div>
              </figure>

              <div className='w-3/4 px-4'>
                <h2 className='my-4 text-2xl font-bold'>{title}</h2>

                <p className='mb-8'>
                  {description.length > 200 ? (
                    <>{description.slice(0, 200)} ...</>
                  ) : (
                    description
                  )}
                </p>
              </div>
            </div>
            <div className='card-actions -mt-14 mr-2 justify-end'>
              <Link href={`${AppConfig.link}/movies/${slug}-${id}`} passHref>
                <a className='btn btn-primary rounded-l-none rounded-t-none'>
                  още
                </a>
              </Link>
            </div>
          </article>
        ))}
      </div>
      <Pagination pages={pages} pagenum={page} cat='/movies/?page=' hideStats />
    </Main>
  );
};

export const MOVIE = gql`
  query MyQuery($id: Int!) {
    movies_by_pk(id: $id) {
      description
      image
      title
      year
      slug
    }
  }
`;

const MOVIES = gql`
  query MyQuery($offset: Int!) {
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

  const { data } = await client.query({ query: MOVIES, variables: { offset } });
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
