import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    '&:visited': {
      color: '#3f51b5'
    },
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}));

export default ({ crumbs }) => {
  const classes = useStyles();
  // Don't render a single breadcrumb.
  if (crumbs && crumbs.length <= 1) {
    return null;
  }
  return (
    <Breadcrumbs aria-label="breadcrumb">
        {crumbs.map(({ name, path }, key) =>
        key + 1 === crumbs.length ? (
          <span key={key}>
            {name}
          </span>
        ) : (
          <Link key={key} to={path}>
            {name}
          </Link>
        )
      )}
  </Breadcrumbs>
  );
}