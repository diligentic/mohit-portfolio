import React from 'react';
import { Heading, Box } from 'rebass/styled-components';
import { Link } from "gatsby";
import Layout from '../components/Layout';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import { HOMEPAGE_URL } from '../utils/constants';

const NotFoundPage = () => (
  <Layout>
    <Section.Container id="404" Background={Background}>
      <Box width={[320, 400, 600]} m="auto">
        <Heading color="text" fontSize={['2rem', '4rem', '6rem']} as="h1">
          404
        </Heading>
        <Heading color="secondary" fontSize={['1rem', '2rem', '3rem']} as="h2">
          There isn&apos;t anything here
        </Heading>
        <Heading fontSize={["1rem"]} as="h3" style={{marginTop: "1rem"}}>
          <Link to={HOMEPAGE_URL} className="go-to-home">Go To Home</Link>
        </Heading>
      </Box>
    </Section.Container>
  </Layout>
);

const Background = () => (
  <>
    <Triangle
      color="muted"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="primary"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      position="bottom-right"
    />

    <Triangle
      color="secondary"
      height={['10vh', '20vh']}
      width={['50vw', '50vw']}
      position="top-right"
    />
  </>
);

export default NotFoundPage;
