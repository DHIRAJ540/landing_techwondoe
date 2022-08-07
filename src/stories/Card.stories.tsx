import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardFull = Template.bind({});

CardFull.args = {
  header: "This is the heading",
  details:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .",

  type: "full",
};

export const CardHalf = Template.bind({});

CardHalf.args = {
  header: "This is the heading",
  details:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .",

  type: "half",
};
