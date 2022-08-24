import React, { useState, useEffect } from 'react';
import { Heading, Flex, Box, Text } from 'rebass/styled-components';
import TextLoop from 'react-text-loop';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import { useScrollSection } from 'react-scroll-section';
import MouseIcon from '../components/ScrollIcon';
import Triangle from '../components/Triangle';
import { useSiteQuery } from '../queries/useSiteQuery';

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const LandingPage = () => {
  const { name, roles, socialLinks, deterministic } = useSiteQuery();
  const aboutSection = useScrollSection('about');
  const [largeWindowWidth, setLargeWindowWidth] = useState(true);

  useEffect(() => {
    if (window) {
      if (window.innerWidth < 495) {
        setLargeWindowWidth(false);
      }
    }
  }, []);

  return (
    <Section.Container id="home" Background={Background}>
      <Heading
        textAlign="center"
        as="h1"
        color="primary"
        fontSize={[6, 7]}
        mb={[3, 4, 5]}
      >
        {`Hello, I'm ${name}!`}
      </Heading>

      <Heading
        as="h2"
        color="primary"
        fontSize={[5, 6]}
        mb={[3, 5]}
        textAlign="center"
        style={centerHorizontally}
      >
        <TextLoop
          interval={1500}
          adjustingSpeed={200}
          className="text-loop-animation"
        >
          {roles
            .sort(() => (deterministic ? 1 : Math.random() - 0.5))
            .map((text) => (
              <Text
                width={[300, 400]}
                key={text}
                className="text-loop-animation"
                style={{
                  marginLeft:
                    text.length > 20 && largeWindowWidth ? -80 : 'auto',
                }}
              >
                {text}
              </Text>
            ))}
        </TextLoop>
      </Heading>

      <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
        {socialLinks.map((sl) => (
          <Box mx={3} fontSize={[5, 6, 6]} key={sl.name}>
            <SocialLink {...sl} />
          </Box>
        ))}
      </Flex>

      <MouseIcon onClick={aboutSection.onClick} />
    </Section.Container>
  );
};

const Background = () => (
  <>
    <Triangle
      color="muted"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primary"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      position="top-right"
    />

    <Triangle
      color="muted"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      position="bottom-right"
    />
  </>
);

export default LandingPage;
