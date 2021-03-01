import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  post: {
    paddingBottom: theme.spacing(3),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <Grid className={classes.grid1} item xs={12} md={8}>
      <Grid className={classes.post}>
        <Grid className={classes.post}>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Sample blog post
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            This blog post shows a few different types of content that are
            supported and styled with Material styles. Basic typography, images,
            and code are all supported. You can extend these by modifying
            `Markdown.js`. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque
            ornare sem lacinia quam venenatis vestibulum. Sed posuere
            consectetur est at lobortis. Cras mattis consectetur purus sit amet
            fermentum. Curabitur blandit tempus porttitor. **Nullam quis risus
            eget urna mollis** ornare vel eu leo. Nullam id dolor id nibh
            ultricies vehicula ut id elit. Etiam porta sem malesuada magna
            mollis euismod. Cras mattis consectetur purus sit amet fermentum.
            Aenean lacinia bibendum nulla sed consectetur.
          </Typography>
          <Divider />
        </Grid>
      </Grid>

      <Grid>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Sample blog post
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          This blog post shows a few different types of content that are
          supported and styled with Material styles. Basic typography, images,
          and code are all supported. You can extend these by modifying
          `Markdown.js`. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque
          ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur
          est at lobortis. Cras mattis consectetur purus sit amet fermentum.
          Curabitur blandit tempus porttitor. **Nullam quis risus eget urna
          mollis** ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula
          ut id elit. Etiam porta sem malesuada magna mollis euismod. Cras
          mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum
          nulla sed consectetur.
        </Typography>
        <Divider />
      </Grid>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
