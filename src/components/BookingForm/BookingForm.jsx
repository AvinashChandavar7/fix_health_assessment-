import { useEffect, useState } from "react";
import { useForm, FormProvider } from 'react-hook-form';
import { StepFour, StepOne, StepThree, StepTwo, StepFive } from "./steps";
import { useLocation } from "react-router-dom";


const BookingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    age: '',
    city: '',
    company: '',
    chiefComplaints: '',
    previousPhysiotherapy: '',
  });

  const methods = useForm();
  const { handleSubmit, errors } = methods;

  const location = useLocation();

  const getQueryParams = (query) => {
    return new URLSearchParams(query);
  };

  useEffect(() => {
    const queryParams = getQueryParams(location.search);
    const cityParam = queryParams.get('city');

    if (cityParam) {
      setFormData({ ...formData, city: cityParam });
    }
  }, [formData, location.search]);

  const onSubmit = (data) => {
    const newFormData = { ...formData, ...data };
    setFormData(newFormData);

    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      // This is the final step, handle the complete form submission here
      console.log('Final form data:', newFormData);
      // You can send the data to an API endpoint or handle it as needed
      // For example: axios.post('/api/submit-form', newFormData);
      setCurrentStep(5);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <StepOne />;
      case 2: return <StepTwo />;
      case 3: return <StepThree />;
      case 4: return <StepFour formData={formData} />;
      case 5: return <StepFive />;
      default: return null;
    }
  };

  return (
    <FormProvider {...methods} >
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col items-center justify-center border p-16 shadow-md shadow-white rounded-lg">
        <div className=" py-20">
          {renderStep()}
        </div>

        {currentStep !== 5 && (
          <div className="flex gap-2 my-4 w-full h-full justify-center items-end">
            <button type="button" onClick={handleBack} className="bg-slate-600 px-8 py-2 rounded-md">
              Back
            </button>
            <button type="submit" className="bg-slate-600 px-8 py-2 rounded-md">
              {currentStep === 4 ? 'Submit' : 'Next'}
            </button>
          </div>
        )}
      </form>
    </FormProvider>
  )
}

export default BookingForm