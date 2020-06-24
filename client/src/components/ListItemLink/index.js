import React, { memo } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { MaterialIcon } from '../MaterialIcon'

import { Link } from 'react-router-dom';

function ListItemLink(props) {


  const { primary, to, icon, index } = props;

  const CustomLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <Link  ref={ref} to={to} {...linkProps} />
      )),
    [to],
  );

  return (
    <li key={index}>
      <ListItem button component={CustomLink}>
        <ListItemIcon><MaterialIcon icon={icon} /></ListItemIcon>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

export default memo(ListItemLink);

