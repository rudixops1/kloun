/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import { gql } from '@apollo/client'
import type { GetServerSideProps } from 'next'

import { Main } from '@/components/Layouts/Main'
import { Meta } from '@/components/Layouts/Meta'
import client from '@/data/client'

export interface RootNewsProps {
  news: News[]
  news_aggregate: NewsAggregate
  news_by_pk: NewsByPk
}

export interface News {
  __typename: string
  _id: string
  title: string
  image: string
  slug: string
}

export interface NewsAggregate {
  __typename: string
  aggregate: Aggregate
}

export interface Aggregate {
  __typename: string
  count: number
}

export interface NewsByPk {
  __typename: string
  date: string
  title: string
  image: string
  slug: string
  _id: string
}

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
          url={`https://kloun.lol/news/${_id}`}
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
            <div className="joke" key={item._id}>
              <a href={`/news/${item._id}`}>
                <div className="flex flex-row">
                  <img
                    alt={item.title}
                    className="h-14 w-14 rounded object-cover"
                    src={item.image}
                  />
                  <div className="ml-4 items-center justify-center ">
                    <h3 className="text-xs font-medium text-slate-50">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Main>
  )
}

const DATA_QUERY = gql`
  query MyQuery($id: String!) {
    news(limit: 10, where: { _id: { _gt: $id } }) {
      title
      image
      slug
      _id
    }
    news_aggregate {
      aggregate {
        count
      }
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
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query

  const { data } = await client.query({ query: DATA_QUERY, variables: { id } })

  return { props: data }
}

export default NewsItem
