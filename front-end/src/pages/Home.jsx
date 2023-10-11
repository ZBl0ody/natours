import { useState, useEffect } from "react";
import { Card } from "../component";
import axios from "axios";

const Home = () => {
  const [msg, setMsg] = useState("");

  const [cont, setCont] = useState([]);
  const newEl = () => {
    axios
      .post("http://localhost:3000/api/v1/tours", {
        name: "THE FOREST HIKER",
        duration: 5,
        maxGroupSize: 25,
        difficulty: "easy",
        price: 150,
        summary: "Breathtaking hike through the Canadian Banff National Park",
        imageCover:
          "https://images.nationalgeographic.org/image/upload/v1638892272/EducationHub/photos/hoh-river-valley.jpg",
      })
      .then(function (response) {})
      .catch(function (err) {
        setMsg(" failed!");
        console.log(err);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/tours")
      .then((response) => {
        setCont(response.data.data.data); // assuming the response data is an array
      })
      .catch((error) => {
        console.log(error);
        setMsg("Uh oh! Something went wrong!");
      });
  }, []);
  return (
    <div className="py-20">
      <div className="flex flex-wrap justify-center gap-16">
        <h1 className="text-orange-600 text-3xl">{msg}</h1>
        {cont.map((item) => (
          <Card
            key={item.name}
            name={item.name}
            duration={item.duration}
            maxGroupSize={item.maxGroupSize}
            difficulty={item.difficulty}
            ratingsAverage={item.ratingsAverage}
            ratingsQuantity={item.ratingsQuantity}
            price={item.price}
            priceDiscount={item.priceDiscount}
            summary={item.summary}
            description={item.description}
            startDates={item.startDates}
            locations={item.locations}
            createdAt={item.createdAt}
            startLocation={item.startLocation}
            imageCover={item.imageCover}
          />
        ))}
      </div>
      <button onClick={newEl}>new</button>
    </div>
  );
};

export default Home;
