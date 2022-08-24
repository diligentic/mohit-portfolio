import React, { useRef, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import Section from '../components/Section';
import { CardContainer } from '../components/Card';
import Triangle from '../components/Triangle';
import Project from '../components/Project';
import { useProjectsQuery } from '../queries/useProjectsQuery';
import Modal from '../components/Modal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SocialLink from '../components/SocialLink';
import { useFlags } from 'gatsby-plugin-launchdarkly';

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
};

interface ModalRef {
  openModal: () => void;
}

interface File {
  url: string;
}

interface Image {
  file: File;
}

interface LongDescription {
  longDescription: string;
}

interface ClickedProject {
  name: string;
  projectImages: Image[];
  repository: string;
  appStoreUrl: string;
  playStoreUrl: string;
  npmUrl: string;
  homePageUrl: string;
  technologies: string[];
  longDescription: LongDescription;
}

const Projects = () => {
  const [clickedProject, setClickedProject] = useState<
    ClickedProject | Record<string, never>
  >({});
  const projects = useProjectsQuery();
  const modalRef1 = useRef<ModalRef>();
  const flags = useFlags();

  const handleProjectClick = (project: any) => {
    setClickedProject(project);
    if (modalRef1 && modalRef1.current) {
      modalRef1.current.openModal();
    }
  };

  return (
    <Section.Container id="projects" Background={Background}>
      <Section.Header name="Projects" icon="💻" label="notebook" />

      <div className="card-container">
        <CardContainer minWidth="350px">
          <Fade direction="down" cascade damping={0.1} triggerOnce>
            {projects.map((p, i) => (
              <Project
                {...p}
                key={i}
                handleProjectClick={() => handleProjectClick(p)}
              />
            ))}
          </Fade>
        </CardContainer>
      </div>
      {flags?.showModal && (
        <section>
          <Modal ref={modalRef1}>
            <div>
              <h2>{clickedProject.name}</h2>
            </div>
            <div className="slider-container">
              <Slider {...settings}>
                {clickedProject.projectImages?.length &&
                  clickedProject?.projectImages.map((image) => (
                    <img src={`https:${image.file.url}`} alt="slkmdf" />
                  ))}
              </Slider>
            </div>
            <div className="links-container">
              {clickedProject?.repository && (
                <SocialLink
                  icon="github"
                  name="Github"
                  url={clickedProject?.repository}
                  invert={false}
                />
              )}
              {clickedProject?.appStoreUrl && (
                <SocialLink
                  icon="app-store"
                  name="App Store"
                  url={clickedProject?.appStoreUrl}
                  invert={false}
                />
              )}
              {clickedProject?.playStoreUrl && (
                <SocialLink
                  icon="google-play"
                  name="Google Play Store"
                  url={clickedProject?.playStoreUrl}
                  invert={false}
                />
              )}
              {clickedProject?.npmUrl && (
                <SocialLink
                  icon="npm"
                  name="NPM"
                  url={clickedProject?.npmUrl}
                  invert={false}
                />
              )}
              {clickedProject?.homePageUrl && (
                <SocialLink
                  icon="globe"
                  name="Homepage"
                  url={clickedProject?.homePageUrl}
                  invert={false}
                />
              )}
            </div>
            {clickedProject?.technologies?.length && (
              <div className="technologies">
                <h3>Technologies</h3>
                {clickedProject?.technologies.map((technology) => (
                  <h4 key={technology}>{technology}</h4>
                ))}
              </div>
            )}

            <div className="description">
              <h3>Description</h3>
              <div
                contentEditable="true"
                dangerouslySetInnerHTML={{
                  __html: clickedProject?.longDescription?.longDescription,
                }}
              ></div>
            </div>
          </Modal>
        </section>
      )}
    </Section.Container>
  );
};

const Background = () => (
  <>
    <Triangle
      color="secondary"
      height={['80vh', '80vh']}
      width={['100vw', '100vw']}
      position="top-right"
    />

    <Triangle
      color="background"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      position="top-right"
    />

    {/* <Triangle
      color="primary"
      height={['25vh', '40vh']}
      width={['75vw', '60vw']}
      position="bottom-right"
    /> */}

    <Triangle
      color="muted"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      position="bottom-right"
    />
  </>
);

export default Projects;
