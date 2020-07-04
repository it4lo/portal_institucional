import React from 'react';
import styled from "styled-components";

import {
  getDrawerSidebar,
  getCollapseBtn,
  getSidebarContent
} from "@mui-treasury/layout";

import {
  NavHeaderMockUp,
  NavContentMockUp,
} from '../Layout';


const Drawer = (props) => {

  const DrawerSidebar = getDrawerSidebar(styled);
  const CollapseBtn = getCollapseBtn(styled);
  const SidebarContent = getSidebarContent(styled);

  return (
    <DrawerSidebar sidebarId="unique_id">
      <CollapseBtn />
      <SidebarContent>
        <NavHeaderMockUp collapsed={props.sidebar.unique_id.collapsed} username={"Ítalo Almeida"} />
        <NavContentMockUp />
      </SidebarContent>
    </DrawerSidebar>
  )

}

export default Drawer;