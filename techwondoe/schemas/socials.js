export default {
  name: "socials",
  title: "Socials",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },

    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
};
