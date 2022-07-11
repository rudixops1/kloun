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
            cat={`/news/`}
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
        count
      }
    }
  }
`

export const DATA_QUERY = gql`
  query MyQuery($start: Int!, $end: Int!) {
    news(where: { id: { _gte: $end, _lte: $start } }, offset: 1) {
      title
      image
      _id
      slug
      id
    }
    news_aggregate {
      aggregate {
        count
      }
    }
  }
`
export const getServerSideProps: GetServerSideProps = async () => {
  const npagenum = 1
  const agregate = await client.query({ query: DATA_AGREGATE })
  const start =
    agregate.data.news_aggregate.aggregate.count - (Number(npagenum) - 1) * 30
  const end = start - 30

  const { data } = await client.query({
    query: DATA_QUERY,
    variables: { npagenum, start, end },
  })

  return {
    props: {
      news: data.news.slice().reverse(),
      news_aggregate: agregate.data.news_aggregate,
      npagenum,
    },
  }
}
export default Index
