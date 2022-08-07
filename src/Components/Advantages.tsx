import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import { Card } from "../stories/Card";
import { Typography } from "../stories/Typography";

type AdvProps = {
  title: string;
  description: string;
};

function Advantages() {
  const [advData, setAdvData] = useState<AdvProps[] | null>(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "advantages"]{
      title,
      description
    }`
      )
      .then((data) => {
        setAdvData(data);
        // console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="advantages mt-16">
      {advData && (
        <div className="lg:p-12 w-full flex-col items-center justify-center p-3">
          <Typography type="H1" align="center" text="Why choose us?" />
          <p className="lg:w-1/3 text-center mx-auto mt-5">
            We have decades of experience, having successfully recruited across
            the globle for many years.
          </p>
          <div className="grid lg:grid-cols-3 place-items-center mt-5 gap-y-5 md:grid-cols-1">
            {advData.map((item, index) => (
              <Card
                header={item.title}
                details={item.description}
                key={index}
                type="half"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Advantages;
