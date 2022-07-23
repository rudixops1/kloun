import Link from 'next/link';

import catsdata from '@/data/cats';
import { AppConfig } from '@/utils/AppConfig';

const MenuNavBar = ({ className }: { className: string }) => {
  return (
    <ul tabIndex={0} className={className}>
      <li>
        <Link href='/'>
          <a>Начало</a>
        </Link>
      </li>

      <li>
        <a>Вицове</a>
        <ul className='rounded bg-base-100 p-2'>
          {catsdata.slice(0, 10).map((item) => (
            <li key={item.cat}>
              <Link href={`${AppConfig.link}/cat/${item.cat}/`} passHref>
                <a>{item.cat}</a>
              </Link>
            </li>
          ))}
          <li>
            <Link href={`${AppConfig.link}/?type=Jokes`}>Всички </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href={`${AppConfig.link}/news`} passHref>
          <a>Новини</a>
        </Link>
      </li>
      <li>
        <Link href={`${AppConfig.link}/business`} passHref>
          <a>Business</a>
        </Link>
      </li>
    </ul>
  );
};

export default MenuNavBar;
