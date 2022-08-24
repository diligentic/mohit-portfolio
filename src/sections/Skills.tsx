import React from 'react';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import Skill from '../components/Skill';
import styled from 'styled-components';
import { SkillsData } from '../utils/constants';

type CardContainerProps = {
  minWidth: string;
};

const Skills = () => {
  return (
    <Section.Container id="skills" Background={Background}>
      <Section.Header name="Skills" icon="💻" label="notebook" />
      <div className="card-container">
        <CardContainer minWidth="125px">
          {SkillsData.map((skill, index) => (
            <Skill logo={skill.logo} name={skill.name} key={index} />
          ))}
        </CardContainer>
      </div>
    </Section.Container>
  );
};

const CardContainer = styled.div<CardContainerProps>`
  display: grid;
  grid-gap: 30px;
  cursor: pointer;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${({ minWidth }) => minWidth}, 1fr)
  );
  justify-items: center;

  @media only screen and (max-width: 450px) {
    margin: auto;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(125px, 125px));
  }
`;

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

    <Triangle
      color="muted"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      position="bottom-right"
    />
  </>
);

export default Skills;
