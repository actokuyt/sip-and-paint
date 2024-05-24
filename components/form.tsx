"use client";

import React from "react";
import axios from "axios";
import Swal from "sweetalert2";

interface RegisterFormTypes {
  fullName: string;
  email: string;
  phone: string;
  homeAddress: string;
  dateOfBirth: string;
  dietaryRequirement: string;
  transactionId: string;
}

export function RegistrationForm() {
  const [formValues, setFormValues] = React.useState<RegisterFormTypes>({
    fullName: "",
    email: "",
    phone: "",
    homeAddress: "",
    dateOfBirth: "",
    dietaryRequirement: "",
    transactionId: "",
  });
  const [submitState, setSubmitState] = React.useState("Submit");

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  }

  function resetForm() {
    setFormValues({
      fullName: "",
      email: "",
      phone: "",
      homeAddress: "",
      dateOfBirth: "",
      dietaryRequirement: "",
      transactionId: "",
    });
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("Submitting...");
    try {
      const response = await axios.post("/api/register", formValues);
      if (response.status === 200) {
        Swal.fire("Success", "You have registered successfully", "success");
        resetForm();
      }
    } catch (error) {
      Swal.fire(
        "Error",
        "There was an error submitting the form, Please check the details on the form.",
        "error"
      );
    } finally {
      setSubmitState("Submit");
    }
  }

  return (
    <form onSubmit={submit} className="grid grid-cols-1 text-[#927383]">
      <label htmlFor="fullName" className="block font-semibold">
        Full Name
      </label>
      <input
        type="text"
        placeholder="Full Name"
        title="Full Name"
        name="fullName"
        value={formValues.fullName}
        required
        onChange={handleInputChange}
        className="p-2 bg-transparent border border-gray-500 rounded mb-4"
      />
      <label htmlFor="email" className="block font-semibold">
        Email
      </label>
      <input
        type="email"
        placeholder="Email"
        title="Email"
        name="email"
        value={formValues.email}
        required
        onChange={handleInputChange}
        className="p-2 bg-transparent border border-gray-500 rounded mb-4"
      />
      <label htmlFor="phone" className="block font-semibold">
        Phone
      </label>
      <input
        type="tel"
        placeholder="Phone"
        title="Phone"
        name="phone"
        value={formValues.phone}
        required
        onChange={handleInputChange}
        className="p-2 bg-transparent border border-gray-500 rounded mb-4"
      />
      <label htmlFor="phone" className="block font-semibold">
        Home Address
      </label>
      <input
        type="text"
        placeholder="Home Address"
        title="Home Address"
        name="homeAddress"
        value={formValues.homeAddress}
        required
        onChange={handleInputChange}
        className="p-2 bg-transparent border border-gray-500 rounded mb-4"
      />
      <label htmlFor="dateOfBirth" className="block font-semibold">
        Date of Birth
      </label>
      <input
        type="date"
        placeholder="Date of Birth"
        title="Date of Birth"
        name="dateOfBirth"
        value={formValues.dateOfBirth}
        required
        onChange={handleInputChange}
        className="p-2 bg-transparent border border-gray-500 rounded mb-4"
      />
      <label htmlFor="dietaryrequirements" className="block font-semibold">
        Dietary Requirements (optional)
      </label>
      <textarea
        placeholder="Dietary Requirements"
        name="dietaryRequirement"
        rows={5}
        value={formValues.dietaryRequirement}
        onChange={handleInputChange}
        spellCheck={true}
        className="p-2 bg-transparent border border-gray-500 rounded mb-4"
      ></textarea>
      <label htmlFor="transactionId" className="block font-semibold">
        Transaction Id
      </label>
      <input
        type="text"
        placeholder="Payment Transaction Id"
        title="transactionId"
        name="transactionId"
        value={formValues.transactionId}
        required
        onChange={handleInputChange}
        className="p-2 bg-transparent border border-gray-500 rounded mb-4"
      />
      <button
        type="submit"
        className="w-2/5 mx-auto mt-8 border border-gray-500 p-2 rounded-lg"
      >
        {submitState}
      </button>
    </form>
  );
}

interface ContactMail {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}


export default function ContactForm () {
  const [formValues, setFormValues] = React.useState<ContactMail>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [submitState, setSubmitState] = React.useState("Send");

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  }

  function resetForm() {
    setFormValues({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("Sending...");
    try {
      const response = await axios.post("/api/contact", formValues);
      if (response.status === 200) {
        Swal.fire("Success", "Message Successfully Sent", "success");
        resetForm();
      }
    } catch (error) {
      Swal.fire(
        "Error",
        "There was an error submitting the form, Please check the details on the form.",
        "error"
      );
    } finally {
      setSubmitState("Send");
    }
  }


    return(
      <form onSubmit={submit} className="grid grid-cols-1 gap-2 w-full">
      <input
        type="text"
        placeholder="First Name"
        title="First Name"
        name="firstName"
        value={formValues.firstName}
        required
        onChange={handleInputChange}
        className="border border-gray-300 p-2 rounded w-full"
      />
      <input
        type="text"
        placeholder="Last Name"
        title="Last Name"
        name="lastName"
        value={formValues.lastName}
        required
        onChange={handleInputChange}
        className="border border-gray-300 p-2 rounded"
      />
      <input
        type="email"
        placeholder="johndoe@gmail.com"
        title="Email"
        name="email"
        value={formValues.email}
        required
        onChange={handleInputChange}
        className="border border-gray-300 p-2 rounded"
      />
      <textarea
        name="message"
        id="message"
        rows={5}
        placeholder="Message"
        value={formValues.message}
        onChange={handleInputChange}
        spellCheck={true}
        className="border border-gray-300 p-2 rounded"
      ></textarea>
      <button
        type="submit"
        className="p-2 border border-gray-300 rounded w-[30%] bg-white"
      >
        {submitState}
      </button>
    </form>
    )
}
