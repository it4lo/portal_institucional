import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuUtil from '../../utils/menuUtils'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import CardCss from './CardCss'
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ListCustomMenu from '../ListCustomMenu';

import { useHistory } from 'react-router-dom';




/* import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications'; 
import MailIcon from '@material-ui/icons/Mail';
*/


import { useStyles } from '../../style'

export default function ListCollarator() {

  //const { currentUser } = useContext(AuthContext);

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [collaborators, setCollaborators] = useState([]);
  const [colls, setColls] = useState([]);
  

  const [textSerch, setTextSearch] = useState("");
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const history = useHistory();


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



  const menuId = 'primary-search-account-menu';
  const renderMenu = MenuUtil.getMenuRender(anchorEl, menuId, isMenuOpen, handleMenuClose);

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = MenuUtil.getMenuRenderMobile(mobileMoreAnchorEl, mobileMenuId,
    isMobileMenuOpen, handleMobileMenuClose, handleProfileMenuOpen);



  useEffect(() => {
    let values = [{}];
    const fetchData = async () => {
      /* const data = await onGetColls();
      values = (data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      setCollaborators(values);
      setColls(values); */
    };
    fetchData();

  }, []);

  const handleSearch = event => {
    setTextSearch(event.target.value);
  };

   useEffect(() => {

    if (textSerch !== "") {
      setCollaborators(colls.filter(coll => 
        coll.nomeCompleto.toLowerCase().includes(textSerch.toLowerCase())));
    } else {
      setCollaborators(colls);
    }

  }, [colls, textSerch]); 

  return (

    <div className={classes.root}>
      <CssBaseline />
      <div>
        <AppBar style={{ background: '#30383c' }}
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Fundação Amazonas Sustentável
          </Typography>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>

              <InputBase
                value={textSerch}
                onChange={handleSearch}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}

              />
            </div>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {/* <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton  aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton> */}
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit">
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        {/* <List>
          {MenuUtil.getLeftMenu().map((link, index) => (
            <ListItemLink key={index} primary={link.label} to={link.href} icon={link.icon} index={index} />
          ))}
        </List> */}
        <ListCustomMenu/>
        <Divider />

      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        <Grid container className={classes.root} spacing={4}>

          {collaborators.map(col => (
            <CardCss key={col.id}
              collaborator={col} />
          ))}

        </Grid>

        <Fab style={{ position: "fixed", right: 35, bottom: 25 }} color="secondary" aria-label="add">
          <AddIcon onClick={(e) => {history.push('/collaborator/add')}} />
        </Fab>

      </main>
    </div>

  );
}