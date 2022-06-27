/* eslint-disable no-underscore-dangle */

import React from 'react'

import { JokeThumbnail } from '@/components/JokeThumbnail'
import { Main } from '@/components/Layouts/Main'
import { Meta } from '@/components/Layouts/Meta'
import { Pagination } from '@/components/Pagination'
import type { Doc } from '@/data/structure'
import data from '@/data/structure'

const CatPage = ({
  section,
  pages,
  pagenum,
  cat,
}: {
  section: Doc[]
  pages: number
  pagenum: number
  cat: string
}): JSX.Element => {
  return (
    <Main
      meta={
        <Meta
          title={`Вицове от ${cat} на страница ${pagenum}`}
          description={`Вицове от ${cat}${section[0]!.joke
            .replace(/\n/gi, ' ')
            .substring(0, 100)}`}
        />
      }
    >
      <Pagination pages={pages} pagenum={pagenum} cat={cat} />
      <div className="flex flex-wrap">
        {section.map((item) => (
          <JokeThumbnail
            item={item}
            key={item._id}
            showcats={false}
            short={true}
          />
        ))}
      </div>
      <div className="fixed bottom-0 left-0 z-10 flex w-full justify-center bg-black/30 backdrop-blur-sm">
        <Pagination pages={pages} pagenum={pagenum} cat={cat} hideStats />
      </div>
    </Main>
  )
}

export default CatPage

export async function getStaticProps(context: { params: any }) {
  const {
    params: { pagenum, cat },
  } = context
  const obj = await data()
  const pages = obj[cat]!.size
  const section = obj[cat]!.pages[Number(pagenum) - 1]
  return {
    props: { section, pages, pagenum, cat },
  }
}
export const getStaticPaths = async () => {
  const { pathspagination } = await data()
  return {
    paths: pathspagination,

    fallback: false,
  }
}
