import React from 'react';

import { ProjectStyled, BriefView, DetailedView, Image } from './styles';

interface Props {
  name: string;
  image: string;
  link: string;
}

const Project: React.FC<Props> = ({ name, image, link, children }) => (
  <ProjectStyled
    href={link}
    target="_blank"
    rel="external noopener noreferrer"
    title={name}
  >
    <Image image={image} />
    <BriefView>
      <h2>{name}</h2>
    </BriefView>
    <DetailedView>
      <p>{children}</p>
    </DetailedView>
  </ProjectStyled>
);

export default Project;
