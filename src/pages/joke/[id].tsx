/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import { gql } from '@apollo/client';
import { chunk, uniqBy } from 'lodash';
import type { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

import { FormatJoke } from '@/components/JokeText';
import { JokeThumbnail } from '@/components/JokeThumbnail';
import Main from '@/components/Layouts/Main';
import Meta from '@/components/Layouts/Meta';
import type { Cat } from '@/components/Nav';
import Nav from '@/components/Nav';
import client from '@/data/client';
import type { Doc } from '@/data/structure';

const FacebookShare = dynamic(() => import('@/components/FacebookShare'), {
  ssr: false,
});

const Joke = (props: {
  joke: Doc;
  items?: [Doc[], Doc[], Doc[]];
  cats?: [Cat[], Cat[]];
}): JSX.Element => {
  return (
    <Main
      hideFooter
      title={props.joke.cat}
      meta={
        <Meta
          title={props.joke.joke}
          description={props.joke.joke}
          cat={props.joke.cat}
          image={`http://cdn.kloun.lol/api/img/${props.joke._id}.png`}
          url={`https://www.kloun.lol/joke/${props.joke._id}/`}
        />
      }
    >
      <div className='my-10 flex w-full flex-col text-center'>
        <article className='xs:px-2 mx-auto mb-6 px-10 text-xl leading-relaxed sm:px-4 lg:w-2/3'>
          <FormatJoke joke={props.joke.joke} />
        </article>
        <FacebookShare id={`https://www.kloun.lol/joke/${props.joke._id}`} />
      </div>

      {props.items && props.cats && (
        <>
          <div className='-m-2 flex flex-wrap'>
            {props.items[0].map((item): JSX.Element => {
              return (
                <JokeThumbnail
                  item={item}
                  key={item._id}
                  showcats={true}
                  short={true}
                />
              );
            })}
          </div>
          <Nav cats={props.cats[1]} prefix='cat' />
          <div className='-m-2 flex flex-wrap'>
            {props.items[1].map((item): JSX.Element => {
              return (
                <JokeThumbnail
                  item={item}
                  key={item._id}
                  showcats={true}
                  short={true}
                />
              );
            })}
          </div>
          <Nav cats={props.cats[0]} prefix='cat' />
          <div className='-m-2 flex flex-wrap'>
            {props.items[2].map((item): JSX.Element => {
              return (
                <JokeThumbnail
                  item={item}
                  key={item._id}
                  showcats={true}
                  short={true}
                />
              );
            })}
          </div>
        </>
      )}
    </Main>
  );
};

const DATA_QUERY = gql`
  query MyQuery($id: String!, $offset: Int!) {
    jokes(limit: 30, offset: $offset, order_by: { _id: desc }) {
      _id
      joke
      cat
    }
    jokes_by_pk(_id: $id) {
      _id
      cat
      joke
    }
  }
`;
export const getServerSideProps: GetServerSideProps = async ({
  query,
  res,
}) => {
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  const { id } = query;

  const { data } = await client.query({
    query: DATA_QUERY,
    variables: { id, offset: Math.floor(Math.random() * 139700) },
  });

  const cats = uniqBy(
    data.jokes.map((joke: Doc) => {
      return { cat: joke.cat };
    }),
    'cat'
  );

  return {
    props: {
      joke: data.jokes_by_pk,
      items: chunk(data.jokes, Math.round(data.jokes.length / 3)),
      cats:
        cats &&
        chunk(Object.values(cats), Math.round(Object.values(cats).length / 2)),
    },
  };
};

export default Joke;
