import React from "react";
import styled from "styled-components";

const MenulinkA = styled.a`
  display: inline-block;
  padding: 0.25rem 0;
`;

function SubmenuItem(props) {
  return (
    <li>
      <MenulinkA href={props.link}>{props.link}</MenulinkA>
    </li>
  );
}

export default SubmenuItem;
