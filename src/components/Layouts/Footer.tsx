import { shuffle } from 'lodash'
import Script from 'next/script'
import React from 'react'
import { useRecoilValue } from 'recoil'

import { dialogAtom } from '@/atoms/dialog'
import Dialog from '@/components/Dialog'
import Nav from '@/components/JokeCats'
import catsdata from '@/data/cats'

function Footer({ hide }: { hide?: boolean }) {
  const dialogdata = useRecoilValue(dialogAtom)
  return (
    <footer
      className="h-36 bg-cover bg-bottom"
      style={{
        backgroundImage: `url('/images/botwave.svg')`,
      }}
    >
      <div className="">
        {!hide && <Nav cats={shuffle(catsdata).slice(0, 3)} />}
        <div className="text-center">
          © {new Date().getFullYear()}, Built by RudixOps with ❤️
        </div>
      </div>
      <Dialog {...dialogdata} />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-99VWGKYVS6"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
    </footer>
  )
}

export default Footer
