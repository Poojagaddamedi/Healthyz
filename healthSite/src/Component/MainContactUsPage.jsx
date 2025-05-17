// MainContactUsPage.jsx
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainContactUsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    reset(); // reset form after submission
  };

  return (
    <div
      className="min-h-screen my-4 flex flex-col items-center justify-center bg-cover bg-center"
    >
      <img src='https://images.pexels.com/photos/205410/pexels-photo-205410.jpeg?cs=srgb&dl=pexels-tahir-shaw-50609-205410.jpg&fm=jpg'></img>
      <div className="bg-white bg-opacity-90 p-8 rounded-lg w-full max-w-4xl" data-aos="fade-up">
        <h1 className="text-4xl font-bold text-center mb-6">Contact us</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Row 1: Name and Gender */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              {...register('name', { required: true })}
              placeholder="Name:"
              className="border p-2 flex-1 rounded"
            />
            <input
              {...register('gender', { required: true })}
              placeholder="Gender:"
              className="border p-2 flex-1 rounded"
            />
          </div>

          {/* Row 2: Height, Weight, Age */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              {...register('height', { required: true })}
              placeholder="Height:"
              className="border p-2 flex-1 rounded"
            />
            <input
              {...register('weight', { required: true })}
              placeholder="Weight:"
              className="border p-2 flex-1 rounded"
            />
            <input
              {...register('age', { required: true })}
              placeholder="Age:"
              className="border p-2 flex-1 rounded"
            />
          </div>

          {/* Row 3: Mobile and Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              {...register('mobile', { required: true })}
              placeholder="Mob. No:"
              className="border p-2 flex-1 rounded"
            />
            <input
              {...register('email', { required: true })}
              placeholder="Email:"
              className="border p-2 flex-1 rounded"
            />
          </div>

          {/* Message */}
          <textarea
            {...register('message')}
            placeholder="Message:"
            className="border p-2 w-full rounded h-28"
          ></textarea>

          <div className="text-center">
            <button
              type="submit"
              className="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainContactUsPage;
