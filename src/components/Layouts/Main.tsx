import dynamic from 'next/dynamic';
import type { ReactNode } from 'react';

import MenuNavBar from '@/components/MenuNavBar';

const Logo = dynamic(() => import('@/components/Layouts/Header'), {
  ssr: false,
});
const Footer = dynamic(() => import('@/components/Layouts/Footer'), {
  ssr: false,
});

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  hideFooter?: boolean;
  title?: string;
};

const Main = (props: IMainProps) => {
  return (
    <>
      {props.meta}
      <div className='navbar absolute z-20'>
        <div className='navbar-start'>
          <div className='xs:visible dropdown visible sm:invisible md:invisible'>
            <label tabIndex={0} className='btn btn-ghost btn-circle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h7'
                />
              </svg>
            </label>
            <MenuNavBar className='dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow' />
          </div>
        </div>
        <div className='navbar-center'></div>
        <div className=' navbar-end '>
          <MenuNavBar className='xs:block xs:invisible menu rounded-box menu-horizontal  invisible sm:visible md:visible' />
        </div>
      </div>
      <div className='flex min-h-screen flex-col'>
        <Logo title={props.title} />
        <div className='container mx-auto flex grow flex-col justify-center px-2 pb-20 sm:px-4 md:px-8'>
          {props.children}
        </div>
        <Footer hide={props.hideFooter} />
      </div>
    </>
  );
};

export { Main };
