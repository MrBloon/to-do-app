import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: ['Validated', 'Not Validated'],
        datasets:[
          {
            label:'Todos count',
            data:[
              0,
              0
            ],
            backgroundColor:[
              'rgba(75, 192, 192, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    }
  }


  render(){
    const copiedState = {...this.state.chartData};
    copiedState.datasets[0].data = [this.props.validated, this.props.notValidated];
    return (
      <div className="chart" style={{padding: "30px"}}>
        <Bar
          data={copiedState}
        />
      </div>
    )
  }
}

export default Chart;
