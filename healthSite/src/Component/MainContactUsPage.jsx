import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainContactUsPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send message');
      
      setSubmitSuccess(true);
      console.log("Sended");
      reset();
    } catch (error) {
      setSubmitError(error.message || 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "300px",
          backgroundImage:
            "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "sepia(0.4) contrast(0.9) brightness(0.95)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "3rem",
            fontWeight: "bold",
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.6)",
            padding: "0.5rem 1.5rem",
            borderRadius: "10px",
          }}
        >
          Contact us
        </h1>
      </div>

      <div className="d-flex justify-content-center">
        <div style={{
          height: "auto",
          width: "100%",
          maxWidth: "800px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          background: "#ffffff",
          borderRadius: "20px",
        }} className="relative p-6 my-4 border flex flex-col items-center">
          
          {/* Form Header */}
          <div className="text-center mb-6 w-full">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              CONTACT FORM
            </h2>
            <p className="text-gray-600">Fill the form below to get in touch</p>
          </div>

          {submitError && (
            <div className="text-center text-red-600 mb-4">
              {submitError}
            </div>
          )}

          {submitSuccess && (
            <div className="text-center text-green-600 mb-4">
              Message sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full px-4">
            <div className="row g-4">
              <div className="row justify-content-center">
                {/* Name */}
                <div className="col-12 col-md-5 my-4">
                  <input
                    {...register('name', { required: true })}
                    placeholder="NAME"
                    className="form-control-sm border-2 border-black p-2 w-100 rounded-lg focus:outline-none focus:border-green-900 focus:ring-2 focus:ring-green-900/20 transition-all duration-300 placeholder-gray-500 bg-white text-black"
                  />
                  {errors.name && <span className="text-red-500">This field is required</span>}
                </div>

                {/* Gender */}
                <div className="col-12 col-md-5 my-4">
                  <input
                    {...register('gender', { required: true })}
                    placeholder="GENDER"
                    className="form-control-sm border-2 border-black p-2 w-100 rounded-lg focus:outline-none focus:border-green-900 focus:ring-2 focus:ring-green-900/20 transition-all duration-300 placeholder-gray-500 bg-white text-black"
                  />
                  {errors.gender && <span className="text-red-500">This field is required</span>}
                </div>
              </div>

              {/* Height, Weight & Age */}
              <div className="row g-1">
                <div className="col-md-4">
                  <input
                    {...register('height', { required: true })}
                    placeholder="HEIGHT (cm)"
                    className="form-control-sm border-2 border-black p-1 w-full rounded-lg focus:outline-none focus:border-green-900 focus:ring-2 focus:ring-green-900/20 transition-all duration-300 placeholder-gray-500 bg-white text-black"
                  />
                  {errors.height && <span className="text-red-500">This field is required</span>}
                </div>
                
                <div className="col-md-4">
                  <input
                    {...register('weight', { required: true })}
                    placeholder="WEIGHT (kg)"
                    className="form-control-sm border-2 border-black p-1 w-full rounded-lg focus:outline-none focus:border-green-900 focus:ring-2 focus:ring-green-900/20 transition-all duration-300 placeholder-gray-500 bg-white text-black"
                  />
                  {errors.weight && <span className="text-red-500">This field is required</span>}
                </div>
                
                <div className="col-md-4">
                  <input
                    {...register('age', { required: true })}
                    placeholder="AGE"
                    className="form-control-sm border-2 border-black p-1 w-full rounded-lg focus:outline-none focus:border-green-900 focus:ring-2 focus:ring-green-900/20 transition-all duration-300 placeholder-gray-500 bg-white text-black"
                  />
                  {errors.age && <span className="text-red-500">This field is required</span>}
                </div>
              </div>

              <div className="row g-4">
                {/* Mobile Number */}
                <div className="col-md-6">
                  <input
                    {...register('mobile', { required: true })}
                    placeholder="MOBILE NUMBER"
                    className="form-control-sm border-2 border-black p-2 w-full rounded-lg focus:outline-none focus:border-green-900 focus:ring-2 focus:ring-green-900/20 transition-all duration-300 placeholder-gray-500 bg-white text-black"
                  />
                  {errors.mobile && <span className="text-red-500">This field is required</span>}
                </div>

                {/* Email Address */}
                <div className="col-md-6">
                  <input
                    {...register('email', { 
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
                    })}
                    placeholder="EMAIL ADDRESS"
                    className="form-control-sm border-2 border-black p-2 w-full rounded-lg focus:outline-none focus:border-green-900 focus:ring-2 focus:ring-green-900/20 transition-all duration-300 placeholder-gray-500 bg-white text-black"
                  />
                  {errors.email && <span className="text-red-500">Valid email is required</span>}
                </div>
              </div>

              {/* Message */}
              <div className="col-12">
                <div className="mx-auto w-100">
                  <textarea
                    {...register('message', { required: true })}
                    className="form-control form-control-md border-2 border-dark p-3 rounded w-100"
                    rows="6"
                    placeholder="YOUR MESSAGE"
                  ></textarea>
                  {errors.message && <span className="text-red-500">This field is required</span>}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-4">
              <button
                type="submit"
                disabled={submitting}
                className="bg-green-900 my-4 text-white px-10 py-3 rounded-lg hover:bg-green-800 transition-all duration-300 font-semibold text-lg shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending...' : 'SEND MESSAGE'}
              </button>
            </div>
          </form>

          {/* Footer Note */}
          <div className="mt-10 text-center text-sm text-gray-500">
            <p>We'll respond within 24 hours</p>
            <div className="flex justify-center space-x-4 mt-2">
              <span>Secure Communication</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContactUsPage;