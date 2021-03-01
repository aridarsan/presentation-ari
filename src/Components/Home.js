import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import Main from "./Main";
// import Sidebar from "./Sidebar";
import LandingPage from "./LandingPage";
import Pendahuluan2 from "./Pendahuluan2";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Pendahuluan from "./Pendahuluan";
import tujuan1 from "../Image/target.svg";
import tujuan2 from "../Image/target1.svg";
import TinjauanPustaka from "./TinjauanPustaka";
import Metode from "./MetodePenelitian";
import Hasil from "./Hasil";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import SimpulanSaran from "./SimpulanSaran";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector("#home");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

const sections = [
  { title: "Halaman Awal", url: "#" },
  { title: "Pendahuluan", url: "#pendahuluan" },
  { title: "Tinjauan Pustaka", url: "#tinjauan-pustaka" },
  { title: "Metode Penelitian", url: "#metode" },
  { title: "Hasil", url: "#hasil" },
  { title: "Simpulan & Saran", url: "#simpulan" },
];

const mainFeaturedPost = {
  title: "Kesehatan Masyarakat, Promosi Kesehatan Universitas Siliwangi",
  description:
    "Hubungan Pengetahuan dan Sikap terhadap Perilaku Adaptasi Kebiasaan Baru Masyarakat Kota Tasikmalaya di Masa Pandemi COVID-19 Tahun 2020",
  linkText: "Lihat Skripsi",
};

const featuredPosts = [
  {
    title: "Tujuan Umum",
    description: [
      {
        title:
          "Mengetahui hubungan antara pengetahuan dan sikap terhadap perilaku adaptasi kebiasaan baru masyarakat Kota Tasikmalaya di masa pandemi COVID-19 tahun 2020",
      },
    ],
    image: tujuan1,
    imageText: "Image Text",
  },
  {
    title: "Tujuan Khusus",
    description: [
      {
        title:
          "Menganalisis hubungan antara pengetahuan dengan perilaku adaptasi kebiasaan baru masyarakat Kota Tasikmalaya di masa pandemi COVID-19 tahun 2020",
      },
      {
        title:
          "Menganalisis hubungan antara sikap dengan perilaku adaptasi kebiasaan baru masyarakat Kota Tasikmalaya di masa pandemi COVID-19 tahun 2020",
      },
    ],
    image: tujuan2,
    imageText: "Image Text",
  },
];

// const sidebar = {
//   title: "About",
//   description:
//     "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
//   archives: [
//     { title: "March 2020", url: "#" },
//     { title: "February 2020", url: "#" },
//     { title: "January 2020", url: "#" },
//     { title: "November 1999", url: "#" },
//   ],
//   social: [
//     { name: "GitHub", icon: GitHubIcon },
//     { name: "Twitter", icon: TwitterIcon },
//     { name: "Facebook", icon: FacebookIcon },
//   ],
// };

export default function Home(props) {
  // const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar sections={sections} />
      <Container maxWidth="lg">
        <main>
          <LandingPage post={mainFeaturedPost} />
          <Pendahuluan />
          <Grid container spacing={4}>
            <Pendahuluan2 post={featuredPosts} />
          </Grid>
          <Grid container id="tinjauan-pustaka">
            <TinjauanPustaka />
          </Grid>
          <Metode />
          <Hasil />
          <SimpulanSaran post={featuredPosts}/>
          {/* <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid> */}
        </main>
      </Container>
      <Footer
        title="Made with Great Effort and Pride"
        description=""
      />
      <ScrollTop {...props}>
        <Fab color="primary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon size="large"/>
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
