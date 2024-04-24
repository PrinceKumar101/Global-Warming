import React from "react";

const About = () => {
  const data = [
    {
      title: "Who we are",
      para: "At Global Warming, we are committed to making a positive change in our world. From the moment we started our work in 2000, we understood that by working together we could overcome our challenges much more efficiently, and that is why we ultimately decided to launch Global Warming. Our strength lies not only in the words we stand by, but most importantly in the actions of our initiatives. We strive to make a positive change in all of our pursuits.",

      after_underline:
        "At Global Warming, we are committed to making a positive change in our world. From the moment we started our work in 2000, we understood that by working together we could overcome our challenges much more efficiently, and that is why we ultimately decided to launch Global Warming. Our strength lies not only in the words we stand by, but most importantly in the actions of our initiatives. We strive to make a positive change in all of our pursuits.",
    },
  ];
  return (
    <>
      <div className="about_card">
        {data.map((elem, index) => (
          <div className="card_inner">
            <div className="top leading-5 pl-7 border-b-2 mx-20 tracking-wide">
              <h1 className=" text-5xl p-4 w-6/12">{elem.title}</h1>
              <h3 className="text-3xl p-3 w-6/12 pb-10">{elem.para}</h3>
            </div>
            <div className="flex justify-end ">
              <div className="bottom text-1xl w-5/12  pr-7 pt-10">
                <p className=" p-4 pb-8">{elem.after_underline}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
