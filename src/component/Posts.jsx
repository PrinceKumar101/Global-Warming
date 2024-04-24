import React from "react";

const Posts = () => {
  const data = [
    {
      image: "./Images/post1.webp",
      link: "#",
      h4: "10 Tips to Reduce Your Carbon Footprint",
      para: "Title: Climate change is a pressing issue that requires immediate action from all...",
    },
    {
      image: "./Images/post2.webp",
      link: "#",
      h4: "The Impact of Climate Change on Wildlife",
      para: "The imapact of climate change on Wildlife Change is not just a threat to our Planet, but also to the incrediable...",
    },
    {
      image: "./Images/post3.webp",
      link: "#",
      h4: "How Climate Change Affect Your Health",
      para: "How Climate Change Affects your health, climate change is not just an enviromental issue; it also has significant imapct...",
    },
  ];
  return (
    <>
      <div className="cards_main flex justify-between p-10">
        {data.map((elem, index) => (
          <div className="card w-96">
            <img src={elem.image} className="card-img-top" alt="..." />
            <div className="card-body leading-7">
              <a href={elem.link}>
                <h4 className="card-title pb-4">{elem.h4}</h4>
                <p className="card-text pb-5 border-b-2">{elem.para}</p>
              </a>
              <div className="views flex justify-between text-2xl h-5 pt-2">
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-suit-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-eye-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
