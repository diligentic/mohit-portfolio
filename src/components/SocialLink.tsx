import React from 'react';
import { Link } from 'rebass/styled-components';
import Tippy from '@tippy.js/react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialLink as SocialLinkType } from '../types';
import { getIconDefinition } from '../utils/icon-loader';
import {
  faAppStore,
  faGooglePlay,
  faNpm,
} from '@fortawesome/free-brands-svg-icons';

// import { faGlobe } from '@fortawesome/free-solid-svg-icons';

type Props = SocialLinkType & {
  invert?: boolean;
};

const SocialLink = ({ icon, name, url, invert }: Props) => {
  let iconDefinition = getIconDefinition(icon);

  if (!iconDefinition && icon === 'google-play') {
    iconDefinition = faGooglePlay;
  }
  if (!iconDefinition && icon === 'app-store') {
    iconDefinition = faAppStore;
  }
  if (!iconDefinition && icon === 'npm') {
    iconDefinition = faNpm;
  }

  if (!iconDefinition) {
    return null;
  }

  return (
    <Tippy
      content={name}
      placement="bottom"
      trigger="mouseenter focus"
      arrow={false}
    >
      <IconLink
        href={url}
        target="_blank"
        invert={invert}
        rel="noreferrer"
        aria-label={name}
        onClick={(e) => e.stopPropagation()}
      >
        <FontAwesomeIcon icon={iconDefinition} />
      </IconLink>
    </Tippy>
  );
};

const IconLink = styled(Link)<{ invert?: boolean }>`
  transition: color 0.4s;
  color: ${({ theme, invert }) =>
    invert ? theme.colors.background : theme.colors.primary};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default SocialLink;
