import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const { exec } = require('node:child_process')

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextRequest) => {
  const { url } = req

  exec('ls -la && pwd && ls - la /', (_: any, output: any) => {
    return NextResponse.json({
      ver: '3.0.1',
      url,
      data: output.split('\n'),
    })
  })
}

export const config = {
  runtime: 'experimental-edge',
}
