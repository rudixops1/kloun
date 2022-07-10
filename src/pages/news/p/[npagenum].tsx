/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import { gql } from '@apollo/client'
import type { GetServerSideProps } from 'next'

import { Main } from '@/components/Layouts/Main'
import { Meta } from '@/components/Layouts/Meta'
import { Pagination } from '@/components/Pagination'
import client from '@/data/client'
import type { RootNewsProps } from '@/pages/news/i/[id]'

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
          {typeof npagenum}
          {news.map((item) => (
            <div className="joke" key={item._id}>
              <a href={`/news/i/${item._id}`}>
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
          <Pagination
            pages={news_aggregate.aggregate.count}
            pagenum={Number(npagenum)}
            cat={`/news/p/`}
            hideStats
          />
        </div>
      </div>
    </Main>
  )
}

const DATA_QUERY = gql`
  query MyQuery($offset: Int!) {
    news(limit: 30, order_by: { date: desc_nulls_last }, offset: $offset) {
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
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { npagenum } = context.query
  const offset = (Number(npagenum) - 1) * 30

  const { data } = await client.query({
    query: DATA_QUERY,
    variables: { npagenum, offset },
  })

  return { props: { ...data, npagenum } }
}

export default PagingNews
