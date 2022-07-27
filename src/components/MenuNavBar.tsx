import Link from 'next/link';

import { AppConfig } from '@/utils/AppConfig';
import { catsdata } from '@/utils/formatter';

const MenuNavBar = ({
  className,
  hrefPass,
}: {
  className: string;
  hrefPass: boolean;
}) => {
  return (
    <ul tabIndex={0} className={className}>
      <li>
        <Link href={AppConfig.link}>
          <a className='text-shadow font-bold'>Начало</a>
        </Link>
      </li>

      <li>
        <a className='text-shadow font-bold'>Вицове</a>
        <ul className='rounded bg-base-100 p-2'>
          {catsdata.slice(0, 10).map((item) => (
            <li key={item.cat}>
              <Link
                href={`${AppConfig.link}/cat/${item.slug}/`}
                passHref={hrefPass}
              >
                <a className='font-bold'>{item.cat}</a>
              </Link>
            </li>
          ))}
          <li>
            <Link href={`${AppConfig.link}/?type=Jokes`}>Всички</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href={`${AppConfig.link}/news/`} passHref={hrefPass}>
          <a className='text-shadow font-bold'>Новини</a>
        </Link>
      </li>
    </ul>
  );
};

export default MenuNavBar;
