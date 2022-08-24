import React from 'react';
import styled from 'styled-components';
import { Skill as SkillType } from '../types';
import { Card as CardRebass } from 'rebass/styled-components';

const Skill = ({ name, logo }: SkillType) => (
  <Card>
    <Img src={logo} alt={name} height="60" width="80" />
    <p>{name}</p>
  </Card>
);

const Img = styled.img`
  margin-top: 16px;
`;

const Card = styled(CardRebass).attrs({
  bg: 'white',
  boxShadow: 0,
})`
  position: relative;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.25s;
  top: 0;
  height: 100%;
  border-radius: 8px;
  text-align: center;

  &:hover {
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
`;

export default Skill;
