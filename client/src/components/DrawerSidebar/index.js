import React from 'react';
import styled from "styled-components";

import {
  getDrawerSidebar,
  getCollapseBtn,
  getSidebarContent
} from "@mui-treasury/layout";

import {
  NavContentMockUp,
} from '../Layout';

import {
  NavHeader,
} from '../Layout2';


const Drawer = (props) => {

  const DrawerSidebar = getDrawerSidebar(styled);
  const CollapseBtn = getCollapseBtn(styled);
  const SidebarContent = getSidebarContent(styled);

  return (
    <DrawerSidebar sidebarId="unique_id">
      <CollapseBtn />
      <SidebarContent>
        <NavHeader />
        <NavContentMockUp />
      </SidebarContent>
    </DrawerSidebar>
  )

}

export default Drawer;