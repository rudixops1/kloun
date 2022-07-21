import Image from 'next/image';
import Link from 'next/link';

const NewsThumbnail = ({
  title,
  image,
  slug,
  uid,
}: {
  title: string;
  image: string;
  slug: string;
  uid: string;
}) => (
  <Link href={`/news/i/${slug}/${uid}`} passHref>
    <a>
      <div className='-m-4 flex cursor-pointer flex-row '>
        {image && (
          <div className='absolute ml-2 h-20 w-20'>
            <Image
              alt={title}
              src={image}
              width={200}
              height={200}
              objectFit='contain'
            />
          </div>
        )}

        <div className='flex h-20 w-full items-center '>
          <div className='ml-24'>
            <h3 className='text-sm font-medium text-slate-300'>{title}</h3>
          </div>
        </div>
      </div>
    </a>
  </Link>
);

export default NewsThumbnail;
