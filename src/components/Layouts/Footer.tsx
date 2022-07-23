import { shuffle } from 'lodash';
import Image from 'next/image';
import Script from 'next/script';
import React from 'react';
import { useRecoilValue } from 'recoil';

import { dialogAtom } from '@/atoms/dialog';
import Dialog from '@/components/Dialog';
import Nav from '@/components/Nav';
import catsdata from '@/data/cats';

import powered from '../../../public/powered.png';

function Footer({ hide }: { hide?: boolean }) {
  const dialogdata = useRecoilValue(dialogAtom);
  return (
    <footer
      className='h-36 bg-cover bg-bottom'
      style={{
        backgroundImage: `url('/images/botwave.svg')`,
      }}
    >
      <div>
        {!hide && <Nav cats={shuffle(catsdata).slice(0, 3)} prefix='cat' />}
        <div className='flex items-center justify-center'>
          <div className='-ml-8'>
            <Image src={powered} alt='powered' width={260} height={44} />
          </div>
        </div>
      </div>
      <Dialog {...dialogdata} />
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-99VWGKYVS6'
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
    </footer>
  );
}

export default Footer;
