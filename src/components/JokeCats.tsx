export interface Cat {
  key: string
  value: number
}
export interface NavProps {
  cats: Cat[]
  limit?: number
}

const Nav = ({ cats, limit }: NavProps) => {
  const newcats = cats.slice(0, limit || cats.length)
  return (
    <div className="flex flex-wrap sm:mx-auto sm:mb-2 ">
      {newcats.map((d: { key: string; value: number }) => (
        <a
          className="btn1"
          key={d.key}
          href={`/cat/${d.key.replace(/ /g, '%20')}/1`}
        >
          <div className="btn1-wrap">
            <div className="flex-1 font-medium text-white"> {d.key}</div>
            {d.value !== 0 && <div className="btn1-count">{d.value}</div>}
          </div>
        </a>
      ))}
    </div>
  )
}

export default Nav
