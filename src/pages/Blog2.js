import React from "react";
import { graphql } from "gatsby";

import Bio from "../components/bio";
import Layoutblog from "../components/layoutblog";
import SEO from "../components/seo";
import Button from "../components/button";
import SearchPosts from "../components/searchPosts";

class Blog2 extends React.Component {
  render() {
    const { data, navigate, location } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMdx.edges;
    const localSearchBlog = data.localSearchBlog;

    return (
      <Layoutblog location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
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

export default Blog2;

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