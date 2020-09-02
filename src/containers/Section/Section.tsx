import React from 'react';

interface Props {
  title?: string;
  isSecondary?: boolean;
  [index: string]: any;
}

const Section: React.FC<Props> = ({
  title,
  children,
  isSecondary = false,
  ...props
}) => (
  <div
    className={isSecondary ? 'secondary-section' : 'primary-section'}
    {...props}
  >
    {title && <h2 className="section-title">{title}</h2>}
    <section>{children}</section>
  </div>
);

export default Section;
