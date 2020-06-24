import React, { memo } from 'react';
import List from '@material-ui/core/List';
import MenuUtil from '../../utils/menuUtils'
import ListItemLink from '../../components/ListItemLink';


function ListCustom() {


  return (
    <List>
      {MenuUtil.getLeftMenu().map((link, index) => (
        <ListItemLink key={index} primary={link.label} to={link.href} icon={link.icon} index={index} />
      ))}
    </List>
  )

}

export default memo(ListCustom);

