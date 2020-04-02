import React from "react";
import Helmet from "react-helmet";
import me from "assets/images/me.jpg";

const SEO = ({
  description,
  lang,
  meta,
  title,
  url,
  image,
  keywords,
  excerpt,
  slug,
  type,
  robots,
  site,
}) => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${site}`}
        meta={[
          {
            name: "description",
            content: description,
          },
          {
            name: "keywords",
            content: keywords,
          },
          {
            name: "robots",
            content: robots,
          },
          {
            property: "og:url",
            content: slug ? `${url}/${slug}` : url,
          },
          {
            property: "og:title",
            content: title,
          },
          {
            property: "og:description",
            content: description,
          },
          {
            property: "og:type",
            content: type || "website",
          },
          {
            property: "og:image",
            content: image || me,
          },
          {
            property: "og:image:width",
            content: 900,
          },
          {
            property: "og:image:height",
            content: 600,
          },
          {
            property: "og:image:type",
            content: "image/jpg",
          },
        ].concat(meta)}
      />
      <Helmet>
        <link rel="canonical" href={url} />
      </Helmet>
    </>
  );
};

SEO.defaultProps = {
  lang: "en",
  meta: [],
  site: "Issues roster",
  description: "This is a technical challenge",
  url: "https://issues-roster.netlify.com/",
  robots: "index, follow",
  keywords:
    "react, @reach/router, @reach/dialog, react-svg, @emotion/core, @emotion/styled, styled-map, react-helmet, lodash, polished, hooks, jest, cypress, micro interactions, react-particles-js, react-rewards, functional programming",
};

export default SEO;
