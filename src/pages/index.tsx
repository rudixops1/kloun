import Link from 'next/link';
import { useRouter } from 'next/router';

import Nav from '@/components/JokeCats';
import { Main } from '@/components/Layouts/Main';
import { Meta } from '@/components/Layouts/Meta';
import { Program } from '@/components/Program';

import catsdata from '../data/cats';

const MoreButton = ({
  text,
  type
}: {
  text: string;
  type: string;
}): JSX.Element => (
  <div className="my-2 flex flex-row-reverse">
    <Link href={{ pathname: '/', query: { type } }}>
      <div className="mr-2 flex cursor-pointer items-center rounded   bg-gradient-to-r from-purple-900 to-pink-600 ">
        <div className="m-1 flex bg-gray-800 p-2 text-sm">{text}</div>
      </div>
    </Link>
  </div>
);

const Index = () => {
  const router = useRouter();
  const {
    query: { type }
  } = router;
  const cats = catsdata.sort((a, b) => b.count - a.count);
  return (
    <Main
      hideFooter
      meta={
        <Meta
          title="Вицове и забавни котки и мемета"
          description="Вицове и забавни котки и мемета"
        />
      }
    >
      {type === 'Jokes' && <Nav cats={cats} />}
      {type === 'Program' && (
        <Program className="container flex flex-wrap items-center justify-center sm:mx-auto" />
      )}
      {!type && (
        <>
          <Nav cats={cats} limit={9} />
          <MoreButton text="Oще категории" type="Jokes" />
          <Program
            limit={12}
            className="flex h-44 snap-x scroll-pr-6 scroll-pl-6 scrollbar-thin scrollbar-thumb-gray-800"
          />
          <MoreButton text="Oще Memeта" type="Program" />
        </>
      )}
    </Main>
  );
};

export default Index;
