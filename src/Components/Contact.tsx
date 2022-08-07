import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import { Typography } from "../stories/Typography";
import { Button } from "../stories/Button";

type ContactProps = {
  header: string;
  description: string;
};

function Contact() {
  const [contactData, setContactData] = useState<ContactProps | null>(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "contact"]{
      header,
      description,
    }`
      )
      .then((data) => {
        setContactData(data[0]);
        // console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="lg:p-16 bg-primary p-3">
      {contactData && (
        <div className="lg:p-12 py-8">
          <Typography
            type="H1"
            text={contactData.header}
            align="center"
            className="text-white "
          />
          <Typography
            text={contactData.description}
            align="center"
            type="P"
            className="text-white mt-5 lg:w-1/2 mx-auto"
          />
          <Button primary={false} label="Get in touch" className="mt-5" />
        </div>
      )}
    </div>
  );
}

export default Contact;
