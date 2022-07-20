import Link from 'next/link';

const NewsThumbnail = ({
  title,
  image,
  slug,
  uid
}: {
  title: string;
  image: string;
  slug: string;
  uid: string;
}) => (
  <div className="joke">
    <Link href={`/news/i/${slug}/${uid}`} passHref>
      <a>
        <div className="flex cursor-pointer flex-row">
          {image && (
            <img
              alt={image}
              className="h-14 w-14 rounded object-cover"
              src={image}
            />
          )}

          <div className="ml-4 items-center justify-center">
            <h3 className="text-xs font-medium text-slate-50">{title}</h3>
          </div>
        </div>
      </a>
    </Link>
  </div>
);

export default NewsThumbnail;
