//import AllCountriesJson from './AllCountries.json';
///////

import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});




// const useStyles = makeStyles((theme) => ({
//   root: {
//       margin: '0 auto',
//       marginTop:50,
//     flexGrow: 1,
//   },
//   paper: { 
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
//   title:{
//     color:'#3f51b5',
//     textTransform:'uppercase',
//   }
// }));

export default function AllCountries() {
  // return (
  //   <h1>All Countries</h1>
  // );
  const classes = useStyles();
  const [globalData, setGlobalData] = useState([{}]);

  useEffect(() => {

    async function getData() {

      debugger;
      const url = "https://api.thevirustracker.com/free-api?countryTotals=ALL";
      const response = await fetch(url);
      let data = await response.json();
      //const data = AllCountriesJson; // require('./AllCountries.json');
      let dataOrg = data.countryitems[0];
      Object.keys(dataOrg).forEach((key,index) => {
        delete dataOrg[key].source;
      })
      dataOrg = JSON.parse(JSON.stringify(dataOrg))// JSON.parse(dataOrg)

      setGlobalData(Object.values(dataOrg))
    }
    getData();
  }
    , [])
//debugger;

return (
  <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell align="right">Title</TableCell>
          <TableCell align="right">Code</TableCell>
          <TableCell>Total Cases</TableCell>
          <TableCell align="right">Total Recovered</TableCell>
          <TableCell align="right">Total Unresolved</TableCell>
          <TableCell>Total Deaths</TableCell>
          <TableCell align="right">Total New Cases</TableCell>
          <TableCell align="right">New Deaths</TableCell>
          <TableCell>Active Cases</TableCell>
          <TableCell align="right">Serious Cases</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {globalData.map((row,index) => (
          <TableRow key={row.ourid}>
            <TableCell component="th" scope="row">{row.ourid}</TableCell>
            <TableCell component="th" scope="row">{row.title}</TableCell>
            <TableCell align="right">{row.code}</TableCell>
            <TableCell align="right">{row.total_cases}</TableCell>
            <TableCell align="right">{row.total_recovered}</TableCell>
            <TableCell align="right">{row.total_unresolved}</TableCell>
            <TableCell align="right">{row.total_deaths}</TableCell>
            <TableCell align="right">{row.total_new_cases_today}</TableCell>
            <TableCell align="right">{row.total_new_deaths_today}</TableCell>
            <TableCell align="right">{row.total_active_cases}</TableCell>
            <TableCell align="right">{row.total_serious_cases}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

//   return (
//     <div>
//     <h1>test 1</h1>
//     <div className={classes.root}>
//       <Grid container spacing={3}>

// {  
//   Object.keys(globalData).map((key,index) => {
//     return (
//       <Grid item xs={12} sm={4} key={index}>
//           <Paper className={classes.paper} elevation={3}>
//             <h3 className={classes.title}>{key.replace(/_/g,' ')}</h3>
//             <h3>{globalData[0][key]}</h3>
            
//             </Paper>
//         </Grid>
//     )

//   })
// }

        
//       </Grid>
//     </div>
//     <h1>test 2</h1>
//     </div>
//   );
}
