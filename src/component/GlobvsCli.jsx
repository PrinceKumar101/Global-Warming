import React from 'react'
import Header from './Header';
import Footer from './Footer';

const GlobvsCli = () => {
  return (
    <>
    <Header/>
    
      <div id="main " className=' p-10 pt-2'>
        <h1
         className=' text-4xl text-center font-semibold p-3 '
        >
          <br />
          What is the difference between global warming and climate change?
          <br />
          
          <br />
        </h1>
        <p
          style={{
            textAlign: "left",
            position: "relative",
            marginLeft: 10,
            marginRight: 16,
            marginTop: "-15px",
          }}
        >
          <br />
          Although people tend to use these terms interchangeably, global
          warming is just one aspect of climate change. “Global warming” refers
          to the rise in global temperatures due mainly to the increasing
          concentrations of greenhouse gases in the atmosphere. “Climate change”
          refers to the <br />
          increasing changes in the measures of climate over a long period of
          time – including precipitation, temperature, and wind patterns.
          <br />
          <br />
        </p>
        <img
        alt='...'
          src="Images/Capture.jpg"
          style={{ marginLeft: 162, position: "relative", textAlign: "center" }}
          width={672}
          height={568}
        />
        <iframe
          allowFullScreen
          title='...'
          frameBorder={0}
          src="https://www.youtube.com/embed/HGEkXQx9dP0"
          width={560}
          height={315}
          style={{ marginTop: 46, marginLeft: 231 }}
        />
      </div>
      <Footer/>
    </>
  );
}

export default GlobvsCli