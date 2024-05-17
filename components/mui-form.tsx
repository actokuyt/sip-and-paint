"use client";

import React from "react";
import axios from "axios";
import Swal from "sweetalert2";

interface RegisterFormTypes {
  fullName: string;
  email: string;
  phone: string;
  dietaryRequirement: string;
  options: string;
}

export function RegistrationForm() {
  const [formValues, setFormValues] = React.useState<RegisterFormTypes>({
    fullName: "",
    email: "",
    phone: "",
    dietaryRequirement: "",
    options: "",
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

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("Submitting...");
    console.log(formValues);
    try {
      const response = await axios.post("/api/register", formValues);
      Swal.fire("Success", "You have registered successfully", "success");
    } catch (error) {
      Swal.fire("Error", "There was an error submitting the form", "error");
    } finally {
      setSubmitState("Submit");
    }
  }

  return (
    <form onSubmit={submit} className="grid grid-cols-1 gap- text-[#927383]">
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
      <label htmlFor="dietaryrequirements" className="block font-semibold">
        Dietary Requirements (optional)
      </label>
      <textarea
        placeholder="Dietary Requirements"
        name="dietaryrequirements"
        rows={5}
        value={formValues.dietaryRequirement}
        onChange={handleInputChange}
        spellCheck={true}
        className="p-2 bg-transparent border border-gray-500 rounded mb-4"
      ></textarea>
      <fieldset className="mb-4">
        <legend className="block font-semibold mb-2">Options</legend>
        <label className="mr-4">
          <input
            type="radio"
            name="options"
            value="standard"
            checked={formValues.options === "standard"}
            onChange={handleInputChange}
            className="mr-2"
          />
          Standard
        </label>
        <label className="mr-4">
          <input
            type="radio"
            name="options"
            value="general"
            checked={formValues.options === "general"}
            onChange={handleInputChange}
            className="mr-2"
          />
          General
        </label>
        <label>
          <input
            type="radio"
            name="options"
            value="vip"
            checked={formValues.options === "vip"}
            onChange={handleInputChange}
            className="mr-2"
          />
          VIP
        </label>
      </fieldset>
      <button
        type="submit"
        className="w-2/5 mx-auto mt-8 border border-gray-500 p-2 rounded-lg"
      >
        {submitState}
      </button>
    </form>
  );
}
