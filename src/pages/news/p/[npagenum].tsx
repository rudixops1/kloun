/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import { gql } from '@apollo/client'
import type { GetServerSideProps } from 'next'

import { Main } from '@/components/Layouts/Main'
import { Meta } from '@/components/Layouts/Meta'
import NewsThumbnail from '@/components/NewsThumbnail'
import { Pagination } from '@/components/Pagination'
import client from '@/data/client'
import type { RootNewsProps } from '@/pages/news/'

const PagingNews = ({
  news,
  news_aggregate,
  npagenum,
}: RootNewsProps): JSX.Element => {
  return (
    <Main
      hideFooter
      meta={
        <Meta
          title="Новини"
          description="Новини"
          cat="Новини"
          url={`https://kloun.lol/news/p/${npagenum}`}
        />
      }
    >
      <div className="my-10 flex w-full flex-col">
        <div className="flex flex-wrap">
          {news.map((item) => (
            <NewsThumbnail key={item.slug} {...item} />
          ))}
        </div>
        <Pagination
          pages={news_aggregate.aggregate.count}
          pagenum={Number(npagenum)}
          cat={`/news/p/`}
          hideStats
        />
      </div>
    </Main>
  )
}
export default PagingNews
const DATA_QUERY = gql`
  query MyQuery($offset: Int!) {
    news(limit: 30, order_by: { date: desc_nulls_last }, offset: $offset) {
      title
      image
      date
      slug
    }
    news_aggregate {
      aggregate {
        count
      }
    }
  }
`
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { npagenum } = context.query
  const offset = (Number(npagenum) - 1) * 30

  const { data } = await client.query({
    query: DATA_QUERY,
    variables: { npagenum, offset },
  })

  return { props: { ...data, npagenum } }
}
