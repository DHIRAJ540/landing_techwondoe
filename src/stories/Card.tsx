import React from "react";
import "./card.css";
import checkImg from "./assets/check.svg";

interface CardProps {
  header: string;
  details: string;
  type?: "full" | "half";
}

export const Card = ({
  header,
  details,
  type = "full",
  ...props
}: CardProps) => {
  return (
    <div className={`storybook-card  ${type}  `}>
      <div className="header">
        <img src={checkImg} alt="check" />
        <h2>{header}</h2>
      </div>
      <p>{details}</p>
    </div>
  );
};
