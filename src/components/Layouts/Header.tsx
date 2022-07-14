import Image from 'next/image'

function Logo({ title }: { title?: string }) {
  return (
    <header className="bg-[url('/images/upwave.svg')] bg-cover">
      <div className="xs:pt-5 xs:justify-start z-10 flex w-full items-center pt-2   sm:justify-center sm:pt-6">
        <a href="https://kloun.lol">
          <Image
            src="/logobottom.png"
            alt=""
            className="z-10 cursor-pointer"
            width={169}
            height={195}
            priority={true}
          />
        </a>
        <div className="flex items-center justify-center  overflow-hidden truncate text-3xl font-extrabold md:text-6xl">
          <h1 className=" text-purple-200">
            {title && <span className="font-medium">/{title}</span>}
          </h1>
        </div>
      </div>
    </header>
  )
}

export default Logo
