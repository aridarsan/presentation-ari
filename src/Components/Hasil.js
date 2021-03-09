import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import pengetahuan from "../Image/pengetahuan.png";
import sikap from "../Image/sikap.png";
import karakteristik from "../Image/karakteristik.png";
import kategorisasi from "../Image/kategorisasi.png";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";

const hasil = [
  {
    title: "3. Hubungan Pengetahuan dengan Perilaku",
    url: pengetahuan,
    desc:
      "p-value ≤ 0,05, Ha diterima dan Ho ditolak, mempunyai arti terdapat hubungan antara pengetahuan dengan perilaku adaptasi kebiasaan baru masyarakat Kota Tasikmalaya. Hasil penelitian ini bermakna semakin tinggi tingkat pengetahuan masyarakat, maka akan semakin baik perilaku adaptasi kebiasaan baru yang dilakukan oleh masyarakat Kota Tasikmalaya. Hasil penelitain ini diperkuat dengan penelitian yang dilakukan oleh Purnamasari dan Rahayani (2020).Penelitian ini juga sejalan dengan hasil penelitian yang dilakukan oleh Detiro (2020). Penelitian lain yang sejalan dengan hasil penelitian ini adalah pada penelitian yang dilakukan oleh Mujiburrahman (2020)",
  },
  {
    title: "4. Hubungan Sikap dengan Perilaku",
    url: sikap,
    desc:
      "p-value ≤ 0,05, Ha diterima dan Ho ditolak, artinya terdapat hubungan antara sikap dengan perilaku adaptasi kebiasaan baru masyarakat Kota Tasikmalaya. Hasil penelitian ini bermakna semakin tinggi tingkat sikap masyarakat maka akan semakin baik perilaku adaptasi kebiasaan baru yang dilakukan oleh masyarakat Kota Tasikmalaya. Hasil dari penelitian ini sejalan dengan hasil dari penelitian yang dilakukan oleh  Detiro (2020). Hasil penelitian ini juga selaras dengan penelitian lain yang dilakukan oleh Ray, Samion dan Lukito (2021). Penelitian lain yang hasilnya sama dengan hasil penelitian ini adalah pada penelitian mengenai pengetahuan, sikap dan praktik pencegahan COVID-19 pada masyarakat Kota Depok, Jawa Barat yang dilakukan oleh Rachmani, Budiyono dan Dewanti (2021). ",
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
            data-aos="zoom-in-up"
          >
            <span className="borderBottom">Hasil dan Pembahasan</span>
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={6}>
              <Typography
                style={{
                  padding: "0.5rem",
                  fontWeight: "500",
                  color: "#333333",
                }}
                component="h2"
                variant="h5"
                data-aos="fade-left"
              >
                1. Karakterisik Responden
              </Typography>{" "}
              <img
                src={karakteristik}
                className="shadow"
                style={{ width: "100%", borderRadius: "10px" }}
                alt="hubungan pengetahuan dengan perilaku"
                data-aos="fade-right"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Typography
                style={{
                  padding: "0.5rem",
                  fontWeight: "500",
                  color: "#333333",
                }}
                component="h2"
                variant="h5"
                data-aos="fade-left"
              >
                2. Kategorisasi Pengetahuan, Sikap dan Perilaku
              </Typography>{" "}
              <img
                src={kategorisasi}
                className="shadow"
                style={{ width: "100%", borderRadius: "10px", marginBottom: "1rem" }}
                alt="hubungan pengetahuan dengan perilaku"
                data-aos="fade-right"
                gutterBottom
              />
              <Typography
                component="h2"
                variant="subtitle1"
                data-aos="fade-left"
              >
                Berdasarkan tabel diatas didapatkan bahwa mayoritas responden
                memiliki pengetahuan yang tinggi mengenai adaptasi kebiasaan
                baru, namun masih terdapat responden memiliki pengetahuan
                yang rendah. Selain itu diketahui bahwa sikap responden mayoritas sudah baik mengenai adaptasi kebiasaan baru, namun masih terdapat responden yang memiliki sikap dengan kategori rendah, meskipun tidak terdapat responden yang memiliki kategori sikap sangat rendah. Serta dapat diketahui bahwa perilaku mayoritas responden memiliki kategori baik, namun masih ada responden yang memiliki perilaku adaptasi kebiasaan baru dengan kategori rendah.
              </Typography>
            </Grid>
          </Grid>
          {/* </Grid>
          </Grid> */}

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
                  data-aos="fade-left"
                >
                  {data.title}
                </Typography>{" "}
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6} lg={6}>
                    <img
                      src={data.url}
                      className="shadow"
                      style={{ width: "100%", borderRadius: "10px" }}
                      alt="hubungan pengetahuan dengan perilaku"
                      data-aos="fade-right"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <Typography
                      component="h2"
                      variant="subtitle1"
                      data-aos="fade-left"
                    >
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
