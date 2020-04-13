import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

import Badge from '@material-ui/core/Badge';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';

import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
//import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import './App.css';
import useStyles from './style';
import { Home, About } from './components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Breadcrumbs from './breadcrumbs';
import routes from './routes';

import { addAction, changeDescription, addAppNotification } from './AppActions';

const mapStateToProps = state => ({
  appNotifications: state.appNotifications,
  list: state.list, 
  description: state.description
});

const mapDispatchToProps = { addAction, changeDescription, addAppNotification };

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <Link ref={ref} to={to} {...linkProps} />
      )),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

const App = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen =  () => { setOpen(true) }
  const handleDrawerClose = () => { setOpen(false); setOpenSubMenu(false); };


  const [openSubMenu, setOpenSubMenu] = React.useState(false);

  const handleClick = () => {
    setOpenSubMenu(!openSubMenu);
  };


  return (
    <Router>
    <div className={classes.root}>
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <CssBaseline />
        <Toolbar className={classes.too}>
        <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>

          <Switch>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} exact><Typography className={classes.pageTitle}>{route.name}</Typography></Route>
            ))}
          </Switch>
          
          <IconButton color="inherit">
            <Badge badgeContent={props.appNotifications.length} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItemLink to="/" primary="Home" icon={<HomeIcon />} />
          <ListItemLink to="/about" primary="About" icon={<InfoIcon />} />

          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Cadastros" />
            {openSubMenu ? <ExpandLess /> : <ExpandMore />}
          </ListItem>


          <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding className={classes.nested}>
              <ListItemLink  to="/registration/people" primary="Pessoas" icon={<PeopleIcon />} />
              <ListItemLink  to="/registration/health-place" primary="Estabelecimentos" icon={<LocalHospitalIcon />} />
            </List>
          </Collapse>
          
        </List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Switch>
            {routes.map(({ path, Component }, key) => (
              <Route exact path={path} key={key} render={props => {
                const crumbs = routes
                  .filter(({ path }) => props.match.path.includes(path))
                  .map(({ path, ...rest }) => ({
                    path: Object.keys(props.match.params).length
                      ? Object.keys(props.match.params).reduce(
                         (path, param) => path.replace(
                           `:${param}`, props.match.params[param]
                         ), path
                        )
                      : path,
                    ...rest
                  }));
                  
                return (
                  <div>
                    <Breadcrumbs crumbs={crumbs} />
                    
                      <Component {...props} />
                    
                  </div>
                );
              }} />
            ))}
          </Switch>
        </Container>
      </main>

      {/* <header className="App-header">
        <input id="description" type="text" value={props.description} onChange={props.changeDescription} /> <button onClick={() => props.addAction(props.description) }>Adicionar</button>
        <ul>
          {
            props.list.map((text, key) => <li key={key}>{text}</li>)
          }
        </ul>
      </header> */}
    </div>
    </Router>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
