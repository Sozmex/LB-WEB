import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

export default function Blog({ data }) {
  const [search, setSearch] = useState("");
  const posts = data.allMdx.edges;

  const filteredPosts = posts.filter(post =>
    post.node.frontmatter.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search posts"
      />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        {filteredPosts.map(({ node }) => (
          <div key={node.id} style={{ width: "30%", margin: "1rem 0" }}>
            <Link to={node.fields.slug}>
              <h2>{node.frontmatter.title}</h2>
              <p>{node.frontmatter.date}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;