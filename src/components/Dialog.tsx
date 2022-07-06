/* eslint-disable no-underscore-dangle */
import axios from 'axios'
import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

import { dialogAtom } from '@/atoms/dialog'
import type { Doc } from '@/data/structure'

import FacebookShare from './FacebookShare'
import { FormatJoke } from './JokeText'

const Dialog = ({ id, imgid }: { id?: string; imgid?: string }) => {
  const setDialog = useSetRecoilState(dialogAtom)
  const [joke, setJoke] = React.useState<string>('')
  const [opened, setOpened] = React.useState<boolean>(false)
  useEffect(() => {
    async function fetchMyAPI() {
      if (id) {
        const response = await axios.get<Doc>(
          `https://kloun.lol/api/joke/${id}`
        )
        setJoke(response.data.joke)
        setOpened(true)
      }
      if (imgid) {
        setOpened(true)
      }
    }

    fetchMyAPI()
  }, [id, imgid])
  const close = () => {
    document.body.style.overflow = 'auto'
    setDialog(() => {
      return { type: null, id: null }
    })
    setOpened(false)
  }

  return (
    <div
      className={`fixed top-0 left-0 z-20   h-screen  w-screen   overflow-auto bg-black/30 backdrop-blur-sm  ${
        opened ? 'block' : 'hidden'
      }`}
      onClick={close}
    >
      <div className="flex flex-col items-center">
        <svg
          className="h-12 w-12 cursor-pointer self-end"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 744.09 1052.4"
          onClick={close}
        >
          <g>
            <path
              stroke="#000"
              strokeWidth="5.524"
              d="M720.418 507.697a347.228 347.228 0 11-694.445 0 347.228 347.228 0 11694.445 0z"
            ></path>
            <g
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="133.87"
              transform="translate(47.587 10.944) scale(.91837)"
            >
              <path d="M176.51 362.87L532.64 719"></path>
              <path d="M532.64 362.87L176.51 719"></path>
            </g>
          </g>
        </svg>

        {id && (
          <>
            <div className="container max-w-screen-md">
              <FormatJoke joke={joke} />
            </div>
            <FacebookShare id={id} />
          </>
        )}
        {imgid && (
          <>
            {imgid.includes('.mp4') ? (
              <video
                width="320"
                height="240"
                controls={false}
                autoPlay
                className="w-auto rounded-lg"
              >
                <source src={imgid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={imgid} alt="" className="w-auto rounded-lg" />
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Dialog
