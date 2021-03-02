import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import facebook from "../Image/facebook.svg";
import linkedin from "../Image/linkedin.svg";
import instagram from "../Image/instagram.svg";
import whatsapp from "../Image/whatsapp.svg";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="primary" href="https://instagram.com/ari_darsan">
        @ari_darsan
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(4, 0),
    backgroundColor: "#ffffff",
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer id="footer" className={classes.footer} data-aos="zoom-in">
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
          
        >
          {description}
        </Typography>
        <Copyright />
        <div style={{ paddingTop: "1rem", display: "flex", margin: "auto", justifyContent: "center" }}>
          <Link
            href="https://www.facebook.com/darsan.ari"
            className="social-media"
            target="_blank"
          >
            <img
              style={{ width: "2rem", marginRight: "1rem" }}
              src={facebook}
              alt="facebook"
            />
          </Link>
          <Link
            href="https://linkedin.com/in/aridarsan"
            className="social-media"
            target="_blank"
          >
            <img
              style={{ width: "2rem", marginRight: "1rem" }}
              src={linkedin}
              alt="linkedin"
            />
          </Link>
          <Link
            href="https://instagram.com/ari_darsan"
            className="social-media"
            target="_blank"
          >
            <img
              style={{ width: "2rem", marginRight: "1rem" }}
              src={instagram}
              alt="instagram"
            />
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=6281222288153"
            className="social-media"
            target="_blank"
          >
            <img
              style={{ width: "2rem", marginRight: "1rem" }}
              src={whatsapp}
              alt="google"
            />
          </Link>
        </div>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
