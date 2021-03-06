import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import "../Style/Pendahuluan.css";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function Pendahuluan2(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <React.Fragment>
      <Grid item xs={12} md={5}>
        <Typography
          style={{ margin: "2rem 0", fontWeight: "600" }}
          component="h4"
          variant="h4"
          align="center"
          data-aos="zoom-in-up"
        >
          <span className="borderBottom">Rumusan Masalah</span>
        </Typography>
        {/* <CardActionArea component="a" href="#"> */}
          <Card className="kartu3 shadow" data-aos="fade-right">
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography
                  style={{ margin: "30% auto", fontWeight: "500" }}
                  component="h2"
                  variant="h5"
                  align="center"
                >
                  "Apakah ada hubungan antara pengetahuan dan sikap terhadap
                  perilaku adaptasi kebiasaan baru masyarakat Kota Tasikmalaya
                  di masa pandemi COVID-19 Tahun 2020?"
                </Typography>
              </CardContent>
            </div>
            <Hidden xsDown>
              <CardMedia
                className={classes.cardMedia}
                image={post.image}
                title={post.imageTitle}
              />
            </Hidden>
          </Card>
        {/* </CardActionArea> */}
      </Grid>

      <Grid item spacing={4} xs={12} md={7}>
        {post.map((posts) => (
          <div key={posts}>
            <div className={classes.cardDetails}>
              <Typography
                style={{ margin: "2rem 0", fontWeight: "600" }}
                component="h4"
                variant="h4"
                align="center"
                data-aos="zoom-in-up"
              >
                <span className="borderBottom">{posts.title}</span>
              </Typography>
              {/* <CardActionArea component="a" href="#"> */}
                <Card className="shadow" data-aos="fade-left">
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={4} md={3} style={{ margin: "auto" }}>
                        <img
                          style={{ width: "60%" }}
                          src={posts.image}
                          alt=""
                        />
                      </Grid>
                      <Grid item xs={8} md={9}>
                        <Typography variant="subtitle1" paragraph>
                          {posts.description.map((des) => (
                            <Grid container>
                              <Grid item xs={1}>
                                <DoneOutlineIcon color="primary" />
                              </Grid>
                              <Grid item xs={11}>
                                <Typography component="h2" variant="subtitle1">
                                  {des.title}
                                </Typography>
                              </Grid>
                              {/* <ul>
                                <li>{des.title}</li>
                              </ul> */}
                            </Grid>
                          ))}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              {/* </CardActionArea> */}
            </div>
            <Hidden xsDown>
              <CardMedia
                className={classes.cardMedia}
                image={posts.image}
                title={posts.imageTitle}
              />
            </Hidden>
          </div>
        ))}
      </Grid>
    </React.Fragment>
  );
}

Pendahuluan2.propTypes = {
  post: PropTypes.array,
};
