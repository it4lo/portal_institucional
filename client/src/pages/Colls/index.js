import React from 'react';
import { Root, getContent } from '@mui-treasury/layout';
import styled from "styled-components";
import Header from '../../components/Header';
import Collaborator from '../../components/Collaborator';
import DrawerSidebar from '../../components/DrawerSidebar';
import CssBaseline from "@material-ui/core/CssBaseline";

export default function Coll(props) {

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
            <Collaborator></Collaborator>
          </Content>
        </>
      )}
    </Root>


  );
}