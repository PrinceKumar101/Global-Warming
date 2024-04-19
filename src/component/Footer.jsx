import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="cont1 flex justify-between border-t-2 pt-32 px-9 m-2">

        <div className="cont12 text-8xl pl-20 capitalize font-bold tracking-widest  leading-relaxed">
            <h2>
                global <br />warming
            </h2>

        </div>
        <div className="cont13 grid text-xl px-10">

            <div className="phne_no flex gap-10 py-10">
                <p>123-456-7890
                    <br />
                    prince@gmail.com
                </p>
                

                <div className="address ">
                <p>LPU paghwara, <br /> Punjab, India</p>
            </div>
            </div>
            
            <div className="form  ">
                <p className=' capitalize leading-8 pb-4'>stay informed join our newsletter</p>
                <p className='pb-5'>Enter your name here *</p>
                <input type="text " id='join-btn' className=' bg-transparent border-b-2 '/>
                <div className="btn pt-5 pl-6">
                <button id='join-btn' className=' block  text-2xl border-[1.5px] p-1 rounded-lg'> Join  Now</button>
                </div>
            </div>

            



        </div>

    </div>
    </>
  )
}

export default Footer