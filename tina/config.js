import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "feature/add-tinacms";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "events",
        label: "Events",
        path: "src/content/events",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "location",
            label: "Location",
            required: true,
          },
          {
            type: "string",
            name: "rsvpLink",
            label: "RSVP Link",
            required: true,
          },
        ],
      },
      {
        name: "people",
        label: "People",
        path: "src/content/people",
        format: "md",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true,
          },
          {
            type: "string",
            name: "position",
            label: "Position",
            required: true,
          },
          {
            type: "string",
            name: "socialLink",
            label: "Social Link",
            required: true,
          },
          {
            type: "string",
            name: "image",
            label: "Image",
            required: true,
          },
        ],
      },
      {
        name: "blog",
        label: "Blog",
        path: "src/content/docs/blog",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: false,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Publication Date",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: false,
          },
          {
            type: "rich-text",
            name: "content",
            label: "Content",
            required: true,
            isBody: true,
          },
        ],
      },
      {
        name: "docs",
        label: "Docs",
        path: "src/content/docs",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: false,
          },
          {
            type: "rich-text",
            name: "content",
            label: "Content",
            required: true,
            isBody: true,
          },
        ],
      },
    ],
  },
});
