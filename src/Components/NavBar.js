import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: "darkgrey",
  },
  toolbarTitle: {
    flex: 1,
    color: "#1cbfff",
    backgroundColor: "ffffff",
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowY: "auto",
    // boxShadow: "0 6px 20px rgb(17 26 104 / 20%)",
    zIndex: "1300",
    color: "#333333",
    padding: 0,
  },
  toolbarLink: {
    // padding: theme.spacing(2),
    flexShrink: 0,
    color: "#333333",
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  const { sections } = props;

  return (
    <React.Fragment>
      <AppBar position="fixed" color="#ffffff" data-aos="zoom-in-down">
        {/* <Toolbar
          component="nav"
          variant="dense"
          className={classes.toolbarSecondary}
          id="navbar"
        > */}
        <Container maxWidth="lg">
          <Toolbar
            component="nav"
            variant="dense"
            className={classes.toolbarSecondary}
            id="navbar"
          >
            <Typography
              component="subtitle1"
              variant="body2"
              className={classes.toolbarTitle}
            >
              <Link href="#home" noWrap className="nav-left">
                Skripsi Ari Darsan
              </Link>
            </Typography>
            {sections.map((section) => (
              <Link
                color="inherit"
                noWrap
                key={section.title}
                variant="body2"
                href={section.url}
                className="toolbar"
              >
                {section.title}
              </Link>
            ))}
          </Toolbar>
        </Container>
        {/* </Toolbar> */}
      </AppBar>
    </React.Fragment>
  );
}

NavBar.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
