import React from 'react';
import styled from "styled-components";
import Toolbar from "@material-ui/core/Toolbar";

import {
  getHeader,
  getSidebarTrigger
} from "@mui-treasury/layout";

import { HeaderMockUp } from '../Layout';

const Header = () => {

  const Header = getHeader(styled);
  const SidebarTrigger = getSidebarTrigger(styled)

  return (
    <Header>
      <Toolbar>
        <SidebarTrigger sidebarId="unique_id" />
        <HeaderMockUp />
      </Toolbar>
    </Header>
  )

}

export default Header;