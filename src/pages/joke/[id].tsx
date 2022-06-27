/* eslint-disable no-underscore-dangle */
// import { useRouter } from 'next/router';

import { chunk } from 'lodash'
import dynamic from 'next/dynamic'
import type { ParsedUrlQuery } from 'querystring'

import type { Cat } from '@/components/JokeCats'
import Nav from '@/components/JokeCats'
import { FormatJoke } from '@/components/JokeText'
import { JokeThumbnail } from '@/components/JokeThumbnail'
import { Main } from '@/components/Layouts/Main'
import { Meta } from '@/components/Layouts/Meta'
// import Nav from "@/components/Nav";
import type { Doc } from '@/data/structure'
import data from '@/data/structure'

const FacebookShare = dynamic(() => import('@/components/FacebookShare'), {
  ssr: false,
})

interface Params extends ParsedUrlQuery {
  id: string
}
const Joke = (props: {
  joke: Doc
  items?: [Doc[], Doc[], Doc[]]
  cats?: [Cat[], Cat[]]
}): JSX.Element => {
  const jokemeta: string = props.joke.joke.replace(/\n/gi, ' ')
  return (
    <Main
      hideFooter
      title={`/${props.joke.cat}`}
      meta={
        <Meta
          title={`${jokemeta.substring(0, 30)} ...`}
          description={`${jokemeta.substring(0, 150)} ...`}
          cat={props.joke.cat}
          image={`/out/${props.joke._id}.png`}
          url={`/joke/${props.joke._id}/`}
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

export const getStaticPaths = async () => {
  const obj = await data()
  return {
    paths: obj.jokesmap,
    fallback: false,
  }
}

export async function getStaticProps(context: { params: Params }) {
  const { id } = context.params
  const obj = await data()
  const joke = obj.jokesIds[id]
  let items = null
  let cats = null
  let rid = 10
  if (joke.joke.length > 151) {
    items = obj.randomchunks
    rid = Math.floor(Math.random() * items.length)
    cats = items[rid].reduce((acc: any, item: any) => {
      if (!acc[item.cat]) {
        acc[item!.cat] = { cat: item.cat }
      }
      return acc
    }, {} as Cat[])
  }

  return {
    props: {
      joke,
      items: items && chunk(items[rid], Math.round(items[rid].length / 3)),
      cats:
        cats &&
        chunk(Object.values(cats), Math.round(Object.values(cats).length / 2)),
    },
  }
}

export default Joke
