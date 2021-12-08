import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const { cars } = useSelector((state) => state.carsReducer);
  return (
    <DefaultLayout>
      <h1>Home</h1>
      <h1>{cars.length}</h1>
    </DefaultLayout>
  );
}

export default Home;
