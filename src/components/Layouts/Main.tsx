import dynamic from 'next/dynamic'
import Link from 'next/link'
import type { ReactNode } from 'react'

import catsdata from '@/data/cats'

const Logo = dynamic(() => import('@/components/Layouts/Header'), {
  ssr: false,
})
const Footer = dynamic(() => import('@/components/Layouts/Footer'), {
  ssr: false,
})

type IMainProps = {
  meta: ReactNode
  children: ReactNode
  hideFooter?: boolean
  title?: string
}

const Main = (props: IMainProps) => {
  return (
    <>
      {props.meta}
      <div className="navbar absolute z-10">
        <div className="flex-1"></div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 text-sm">
            <li>
              <Link href="/">Начало</Link>
            </li>
            <li>
              <a>
                Вицове
                <svg
                  className="mt-1 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="bg-base-100 p-2">
                {catsdata.slice(0, 10).map((item) => (
                  <li key={item.key}>
                    <Link href={`/cat/${item.key}/`}>{item.key}</Link>
                  </li>
                ))}
                <li>
                  <Link href={`/?type=Jokes`}>Всички </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/news">Новини</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex min-h-screen flex-col">
        <Logo title={props.title} />
        <div className="container mx-auto flex grow flex-col justify-center px-2 pb-20 sm:px-4 md:px-8">
          {props.children}
        </div>

        <Footer hide={props.hideFooter} />
      </div>
    </>
  )
}

export { Main }
