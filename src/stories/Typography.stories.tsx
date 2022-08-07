import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Typography } from "./Typography";

export default {
  title: "Components/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const H1 = Template.bind({});

H1.args = {
  text: "This is H1 text",
  type: "H1",
};

export const H2 = Template.bind({});

H2.args = {
  text: "This is H2 text",
  type: "H2",
};

export const P = Template.bind({});

P.args = {
  text: "This is P text",
  type: "P",
};
