const initialData = {
  cars: [
    {
      name: "Tata Altroz",
      image: "https://www.w3schools.com/images/w3schools_green.jpg",
    },
    {
      name: "Tata Altroz",
      image: "https://www.w3schools.com/images/w3schools_green.jpg",
    },
    {
      name: "Tata Altroz",
      image: "https://www.w3schools.com/images/w3schools_green.jpg",
    },
    {
      name: "Tata Altroz",
      image: "https://www.w3schools.com/images/w3schools_green.jpg",
    },
    {
      name: "Tata Altroz",
      image: "https://www.w3schools.com/images/w3schools_green.jpg",
    },
    {
      name: "Tata Altroz",
      image: "https://www.w3schools.com/images/w3schools_green.jpg",
    },
    {
      name: "Tata Altroz",
      image: "https://www.w3schools.com/images/w3schools_green.jpg",
    },
    {
      name: "Tata Altroz",
      image: "https://www.w3schools.com/images/w3schools_green.jpg",
    },
  ],
};

export const carsReducer = (state = initialData, action) => {
  switch (action.type) {
    case "GET_ALL_CARS": {
      return {
        ...state,
        cars: action.payload,
      };
    }

    default:
      return state;
  }
};
