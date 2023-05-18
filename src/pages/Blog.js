import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import styles from "../styles/blogStyles.module.css";



export default function Blog({ data }) {
  const [search, setSearch] = useState("");
  const posts = data.allMdx.edges;

  const filteredPosts = posts.filter(post =>
    post.node.frontmatter.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div className={styles.searchWrapper}>
        <div className={styles.searchBarContainer}>
          <input
            className={styles.noBoxShadow}
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search posts"
          />
        </div>
      </div>
      <div className={styles.container}>
        {filteredPosts.map(({ node }) => (
          <div key={node.id} className={styles.postItem}>
            <Link to={node.fields.slug} className={styles.postLink}>
              <h2 className={styles.postTitle}>{node.frontmatter.title}</h2>
              <p className={styles.postDate}>{node.frontmatter.date}</p>
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
