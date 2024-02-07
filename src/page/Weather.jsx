import React from "react";
import { useState } from "react";
import axios from "axios"

export function Weather() {
    const [city, setCity] = useState("Ahmedabad")
    const [data, setData] = useState({})
    const [temp, setTemp] = useState()
    const [img, setImg] = useState("")
    const [desc, setDesc] = useState("")
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=720e039f21abb3460d49bcc6eb4ce6cd&units=metric`;

    function getData() {
        axios.get(url).then((response) => {
            setData(response.data);
            console.log(data);
        });
        const weatherData = data
            const description = weatherData.weather[0].description
            console.log(weatherData.weather[0].icon);
            const imgUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
            setImg(imgUrl)
            setDesc(desc)
            setTemp(weatherData.main.temp)
    }

return (
    <div className="w-[70vw] d-flex justify-center items-center px-auto">
        <div className="w-[300px] rounded-md border text-white mt-8">
            <img
            src={ img || "https://openweathermap.org/img/wn/50n@2x.png"}
            alt="Weather"
            className="h-[200px] w-full rounded-t-md object-cover"
            />
            <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
                {city}
            </h1>
            <p className="mt-3 text-sm text-gray-600">
                {/* `Temp ${data.temparature} Degree C*` */}
                { temp+" Degree C*" ?? "Weather Is Clear"}
            </p>
            <p className="mt-3 text-sm text-gray-600">
                { desc || "" }
            </p>
            </div>
        </div>
        <div className="flex w-full items-center space-x-2 mt-10 md:w-1/3">
        <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="City"
            value={city}
            onChange={(e)=>setCity(e.target.value)}
        ></input>
        <button
        type="button"
        className="rounded-full bg-black px-3 py-2 text-sm font-semibold border border-white text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={getData}
        >
        Go
        </button>
        </div>
    </div>
)}
