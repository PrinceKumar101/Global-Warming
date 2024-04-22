import React from "react";
import Header from "./Header";

const Challanges = () => {
  return (
    <>
      <Header />
      <div>
        <h1 className="text-center w-full">QUIZZES</h1>
        <iframe
          className="w-full"
          title="..."
          src="https://climate.nasa.gov/quizzes/carbon-quiz/"
          width={916}
          height={620}
        />
        <iframe
          className="w-full"
          title="..."
          src="https://climate.nasa.gov/quizzes/air-we-breathe-quiz/"
          width={916}
          height={620}
        />
        <iframe
          className="w-full"
          title="..."
          src="https://climate.nasa.gov/quizzes/earth-day-quiz/"
          width={916}
          height={620}
        />
        <iframe
          className="w-full"
          title="..."
          src="https://climate.nasa.gov/quizzes/quiz-co2/"
          width={916}
          height={620}
        />
        <iframe
          className="w-full"
          title="..."
          src="https://climate.nasa.gov/quizzes/global-temp-quiz/"
          width={916}
          height={620}
        />
        <iframe
          className="w-full"
          title="..."
          src="https://climate.nasa.gov/quizzes/quiz-ice/"
          width={916}
          height={620}
        />
        <iframe
          className="w-full"
          title="..."
          src="https://climate.nasa.gov/quizzes/sea-level-quiz/"
          width={916}
          height={620}
        />
      </div>
    </>
  );
};

export default Challanges;
