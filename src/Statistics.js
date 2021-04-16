import React from 'react'
import {Line, Pie} from 'react-chartjs-2';


const moviestat = {
    labels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014',
             '2015', '2016', '2017', '2018', '2019', '2020'],
    datasets: [
      {
        label: 'Number of movies released',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'green',
        borderColor: 'ghostwhite',
        borderWidth: 2,
        data: [371, 356, 480, 506, 551, 547, 608, 632, 607, 520, 538, 601, 669, 689, 708, 706, 737, 740, 873, 792, 329]
      }
    ]
  }

  const genre = {
    labels: ['Drama', 'Comdey', 'Documentary', 'Thriller',
             'Adventure', 'Action', 'Horror', 'Romantic Comedy', 
            'Black Comdey', 'Musical', 'Western', 'Concert', 'Multiple Genres', 'Reality', 'Educational'],
    datasets: [
      {
        label: 'Amount of movies',
        fill: false,
        lineTension: 0.5,
        backgroundColor: [
          'rgb(210,180,140)',
          'rgb(188,143,143)',
          'rgb(255,228,181)',
          'rgb(255,222,173)',
          'rgb(255,218,185)',
          'rgb(255,228,225)',
          'rgb(255,240,245)',
          'rgb(250,240,230)',
          'rgb(253,245,230)',
          'rgb(255,239,213)',
          'rgb(255,245,238)',
          'rgb(245,255,250)'
      ],
        borderColor: 'ghostwhite',
        borderWidth: 1,
        data: [ 5404, 2383, 2373, 1151, 1078, 1061, 655, 608, 202, 197, 85, 76, 44, 4, 1]
      }
    ]
  }

  function Statistics(data) {

    return (
        <div className='charts-container'>
        <div className='line-chart'>
        <Line
          data={moviestat}
          options={{
            title:{
              display:true,
              text:'Number of movies released in the United States and Canada from 2000 to 2020',
              fontSize:15
            },
            legend:{
              display:false,
            }
          }}
        />
        </div>
        <div className='pie-chart'>
        <Pie
          data={genre}
          options={{
            title:{
              display:true,
              text:'Number of movies released in North America from 1995 to 2020, by genre',
              fontSize:15
            },
            legend:{
              display:false,
            }
          }}
        />
        </div>
        </div>
    )
}

export default Statistics;
