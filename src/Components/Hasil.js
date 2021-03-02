import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import pengetahuan from "../Image/pengetahuan.png";
import sikap from "../Image/sikap.png";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";

const hasil = [
  {
    title: "1. Hubungan Pengetahuan dengan Perilaku",
    url: pengetahuan,
    desc:
      "p-value ≤ 0,05, Ha diterima dan Ho ditolak, mempunyai arti terdapat hubungan antara pengetahuan dengan perilaku adaptasi kebiasaan baru masyarakat Kota Tasikmalaya",
  },
  {
    title: "2. Hubungan Sikap dengan Perilaku",
    url: sikap,
    desc:
      "p-value ≤ 0,05, Ha diterima dan Ho ditolak, artinya terdapat hubungan antara sikap dengan perilaku adaptasi kebiasaan baru masyarakat Kota Tasikmalaya ",
  },
];

export default function Hasil() {
  return (
    <React.Fragment>
      <Grid container spacing={4} id="hasil">
        <Grid item xs={12}>
          <Typography
            style={{ paddingTop: "1rem", margin: "2rem 0", fontWeight: "600" }}
            component="h4"
            variant="h4"
            align="center"
          >
            <span className="borderBottom">Hasil Penelitian</span>
          </Typography>

          {hasil.map((data) => (
            <Grid container>
              <Grid item xs={12} md={12} lg={12}>
                <Typography
                  style={{
                    padding: "0.5rem",
                    fontWeight: "500",
                    color: "#333333",
                  }}
                  component="h2"
                  variant="h5"
                >
                  {data.title}
                </Typography>{" "}
                <Grid container spacing={4}>
                  <Grid item xs={12} md={9} lg={9}>
                    <img
                      src={data.url}
                      className="shadow"
                      style={{ width: "100%", borderRadius: "10px" }}
                      alt="hubungan pengetahuan dengan perilaku"
                    />
                  </Grid>
                  <Grid item xs={12} md={3} lg={3}>
                    <Typography component="h2" variant="h6">
                      {data.desc}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
