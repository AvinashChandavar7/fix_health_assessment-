import { useFormContext } from 'react-hook-form';

const StepTwo = () => {
  const { register, formState: { errors } } = useFormContext();

  // Define a list of cities
  const cities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai",
    "Kolkata", "Jaipur", "Ahmedabad", "Pune", "Lucknow",
  ];

  return (
    <div className='w-full flex flex-col items-center justify-center text-white'>
      {/* Age */}
      <div className='flex flex-col my-3'>
        <label>Age<span className='text-red-500'>*</span></label>
        <input {...register("age", { required: 'Age is required' })} type='number' className='bg-transparent border px-4 py-2 rounded-md' />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      {/* City dropdown */}
      <div className='flex flex-col my-3'>
        <label>City<span className='text-red-500'>*</span></label>
        <select {...register("city")} className='bg-transparent border px-4 py-2 rounded-md '>
          {cities.map((city, index) => (
            <option key={index} value={city} className='bg-transparent text-black'>{city}</option>
          ))}
        </select>
      </div>
      {/* Company */}
      <div className='flex flex-col my-3'>
        <label>Company</label>
        <input {...register("company")} className='bg-transparent border px-4 py-2 rounded-md' />
      </div>
    </div>
  )
}

export default StepTwo;
