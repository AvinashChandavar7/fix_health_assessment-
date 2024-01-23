// eslint-disable-next-line no-unused-vars
export const getDoctors = async (city) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const doctorsData = [
        { name: 'Dr. Smith', expertise: 'Physiotherapy', city: 'New York' },
        { name: 'Dr. Johnson', expertise: 'Sports Medicine', city: 'Chicago' },
        { name: 'Dr. sacassac', expertise: 'Sports Medicine', city: 'Chicago' },
        { name: 'Dr. Williams', expertise: 'Rehabilitation', city: 'Los Angeles' },
        { name: 'Dr. Brown', expertise: 'Orthopedic', city: 'Houston' },
      ];

      // Filter doctors by city if a city is provided
      const filteredDoctors = city ? doctorsData.filter(doctor => doctor.city === city) : doctorsData;

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


