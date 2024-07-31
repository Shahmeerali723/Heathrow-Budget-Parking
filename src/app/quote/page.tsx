"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const PricingCard = ({ title, price, features, rating, category }: any) => {
  const router = useRouter();

  const bookNow = () => {
    const userData: any | null = (() => {
      const data = localStorage.getItem("userdata");
      return data ? JSON.parse(data) : null;
    })();

    userData.price = price;
    userData.package = category;

    localStorage.clear();
    localStorage.setItem("userdata", JSON.stringify(userData));
    router.push("/payment");
  };

  return (
    <div className="flex flex-col border h-fit border-gray-200 rounded-tr-3xl rounded-bl-3xl shadow-md p-6 m-4 space-y-[10px] bg-white">
      <h2 className="text-2xl uppercase font-black text-green-900">{title}</h2>
      <h3 className="text-xl font-bold text-secondary-extraDark uppercase">
        {category}
      </h3>
      <h3 className="text-xl font-black text-secondary-extraDark">{price}</h3>
      <ul className="flex-1 space-y-[20px]">
        {features.map((feature: any, index: any) => (
          <li key={index} className="flex items-center mb-2">
            <svg
              className="w-4 h-4 text-primary mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-[#959292]">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center mb-4">
        {Array(rating)
          .fill(0)
          .map((_, index) => (
            <svg
              key={index}
              className="w-6 h-6 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.122-6.545L1 7.227l6.561-.955L10 1l2.439 5.272 6.561.955-4.244 4.318 1.122 6.545z" />
            </svg>
          ))}
      </div>
      <button
        className="mt-auto py-2 px-4 bg-primary text-white font-bold rounded"
        onClick={bookNow}
      >
        Book Now
      </button>
    </div>
  );
};

const Pricing = () => {
  const [userData, setUserData] = useState<any | null>(null);
  const [data, setData] = useState<string[][] | null | any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserData = localStorage.getItem("userdata");
      setUserData(storedUserData ? JSON.parse(storedUserData) : null);

      const fetchData = async () => {
        try {
          console.log("Fetching data from /api/sheets...");
          const apiKey = 'AIzaSyDsvDwOgA6lLTMTgbnjG-KPzS5zZn6Iomw';
          const spreadsheetId = '1-HiuVw5OGBJgg-dHyr76tmuZ5cpzXHFA0PKqzxuSnIA';
          const range = 'Sheet1!A1:G31'; // Adjust the range as needed

          const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

          const response = await fetch(url);
          const data = await response.json()

          const result = data?.values

          console.log("Data fetched successfully:", result);
          setData(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, []);

  const calculateDaysBetweenDates = (startDate: Date, endDate: Date): number => {
    const diffInMs = Math.abs(endDate.getTime() - startDate.getTime());
    return Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
  };

  const calculatePackagePrices = (durationDays: any) => {
    const row = data?.find((row: any) => row[0] === `${durationDays} Day`);
    if (!row) {
      console.log("Duration not found in data");
      return { error: "Duration not found in data" };
    }
    const goldPrice = row[4];
    const platinumPrice = row[6];
    const silverPrice = row[2];

    return {
      goldPrice,
      platinumPrice,
      silverPrice,
    };
  };

  if (!userData || !data) return null;

  const startDate = new Date(userData?.PickDate);
  const endDate = new Date(userData?.DropDate);
  const totalDays = calculateDaysBetweenDates(startDate, endDate);
  const PackagePrice = calculatePackagePrices(totalDays);

  const pricingData = [
    {
      title: "Meet & Greet",
      price: PackagePrice?.silverPrice || "140$",
      category: "Silver",
      features: [
        "Professional Service",
        "Secure Compound",
        "Fully Insured Drivers",
        "No Change",
        "No Cancellation",
      ],
      rating: 5,
    },
    {
      title: "Meet & Greet",
      price: PackagePrice?.goldPrice || "140$",
      category: "Gold",
      features: [
        "Professional Service",
        "Secure Compound",
        "Fully Insured Drivers",
        "Changes Allowed",
        "Cancellation Allowed",
        "Amendments Allowed",
      ],
      rating: 5,
    },
    {
      title: "Meet & Greet",
      price: PackagePrice?.platinumPrice || "140$",
      category: "Platinum",
      features: [
        "Professional Service",
        "Secure Compound",
        "Fully Insured Drivers",
        "Changes Allowed",
        "Cancellation Allowed",
        "Amendments Allowed",
        "No Change Fee",
        "No Airport Entry / Exit Fee",
      ],
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-100 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {pricingData.map((card, index) => (
          <PricingCard
            key={index}
            title={card.title}
            price={card.price}
            features={card.features}
            rating={card.rating}
            category={card.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
