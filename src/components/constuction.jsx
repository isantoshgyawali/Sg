import React from 'react'

import GifOne  from "../images/6RuP.gif";
import GifTWo from "../images/Mtnf.gif";

const constuction = () => {
  return (
    <div id='construction' className='under-construction'>
        <img src={GifOne} alt="construction" className='gifOne'/>
        <img src={GifTWo} alt="construction" className='gifTwo'/>
    </div>
  )
}

export default constuction
