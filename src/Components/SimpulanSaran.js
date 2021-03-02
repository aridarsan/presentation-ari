import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import Paper from "@material-ui/core/Paper";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import family from "../Image/family.jpg";
import saran2 from "../Image/saran2.jpg";
import "../Style/Pendahuluan.css";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 200,
  },
  paper : {
    padding : "1rem",
    backgroundColor : "#f6fbff"
  }
});

const saran = [
  {
    img: family,
    desc:
      "Melakukan sosialisasi dan edukasi terkait penerapan perilakau adaptasi kebiasaan baru pada seluruh masyarakat Kota Tasikmalaya di semua tempat yang lebih konsisten",
  },
  {
    img: saran2,
    desc:
      "Melakukan penelitian dengan desain cross sectional untuk mengetahui pengetahuan, sikap dan perilaku adaptasi kebiasaan baru orang yang diketahui terpapar COVID-19 dengan orang yang tidak pernah terpapar COVID-19",
  },
];

export default function SimpulanSaran(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <React.Fragment>
      <Grid container spacing={4} id="simpulan">
        <Grid item xs={12} md={6}>
          <Typography
            style={{ paddingTop: "1rem", margin: "2rem 0", fontWeight: "600" }}
            component="h4"
            variant="h4"
            align="center"
          >
            <span className="borderBottom">Simpulan</span>
          </Typography>
          {/* <CardActionArea component="a" href="#"> */}
            <Card className="kartu4">
              <div className={classes.cardDetails}>
                <CardContent>
                  <Paper className={classes.paper}>
                    <Typography
                      style={{ fontWeight: "500" }}
                      component="h2"
                      variant="h6"
                    >
                      1. Terdapat hubungan yang cukup kuat antara pengetahuan
                      dengan perilaku adaptasi kebiasaan baru masyarakat Kota
                      Tasikmalaya di masa pandemi COVID-19 Tahun 2020
                    </Typography>
                  </Paper>
                  <br/>
                  <Paper className={classes.paper}>
                    <Typography
                      style={{ fontWeight: "500" }}
                      component="h2"
                      variant="h6"
                    >
                      2. Terdapat hubungan yang cukup kuat antara sikap dengan
                      perilaku adaptasi kebiasaan baru masyarakat Kota
                      Tasikmalaya di masa pandemi COVID-19 Tahun 2020
                    </Typography>
                  </Paper>
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

        <Grid item spacing={4} xs={12} md={6}>
          <div>
            <div className={classes.cardDetails}>
              <Typography
                style={{
                  paddingTop: "1rem",
                  margin: "2rem 0",
                  fontWeight: "600",
                }}
                component="h4"
                variant="h4"
                align="center"
              >
                <span className="borderBottom">Saran</span>
              </Typography>
              <Grid container spacing={2}>
                {saran.map((data) => (
                  <>
                    <Grid item xs={4} md={3}>
                      <img
                        style={{ width: "100%", borderRadius: "10px" }}
                        src={data.img}
                        alt="saran"
                      />
                    </Grid>
                    <Grid item xs={8} md={9}>
                      {/* <CardActionArea component="a" href="#"> */}
                        <Card className="shadow">
                          <CardContent>
                            {/* <Grid container spacing={2}> */}
                            <Typography variant="subtitle1" paragraph>
                              <Grid container xs={12} md={12} lg={12}>
                                <Grid item xs={1}>
                                  <DoneOutlineIcon color="primary" />
                                </Grid>
                                <Grid item xs={11}>
                                  <Typography
                                    component="h2"
                                    variant="subtitle1"
                                  >
                                    {data.desc}
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Typography>
                          </CardContent>
                        </Card>
                      {/* </CardActionArea> */}
                    </Grid>
                  </>
                ))}
              </Grid>
            </div>
            {/* <Hidden xsDown>
                <CardMedia
                  className={classes.cardMedia}
                  image={posts.image}
                  title={posts.imageTitle}
                />
              </Hidden> */}
          </div>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              style={{ margin: "2rem 0", fontWeight: "600" }}
              component="h4"
              variant="h6"
              align="center"
            >
              <span className="borderBottom">
                Sekian dan Terima Kasih Atas Perhatiannya
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
