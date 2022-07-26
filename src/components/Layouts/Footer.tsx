import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import React from 'react';
import { useRecoilValue } from 'recoil';

import { dialogAtom } from '@/atoms/dialog';
import Dialog from '@/components/Dialog';
import { AppConfig } from '@/utils/AppConfig';

function Footer({ hideFooter }: { hideFooter?: boolean }) {
  const dialogdata = useRecoilValue(dialogAtom);
  return (
    <div
      className='bg-cover bg-bottom'
      style={{
        backgroundImage: `url('/images/botwave.svg')`,
      }}
    >
      {!hideFooter && (
        <footer className='footer p-10 text-neutral-content'>
          <div className='w-full'>
            <span className='footer-title'>Services</span>
            <div className='flex w-full'>
              <div className='flex flex-1 flex-col gap-3'>
                <Link href={`${AppConfig.link}/?type=Jokes`} passHref>
                  <a className='block'>Вицове</a>
                </Link>
                <Link href={`${AppConfig.link}/news`} passHref>
                  <a className='block'>Новини</a>
                </Link>
                <Link href={`${AppConfig.link}/business`} passHref>
                  <a className='block'>Бизнес</a>
                </Link>
              </div>
              <div className='flex flex-1 flex-col gap-3'>
                <Link href={`${AppConfig.link}/movies/`} passHref>
                  <a className='block'>Филми</a>
                </Link>
                <Link href={`${AppConfig.link}/tw`} passHref>
                  <a className='block'>Туитър ДБ (бета)</a>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <span className='footer-title'>Company</span>
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
      )}

      <div className='mb-2 flex items-center justify-end sm:mt-0 md:mt-8 lg:mt-12'>
        <Image src='/powered.svg' alt='powered' width={333} height={56} />
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
  );
}

export default Footer;
