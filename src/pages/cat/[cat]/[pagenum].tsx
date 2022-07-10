/* eslint-disable no-underscore-dangle */

import type { GetServerSideProps } from 'next'
import React from 'react'

import { JokeThumbnail } from '@/components/JokeThumbnail'
import { Main } from '@/components/Layouts/Main'
import { Meta } from '@/components/Layouts/Meta'
import { Pagination } from '@/components/Pagination'
import { jokes } from '@/data/nextdb'
import type { Doc } from '@/data/structure'

import catsdata from '../../../data/cats'

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
      <Pagination pages={pages} pagenum={pagenum} cat={`/cat/${cat}`} />
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
        <Pagination
          pages={pages}
          pagenum={pagenum}
          cat={`/cat/${cat}`}
          hideStats
        />
      </div>
    </Main>
  )
}

export default CatPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { pagenum, cat } = context.query
  const pages = catsdata.find((item) => item.key === cat)!.value
  const skip = Number(pagenum) * 30 - 30

  const section = await jokes
    .query('api/cat', {
      limit: 30,
      key: cat,
      skip,
    })
    .then((res: { rows: any[] }): Doc[] => {
      return res.rows.map((row): Doc => {
        return { _id: row.id, ...row.value }
      })
    })
  return {
    props: { section, pages, pagenum, cat },
  }
}
