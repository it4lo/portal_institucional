import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import ListItemLink from '../../components/ListItemLink'
import MenuUtil from '../../utils/menuUtils'
import { useStyles } from './style';

import {
  NavHeaderMockUp
} from '../Layout';

export default function DrawerCustom(props) {

  const { open, handleDrawer } = props;

  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}

    >
      <div className={classes.drawerHeader}>
        <NavHeaderMockUp username={"Ítalo Almeida"}></NavHeaderMockUp>
        <IconButton onClick={handleDrawer}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {MenuUtil.getLeftMenu().map((link, index) => (
          <ListItemLink key={index} primary={link.label} to={link.href} icon={link.icon} index={index} />
        ))}
      </List>
      <Divider />
      
    </Drawer>

  )

}