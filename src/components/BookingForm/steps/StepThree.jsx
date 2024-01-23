import { useFormContext } from 'react-hook-form';

const StepThree = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className='w-full flex flex-col items-center justify-center text-white'>
      <div className='flex flex-col my-3'>
        <label>Chief Complaints<span className='text-red-500'>*</span></label>
        <textarea {...register("chiefComplaints", { required: 'Chief complaints are required' })} className='bg-transparent border px-4 py-2 rounded-md' />
        {errors.chiefComplaints && <p>{errors.chiefComplaints.message}</p>}
      </div>
    </div>
  )
}

export default StepThree