import { graphql, useStaticQuery } from 'gatsby';
import { Project } from '../types';

interface LongDescription {
  longDescription: string;
}

export type QueryResponse = {
  contentfulAboutMohit: {
    projects: {
      id: string;
      name: string;
      description: string;
      homepage: string;
      repository: string;
      publishedDate: string;
      type: string;
      shortDescription: string;
      longDescription: LongDescription;
      logo: {
        title: string;
        image: {
          src: string;
        };
      };
    }[];
  };
};

export const useProjectsQuery = (): Project[] => {
  const { contentfulAboutMohit } = useStaticQuery<QueryResponse>(graphql`
    query ProjectsQuery {
      contentfulAboutMohit {
        projects {
          id
          name
          shortDescription
          longDescription {
            longDescription
          }
          technologies
          repository: repositoryUrl
          playStoreUrl
          appStoreUrl
          npmUrl
          homePageUrl
          projectImages {
            file {
              url
            }
          }
          publishedDate(formatString: "YYYY")
          type
          logo {
            title
            image: resize(width: 200, quality: 100) {
              src
            }
          }
        }
      }
    }
  `);

  return contentfulAboutMohit.projects.map(({ logo, ...rest }) => ({
    ...rest,
    logo: {
      alt: logo.title,
      src: logo.image.src,
    },
  }));
};
