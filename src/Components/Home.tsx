import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import { Typography } from "../stories/Typography";

type HomeProps = {
  header: string;
  bg_image: any;
  vector: string;
};

function Home() {
  const [homeData, setHomeData] = useState<HomeProps | null>(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "home"]{
      header,
      "bg_image":image.asset->url,
      "vector":vector.asset->url
    }`
      )
      .then((data) => {
        setHomeData(data[0]);
        // console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {homeData && (
        <div className="relative">
          <img
            src={homeData.bg_image}
            alt="home_bg"
            className="w-full h-screen object-cover relative"
          />
          <Typography
            type="H1"
            align="center"
            text={homeData.header}
            className="absolute top-1/2 w-full text-white lg:hidden"
          />
          <img
            src={homeData.vector}
            alt="home_bg"
            className="absolute right-0 bottom-0 w-full lg:w-1/2"
          />
        </div>
      )}
    </div>
  );
}

export default Home;
