import { RegistrationForm } from "@/components/form";
import Link from "next/link";

export default function Register() {
  return (
    <div className="flex items-center justify-center p-2 ">
      <div className="md:w-[80%] md:mx-auto lg:w-[50%] mt-16 md:mt-24" >
        <div className="text-[#927383] bg- border border-gray-500 rounded mb-4 p-2">
          <span>Ticket Options</span>
          <div className="my-4 text-center w-[90%] md:w-[60%] mx-auto flex justify-between">
            <Link
              href={"https://pay.sumup.com/b2c/QHGWZJQ9"}
              className="border border-gray-500 rounded p-2 bg-gray-200 basis-1/3 m-2"
            >
              General
            </Link>
            <Link
              href={"https://pay.sumup.com/b2c/Q7DXEYDX"}
              className="border border-gray-500 rounded p-2 bg-gray-200 basis-1/3 m-2"
            >
              VIP
            </Link>
          </div>
          <p className="">
            Please complete payment before submitting this form.{" "}
          </p>
        </div>
        <RegistrationForm />
      </div>
    </div>
  );
}
