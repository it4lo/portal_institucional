import React, { useEffect, useState } from 'react';
import AddCollaborator from '../../../components/Collaborator/Add';



export default function PageAddCollaborator() {


  const [managements, setManagements] = useState([]);
  const [positions, setPositions] = useState([])

  useEffect(() => {
    
    const fetchData = async () => {
      /* const mList = await onGetManagements();
      setManagements((mList.docs.map(doc =>  doc.data().name)));

      const pList = await onGetPositions();
      setPositions((pList.docs.map(doc =>  doc.data().name))); */
    }
    fetchData();

  }, []);

  return (
    <AddCollaborator managements={managements} positions={positions} />
  );
}