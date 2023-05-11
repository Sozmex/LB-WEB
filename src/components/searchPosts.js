
import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { useFlexSearch } from "react-use-flexsearch";
import * as queryString from "query-string";
import * as blogStyles from "../styles/blogStyles.module.css";
import { rhythm } from "../utils/typography";

const SearchInput = styled.input`
  display: flex;
  flex: 1;
  height: 100%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  padding-right: 0.5rem;
  color: rgb(55, 53, 47);
  word-wrap: break-word;
  outline: none;
`;

const SearchedPosts = ({ results }) =>
  results.length > 0 ? (
    results.map(node => {
      const date = node.date;
      const title = node.title || node.slug;
      const description = node.description;
      const excerpt = node.excerpt;
      const slug = node.slug;

      return (
        <div key={slug} className={blogStyles.postItem}>
          <h3 className={blogStyles.postTitle}>
            <Link className={blogStyles.postLink} to={`/blog${slug}`}>
              {title}
            </Link>
          </h3>
          <small className={blogStyles.postDate}>{date}</small>
          <p
            className={blogStyles.postDescription}
            dangerouslySetInnerHTML={{
              __html: description || excerpt,
            }}
          />
        </div>
      );
    })
  ) : (
    <p style={{ textAlign: "center" }}>
      Sorry, couldn't find any posts matching this search.
    </p>
  );

  const AllPosts = ({ posts }) => (
    <div className={blogStyles.container}>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <div key={node.fields.slug} className={blogStyles.postItem}>
            <h3 className={blogStyles.postTitle}>
              <Link className={blogStyles.postLink} to={`/blog${node.fields.slug}`}>
                {title}
              </Link>
            </h3>
            <small className={blogStyles.postDate}>{node.frontmatter.date}</small>
            <p
              className={blogStyles.postDescription}
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </div>
        );
      })}
    </div>
  );

const isJSON = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

const SearchPosts = ({ posts, localSearchBlog, location, navigate }) => {
  const { search } = queryString.parse(location.search);
  const [query, setQuery] = useState(search || "");

  const results = localSearchBlog && isJSON(localSearchBlog.store)
    ? useFlexSearch(
        query,
        localSearchBlog.index,
        JSON.parse(localSearchBlog.store)
      )
    : [];

  return (
    <>
      <div style={{ marginTop: "20px" }} className={blogStyles.searchWrapper}>
        <div className={blogStyles.searchBarContainer}>
          <svg
            className={blogStyles.searchIcon}
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            >
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
            <SearchInput
              id="search"
              type="search"
              placeholder="Search all posts"
              value={query}
              onChange={e => {
                navigate(
                  e.target.value ? `/blog/?search=${e.target.value}` : "/blog/"
                );
                setQuery(e.target.value);
              }}
            />
          </div>
        </div>
        {query ? (
          <SearchedPosts results={results} />
        ) : (
          <AllPosts posts={posts} />
        )}
      </>
    );
  };
  
  export default SearchPosts;
  
