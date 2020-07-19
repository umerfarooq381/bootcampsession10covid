

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
      margin: '0 auto',
      marginTop:50,
    flexGrow: 1,
  },
  paper: { 
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title:{
    color:'#3f51b5',
    textTransform:'uppercase',
  }
}));

export default function AllCountries() {
  const classes = useStyles();
  const [globalData, setGlobalData] = useState([{}]);

  useEffect(() => {

    async function getData() {

      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = "https://api.thevirustracker.com/free-api?countryTotals=ALL";
      const completeurl = url;
      const response = await fetch(url);
      //debugger;
      let data = await response.json();
      setGlobalData(Object.values(data.countryitems[0]["1"]))
      console.log("single object: ")
      console.log(data.countryitems[0]["1"]);
    }
    getData();
  }
    , [])
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

{  
  Object.keys(globalData[0]).map((key,index) => {
    return (
      <Grid item xs={12} sm={4} key={index}>
          <Paper className={classes.paper} elevation={3}>
            <h3 className={classes.title}>{key.replace(/_/g,' ')}</h3>
            <h3>{globalData[0][key]}</h3>
            
            </Paper>
        </Grid>
    )

  })
}

        
      </Grid>
    </div>
  );
}
