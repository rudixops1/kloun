import Link from 'next/link'

export interface Cat {
  cat: string
  count: number
}
export interface NavProps {
  cats: Cat[]
  limit?: number
}

const Nav = ({ cats, limit }: NavProps) => {
  const newcats = cats.slice(0, limit || cats.length)
  return (
    <div className="flex flex-wrap sm:mx-auto sm:mb-2 ">
      {newcats.map((d: { cat: string; count: number }) => (
        <Link key={d.cat} href={`/cat/${d.cat.replace(/ /g, '%20')}/`} passHref>
          <a className="btn1">
            <div className="btn1-wrap">
              <div className="flex-1 font-medium text-white"> {d.cat}</div>
              {d.count !== 0 && <div className="btn1-count">{d.count}</div>}
            </div>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Nav
