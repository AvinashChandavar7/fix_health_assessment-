import { useFormContext } from 'react-hook-form';

const StepOne = () => {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div className='w-full flex flex-col items-center justify-center  text-white  '>
      <div className='flex flex-col '>

        <div className='flex flex-col my-4 w-full'>
          <label className="mt-1">
            Name
            <span className='text-red-500'>*</span>
          </label>
          <input
            {...register("name", { required: 'Name is required' })}
            className='bg-transparent border px-4 py-2 rounded-md min-w-[500px] '
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>


        <div className='flex flex-col my-3'>
          <label>
            Phone No
            <span className='text-red-500'>*</span>
          </label>
          <input {...register("phoneNumber", { required: 'Phone number is required', pattern: /^\d{10}$/ })}
            className='bg-transparent border px-4 py-2 rounded-md'
          />
          {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
        </div>
      </div>
    </div>
  )
}

export default StepOne