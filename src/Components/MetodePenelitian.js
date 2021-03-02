import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import ForumIcon from "@material-ui/icons/Forum";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import DescriptionIcon from "@material-ui/icons/Description";
import Paper from "@material-ui/core/Paper";
import kerangkaKonsep from "../Image/kerangka-konsep.png";
import stopCovid from "../Image/stop.jpg";
import varBebas from "../Image/tabel-varbebas.png";
import varIkat from "../Image/tabel-varikat.png";
import "../Style/Metode.css";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    color: "333333",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      // padding: theme.spacing(6),
      // paddingLeft: 0,
      // paddingRight: 0,
    },
  },
  mainFeaturedPostContent: {
    position: "relative",
    marginBottom: theme.spacing(2),
    // padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      // padding: theme.spacing(6),
      // paddingLeft: 0,
      // paddingRight: 0,
    },
  },
  img: {
    width: "100%",
    borderRadius: "10px",
  },
  paper: {
    padding: "6px 16px",
    boxShadow: "0 6px 20px rgb(17 26 104 / 20%)",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  primaryTail: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const metode = [
  {
    col: "orange",
    title: "Metode",
    desc:
      "penelitian ini merupakan penelitian observasional analitik dengan rancangan pendekatan silang (cross sectional study).",
  },
  {
    col: "lightgreen",
    title: "Populasi",
    desc:
      "Seluruh masyarakat yang tinggal dan berdomisili di Kota Tasikmalaya. Berdasarkan jumlah penduduk total populasi sebanyak 719.882 Jiwa",
  },
  {
    col: "lightblue",
    title: "Sampel",
    desc:
      "Teknik sampling yang digunakan adalah cluster sampling perkecamatan. sampel yang dibutuhkan yaitu berjumlah 338 orang responden",
  },
  {
    col: "yellow",
    title: "Instrumen",
    desc:
      "kuesioner atau angket yang  menggunakan proses dalam jaringan (daring) atau melalui google form (sebuah penyedia angket yang terhubung dengan internet).",
  },
];

const analisis = [
  {
    title: "Analisis Univariat",
    desc:
      "Pada umumnya dalam analisis ini hanya mengahasilkan distribusi frekuensi dan persentase dari tiap variabel. Variabel yang dianalisis menggunakan univariat adalah karakteristik responden, pengetahuan, sikap dan perilaku adaptasi kebiasaan baru masyarakat kota Tasikmalaya di masa pandemi COVID-19",
  },
  {
    title: "Analisis Bivariat",
    desc:
      "Untuk mengetahui hasil penelitian, maka data yang didapat dianalisis menggunakan uji Rank Spearman. Jika p-value > 0,05 maka Ho diterima dan Ha ditolak, sehingga tidak ada hubungan. Jika p-value ≤ 0,05 maka Ho ditolak dan Ha diterima, sehingga ada hubungan antara variabel bebas dengan variabel terikat.",
  },
];

export default function Metode() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container id="metode" spacing={4}>
        <Grid item xs={12} md={6}>
          <div className={classes.mainFeaturedPost}>
            <Typography
              style={{ paddingTop: "1rem", margin: "2rem 0", fontWeight: "600" }}
              component="h4"
              variant="h4"
              align="center"
              data-aos="zoom-in-up"
            >
              <span className="borderBottom">Kerangka Konsep</span>
            </Typography>
            <Card className="shadow" data-aos="fade-left">
              <CardContent>
                <img
                  className={classes.img}
                  src={kerangkaKonsep}
                  alt="post.imageText"
                />
                <Grid item>
                  <Typography variant="h5" color="inherit" paragraph>
                    Keterangan :
                  </Typography>
                  <Typography variant="subtitle1" color="inherit" paragraph>
                    * dianggap homogen & ** keterbatasan penelitian
                  </Typography>
                  {/* <Typography variant="subtitle1" color="inherit" paragraph>
                    ** keterbatasan penelitian
                  </Typography> */}
                </Grid>
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.mainFeaturedPost}>
            <Typography
              style={{ paddingTop: "1rem", margin: "2rem 0", fontWeight: "600" }}
              component="h4"
              variant="h4"
              align="center"
              data-aos="zoom-in-up"
            >
              <span className="borderBottom">Hipotesis</span>
            </Typography>
            <Card className="shadow" data-aos="fade-right">
              <CardContent>
                {
                  <img
                    className={classes.img}
                    src={stopCovid}
                    alt="hipotesis"
                  />
                }
                <br />
                <Typography
                  component="h2"
                  variant="subtitle1"
                  style={{ marginTop: "1rem" }}
                >
                  1. Ada hubungan antara <strong>pengetahuan </strong> dengan{" "}
                  <strong> perilaku adaptasi kebiasaan baru </strong> masyarakat
                  Kota Tasikmalaya di masa pandemi COVID-19 tahun 2020.
                </Typography>
                <Typography component="h2" variant="subtitle1">
                  2. Ada hubungan antara <strong> sikap </strong> dengan{" "}
                  <strong> perilaku adaptasi kebiasaan baru </strong> masyarakat
                  Kota Tasikmalaya di masa pandemi COVID-19 tahun 2020.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} md={12}>
          <Typography
            style={{ margin: "1rem 0", fontWeight: "600" }}
            component="h4"
            variant="h4"
            align="center"
            data-aos="zoom-in-up"
          >
            <span className="borderBottom">Definisi Operasional</span>
          </Typography>
        </Grid>
        <Grid xs={12} md={12} >
          <Typography component="h2" variant="h5" data-aos="fade-up">
            1. Variabel Bebas
          </Typography>
          <img
            className="shadow"
            style={{ width: "100%", borderRadius: "10px" }}
            src={varBebas}
            alt="variabel bebas"
            data-aos="fade-down"
          />
        </Grid>

        <Grid xs={12} md={12}>
          <Typography component="h2" variant="h5" data-aos="fade-up">
            2. Variabel Terikat
          </Typography>
          <img
            className="shadow"
            style={{ width: "100%", borderRadius: "10px" }}
            src={varIkat}
            alt="variabel terikat"
            data-aos="fade-down"
          />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography
          style={{ margin: "2rem 0", fontWeight: "600" }}
          component="h4"
          variant="h4"
          align="center"
          data-aos="zoom-in-up"
        >
          <span className="borderBottom">Metode Penelitian</span>
        </Typography>
      </Grid>
      <Grid container spacing={4}>
        {metode.map((metod) => (
          <Grid item xs={6} md={6} lg={3}>
            <Card className="shadow" style={{ minHeight: "16rem" }} data-aos="fade-right">
              <Typography
                style={{
                  padding: "0.5rem",
                  fontWeight: "500",
                  backgroundColor: metod.col,
                  color: "#333333",
                }}
                component="h2"
                variant="h5"
                align="center"
              >
                {metod.title}
              </Typography>
              <CardContent>
                {" "}
                <Typography component="h2" variant="subtitle1" align="center">
                  {metod.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8} lg={8}>
          <div className={classes.mainFeaturedPost}>
            <Typography
              style={{ margin: "2rem 0", fontWeight: "600" }}
              component="h4"
              variant="h4"
              align="center"
              data-aos="zoom-in-up"
            >
              <span className="borderBottom">Prosedur Penelitian</span>
            </Typography>
            <Timeline align="alternate" className="shadow" style={{borderRadius: "10px"}}>
              <TimelineItem data-aos="fade-left">
                <TimelineOppositeContent>
                  <Typography variant="subtitle1" color="textSecondary">
                    Pertama
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="secondary">
                    <ForumIcon />
                  </TimelineDot>
                  <TimelineConnector className={classes.secondaryTail} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                      Survey Awal
                    </Typography>
                    <Typography>
                      {" "}
                      Survey awal dilakukan dengan cara mencari data secara
                      daring melalui internet ke berbagai website yang
                      menyediakan data aktual mengenai COVID-19. Selain itu
                      melakukan studi pendahuluan{" "}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem data-aos="fade-right">
                <TimelineOppositeContent>
                  <Typography variant="subtitle1" color="textSecondary">
                    Kedua
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <LaptopMacIcon />
                  </TimelineDot>
                  <TimelineConnector className={classes.primaryTail} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                      Persiapan Penelitian
                    </Typography>
                    <Typography>
                      Mengumpulkan literatur dan bahan kepustakaan lainnya yang
                      berkaitan dengan materi penelitian sebagai bahan
                      referensi. Serta mempersiapkan metode dan instrumen
                      penelitian
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem data-aos="fade-left">
                <TimelineOppositeContent>
                  <Typography variant="subtitle1" color="textSecondary">
                    Ketiga
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot>
                    <DescriptionIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                      Tahap Pelaksanaan
                    </Typography>
                    <Typography>1. Pra Penelitian</Typography>
                    <Typography>
                      Validasi bahasa, validasi konten dan melaksanakan uji coba
                      soal, uji validaitas dan realiabilitas
                    </Typography>
                    <Typography>2. Pelaksanaan Penelitian</Typography>
                    <Typography>
                      Menyebarkan kuesioner melalui media sosial, mengecek
                      jumlah responden apakah sudah memenuhi sampel atau belum
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
          <div className={classes.mainFeaturedPost}>
            <Typography
              style={{ margin: "2rem 0", fontWeight: "600" }}
              component="h4"
              variant="h4"
              align="center"
              data-aos="zoom-in-up"
            >
              <span className="borderBottom">Pengolahan Data</span>
            </Typography>
            <Typography align="center" data-aos="fade-down">
              Data yang didapatkan dari responden melalui kuesioner online,
              selanjutnya melalui tahapan pengolahan sebagai berikut
            </Typography>
            <Timeline align="alternate" className="shadow" style={{borderRadius: "10px"}}>
              <TimelineItem data-aos="fade-left">
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector className={classes.primaryTail} />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="h1">
                    Editing
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem data-aos="fade-right">
                <TimelineSeparator>
                  <TimelineDot color="secondary" />
                  <TimelineConnector className={classes.secondaryTail} />
                </TimelineSeparator>
                <TimelineContent>
                  {" "}
                  <Typography variant="h6" component="h1">
                    Koding
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem data-aos="fade-left">
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector className={classes.primaryTail} />
                </TimelineSeparator>
                <TimelineContent>
                  {" "}
                  <Typography variant="h6" component="h1">
                    Skoring
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem data-aos="fade-right">
                <TimelineSeparator>
                  <TimelineDot color="secondary" />
                  <TimelineConnector className={classes.secondaryTail} />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="h1">
                    Entri Data
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem data-aos="fade-left">
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector className={classes.primaryTail} />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="h1">
                    Cleaning
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem data-aos="fade-right">
                <TimelineSeparator>
                  <TimelineDot color="secondary" />
                  <TimelineConnector className={classes.secondaryTail} />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="h1">
                    Tabulasi Data
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem data-aos="fade-left">
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                </TimelineSeparator>
                <TimelineContent>
                  {" "}
                  <Typography variant="h6" component="h1">
                    Analisis Data
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </Grid>

        <Grid item>
          <Grid xs={12}>
            <Typography
              style={{ margin: "2rem 0", fontWeight: "600" }}
              component="h4"
              variant="h4"
              align="center"
              data-aos="zoom-in-up"
            >
              <span className="borderBottom">Analisis Data</span>
            </Typography>
          </Grid>
          <Grid container spacing={4}>
            {analisis.map((analis) => (
              <Grid item xs={12} md={6} lg={6}>
                <Card className="shadow" style={{ minHeight: "14rem" }} data-aos="fade-right">
                  <CardContent>
                    <Typography
                      style={{
                        padding: "0.5rem 0",
                        fontWeight: "500",
                        color: "#333333",
                      }}
                      component="h2"
                      variant="h5"
                    >
                      {analis.title}
                    </Typography>{" "}
                    <Typography component="h2" variant="subtitle1">
                      {analis.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Metode.propTypes = {
  post: PropTypes.object,
};
