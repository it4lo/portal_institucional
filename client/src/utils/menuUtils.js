//import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';


export default class MenuUtil {

  static getLeftMenu() {
    return [{ label: 'Home', href: '/', icon: 'home' },
    { label: 'Colaboradores', href: '/collaborator', icon: 'colaborador' },
    { label: 'Aniversariantes', href: '/birthdays', icon: 'aniversario' },
    { label: 'Código de condulta', href: '/codeofconduct', icon: 'codigo' },
    { label: 'Voluntários', href: '/voluntary', icon: 'colaborador' },
    { label: 'Links', href: '/birthdays', icon: 'link' },
    { label: 'Eventos', href: '/birthdays', icon: 'evento' }];
  }

  static getTitle() {
    return "Fundação Amazonas Sustentável";
  }

  static getMenuRender(anchorEl, menuId, isMenuOpen, handleMenuClose, ref) {
    return (
      <Menu 
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        {/* <MenuItem  onClick = {() => {appFB.auth().signOut()}}>Log out</MenuItem> */}
      </Menu>
    );;
  }

  static getMenuRenderMobile(mobileMoreAnchorEl, mobileMenuId, isMobileMenuOpen, handleMobileMenuClose, handleProfileMenuOpen) {
    return (
      <Menu 
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Perfil</p>
      </MenuItem>
    </Menu>
    );;
  }

}