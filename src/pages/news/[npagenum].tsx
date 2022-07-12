/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import type { GetServerSideProps } from 'next'

import { Main } from '@/components/Layouts/Main'
import { Meta } from '@/components/Layouts/Meta'
import NewsThumbnail from '@/components/NewsThumbnail'
import { Pagination } from '@/components/Pagination'
import client from '@/data/client'
import type { RootNewsProps } from '@/pages/news/'
import { DATA_AGREGATE, DATA_QUERY } from '@/pages/news/'

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
          url={`https://kloun.lol/news/${npagenum}`}
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
          cat={`/news/`}
          hideStats
        />
      </div>
    </Main>
  )
}
export default PagingNews

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { npagenum } = context.query
  const agregate = await client.query({ query: DATA_AGREGATE })
  const start =
    agregate.data.news_aggregate.aggregate.count - (Number(npagenum) - 1) * 30
  const end = start - 30
  console.log(start, end)
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
