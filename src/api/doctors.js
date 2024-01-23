import { doctorsData } from "../constants/data";

// eslint-disable-next-line no-unused-vars
export const getDoctors = async (city) => {
  return new Promise(resolve => {
    setTimeout(() => {
      // Filter doctors by city if a city is provided
      const filteredDoctors = city
        ? doctorsData.filter(doctor => doctor.city === city)
        : doctorsData;

      resolve(filteredDoctors);
    }, 1000);
  });
};


// const API_URL = "https://your-free-server.com/api";

// export const getDoctors = async (city) => {
//   try {
//     const response = await fetch(`${API_URL}/doctors?city=${city}`);

//     if (!response.ok) {
//       throw new Error(`Error fetching data: ${response.statusText}`);
//     }

//     const doctors = await response.json();

//     return doctors;

//   } catch (error) {
//     console.error(`Error in getDoctors: ${error.message}`);

//     throw error;
//   }
// };


