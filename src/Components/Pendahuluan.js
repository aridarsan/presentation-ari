import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "../Style/Pendahuluan.css";
import penemuan from "../Image/penemuan.svg";
import penetapan from "../Image/penetapan.svg";
import jumlah from "../Image/jumlah.svg";
import kebijakan from "../Image/kebijakan.svg";
import peran from "../Image/peran.svg";
import survey from "../Image/survey.svg";

const useStyles = makeStyles({
  card: {
    display: "flex",
    marginBottom: "0.5rem",
    // flexWrap : "nowrap",
    // overflowY: "auto",
  },
  cardMedia: {
    width: 160,
  },
});

const pendahuluan = [
  {
    src: penemuan,
    title: "Penemuan COVID-19",
    description:
      "Pada Bulan Januari 2020, ditemukan Coronavirus jenis baru yang belum pernah diidentifikasi sebelumnya pada manusia yang disebut Severe Acute Respiratory Syndrome Coronavirus 2 (SARSCoV-2)",
  },
  {
    src: penetapan,
    title: "Penetapan Pandemi",
    description:
      "Tanggal 11 Maret 2020, WHO sudah menetapkan COVID-19 sebagai pandemi dan merupakan KKMD",
  },
  {
    src: jumlah,
    title: "Jumlah Kasus",
    description:
      "103.066.730 kasus di seluruh dunia. 1.078.314 kasus di Indonesia. 150.336  kasus positif di Jawa Barat. 3.213 kasus positif di Kota Tasikmalaya per 31-01-2021",
  },
  {
    src: kebijakan,
    title: "Kebijakan AKB",
    description:
      "Kemenkes menetapkan KMK Nomor HK.01.07 /MENKES/ 413/2020 Tentang Pedoman Pencegahan dan Pengendalian  Coronavirus Disease 2019 (COVID-19).",
  },
];

const pendahuluan2 = [
  {
    src: peran,
    title: "Peran Masyarakat",
    description:
      "Masyarakat memiliki peran penting dalam memutus mata rantai penularan COVID-19 agar tidak menimbulkan sumber penularan baru, dg perilaku AKB yang baik",
  },
  {
    src: survey,
    title: "Studi Pendahuluan",
    description:
      "6 responden yang tidak mengetahui apa itu adaptasi kebiasaan baru, hanya 20 responden yang selalu menggunakan masker jika keluar rumah",
  },
];

export default function Pendahuluan() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container id="pendahuluan">
        <Grid item xs={12} gutterTop>
          <Typography
            style={{
              margin: "2rem 0",
              fontWeight: "600",
              paddingTop: "2rem",
            }}
            component="h4"
            variant="h4"
            align="center"
            data-aos="zoom-in-up"
          >
            <span className="borderBottom">Latar Belakang</span>
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4} className={classes.card}>
        {pendahuluan.map((card) => (
          <Grid item xs={6} sm={6} md={3}>
            {/* <CardActionArea component="a" href="#"> */}
            <Card className="kartu shadow" data-aos="fade-right">
              <CardContent>
                <Grid
                  xs={6}
                  sm={6}
                  md={3}
                  style={{
                    alignContent: "center",
                    alignItems: "center",
                    margin: "0 30%",
                  }}
                  container
                  justify="center"
                >
                  <Grid item>
                    <img
                      style={{
                        width: "150%",
                        alignContent: "center",
                        alignItems: "center",
                        // margin: "0 auto",
                      }}
                      src={card.src}
                      alt="icon"
                    />
                  </Grid>
                </Grid>
                <Typography
                  style={{ marginBottom: "1rem", fontWeight: "500" }}
                  component="h2"
                  variant="h5"
                  align="center"
                >
                  {card.title}
                </Typography>
                <Typography component="h2" variant="subtitle1" align="center">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
            {/* </CardActionArea> */}
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4}>
        {pendahuluan2.map((card) => (
          <Grid item xs={12} sm={12} md={6} lg={6}>
            {/* <CardActionArea component="a" href="#"> */}
            <Card className="kartu2 shadow" data-aos="fade-right">
              <CardContent>
                <Grid
                  xs={6}
                  sm={16}
                  md={6}
                  style={{
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 40%",
                  }}
                >
                  <img
                    style={{
                      width: "80%",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                    src={card.src}
                    alt="icon"
                  />
                </Grid>
                <Grid>
                  <Typography
                    style={{ marginBottom: "1rem", fontWeight: "500" }}
                    component="h2"
                    variant="h5"
                    align="center"
                  >
                    {card.title}
                  </Typography>
                </Grid>
                <Grid>
                  <Typography component="h2" variant="subtitle1" align="center">
                    {card.description}
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
            {/* </CardActionArea> */}
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

Pendahuluan.propTypes = {
  post: PropTypes.object,
};
