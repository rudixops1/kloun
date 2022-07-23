import Link from 'next/link';

const NoSEO = ({ content, href }: { content: string[]; href: string }) => {
  const short = content.slice(0, 2);
  return (
    <>
      {short.map((item, i) => (
        <p key={i}>{item}</p>
      ))}{' '}
      ...
      <Link href={href}>
        <a className='btn' target='_top'>
          Прочети нататък
        </a>
      </Link>
    </>
  );
};
export default NoSEO;
