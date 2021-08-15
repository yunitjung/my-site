/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

function SEO({ description, lang, meta, title }) {
  const metaDescription = description;
  const defaultTitle = title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keyword`,
          content: `portfolio, javascript, typescript, react, laravel, full-stack developer, web developer, developer, MySQL, GraphQL`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `@tjungyuni`,
        },
        {
          name: `twitter:title`,
          content: `yunitjung's portfolio 👋`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: `https://pbs.twimg.com/profile_images/1209004837066571777/Yl--KN9r_400x400.jpg`,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
