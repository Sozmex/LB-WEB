import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";
import SEO from "../components/seo";
import * as blogStyles from "../styles/blogPost.module.css";

const BlogPostTemplate = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
      allMdx {
        edges {
          node {
            id
            excerpt(pruneLength: 160)
            body
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              description
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  // Here we find the post using the slug
  const post = data.allMdx.edges.find(
    edge => edge.node.fields.slug === pageContext.slug
  ).node;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className={blogStyles.container}>
        <h1 className={blogStyles.title}>{post.frontmatter.title}</h1>
        <p className={blogStyles.postDate}>{post.frontmatter.date}</p>
        <MDXRenderer>{post.body}</MDXRenderer>
        <hr />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link
                to={`/blog${previous.fields.slug}`}
                rel="prev"
                className={blogStyles.postItem}
              >
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link
                to={`/blog${next.fields.slug}`}
                rel="next"
                className={blogStyles.postItem}
              >
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;
