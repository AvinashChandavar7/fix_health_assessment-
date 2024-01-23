/* eslint-disable react/prop-types */

import useDoctors from "../../hook/useDoctors";


const DoctorsList = ({ city }) => {
  const { doctors, loading, error } = useDoctors(city);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {doctors.map(doctor => (
        <div key={doctor.name}>
          <p>Name: {doctor.name}</p>
          <p>Expertise: {doctor.expertise}</p>
          <p>City: {doctor.city}</p>
        </div>
      ))}
    </div>
  );
};

export default DoctorsList;