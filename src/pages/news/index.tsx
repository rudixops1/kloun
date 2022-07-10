/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import { gql } from '@apollo/client'
import type { GetServerSideProps } from 'next'

import { Main } from '@/components/Layouts/Main'
import { Meta } from '@/components/Layouts/Meta'
import { Pagination } from '@/components/Pagination'
import client from '@/data/client'
import type { RootNewsProps } from '@/pages/news/i/[id]'

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
