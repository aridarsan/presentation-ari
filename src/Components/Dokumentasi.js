import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
// import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import fb1 from "../Image/Documentation/fb1.png";
import fb2 from "../Image/Documentation/fb2.png";
import fb3 from "../Image/Documentation/fb3.png";
import ig1 from "../Image/Documentation/ig1.jpg";
import ig2 from "../Image/Documentation/ig2.jpg";
import wa1 from "../Image/Documentation/wa1.png";
import wa2 from "../Image/Documentation/wa2.png";
import wa3 from "../Image/Documentation/wa3.png";
import wa4 from "../Image/Documentation/wa4.png";
import wa5 from "../Image/Documentation/wa5.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "Penyebaran Kuesioner di Instagram 1",
    imgPath: ig1,
  },
  {
    label: "Penyebaran Kuesioner di Instagram 2",
    imgPath: ig2,
  },
  {
    label: "Penyebaran Kuesioner di Facebook 1",
    imgPath: fb1,
  },
  {
    label: "Penyebaran Kuesioner di Facebook 2",
    imgPath: fb2,
  },
  {
    label: "Penyebaran Kuesioner di Facebook 3",
    imgPath: fb3,
  },
  {
    label: "Penyebaran Kuesioner di Grup Whatsapp 1",
    imgPath: wa1,
  },
  {
    label: "Penyebaran Kuesioner di Grup Whatsapp 2",
    imgPath: wa2,
  },
  {
    label: "Penyebaran Kuesioner di Grup Whatsapp 3",
    imgPath: wa3,
  },
  {
    label: "Penyebaran Kuesioner di Grup Whatsapp 4",
    imgPath: wa4,
  },
  {
    label: "Penyebaran Kuesioner di Grup Whatsapp 5",
    imgPath: wa5,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    // height: 255,
    display: "block",
    maxWidth: 400,
    // overflow: "hidden",
    overflowX: "auto",
    width: "21%",
    margin: "auto",
  },
}));

function Dokumentasi() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <React.Fragment>
      <Grid container className={classes.root} id="dokumentasi">
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
            <span className="borderBottom">Dokumentasi</span>
          </Typography>
        </Grid>
        <Card className="shadow" data-aos="fade-up">
          <CardContent>
            {/* <Paper square elevation={3} className={classes.header}> */}
            <Typography component="h4" variant="h6" align="center" gutterBottom>
              {tutorialSteps[activeStep].label}
            </Typography>
            {/* </Paper> */}
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {tutorialSteps.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <img
                      className={classes.img}
                      src={step.imgPath}
                      alt={step.label}
                      id="img-carousel"
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              variant="dots"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Lanjut
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Kembali
                </Button>
              }
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            style={{ margin: "2rem 0", fontWeight: "600" }}
            component="h4"
            variant="h6"
            align="center"
            data-aos="zoom-in"
          >
            <span className="borderBottom">
              Sekian dan Terima Kasih Atas Perhatiannya
            </span>
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Dokumentasi;
