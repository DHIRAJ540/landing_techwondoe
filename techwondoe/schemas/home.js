export default {
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    {
      name: "header",
      title: "Header",
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
      options: {
        hotspot: true,
      },
    },
    {
      name: "vector",
      title: "Vector",
      type: "image",
    },
  ],
};
