import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='cont1 z-2 pt-4 relative flex'>
      <div className='image1 relative '>
        <img className=' z-3 brightness-50 relative' src='./images/hero_img_1.webp' alt='hero section'/>
      </div>
      <div className='hero_text absolute top-52 left-28'>
        <h3 className='text-5xl'>Inspiring Change</h3>
        <h2 className=' text-8xl pt-10 pb-10'>Global Warming</h2>
        <div className='btn-learn_more border-2 w-fit  hover:bg-white hover:text-black hover:translate-x-3 rounded-full p-3   '>
        <button className='learn_more text-3xl border-slate-200 '> <a href='{#}'>Learn More</a>
        </button>
        </div>
      </div>
      <div className='hero_des absolute bottom-5 text-xl w-64 right-20'>
        <p>Global Warming is dedicated to raising awareness about the impact of climate change on our planet. Our initiatives and activities are designed to catalyze true transformation. But above all, passion is at the heart and soul of everything that we do.</p>

      </div>

    </div>

    </>
    
  )
}

export default Hero