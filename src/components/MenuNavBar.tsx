import Link from 'next/link'

import catsdata from '@/data/cats'

const MenuNavBar = ({ className }: { className: string }) => {
  return (
    <ul tabIndex={0} className={className}>
      <li>
        <Link href="/">
          <a>Начало</a>
        </Link>
      </li>

      <li>
        <a>Вицове</a>
        <ul className="rounded bg-base-100 p-2">
          {catsdata.slice(0, 10).map((item) => (
            <li key={item.key}>
              <Link href={`/cat/${item.key}/`} passHref>
                <a>{item.key}</a>
              </Link>
            </li>
          ))}
          <li>
            <Link href={`/?type=Jokes`}>Всички </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href={`/news/`} passHref>
          <a>Новини</a>
        </Link>
      </li>
    </ul>
  )
}

export default MenuNavBar
