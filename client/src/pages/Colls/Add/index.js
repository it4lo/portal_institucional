import React, { useState, useEffect } from 'react';
import { Root, getContent } from '@mui-treasury/layout';
import styled from "styled-components";
import Header from '../../../components/Header';
import AddCollaborator from '../../../components/Collaborator/Add';
import DrawerSidebar from '../../../components/DrawerSidebar';
import CssBaseline from "@material-ui/core/CssBaseline";
import * as Management from '../../../models/Management';
import * as Position from '../../../models/Position';

export default function Add(props) {

  const [managements, setManagements] = useState([]);
  const [positions, setPositions] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      const mList = await Management.find();
      setManagements(mList.map(data => data.name));

      const pList = await Position.find();
      setPositions(pList.map(data => data.name));
    }
    fetchData();

  }, []);

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
            <AddCollaborator managements={managements} positions={positions}></AddCollaborator>
          </Content>
        </>
      )}
    </Root>


  );
}