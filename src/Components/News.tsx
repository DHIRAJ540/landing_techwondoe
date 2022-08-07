import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import { Button } from "../stories/Button";
import { Typography } from "../stories/Typography";
import rightImg from "../assets/right.svg";

type NewsProps = {
  title: string;
  author: string;
  date: string;
  image: string;
};

type NewsCardProps = {
  imgUrl: string;
  date: string;
  title: string;
  author: string;
};

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function dateFormatter(date: string) {
  const tDate = new Date(date);
  const month = months[tDate.getMonth()];
  const day = tDate.getDate();
  const year = tDate.getFullYear();

  return String(month + " " + day + ", " + year);
}

function NewsCard({ imgUrl, date, title, author }: NewsCardProps) {
  return (
    <div className="relative pb-12 mt-8 lg:m-0">
      <img src={imgUrl} alt={title} className="w-full" />
      <p className="text-left font-semibold mt-5 text-gray-800">{`by ${author} | ${dateFormatter(
        date
      )} `}</p>
      <Typography
        type="H2"
        align="left"
        text={title}
        className="text-clip mt-5  "
      />
      <div className="flex items-center text-primary font-semibold  absolute left-0 bottom-0 cursor-pointer">
        <p>Read More</p>
        <img src={rightImg} alt="right" className="ml-3 " />
      </div>
    </div>
  );
}

function News() {
  const [newsData, setNewsData] = useState<NewsProps[] | null>(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "news"]{
      title,
      author,
      date,
      "image":image.asset->url,

    }`
      )
      .then((data) => {
        setNewsData(data);
        // console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mt-16">
      {newsData && (
        <div className="lg:w-2/3 mx-auto mt-12 p-3 lg:p-0">
          <div className="flex items-center justify-between">
            <Typography text="Latest News" type="H1" align="left" />
            <div className="hidden lg:block">
              <Button label="View all" primary={true} />
            </div>
            <div className="lg:hidden">
              <Button label="View All" primary={false} />
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-x-7 mt-5">
            {newsData.map((item, index) => (
              <NewsCard
                imgUrl={item.image}
                author={item.author}
                date={item.date}
                title={item.title}
                key={index}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default News;
