import React from 'react';
import styled from 'styled-components';
import SideNavItem from './SideNavItem';

import Logo from '../Logo';

const SVG = (
  <svg width="32" height="32" viewBox="0 0 32 32">
    <path
      d="M21.4497475,16 L26.7530483,21.3033009 L21.8033009,26.2530483 L16.5,20.9497475 L11.1966991,26.2530483 L6.24695167,21.3033009 L11.5502525,16 L6.24695167,10.6966991 L11.1966991,5.74695167 L16.5,11.0502525 L21.8033009,5.74695167 L26.7530483,10.6966991 L21.4497475,16 Z"
      id="Combined-Shape"
      fill="#FCFFFD"
    />
  </svg>
);

const FlyoutDiv = styled.div`
  background-color: var(--link);
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vh;
  height: 100vh;
  padding: 1rem;
`;

const closerStyle = {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
};

function Flyout(props) {
  return (
    <FlyoutDiv className="flyout">
      <Logo color="white" />
      {props.menuJSON.results.map(res => (
        <SideNavItem
          key={res.id}
          section={res.section}
          subsections={res.subsections}
        />
      ))}

      <div className="close" style={closerStyle}>
        <a href="#0" onClick={() => props.setVis()}>
          {SVG}
        </a>
      </div>
    </FlyoutDiv>
  );
}

export default Flyout;
