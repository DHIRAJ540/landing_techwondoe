export default {
  name: "advantages",
  title: "Advantages",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
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
      name: "description",
      title: "Decription",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
};
