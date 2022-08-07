export default {
  name: "persons",
  title: "Persons",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "author",
      title: "Author",
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
    {
      name: "vector",
      title: "Vector",
      type: "image",
    },
  ],
};
