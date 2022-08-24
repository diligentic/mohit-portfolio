import { graphql, useStaticQuery } from 'gatsby';
import { AboutMe } from '../types';

export type QueryResponse = {
  contentfulAboutMohit: {
    aboutMe: {
      childMarkdownRemark: {
        rawMarkdownBody: string;
      };
    };
    profile: {
      title: string;
      image: {
        src: string;
      };
    };
  };
};

export const useAboutMeQuery = (): AboutMe => {
  const {
    contentfulAboutMohit: { aboutMe, profile },
  } = useStaticQuery<QueryResponse>(graphql`
    query AboutMeQuery {
      contentfulAboutMohit {
        aboutMe {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
        profile {
          title
          image: resize(width: 450, quality: 100) {
            src
          }
        }
      }
    }
  `);

  return {
    markdown: aboutMe.childMarkdownRemark.rawMarkdownBody,
    profile: {
      alt: profile.title,
      src: profile.image.src,
    },
  };
};
