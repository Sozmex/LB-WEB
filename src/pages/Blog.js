/* Blog.js */
import React from "react";
import { graphql } from "gatsby";

import Layoutblog from "../components/layoutblog";
import SearchPosts from "../components/searchPosts";
import Hero from "../components/heroblog";

class blog extends React.Component {
  render() {
    const { data, navigate, location } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMdx.edges;
    const localSearchBlog = data.localSearchBlog;

    return (
      <Layoutblog location={this.props.location} title={siteTitle} navigate={navigate}>
        <SEO title="All posts" />
        <Hero></Hero>
        <SearchPosts
          posts={posts}
          localSearchBlog={localSearchBlog}
          navigate={navigate}
          location={location}
        />
      </Layoutblog>
    );
  }
}

export default blog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchBlog {
      index
      store
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
