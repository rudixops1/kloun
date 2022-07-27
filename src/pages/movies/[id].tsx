import { gql } from '@apollo/client';
import type { GetServerSideProps } from 'next';
import Image from 'next/image';

import Main from '@/components/Layouts/Main';
import Meta from '@/components/Layouts/Meta';
import client from '@/data/client';
import type { Movie } from '@/pages/movies/';
import { MOVIE } from '@/pages/movies/';

const Item = ({ movie }: { movie: Movie }): JSX.Element => {
  return (
    <Main
      hideFooter
      meta={<Meta title={movie.title} description={movie.description} />}
    >
      <div className='mt-6 flex flex-row flex-wrap justify-center'>
        <div className='relative flex flex-wrap overflow-hidden rounded-lg bg-indigo-700 p-1'>
          <span className='absolute top-0 left-0 z-20 rounded-md   bg-indigo-700 p-3  font-bold uppercase'>
            {movie.title}
          </span>
          <span className='absolute bottom-0 right-0 z-20 rounded-md bg-indigo-700 p-3 font-light'>
            {movie.year}
          </span>
          <Image
            src={`/filmi/${movie.slug}.jpg`}
            alt={movie.title}
            width={342}
            height={513}
          />
        </div>

        <div className='px-4'>
          <h2 className='my-4 text-2xl font-bold'>{movie.title}</h2>
          <p className='mb-8'>{movie.description}</p>
        </div>
      </div>
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

export const getServerSideProps: GetServerSideProps = async ({
  query,
  res,
}) => {
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  const { id }: { id?: string } = query;
  const nid = Number(id ? id.split('-').reverse()[0] : 1);
  const { data } = await client.query({ query: MOVIE, variables: { id: nid } });

  return {
    props: { movie: data.movies_by_pk },
  };
};
export default Item;
