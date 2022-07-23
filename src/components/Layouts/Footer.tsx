import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import React from 'react';
import { useRecoilValue } from 'recoil';

import { dialogAtom } from '@/atoms/dialog';
import Dialog from '@/components/Dialog';
import { AppConfig } from '@/utils/AppConfig';

import powered from '../../../public/powered.png';

function Footer() {
  const dialogdata = useRecoilValue(dialogAtom);
  return (
    <>
      <footer className='footer  p-10 text-neutral-content'>
        <div>
          <span className='footer-title'>Services</span>
          <Link href={`${AppConfig.link}/?type=Jokes`} passHref>
            <a>Вицове</a>
          </Link>
          <Link href={`${AppConfig.link}/news`} passHref>
            <a>Новини</a>
          </Link>
          <Link href={`${AppConfig.link}/business`} passHref>
            <a>Бизнес</a>
          </Link>
          <Link href={`${AppConfig.link}/tw`} passHref>
            <a>Туитър ДБ (бета)</a>
          </Link>
        </div>
        <div>
          <span className='footer-title'>Компания</span>
          <Link href={`${AppConfig.link}/other/about/`}>
            <a>За</a>
          </Link>
          <Link href={`${AppConfig.link}/other/contact/`}>
            <a>Контакт</a>
          </Link>
        </div>
        <div>
          <span className='footer-title'>Legal</span>
          <Link href={`${AppConfig.link}/other/terms/`} passHref>
            <a>Terms of use</a>
          </Link>
          <Link href={`${AppConfig.link}/other/privacy/`} passHref>
            <a>Privacy policy</a>
          </Link>
        </div>
      </footer>
      <div
        className='h-36 bg-cover bg-bottom'
        style={{
          backgroundImage: `url('/images/botwave.svg')`,
        }}
      >
        <div className='flex items-center justify-center'>
          <div className='-ml-8'>
            <Image src={powered} alt='powered' width={260} height={44} />
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
      </div>
    </>
  );
}

export default Footer;
