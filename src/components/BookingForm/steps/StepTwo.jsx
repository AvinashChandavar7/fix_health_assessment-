
import { useFormContext } from 'react-hook-form';

const StepTwo = () => {

  const { register, formState: { errors } } = useFormContext();

  return (
    <div className='w-full flex flex-col items-center justify-center text-white'>
      {/* Age */}
      <div className='flex flex-col my-3'>
        <label>Age<span className='text-red-500'>*</span></label>
        <input {...register("age", { required: 'Age is required' })} className='bg-transparent border px-4 py-2 rounded-md' />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      {/* City */}
      <div className='flex flex-col my-3'>
        <label>City<span className='text-red-500'>*</span></label>
        <input {...register("city")} className='bg-transparent border px-4 py-2 rounded-md' />
      </div>
      {/* Company */}
      <div className='flex flex-col my-3'>
        <label>Company</label>
        <input {...register("company")} className='bg-transparent border px-4 py-2 rounded-md' />
      </div>
    </div>
  )
}

export default StepTwo