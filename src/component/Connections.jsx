import React from "react";

const Connections = () => {
  const data = [
    {
      text: "causes",
      image: "./Images/causes.jpg",
      link: "/Causes",
    },
    {
      text: "effect",
      image: "./Images/effect.jpg",
      link: "/Effect",
    },
    {
      text: "global warming vs climate change",
      image: "./Images/global_vs_climate.jpg",
      link: "/Glob_vs_Cli",
    },
    {
      text: "solution",
      image: "./Images/solution.jpg",
      link: "/Solutions",
    }
  ];
  return (
    <>
      <div className="main  p-4 ">
        <div className="capitalize text-6xl font-bold py-20 pl-10 ">
          follow us
        </div>
        <div className="img_scroll flex gap-5 overflow-hidden px-7 py-4">
          {data.map((elem, index) => (
            <a _blank href= {elem.link} className="w-[500px] h-[500px] flex flex-col gap-3 items-center justify-center">
              <div className="flex flex-col">
                <p>
                  <img
                    src={elem.image}
                    className="w-full h-full"
                    alt="..."
                  />
                  <div className="text-gray-100 text-center">
                    <span>
                      <p>{elem.text}</p>
                    </span>
                  </div>
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Connections;
