import React, { useEffect, useState } from 'react';
import AddCollaborator from '../../../components/Collaborator/Add';
import * as Management from '../../../models/Management';
import * as Position from '../../../models/Position';

export default function PageAddCollaborator() {


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

  return (
    <AddCollaborator managements={managements} positions={positions} />
  );
}