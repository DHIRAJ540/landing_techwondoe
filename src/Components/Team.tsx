import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import { Typography } from "../stories/Typography";
import { Button } from "../stories/Button";

type TeamProps = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  vector: string;
};

function Team() {
  const [teamData, setTeamData] = useState<TeamProps | null>(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "team"]{
      title,
      subtitle,
      description,
      "image":image.asset->url,
      "vector":vector.asset->url
    }`
      )
      .then((data) => {
        setTeamData(data[0]);
        // console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-light_bg lg:py-20 relative pb-12 mt-16">
      {teamData && (
        <div className="lg:flex items-center lg:w-2/3  mx-auto justify-between ">
          <img
            src={teamData.image}
            alt="team"
            className="object:cover mx-auto "
          />
          <div className="lg:w-1/2 text-left mt-5 p-3 lg:mt-0 lg:p-0 lg:ml-12">
            <h2 className="text-left text-primary font-semibold ">
              {teamData.title}
            </h2>
            <Typography align="left" text={teamData.subtitle} type="H1" />
            <Typography align="left" text={teamData.description} type="P" />
            <div className="mt-5">
              <Button primary={true} size="medium" label="Learn More" />
            </div>
          </div>
          <img
            src={teamData.vector}
            alt="vector"
            className="absolute left-0 -top-40 lg:block hidden"
          />
        </div>
      )}
    </div>
  );
}

export default Team;
