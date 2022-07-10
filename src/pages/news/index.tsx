/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import { gql } from '@apollo/client'
import type { GetServerSideProps } from 'next'

import { Main } from '@/components/Layouts/Main'
import { Meta } from '@/components/Layouts/Meta'
import NewsThumbnail from '@/components/NewsThumbnail'
import { Pagination } from '@/components/Pagination'
import client from '@/data/client'

export interface RootNewsProps {
  news: News[]
  news_aggregate: NewsAggregate
  news_by_pk: NewsByPk
  npagenum?: number
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

const Index = ({ news, news_aggregate }: RootNewsProps): JSX.Element => {
  return (
    <Main
      hideFooter
      meta={
        <Meta
          title="Новини"
          description="Новини"
          cat="Новини"
          url={`https://kloun.lol/news/`}
        />
      }
    >
      <div className="my-10 flex w-full flex-col">
        <div className="flex flex-wrap">
          {news.map((item) => (
            <NewsThumbnail key={item.slug} {...item} />
          ))}
          <Pagination
            pages={news_aggregate.aggregate.count}
            pagenum={1}
            cat={`/news/p/`}
            hideStats
          />
        </div>
      </div>
    </Main>
  )
}

const DATA_QUERY = gql`
  query MyQuery {
    news(limit: 30, order_by: { date: desc_nulls_last }) {
      title
      image
      date
      slug
      _id
    }
    news_aggregate {
      aggregate {
        count
      }
    }
  }
`
export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({ query: DATA_QUERY })
  return { props: data }
}

export default Index
