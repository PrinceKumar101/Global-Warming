import React from "react";

const Work = () => {
  const data = [
    {
      cont: "cont2",
      head: "Environmental Protection",
      tail: "Preserving Our Planet",
    },
    {
      cont: "cont3",
      head: "Carbon Reduction",
      tail: "Sustainable Solutions",
    },
    {
      cont: "cont4",
      head: "Education",
      tail: "Empowering Communities",
    },
    {
      cont: "cont5",
      head: "Community Outreach",
      tail: "Helping Those in Need",
    },
  ];
  return (
    <>
      <div className="main text-2xl float-end pt-60 p-32">
        <div className="cont1 pb-11 w-9/12">
          <h1 className=" text-6xl font-extrabold capitalize">Ways We Help</h1>
          <h3 className=" text-3xl font-normal capitalize py-9">
            The Focus of Our Efforts
          </h3>
          <p className="text-2xl leading-10 ">
            Furthering our cause is the most important goal of our organization.
            We seek to support, empower, and provide high quality resources to
            communities impacted by climate change. Our success isn't measured
            in terms of wealth or profit margin, but by the value we provide to
            those we serve. Learn more about what we do below.
          </p>
        </div>
        <div className="card">
          {data.map((elem, index) => (
            <div className="cont2 border-t-2 py-8 flex justify-between">
              <h2 className="w-6/12">{elem.head}</h2>
              <p className="w-6/12">{elem.tail}</p>
            </div>
          ))}
        </div>
        <div className="cont6 cont2 border-t-2 py-3 flex justify-between border-2 w-fit rounded-full float-start ">
          <button type="button" className="text-4xl px-4">
            View More
          </button>
        </div>
      </div>
    </>
  );
};

export default Work;
