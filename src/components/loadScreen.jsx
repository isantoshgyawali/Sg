import React from 'react'

export default function loadScreen() {
  return (
    <div className='load-screen'>
      <svg className='animateSvg'
        viewBox="0 0 144 150"
        fill="none" xmlns="http://www.w3.org/2000/svg">

        <linearGradient id="gradient" gradientTransform="rotate(90)">
          <stop offset="10%" stop-color="orangered" />
          <stop offset="50%" stop-color="red" />
          <stop offset="100%" stop-color="orangered" />
        </linearGradient>

        <path d="M133 19C22 30 132 22 49 64C-34 106 9 -50 43 19C77 88 44 126 111 107C178 88 126 36
        91 57C56 78 22 75 64 121C97.6 157.8 42 122.333 15 107" stroke-width="2" stroke="url(#gradient)" />
      </svg>

    </div>
  )
}
