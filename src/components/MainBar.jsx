"use client";

import React, { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { SideBar } from "./SideBar";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "@/schema/validationSchema";

const MainBar = () => {
  const [phoneNumber1, setPhoneNumber1] = useState();
  const [phoneNumber2, setPhoneNumber2] = useState();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data) => {
    setFormData(data);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="md:hidden">
        <SideBar />
      </div>
      <main className="w-full p-8 space-y-7">
        <h2 className="text-2xl font-semibold">Personal Info</h2>

        <form className="space-y-5 md:w-1/2" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-1">
            <label htmlFor="gender">Provide your gender</label>
            <select
              name="gender"
              id="gender"
              className="w-full px-2 text-sm border rounded-lg border-[#E5E5E5] h-14 md:text-lg placeholder:text-base text-secondary"
              {...register("gender")}
            >
              <option value="">Please specify</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender ? (
              <span className="text-red-500">{errors.gender.message}</span>
            ) : (
              <></>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="phoneNumber1">Phone Number</label>

            <div className="md:flex items-center space-y-2 gap-2">
              <select
                {...register("phoneNumber1")}
                name="phoneNumber1"
                id="phoneNumber1"
                className="w-full px-2 text-sm border rounded-lg border-[#E5E5E5] h-14 md:text-lg placeholder:text-base text-secondary "
              >
                <option value="mobile">Mobile</option>
                <option value="work">Work</option>
              </select>

              <PhoneInput
                placeholder="Enter phone number"
                value={phoneNumber1}
                onChange={setPhoneNumber1}
                className="w-full px-5 md:pl-4 text-sm border rounded-lg border-[#E5E5E5] h-14 outline-2 md:text-lg placeholder:text-base "
                error={
                  phoneNumber1
                    ? isValidPhoneNumber(phoneNumber1)
                      ? undefined
                      : "Invalid phone number"
                    : "Phone number required"
                }
              />
            </div>

            <div className="md:flex items-center space-y-2 gap-2">
              <select
                {...register("phoneNumber2")}
                name="phoneNumber2"
                id="phoneNumber2"
                className="w-full px-2 text-sm border rounded-lg border-[#E5E5E5] h-14 md:text-lg placeholder:text-base text-secondary"
              >
                <option value="Work">Work</option>
                <option value="mobile">Mobile</option>
              </select>

              <PhoneInput
                placeholder="Enter phone number"
                value={phoneNumber2}
                onChange={setPhoneNumber2}
                className="w-full px-5 md:pl-4 text-sm border rounded-lg border-[#E5E5E5] h-14 outline-2 md:text-lg placeholder:text-base"
                error={
                  phoneNumber2
                    ? isValidPhoneNumber(phoneNumber2)
                      ? undefined
                      : "Invalid phone number"
                    : "Phone number required"
                }
              />
            </div>

            <button
              type="button"
              className="w-full px-2 text-sm border rounded-lg border-[#E5E5E5] h-10 md:text-lg placeholder:text-base text-secondary max-w-fit"
            >
              Add phone number
            </button>
          </div>

          <div className="space-y-1">
            <label htmlFor="date">Date of birth</label>
            <input
              {...register("dateOfBirth")}
              type="date"
              name="dateOfBirth"
              id="date"
              className="w-full px-2 text-sm border rounded-lg border-[#E5E5E5] h-14 md:text-lg placeholder:text-base text-secondary"
            />
            {errors.dateOfBirth ? (
              <span className="text-red-500">{errors.dateOfBirth.message}</span>
            ) : (
              <></>
            )}
          </div>

          <div className="space-y-1">
            <label htmlFor="insurance">Insurance</label>
            <select
              name="insurance"
              id="insurance"
              {...register("insurance")}
              className="w-full px-2 text-sm border rounded-lg border-[#E5E5E5] h-14 md:text-lg placeholder:text-base text-secondary"
            >
              <option value="">Please specify</option>
              <option value="insurance1">Insurance 1</option>
              <option value="insurance2">Insurance 2</option>
              <option value="insurance3">Insurance 3</option>
            </select>
            {errors.insurance ? (
              <span className="text-red-500">{errors.insurance.message}</span>
            ) : (
              <></>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="py-2 text-white bg-teal-700 rounded-md px-7"
            >
              Next
            </button>
          </div>
        </form>
      </main>

      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 max-w-md rounded-md w-2/3 ">
            <h2 className="text-2xl font-semibold mb-4">User Details</h2>
            {formData && (
              <>
                <p>
                  <strong>Gender:</strong> {formData.gender}
                </p>
                <p>
                  <strong>Date of Birth:</strong>{" "}
                  {Date(formData.dateOfBirth.toISOString())}
                </p>
              </>
            )}
            <button
              className="mt-4 bg-teal-700 text-white py-2 px-4 rounded-md"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MainBar;
