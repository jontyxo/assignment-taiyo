import React from 'react'
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import "./worldData.css"

type Props = {}
interface WorldData{
   
    cases: string,
    todayCases: 14283,
    deaths: number,
    recovered: number,
    active: number,
    affectedCountries: number
}

const WorldData = () => {
    const { data:worldData, isLoading, isError } = useQuery<WorldData>(
        ['worldData'],
        async () => {
          const response = await fetch('https://disease.sh/v3/covid-19/all');
          return response.json();
        }
      );
      console.log(worldData)
      if (isLoading) {
        return <div className='WorldData'>Loading...</div>;
      }
    
      if (isError || !worldData) {
        return <div className='WorldData'>Error fetching data</div>;
      }
      console.log()
  return (
    <>
    <span className='headlineWD'> World Wide Data</span>
    <div className='WorldData'>
        <span>Total Cases: {worldData.cases}</span>
        <span>Total Deaths: {worldData.deaths}</span>
        <span>Total Recovered: {worldData.recovered}</span>
        <span>Active Cases: {worldData.active}</span>
        <span>Countries Affected: {worldData.affectedCountries}</span>

    </div>
    </>
  )
}

export default WorldData