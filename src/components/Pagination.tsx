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
          <a
            href={`${cat}/1`}
            className="relative hidden items-center border border-gray-800 bg-gray-900 px-4 py-2  font-medium text-gray-500 hover:bg-gray-800 sm:inline-flex "
          >
            1
          </a>

          <span className="relative hidden items-center border border-gray-800 bg-gray-900 px-4 py-2  font-medium text-gray-500 hover:bg-gray-800 sm:inline-flex ">
            ...
          </span>
        </>
      )}

      {pagemap.map(({ page, active }) => {
        return (
          <a
            key={page}
            href={`${cat}/${page}`}
            className={`relative hidden items-center border border-gray-800 px-4 py-2 font-medium hover:bg-gray-800  sm:inline-flex ${
              active
                ? 'text-striped bg-gray-800 text-white'
                : 'bg-gray-900 text-gray-500'
            }`}
          >
            {page}
          </a>
        )
      })}
      <a
        className="inline-flex items-center border border-gray-800 bg-gray-900 px-4 py-2 font-medium text-gray-500 hover:bg-gray-800 sm:hidden"
        href={`${cat}/${prev}`}
      >
        Назад
      </a>
      <a
        className="inline-flex items-center border border-gray-800 bg-gray-900 px-4 py-2  font-medium text-gray-500 hover:bg-gray-800 sm:hidden"
        href={`${cat}/${next}`}
      >
        Напред
      </a>
      {max - pagemap[0]!.page > 10 && (
        <>
          <span className="relative hidden items-center border border-gray-800 bg-gray-900 px-4 py-2  font-medium text-gray-500 hover:bg-gray-800 sm:inline-flex">
            ...
          </span>

          <a
            href={`${cat}/${max}`}
            className="relative hidden items-center border border-gray-800 bg-gray-900 px-4 py-2  font-medium text-gray-500 hover:bg-gray-800 sm:inline-flex"
          >
            {max}
          </a>
        </>
      )}
    </nav>
  )
}
