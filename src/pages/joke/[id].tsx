/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import { chunk } from 'lodash'
import type { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'

import type { Cat } from '@/components/JokeCats'
import Nav from '@/components/JokeCats'
import { FormatJoke } from '@/components/JokeText'
import { JokeThumbnail } from '@/components/JokeThumbnail'
import { Main } from '@/components/Layouts/Main'
import { Meta } from '@/components/Layouts/Meta'
import { jokes } from '@/data/nextdb'
import type { Doc } from '@/data/structure'

const FacebookShare = dynamic(() => import('@/components/FacebookShare'), {
  ssr: false,
})

const Joke = (props: {
  joke: Doc
  items?: [Doc[], Doc[], Doc[]]
  cats?: [Cat[], Cat[]]
}): JSX.Element => {
  const jokemeta: string = props.joke.joke.replace(/\n/gi, ' ')
  return (
    <Main
      hideFooter
      title={props.joke.cat}
      meta={
        <Meta
          title={`${jokemeta.substring(0, 30)} ...`}
          description={`${jokemeta.substring(0, 150)} ...`}
          cat={props.joke.cat}
          image={`https://kloun.lol/api/img/${props.joke._id}/`}
          url={`https://kloun.lol/joke/${props.joke._id}/`}
        />
      }
    >
      <div className="my-10 flex w-full flex-col text-center">
        <div className="mx-auto text-xl leading-relaxed lg:w-2/3">
          <FormatJoke joke={props.joke.joke} />
        </div>
        <FacebookShare id={props.joke._id} />
      </div>

      {props.items && props.cats && (
        <>
          <div className="-m-2 flex flex-wrap">
            {props.items[0].map((item): JSX.Element => {
              return (
                <JokeThumbnail
                  item={item}
                  key={item._id}
                  showcats={true}
                  short={true}
                />
              )
            })}
          </div>
          <Nav cats={props.cats[1]} />
          <div className="-m-2 flex flex-wrap">
            {props.items[1].map((item): JSX.Element => {
              return (
                <JokeThumbnail
                  item={item}
                  key={item._id}
                  showcats={true}
                  short={true}
                />
              )
            })}
          </div>
          <Nav cats={props.cats[0]} />
          <div className="-m-2 flex flex-wrap">
            {props.items[2].map((item): JSX.Element => {
              return (
                <JokeThumbnail
                  item={item}
                  key={item._id}
                  showcats={true}
                  short={true}
                />
              )
            })}
          </div>
        </>
      )}
    </Main>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query

  const joke = await jokes.get(id)
  const items = await jokes
    .query('api/random', {
      limit: 30,
      start_key: Math.random(),
    })
    .then((res: { rows: any[] }): Doc[] => {
      return res.rows.map((row): Doc => {
        return { _id: row.id, ...row.value }
      })
    })

  const cats = items.reduce((acc: any, item: any) => {
    if (!acc[item.cat]) {
      acc[item!.cat] = { key: item.cat }
    }
    return acc
  }, {} as Cat[])

  return {
    props: {
      joke,
      items: items && chunk(items, Math.round(items.length / 3)),
      cats:
        cats &&
        chunk(Object.values(cats), Math.round(Object.values(cats).length / 2)),
    },
  }
}

export default Joke
