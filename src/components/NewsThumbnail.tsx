const NewsThumbnail = ({
  title,
  image,
  slug,
  _id,
}: {
  title: string
  image: string
  slug: string
  _id: string
}) => {
  return (
    <div className="joke">
      <a href={`/news/i/${slug}/${_id}`}>
        <div className="flex flex-row">
          <img
            alt={image}
            className="h-14 w-14 rounded object-cover"
            src={image}
          />
          <div className="ml-4 items-center justify-center ">
            <h3 className="text-xs font-medium text-slate-50">{title}</h3>
          </div>
        </div>
      </a>
    </div>
  )
}

export default NewsThumbnail