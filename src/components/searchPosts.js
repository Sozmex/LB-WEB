import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { useFlexSearch } from "react-use-flexsearch";
import * as blogStyles from "../styles/blogStyles.module.css";

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

const SearchPosts = ({ posts, navigate }) => {
  const params = new URLSearchParams(location.search);
  const search = params.get('search'); // changed this line
  const [query, setQuery] = useState(search || "");

  const results = useFlexSearch(
    query,
    localSearchBlog.index,
    JSON.parse(localSearchBlog.store)
  );
  return (
    <>
      {query ? (
        <SearchedPosts results={results} />
      ) : (
        <AllPosts posts={posts} />
      )}
    </>
  );
};

export default SearchPosts;
