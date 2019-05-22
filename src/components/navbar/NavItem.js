// loading react and hooks
import React, { useState, useEffect } from "react";
import SubMenu from "./Submenu";
// styled components
import styled from "styled-components";
import { device } from "../styles/device";

const NavitemLi = styled.li`
  &.t-home,
  &.t-barx,
  &.t-commodities,
  &.t-credit,
  &.t-crossasset,
  &.t-economics,
  &.t-emergingmarkets,
  &.t-equities,
  &.t-fx,
  &.t-indices,
  &.t-rates,
  &.t-municipals,
  &.t-primeservices {
    display: none;
  }
  @media ${device.tablet} {
    &.t-home,
    &.t-barx,
    &.t-commodities,
    &.t-credit,
    &.t-crossasset,
    &.t-economics,
    &.t-emergingmarkets,
    &.t-equities,
    &.t-fx, 
    &.t-indices {
      display: block;
      color: greenyellow !important;
    }
  {
    @media ${device.desktop} {
      &.t-home,
      &.t-barx,
      &.t-commodities,
      &.t-credit,
      &.t-crossasset,
      &.t-economics,
      &.t-emergingmarkets,
      &.t-equities,
      &.t-fx,
      &.t-indices,
      &.t-rates,
      &.t-municipals,
      &.t-primeservices {display: block;}
    }
  }
`;

const NavlinkA = styled.a`
  cursor: pointer;
  display: inline-block;
  color: #fff;
  padding: 14px 10px;
  white-space: nowrap;
  text-transform: uppercase;
  font-size: 14px;
  &:hover {
    // text-decoration: underline;
    // font-weight: bold;
  }
`;

const DropdownUl = styled.ul`
  position: absolute;
  background-color: #fff;
  padding: 1rem;
  border: 1px solid var(--link);
  border-top-width: 0px;
  display: flex;
  flex-direction: row;
  // left: calc(50% - 200px);
  &.hidden {
    display: none;
  }
`;

function NavItem(props) {
  let [vis, setVis] = useState(false);

  useEffect(() => {
    console.log(props.section);
  });

  const menuController = event => {
    event.preventDefault();
    console.log("props.section");
  };

  return (
    <NavitemLi
      className={`t-${props.section.replace(" ", "").toLowerCase()}`}
      onMouseEnter={() => setVis((vis = !vis))}
      onMouseLeave={() => setVis((vis = !vis))}
    >
      <NavlinkA onClick={() => menuController}>{props.section}</NavlinkA>
      <DropdownUl className={vis ? "" : "hidden"}>
        {Object.keys(props.subsections).map((subSec, key) => (
          <SubMenu
            key={key}
            subSec={subSec}
            links={props.subsections[subSec]}
          />
        ))}
      </DropdownUl>
    </NavitemLi>
  );
}

export default NavItem;
