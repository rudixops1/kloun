/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import { gql } from '@apollo/client'

import { Main } from '@/components/Layouts/Main'
import { Meta } from '@/components/Layouts/Meta'
import NewsThumbnail from '@/components/NewsThumbnail'
import client from '@/data/client'
import type { RootNewsProps } from '@/pages/news/'

const NewsItem = ({
  news,
  // news_aggregate,
  news_by_pk: { title, image, _id },
}: RootNewsProps): JSX.Element => {
  return (
    <Main
      hideFooter
      meta={
        <Meta
          title={title}
          description={title}
          cat="Новини"
          imgtype="image/jpeg"
          image={image}
          url={`https://kloun.lol/news/i/${_id}`}
        />
      }
    >
      <div className="my-10 flex w-full flex-col">
        <div className="mx-auto leading-relaxed lg:w-2/3">
          <div className="flex flex-row">
            <img
              alt={title}
              className="h-48 w-48 rounded-lg object-cover"
              src={image}
            />
            <h1 className="ml-4  text-2xl font-bold">{title}</h1>
          </div>
        </div>
        <div className="flex flex-wrap">
          {news.map((item) => (
            <NewsThumbnail key={item.slug} {...item} />
          ))}
        </div>
      </div>
    </Main>
  )
}

const DATA_QUERY = gql`
  query MyQuery($id: String!, $slug: String!) {
    news(limit: 15, where: { slug: { _regex: $slug } }) {
      title
      image
      slug
      _id
    }

    news_by_pk(_id: $id) {
      date
      title
      image
      slug
      _id
    }
  }
`
export const getServerSideProps = async (context: {
  query: { id: any; slug: any }
}) => {
  const { id, slug } = context.query
  const regex = slug!.replace(/-/i, '|')

  const { data } = await client.query({
    query: DATA_QUERY,
    variables: { id, slug: `(${regex})` },
  })
  return { props: data }
}

export default NewsItem
