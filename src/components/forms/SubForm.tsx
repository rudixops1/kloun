import Link from 'next/link';

const SubForm = ({
  left,
  button,
}: {
  left?: { text: string; href: string };
  button: string;
}): JSX.Element => (
  <div className='mt-6 flex w-full'>
    <div className='flex grow items-center justify-start pr-1 text-sm'>
      {left && (
        <Link href={left.href}>
          <a className='font-bold underline'>{left.text}</a>
        </Link>
      )}
    </div>
    <div>
      <button type='submit' className='btn btn-primary btn-md  self-end'>
        {button}
      </button>
    </div>
  </div>
);
export default SubForm;
