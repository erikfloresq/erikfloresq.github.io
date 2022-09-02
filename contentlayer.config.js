import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";

const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx/, ""),
  },
  wordCount: {
    type: "number",
    resolve: (doc) => doc.body.raw.split(/\\s+/gu).length,
  },
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
};

const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    summary: { type: "string" },
    banner: { type: "string" },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "articles",
  documentTypes: [Article],
});