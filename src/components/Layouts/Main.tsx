import dynamic from 'next/dynamic'
import type { ReactNode } from 'react'

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
