/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */
import dataz from './all.json'
import cats from './cats'

export interface Doc {
  joke: string
  cat: string
  id?: string
  _id: string
  _rev?: string
  doc?: object
  item?: object
}
export interface Data {
  id: string
  key: string
  value: object
  doc: Doc
}

export interface Paths {
  props: { id: string }
}
function chunkify(arr: object[], chunkSize: number): object[] {
  const res = []
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize)
    res.push(chunk)
  }
  return res
}

interface ReduceObject {
  items: Doc[]
  pages: object[][]
  pagesmap: Paths[]
  size: number
}
let cached: any = null
async function data(): Promise<{ [key: string]: ReduceObject | any }> {
  if (cached) {
    return new Promise((resolve) => {
      resolve(cached)
    })
  }
  // fs.readFile('Demo.txt', 'utf8', function (err, dataz) {})

  const dataAll = dataz as Data[]
  const allDocs = Object.values(dataAll)
    .filter((val) => val.doc)
    .map((val: Data): Doc => {
      return {
        _id: val.doc._id,
        joke: val.doc.joke,
        cat: val.doc.cat,
      }
    })
  const datax = allDocs.reduce(
    (acc: { [key: string]: any }, value: Doc, i: number) => {
      const { cat } = value
      if (i === 0) {
        const extend = cats.map((cat1) => {
          return { [cat1.cat]: { items: [], pages: [], size: 0, pagesmap: [] } }
        })
        const extend2 = extend.reduce((acc1, val) => {
          return { ...acc1, ...val }
        }, {})

        const newacc = {
          jokesmap: [],
          jokes: [],
          jokesIds: [],
          ...extend2,
        }

        return newacc
      }

      acc.jokesIds[value._id] = value
      const size = acc[cat].items.length

      acc[cat].items.push(value)
      acc.jokes.push(value)

      acc[cat].size = size

      acc[cat].pagesmap = new Array(Math.round(size / 30))
        .fill(0)
        .map((_, ix) => {
          return { params: { pagenum: (ix + 1).toString(), cat, locale: 'bg' } }
        })

      acc.jokesmap.push({
        params: {
          id: value._id,
          locale: 'bg',
        },
      })

      return acc
    },
    {}
  )
  //

  for (let index = 0; index < cats.length; index++) {
    datax[cats[index]!.cat].pages = chunkify(
      datax[cats[index]!.cat].items.map((item: any) => {
        return { ...item, joke: item.joke.substring(0, 152) }
      }),
      30
    )
    delete datax[cats[index]!.cat].items
  }

  const randomchunks = chunkify(
    datax.jokes.map((item: any) => {
      return { ...item, joke: item.joke.substring(0, 152) }
    }),
    30
  )
  const pathspagination = Object.values(datax)
    .map((val) => {
      return val.pagesmap
    })
    .flat()
    .filter((val) => val)
  delete datax.jokes

  return new Promise((resolve) => {
    cached = {
      ...datax,
      jokesIds: datax.jokesIds,
      pathspagination,
      jokesmap: datax.jokesmap,
      randomchunks,
    }

    resolve(cached)
  })
}
export default data

// export const get = async (key: string): Promise<Doc | undefined> => allDocs.find((val) => val._id === key);

// get('0064ff8fef4044c3a125f00e497c39721').then((res) => console.log(res));
