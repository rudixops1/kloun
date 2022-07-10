import Link from 'next/link'
import type { FC, ReactElement } from 'react'

interface Props {
  pagenum: number
  pages: number
  cat: string
  hideStats?: boolean
}

export const Pagination: FC<Props> = ({
  pages,
  pagenum,
  cat,
}): ReactElement => {
  const max = Math.ceil(pages / 30)
  const curpage = Number(pagenum)
  const pagemap: { page: number; active: boolean }[] = new Array(max)
    .fill(0)
    .map((_, i) => {
      const p = i + 1
      return { page: p, active: p === curpage }
    })
    .map((x) => {
      return x
    })
    .filter(({ page }) => {
      let start = curpage - 4
      let end = curpage + 4
      if (start < 1) start = 1
      end = start + 8
      return page >= start && page <= end
    })

  const prev = curpage - 1 > 0 ? curpage - 1 : 1
  const next = curpage + 1 < max ? curpage + 1 : max

  return (
    <nav
      className="relative z-0 inline-flex justify-center -space-x-px rounded-md  p-2 shadow-sm"
      aria-label="Pagination"
    >
      {pagemap[0]!.page !== 1 && (
        <>
          <Link href={`${cat}/1`}>
            <a className="relative hidden items-center border border-gray-800 bg-gray-900 px-4 py-2  font-medium text-gray-500 hover:bg-gray-800 sm:inline-flex ">
              1
            </a>
          </Link>

          <span className="relative hidden items-center border border-gray-800 bg-gray-900 px-4 py-2  font-medium text-gray-500 hover:bg-gray-800 sm:inline-flex ">
            ...
          </span>
        </>
      )}

      {pagemap.map(({ page, active }) => {
        return (
          <Link key={page} href={`${cat}/${page}`}>
            <a
              className={`relative hidden items-center border border-gray-800 px-4 py-2 font-medium hover:bg-gray-800  sm:inline-flex ${
                active
                  ? 'text-striped bg-gray-800 text-white'
                  : 'bg-gray-900 text-gray-500'
              }`}
            >
              {page}
            </a>
          </Link>
        )
      })}
      <Link href={`${cat}/${prev}`}>
        <a className="inline-flex items-center border border-gray-800 bg-gray-900 px-4 py-2 font-medium text-gray-500 hover:bg-gray-800 sm:hidden">
          Назад
        </a>
      </Link>
      <Link href={`${cat}/${next}`}>
        <a className="inline-flex items-center border border-gray-800 bg-gray-900 px-4 py-2  font-medium text-gray-500 hover:bg-gray-800 sm:hidden">
          Напред
        </a>
      </Link>
      {max - pagemap[0]!.page > 10 && (
        <>
          <span className="relative hidden items-center border border-gray-800 bg-gray-900 px-4 py-2  font-medium text-gray-500 hover:bg-gray-800 sm:inline-flex">
            ...
          </span>

          <Link href={`${cat}/${max}`}>
            <a className="relative hidden items-center border border-gray-800 bg-gray-900 px-4 py-2  font-medium text-gray-500 hover:bg-gray-800 sm:inline-flex">
              {max}
            </a>
          </Link>
        </>
      )}
    </nav>
  )
}
