"use client"
import HomeWrapper from "@/Wrappers/HomeWrapper";
import { useEffect, useState } from "react";


export default function Home() {

  // const [data, setData] = useState<string[][] | null | any>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('/api/sheets');
  //     const result = await response.json();
  //     setData(result.data);
  //     console.log(result.data);

      
      
  //   };

  //   fetchData();
  // }, []);



  // function calculatePackagePrices(durationDays:any) {
  //   // Find the row corresponding to the given duration
  //   const row = data?.find((row:any) => row[0] === `${durationDays} Day`);
  
  //   if (!row) {
  //     return { error: 'Duration not found in data' };
  //   }
  
  //   // Extract prices for Gold, Platinum, and Silver packages
  //   const goldPrice = row[4];
  //   const platinumPrice = row[6];
  //   // Assuming Silver package price would be at index 7, adjust accordingly if different
  //   const silverPrice = row[2];
  
  //   return {
  //     goldPrice,
  //     platinumPrice,
  //     silverPrice,
  //   };
  // }


  // console.log(calculatePackagePrices(8-1));
  
  return (
    <HomeWrapper />
  );
}
