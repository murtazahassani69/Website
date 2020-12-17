import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./HomeCnenter.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: '0px',
      flexGrow: 1,
      width: "100%",
      height: "auto",
      position: "absolute",
      scrollBehavior: "smooth",

    },
    paper1: {
      padding: theme.spacing(5),
      textAlign: "center",
      background: 'lightblue',
      color: '#fff',
      borderRadius: '0px',
      marginBottom: '10%',
      // margintop: '10%',

    },
    paper: {
      padding: theme.spacing(5),
      textAlign: "center",
      background: 'lightblue',
      color: '#fff',
      borderRadius: '0px',
      // height: '10%',

    },
  })
);

export default function HomeCnenter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

          <Paper styles="border-radius: 0px" className="img_center">
            <h1>Welcome to<br /><span>Amnick</span>!</h1>
            <br />
            <h4>
              We are a combination of City <br />
               Leaders/Mayors from around the world.
            </h4>
          </Paper>

        <Grid item xs={12} sm={6}>
          <Paper className="about_section">About section-1</Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper  className="about_section">About section-2</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper1}>About Our Team-1</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper1}>About Our Team-2</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper1}>About Our Team-3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper1}>About Our Team-4</Paper>
        </Grid>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>Footer section </Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}