const { exec } = require('child_process')

export default async function handler(req, res) {
  exec('ls -la', (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`)
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`)
      return
    }
    console.log(`stdout: ${stdout}`)
  })

  exec('pwd', (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`)
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`)
      return
    }
    console.log(`stdout: ${stdout}`)
  })

  res.status(200).end({})
}
