import React,{useState,useEffect} from 'react'
import {useQuery} from '@tanstack/react-query'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chartbox:React.FC =()=> {
    const [chartData, setChartData] = useState<{ date: string; cases: unknown }[]>([]);
     
    // Fetching data from api 'https://disease.sh/v3/covid-19/historical/all?lastdays=all'
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all').then(
            (res) => res.json(),
          ),
      })

      // changing data object in array data structure  so that points can be mapped on line graph
      useEffect(() => {
        if (data) {
          const casesData = data.cases;
          const chartDataArr = Object.entries(casesData).map(([date, value]) => ({
            date,
            cases: value,
          }));
          setChartData(chartDataArr);
        }
      }, [data]);

      if (isLoading) return <h1 className='text-3xl font-bold tc-p'>Loading...</h1>
      if (error) return <h1 className='text-3xl font-bold tc-p'>An error has occurred</h1>
      
    return (
    <div className='basis-9/12 '>
       <ResponsiveContainer width="100%" height="100%">
       <LineChart width={800} height={400} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="cases" stroke="#8884d8" />
      </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chartbox