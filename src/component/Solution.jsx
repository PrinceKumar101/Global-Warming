import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Solution = () => {
  return (
    <>
      <Header />
      <div className="p-5">
        <h1 className=" text-4xl text-center tracking-wide">
          WHAT CAN WE DO ?
        </h1>
        <h4 className="text-center text-2xl tracking-wide ">
          <br />
          Healing the planet starts in your garage, in your kitchen, and at your
          dining room table.
          <br />
          <br />
        </h4>
        <p
          style={{
            paddingLeft: 0,
            marginRight: 23,
            marginTop: "-1px",
            marginBottom: "-18px",
            paddingBottom: 17,
            marginLeft: 33,
            position: "relative",
          }}
        >
          Rising sea levels. Raging storms. Searing heat. Ferocious fires.
          Severe drought. Punishing floods. The effects of climate change are{" "}
          <br />
          already threatening our health, our communities, our economy, our
          security, and our children’s future.
          <br />
          What can you do? A whole lot, as it turns out.
        </p>
        <p
          style={{
            marginTop: 26,
            marginLeft: 32,
            marginRight: 35,
            height: 882,
          }}
        >
          <strong>1.</strong> <strong>SPEAK UP !</strong>The single biggest way
          you can make an impact on global climate change?&nbsp; , Talk to your
          friends and family, and make sure your representatives are making good
          decisions.&nbsp;
          <br />
          By voicing your concerns—via social media or, better yet,{" "}
          <a href="https://www.nrdc.org/stories/how-call-congress">
            <span className="text-blue-600">
              directly to your elected officials
            </span>
          </a>
          —you send a message that you care about the warming world.
          <br />
          <br />
          <strong>2.</strong>{" "}
          <strong>USE RENEWABLE ENERGY RESOURCES&nbsp;</strong>
          <br />
          Choose a utility company that generates at least half its power from
          wind or solar and has been certified by{" "}
          <a href="http://www.green-e.org/gogreene.shtml">
            <span className="text-blue-600">Green-e Energy</span>
          </a>
          ,<br /> an organization that vets renewable energy options. If that
          isn’t possible for you, take a look at your electric bill; many
          utilities now <br />
          list{" "}
          <a href="https://www.nrdc.org/stories/how-ditch-biggest-fossil-fuel-offenders-your-life">
            <span className="text-blue-600">
              other ways to support renewable sources
            </span>
          </a>
          on their monthly statements and websites.
          <br />
          <br />
          <strong>3. INVEST IN ENERGY EFFICIENT APPLIANCES</strong>
          <br />
          Since they were first implemented nationally in 1987, efficiency
          standards for dozens of appliances and products have kept 2.3 billion
          tons of carbon dioxide out of the air. That’s about the same amount as
          the annual carbon pollution coughed up by nearly 440 million cars.
          “Energy efficiency is the lowest-cost way to reduce emissions".&nbsp;
          <br />
          When shopping for refrigerators, washing machines,
          <a href="https://www.nrdc.org/stories/whats-most-energy-efficient-water-heater">
            <span className="text-blue-600">heat pump water heaters</span>
          </a>
          , and other appliances, look for the
          <a href="http://www.energystar.gov/">
            <span className="text-blue-600">Energy Star</span>
          </a>
          label. It will tell you which are the most efficient.
          <br />
          <br />
          <strong>4. REDUCE WATER WASTE</strong>
          <br />
          Saving water reduces carbon pollution, too. That's because it takes a
          lot of energy to pump, heat, and treat your water. So take shorter
          showers, turn off the tap while brushing your teeth, and switch to
          <a href="https://www.epa.gov/watersense">
            <span className="text-blue-600">WaterSense</span>
          </a>
          -labeled fixtures and appliances.
          <br />
          <br />
          <strong>5. DRIVE FUEL EFFICIENT VEHICLES OR USE E-VEHICLES</strong>
          <br />
          Gas-smart cars, such as hybrids and fully electric vehicles, &nbsp;
          <a href="https://www.nrdc.org/stories/now-good-time-buy-electric-car">
            <span className="text-blue-600">save fuel and money</span>
          </a>
          <span style={{ color: "rgb(11, 11, 11)" }}>.</span> And once all cars
          and light trucks meet 2025’s clean car standards, which means
          averaging 54.5 miles per gallon, they’ll be a mainstay.&nbsp; Before
          you buy a new set of wheels, compare fuel-economy performance
          <br />
          <br />
          <strong>6. MAINTAIN YOUR RIDE</strong>
          <br />
          Keeping tires properly inflated, we could save 1.2 billion gallons of
          gas each year. A simple tune-up can boost miles per gallon anywhere
          from 4 percent to 40 percent, and a new air filter can get you a 10
          percent boost. Also, remove unnecessary accessories from your car
          roof. Roof racks and clamshell storage containers can reduce fuel
          efficiency by as much as 5 percent.
          <br />
          <br />
          <strong>7. FOLLOW THE THREE R's</strong>
          <br />
          The average person generates 4.5 pounds of trash every day.
          Fortunately, not all the items we discard end up in landfills; we
          recycle or compost more than one-third of our trash. In 2014 this
          saved carbon emissions equivalent to the yearly output of{" "}
          <a href="https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/advancing-sustainable-materials-management-0">
            <span className="text-blue-600">38 million passenger cars</span>
          </a>
          . Search your municipality’s sanitation department (or equivalent)
          webpage to learn exactly what you can place in the recycling bin, as
          counties and cities often differ in what they accept.
        </p>
        <iframe
          allowFullScreen
          title="..."
          src="https://www.youtube.com/embed/YoZF16PZYoU"
          width={560}
          height={315}
          className=" "
        />
      </div>
      <Footer />
    </>
  );
};

export default Solution;
