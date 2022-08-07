import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import { Typography } from "../stories/Typography";

type AdressProps = {
  number: string;
  mail: string;
  address1: string;
  address2: string;
  address3: string;
  pin: string;
};

type SocialProps = {
  title: string;
  link: string;
  image: string;
};

function Footer() {
  const [addressData, setAddressData] = useState<AdressProps | null>(null);
  const [socialData, setSocialData] = useState<SocialProps[] | null>(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "address"]{
      number,
      mail,
      address1,
      address2,
      address3,
      pin
    }`
      )
      .then((data) => {
        setAddressData(data[0]);
        console.log(data);
      })
      .catch((err) => console.log(err));

    sanityClient
      .fetch(
        `*[_type == "socials"]{
      title,
      link,
      "image":image.asset->url
    }`
      )
      .then((data) => {
        setSocialData(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="mt-12 lg:py-12 lg:px-0 p-3 pb-12 relative">
        <div className="lg:w-2/3 mx-auto lg:flex lg:items-center lg:justify-between p-3 lg:p-0  w-full   ">
          <div className="mt-12">
            <div className="flex lg:items-end lg:justify-end absolute lg:left-5 right-5 bottom-5 lg:hidden ">
              {socialData &&
                socialData.map((item, index) => (
                  <a href={item.link} key={index}>
                    <img src={item.image} alt={item.title} className="mx-1" />
                  </a>
                ))}
            </div>
            <div className="lg:items-end lg:justify-end hidden lg:flex  ">
              {socialData &&
                socialData.map((item, index) => (
                  <a href={item.link} key={index}>
                    <img src={item.image} alt={item.title} className="mx-1" />
                  </a>
                ))}
            </div>
          </div>
          <div>
            {addressData && (
              <div className="grid lg:grid-cols-4 lg:gap-x-10 grid-cols-2 gap-y-10 ">
                <div>
                  <Typography text="Home" align="left" type="P" />
                  <Typography text="About" align="left" type="P" />
                  <Typography text="Candidates" align="left" type="P" />
                </div>
                <div>
                  <Typography text="Employers" align="left" type="P" />
                  <Typography text="Latest News" align="left" type="P" />
                  <Typography text="Contact" align="left" type="P" />
                </div>
                <div>
                  <Typography
                    text={addressData.number}
                    align="left"
                    type="P"
                    className="underline cursor-pointer"
                  />
                  <Typography
                    text={addressData.mail}
                    align="left"
                    type="P"
                    className="underline cursor-pointer truncate"
                  />
                </div>
                <div>
                  <Typography
                    text={addressData.address1}
                    align="left"
                    type="P"
                  />
                  <Typography
                    text={addressData.address2}
                    align="left"
                    type="P"
                  />
                  <Typography
                    text={addressData.address3}
                    align="left"
                    type="P"
                  />
                  <Typography text={addressData.pin} align="left" type="P" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-gray_bg py-5">
        <Typography text="Copyright © 2021 - Beyond Ltd. " type="P" />
      </div>
    </div>
  );
}

export default Footer;
