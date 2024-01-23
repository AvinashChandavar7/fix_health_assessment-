import { useState, useEffect } from 'react';
import { getDoctors } from '../api/doctors';



const useDoctors = (city) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const doctorsList = await getDoctors(city);
        setDoctors(doctorsList);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };

    fetchDoctors();
  }, [city]);

  return { doctors, loading, error };
}

export default useDoctors