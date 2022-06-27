export interface Cat {
  cat: string
  count: number
  rotate: number
}
export interface NavProps {
  cats: Cat[]
  limit?: number
}

const Nav = ({ cats, limit }: NavProps) => {
  const newcats = cats.slice(0, limit || cats.length)
  return (
    <div className="flex flex-wrap sm:mx-auto sm:mb-2 ">
      {newcats.map((d: { cat: string; count: number; rotate: number }) => (
        <a
          className="btn "
          key={d.cat}
          href={`/cat/${d.cat.replace(/ /g, '%20')}/1`}
        >
          <div className="btn-wrap">
            <div className="flex-1 font-medium text-white"> {d.cat}</div>
            {d.count !== 0 && <div className="btn-count">{d.count}</div>}
          </div>
        </a>
      ))}
    </div>
  )
}

export default Nav
