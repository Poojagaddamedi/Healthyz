import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AOS from "aos";
import "aos/dist/aos.css";

const MainContactUsPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

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
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSubmitSuccess(true);
      console.log("Sended");
      reset();
    } catch (error) {
      setSubmitError(error.message || "Something went wrong");
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

      {/* Calendly Widget Section */}
      {/* <div
        data-aos="fade-up"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "2rem",
          backgroundColor: "#f8f9fa",
          marginTop: "1rem",
        }}
      >
        <h1
          style={{
            color: "black",
            fontSize: "3rem",
            fontWeight: "bold",
            textShadow: "2px 2px 10px grey",
            padding: "0.5rem 1.5rem",
            borderRadius: "10px",
          }}
        >
          Book Your Meet With Us -
        </h1>
        <iframe
          src="https://calendly.com/vinaypatel898944"
          title="Schedule a Meeting"
          style={{
            minWidth: "320px",
            width: "100%",
            maxWidth: "800px",
            height: "700px",
            border: "none",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        /> */}
      {/* </div> */}
      <div
        style={{
          overflow: "hidden",
          justifyContent:"center",
          alignItems : "center",
          margin : "3rem",
          marginLeft:"13rem"
        }}
      >
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&showPrint=0&src=dmluYXlwYXRlbDg5ODk0NEBnbWFpbC5jb20&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4tZ2IuaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%230B8043&color=%230B8043"
          style={{border:"solid 1px #777"}}
          width="800"
          height="600"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </>
  );
};

export default MainContactUsPage;
