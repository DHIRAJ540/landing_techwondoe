import React from "react";
import "./typography.css";

interface TypographyProps {
  type?: "H1" | "H2" | "P";

  text: string;

  align?: "left" | "center";

  className?: string;

  onClick?: () => void;
}

export const Typography = ({
  type = "H1",
  text = "text",
  align = "center",
  className,
  ...props
}: TypographyProps) => {
  const typo = type === "H1" ? "h1" : type === "H2" ? "h2" : "p";
  return (
    <h1
      className={`storybook-typo ${typo} ${className} `}
      style={{ textAlign: align }}
    >
      {text}
    </h1>
  );
};
