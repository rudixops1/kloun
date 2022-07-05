import type { GetServerSideProps } from 'next'

const Test = (props: any) => {
  return <pre>{JSON.stringify(props, null, 2)}</pre>
}
const fs = require('fs')

export const getServerSideProps: GetServerSideProps = async (context) => {
  function getFiles(dir: any, files_?: any) {
    // eslint-disable-next-line no-param-reassign
    files_ = files_ || []
    const files = fs.readdirSync(dir)
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const i in files) {
      const name = `${dir}/${files[i]}`
      if (fs.statSync(name).isDirectory()) {
        getFiles(name, files_)
      } else {
        files_.push(name)
      }
    }
    return files_
  }
  const out = getFiles(context!.query!.dir || '.')
  return {
    props: { out },
  }
}

export default Test
