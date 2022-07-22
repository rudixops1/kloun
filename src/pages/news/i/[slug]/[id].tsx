/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import { gql } from '@apollo/client';
import { shuffle, uniqBy } from 'lodash';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import { Main } from '@/components/Layouts/Main';
import { Meta } from '@/components/Layouts/Meta';
import NewsThumbnail from '@/components/NewsThumbnail';
import client from '@/data/client';
import type { RootNewsProps } from '@/pages/news/';

const NoSEO = dynamic(() => import('@/components/NoSEO'), {
  ssr: false,
});
const NewsItem = ({
  newsbg,
  newsbg_by_pk: { title, image, uid, slug, date, content, href },
  shuffled,
}: RootNewsProps): JSX.Element => {
  const description = content.description ? content.description : title;
  const { html } = content;
  return (
    <Main
      hideFooter
      meta={
        <Meta
          title={title}
          description={description}
          cat='Новини'
          imgtype='image/jpeg'
          image={content.image ? content.image : image}
          url={`https://www.kloun.lol/news/i/${slug}/${uid}`}
        />
      }
    >
      <div className='my-10 flex w-full flex-col'>
        <div className='mx-auto leading-relaxed lg:w-2/3'>
          <div className='flex flex-row'>
            {image && (
              <Image
                alt={description}
                className='mr-4 h-48 w-48 rounded-lg object-cover'
                src={image}
                width={480}
                height={320}
              />
            )}
            <h1 className='text-2xl font-bold'>{title}</h1>
          </div>
          {date && <div className='ml-4 text-sm text-gray-600'>{date}</div>}

          {shuffled && (
            <>
              <div>
                <NoSEO content={[description] || html} href={href} />
              </div>
              <div className='hidden'>
                {shuffled.map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </>
          )}
        </div>
        <div className='flex flex-wrap'>
          {newsbg.map((item) => (
            <div className='joke' key={item.slug}>
              <div className='jokewrap'>
                <NewsThumbnail {...item} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
};

const DATA_QUERY = gql`
  query MyQuery(
    $id: uuid!
    $_ilike1: String!
    $_ilike2: String!
    $_ilike3: String!
  ) {
    termone: newsbg(where: { slug: { _like: $_ilike1 } }, limit: 5) {
      title
      image
      slug
      uid
      href
    }
    termtwo: newsbg(where: { slug: { _like: $_ilike2 } }, limit: 5) {
      title
      image
      slug
      uid
      href
    }
    termthree: newsbg(where: { slug: { _like: $_ilike3 } }, limit: 5) {
      title
      image
      slug
      uid
      href
    }
    newsbg_by_pk(uid: $id) {
      date
      title
      image
      uid
      slug
      content
      href
    }
  }
`;
export const getServerSideProps = async (context: {
  query: { id: string; slug: string };
}) => {
  const { id, slug } = context.query;

  const regex = shuffle(slug.split('-'))
    .filter((strx) => strx.length >= 5)
    .slice(0, 3);

  const { data } = await client.query({
    query: DATA_QUERY,
    variables: {
      id,
      _ilike1: `%${regex[0]}%`,
      _ilike2: `%${regex[1]}%`,
      _ilike3: `%${regex[2]}%`,
    },
  });

  const newsbg = uniqBy(
    [...data.termone, ...data.termtwo, ...data.termthree],
    'uid'
  ).sort((a, b) => {
    return a.uid - b.uid;
  });
  const shufflprep = data.newsbg_by_pk.content.html
    ? shuffle(
        data.newsbg_by_pk.content.html
          .join(' ')
          .split('.')
          .map((p: string) => `${shuffle(p.split(' ')).join(' ')}.`)
      )
    : null;
  const shuffled = shufflprep
    ?.map((p: string) => {
      const rid = Math.floor(Math.random() * 5);
      return `${p.charAt(0).toUpperCase() + p.slice(1)} ${
        rid === 0 ? '-=splitter=-' : ''
      }`;
    })
    .join(' ')
    .split('-=splitter=-');

  return {
    props: {
      newsbg_by_pk: data.newsbg_by_pk,
      newsbg,
      slug,
      shuffled,
    },
  };
};

export default NewsItem;
