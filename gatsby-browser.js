import React from "react";
import { Link } from "gatsby";

const Home = () => (
  <div>
    <h1>Home</h1>
    <p>This is the home page.</p>
    <Link to="/blog">Go to the blog</Link>
  </div>
);

const Blog = () => (
  <div>
    <h1>Blog</h1>
    <ul>
      {/* This is where the blog posts will be displayed */}
    </ul>
  </div>
);

const BlogPost = ({ data }) => (
  <div>
    <h2>{data.mdx.title}</h2>
    <p>{data.mdx.content}</p>
  </div>
);

export const onClientEntry = (_, pluginOptions) => {
  const { osanoKey, segmentKey } = pluginOptions;
  const segmentSnippet = `!function(){var analytics=window.analytics=window.analytics||[]
  analytics.load("https://js.segment.com/analytics.js", {
    appId: "${segmentKey}",
    integrations: ["osano"],
  });
  analytics.page();
  analytics.identify({
    traits: {
      osano_consent: "${osanoKey}",
    },
  });
}();`;

  const script = document.createElement("script");
  script.src = "https://cdn.segment.com/analytics.js/v1/analytics.min.js";
  script.onload = () => {
    window.analytics.load("https://js.segment.com/analytics.js", {
      appId: "${segmentKey}",
      integrations: ["osano"],
    });
    window.analytics.page();
    window.analytics.identify({
      traits: {
        osano_consent: "${osanoKey}",
      },
    });
  };
  document.head.appendChild(script);

  const query = graphql`
    query {
      mdx(slug: { eq: $slug }) {
        id
        title
        content
      }
    }
  `;

  const data = useQuery(query);

  if (data.data.mdx.id) {
    const blogPost = data.data.mdx;

    return (
      <div>
        <h1>{blogPost.title}</h1>
        <p>{blogPost.content}</p>
      </div>
    );
  }

  return null;
};

export default {
  Home,
  Blog,
  BlogPost,
};
