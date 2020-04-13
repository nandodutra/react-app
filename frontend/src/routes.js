import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { Home, About, People, Registration, HealthPlace } from './components';


const routes = [{
    name: 'Home',
    path: '/',
    icon: () => (<HomeIcon />),
    Component: Home,
}, {
    name: 'About',
    path: '/about',
    icon: () => (<InfoIcon />),
    Component: About
},  {
    name: 'Cadastros',
    path: '/registration',
    icon: () => null,
    Component: Registration
}, {
    name: 'Pessoas',
    path: '/registration/people',
    icon: () => (<PeopleIcon />),
    Component: People
}, {
    name: 'Estabelecimentos de saúde',
    path: '/registration/health-place',
    icon: () => (<LocalHospitalIcon />),
    Component: HealthPlace
}]

export default routes;