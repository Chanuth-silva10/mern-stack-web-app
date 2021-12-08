import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import { getAllCars } from "../redux/actions/carsActions";

function Home() {
  const { cars } = useSelector((state) => state.carsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  return (
    <DefaultLayout>
      <h1>Home</h1>
      <h1>{cars.length}</h1>
    </DefaultLayout>
  );
}

export default Home;
