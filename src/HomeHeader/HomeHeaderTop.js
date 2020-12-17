import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import "./Footer.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root2: {
      borderRadius: '0px',
      flexGrow: 1,
      width: "100%",
      position: "absolute",
      scrollBehavior: "smooth",
    },
    paper3: {
      padding: theme.spacing(5),
      textAlign: "center",
      background: 'lightblue',
      color: '#fff',
      borderRadius: '0px',
      position: ' '
      
    },
  })
);

export default function HomeCnenter() {
  const classes = useStyles();

  return (
    <div className={classes.root2}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper3}>Our Header section </Paper>
        </Grid>
      </Grid>
    </div>
  );
}