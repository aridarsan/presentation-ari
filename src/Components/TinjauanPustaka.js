import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import KerangkaTeori from "../Image/kerangka-teori.png";

const useStyles = makeStyles((theme) => ({
  image: {
    padding: theme.spacing(6, 0),
    width: "100%",
  },
}));

export default function TinjauanPustaka() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item xs={12} padding="1rem">
        <Typography
          style={{ paddingTop: "2rem", margin: "2rem 0", fontWeight: "600" }}
          component="h4"
          variant="h4"
          align="center"
          data-aos="zoom-in-up"
        >
          <span className="borderBottom">Kerangka Teori</span>
        </Typography>
      </Grid>

      <Grid container xs={12} sm={12} lg={12}>
        <Card className="kartu shadow" data-aos="fade-down">
          <CardContent>
            <img
              className={classes.image}
              src={KerangkaTeori}
              alt="kerangka konsep"
            />
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
}

TinjauanPustaka.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
