import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import image from "../Image/home.png";
import facebook from "../Image/facebook.svg";
import linkedin from "../Image/linkedin.svg";
import instagram from "../Image/instagram.svg";
import whatsapp from "../Image/whatsapp.svg";
import "../Style/LandingPage.css";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    color: "333333",
    marginBottom: theme.spacing(2),
    marginTop: "20%",
    padding: theme.spacing(4, 0),
  },
  mainFeaturedPostContent: {
    position: "relative",
    marginTop: "25%",
    marginBottom: theme.spacing(2),
    padding: theme.spacing(4, 0),
  },
  img: {
    width: "110%",
  },
}));

export default function LandingPage(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid container id="home">
      <Grid item md={6}>
        <div className={classes.mainFeaturedPost}>
          <Typography
            component="h3"
            variant="subtitle1"
            color="inherit"
            gutterBottom
            style={{paddingBottom : "1rem"}}
            data-aos="fade-right"
          >
            Salah satu syarat untuk mendapatkan gelar sarjana
          </Typography>
          <Typography data-aos="fade-right" component="h3" variant="h3" color="inherit" gutterBottom style={{padding : "1rem 0"}}>
            {post.title}
          </Typography>
          <Typography data-aos="fade-right" variant="h6" color="inherit" paragraph style={{paddingBottom : "1rem"}}>
            {post.description}
          </Typography>
          <Link variant="subtitle1" href="#pendahuluan" style={{padding : "1rem 0"}} >
            <Button data-aos="fade-up" variant="contained" color="primary" endIcon={<NavigateNextIcon fontSize="small" />} size="large" gutterBottom>
              {post.linkText} 
            </Button>
          </Link>
          <div style={{ paddingTop: "2rem", display: "flex" }}>
            <Typography data-aos="fade-up" component="h3" variant="subtitle1" color="inherit">
              Kontak Saya :
            </Typography>
          </div>
          <div data-aos="fade-up" style={{ paddingTop: "1rem", display: "flex" }}>
            <Link
              href="https://www.facebook.com/darsan.ari"
              className="social-media"
              target="_blank"
            >
              <img
                style={{ width: "2.5rem", marginRight: "1rem" }}
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
                style={{ width: "2.5rem", marginRight: "1rem" }}
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
                style={{ width: "2.5rem", marginRight: "1rem" }}
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
                style={{ width: "2.5rem", marginRight: "1rem" }}
                src={whatsapp}
                alt="google"
              />
            </Link>
          </div>
        </div>
      </Grid>
      <Hidden smDown>
        <Grid item md={6} xs={0} data-aos="fade-left">
          <div className={classes.mainFeaturedPostContent}>
            {<img className={classes.img} src={image} alt={post.imageText} />}
          </div>
        </Grid>
      </Hidden>
    </Grid>
  );
}

LandingPage.propTypes = {
  post: PropTypes.object,
};
