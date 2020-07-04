import React from 'react';
import Home2 from '../../components/Home2';

import { Root, getContent } from '@mui-treasury/layout';
import styled from "styled-components";
import Header from '../../components/Header';
import DrawerSidebar from '../../components/DrawerSidebar';
import CssBaseline from "@material-ui/core/CssBaseline";

export default function PageHome(props) {

  const Content = getContent(styled);

  return (
    <Root scheme={props.scheme}>
      {({ state: { sidebar } }) => (
        <>
          <CssBaseline />
          <Header>
          </Header>
          <DrawerSidebar sidebar={sidebar}>
          </DrawerSidebar>
          <Content>
            <Home2></Home2>
          </Content>
        </>
      )}
    </Root>


  );
}