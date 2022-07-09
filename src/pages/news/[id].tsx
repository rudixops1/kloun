/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import type { GetServerSideProps } from 'next'

import { Main } from '@/components/Layouts/Main'
import { Meta } from '@/components/Layouts/Meta'
import { news } from '@/data/nextdb'

import type { Article } from '../../data/structure'

const News = (props: { article: Article }): JSX.Element => {
  const { title, image } = props.article
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
          url={`https:///news/`}
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
            <h1 className="ml-4  text-2xl font-bold">{props.article.title}</h1>
          </div>
        </div>
      </div>
    </Main>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query

  const article = await news.get(id)

  return {
    props: {
      article,
    },
  }
}

export default News
