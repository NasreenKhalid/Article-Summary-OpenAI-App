import React from 'react'
import {logo } from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
<nav className='flex justify-between items-center flex-col'>
  <img src={logo} alt='sum_logo'
  className='w-28 object-contain'
  />
  <button
  type='button'
  onClick={()=> window.open("https://www.google.com")}
  className='black_btn'
  >
    GitHub
  </button>

</nav>
<h1 className='head_text'>
  Summarize Articles with  <br className='max-md:hidden'></br><span className='orange_gradient'>OpenAT GPT-4</span>
</h1>

<h2 className='desc'>
  Simplify your reading with Summize, an open-source article summarizer
  that transforms lengthy articles into clear and concise summaries.
</h2>

    </header>
  )
}

export default Hero 