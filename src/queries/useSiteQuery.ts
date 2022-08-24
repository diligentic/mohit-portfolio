import { graphql, useStaticQuery } from 'gatsby';
import { Landing, SocialLink } from '../types';

type QueryResponse = {
  contentfulAboutMohit: {
    name: string;
    roles: string[];
    socialLinks: SocialLink[];
  };
  site: {
    siteMetadata: {
      deterministic: boolean;
    };
  };
};

export const useSiteQuery = (): Landing & { deterministic: boolean } => {
  const { contentfulAboutMohit, site } = useStaticQuery<QueryResponse>(graphql`
    query SiteQuery {
      contentfulAboutMohit {
        name
        roles
        socialLinks {
          url
          name
          icon: fontAwesomeIcon
        }
      }
      site {
        siteMetadata {
          deterministic
        }
      }
    }
  `);

  return { ...contentfulAboutMohit, ...site.siteMetadata };
};
