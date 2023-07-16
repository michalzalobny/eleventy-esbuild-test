const { client } = require("../prismic/client");

module.exports = async function () {
  const caseStudies = await client.getAllByType("case-studies");

  const posts = caseStudies.map((caseStudy) => ({
    title: caseStudy.data.title[0].text,
    url: caseStudy.uid,
  }));

  return posts;
};
