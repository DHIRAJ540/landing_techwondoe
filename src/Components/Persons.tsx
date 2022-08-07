import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import { Typography } from "../stories/Typography";

type PersonProps = {
  title: string;
  description: string;
  image: string;
  vector: string;
};

type PersonCardProps = {
  title: string;
  description: string;
  image: string;
};

function PersonCard({ title, description, image }: PersonCardProps) {
  return (
    <div className="bg-white p-8 z-10 mt-8 lg:m-0 ">
      <img src={image} alt={title} />
      <Typography type="H1" text={title} align="left" className="mt-5" />
      <Typography type="P" text={description} align="left" className="mt-5" />
      <p className="text-primary text-left font-semibold mt-5 cursor-pointer">
        Learn More
      </p>
    </div>
  );
}

function Persons() {
  const [perData, setPerData] = useState<PersonProps[] | null>(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "persons"]{
      title,
      description,
      "image":image.asset->url,
      "vector":vector.asset->url
    }`
      )
      .then((data) => {
        setPerData(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-gray_bg py-16 mt-16 relative  ">
      {perData && (
        <div className="mt-12 lg:w-2/3 mx-auto grid lg:grid-cols-2 gap-x-5 p-3 lg:py-8 lg:px-0 ">
          {perData.map((item, index) => (
            <PersonCard
              title={item.title}
              description={item.description}
              key={index}
              image={item.image}
            />
          ))}
          <img
            src={perData[0].vector}
            alt="vector"
            className="absolute right-0 bottom-0 w-1/2 z-0 hidden lg:block"
          />
        </div>
      )}
    </div>
  );
}

export default Persons;
