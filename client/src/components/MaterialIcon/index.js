import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { green } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';
import { orange } from '@material-ui/core/colors';
import { purple } from '@material-ui/core/colors';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import CakeIcon from '@material-ui/icons/Cake';
import AttachmentIcon from '@material-ui/icons/Attachment';
import EventIcon from '@material-ui/icons/Event';

export const MaterialIcon = ({ icon }) => {
  switch (icon) {
    case 'home': return <HomeIcon style={{ color: green[500] }} />;
    case 'colaborador': return <SupervisorAccountIcon style={{ color: blue[500] }}/>;
    case 'aniversario': return <CakeIcon color="secondary"/>;
    case 'codigo': return <ImportContactsIcon color="action"/>;
    case 'link': return <AttachmentIcon style={{ color: orange[500] }}/>;
    case 'evento': return <EventIcon style={{ color: purple[500] }}/>;  
    default: return null
  }

}