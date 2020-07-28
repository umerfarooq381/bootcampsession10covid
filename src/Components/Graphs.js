import {Bar} from 'react-chartjs-2'
import React,{useState,useEffect} from 'react';
function Graphs() {


  // const classes = useStyles();
  const [globalData, setGlobalData] = useState({});

  useEffect(() => {

    async function getData() {
      const url = "https://api.thevirustracker.com/free-api?global=stats";
      const response = await fetch(url);
      let data = await response.json();
      delete data.results[0].source
      setGlobalData(data.results[0])
      console.log(data.results[0]);
    }
    getData();
  }
    , [])

    debugger;
    const labelsInObject = Object.keys(globalData);
    const ValuesAgainstLabels = labelsInObject.map(singleLabel => globalData[singleLabel]);

  const state = {
    labels: labelsInObject,
    datasets: [
      {
        label: 'Global Statistics',
        backgroundColor: 'rgba(0,220,0,1)',
        borderColor: 'rgba(0,220,0,1)',
        borderWidth: 2,
        data: ValuesAgainstLabels
      }
    ]
  }

return (
  <div style={{height:"800px", width:"800px"}}>
    <Bar
      data={state}
      options={{
        title:{
          display:true,
          responsive:true,
          text:'Global Statitics For Pandamic',
          fontSize:20
        },
        legend:{
          display:true,
          position:'right'
        }
      }}
    />
  </div>
);
}

export default Graphs;
