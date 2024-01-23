/* eslint-disable react/prop-types */
import { useFormContext } from 'react-hook-form';
import DoctorsList from "../DoctorsList";

const StepFour = ({ formData }) => {

  const { register, formState: { errors } } = useFormContext();
  const shouldAskForExperience = formData.age && parseInt(formData.age, 10) >= 40;


  return (
    <div className='w-full flex flex-col items-center justify-center text-white'>
      {shouldAskForExperience && (
        <div className='flex flex-col my-3'>
          <label>Previous Experience with Physiotherapy<span className='text-red-500'>*</span></label>
          <input {...register("previousPhysiotherapy")} className='bg-transparent border px-4 py-2 rounded-md' />
        </div>
      )}
      {/* Display Doctors based on the city */}
      <DoctorsList city={formData.city} />
    </div>
  )
}

export default StepFour