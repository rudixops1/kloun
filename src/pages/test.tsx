import type { GetServerSideProps } from 'next'

// const { exec } = require('node:child_process')

const Test = (props: any) => {
  return <pre>{JSON.stringify(props)}</pre>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: context.query,
  }
}

export default Test
