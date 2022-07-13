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
  shuffled?: string[]
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
  max: { id: number }
}

export interface NewsByPk {
  __typename: string
  date: string
  title: string
  image: string
  slug: string
  _id: string
  content: {
    html?: string[]
    description?: string
    image?: string
  }
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
            pages={news_aggregate.aggregate.max.id}
            pagenum={1}
            cat={`/news`}
            hideStats
          />
        </div>
      </div>
    </Main>
  )
}
export const DATA_AGREGATE = gql`
  query MyQuery {
    news_aggregate {
      aggregate {
        max {
          id
        }
      }
    }
  }
`

export const DATA_QUERY = gql`
  query MyQuery($end: Int!) {
    news(limit: 30, where: { id: { _lte: $end } }, order_by: { id: desc }) {
      title
      image
      _id
      slug
    }
  }
`
export const getServerSideProps: GetServerSideProps = async () => {
  const npagenum = 1
  const agregate = await client.query({ query: DATA_AGREGATE })
  const start =
    agregate.data.news_aggregate.aggregate.max.id - (Number(npagenum) - 1) * 30
  const end = start

  const { data } = await client.query({
    query: DATA_QUERY,
    variables: { npagenum, start, end },
  })

  return {
    props: {
      news: data.news,
      news_aggregate: agregate.data.news_aggregate,
      npagenum,
    },
  }
}
export default Index
