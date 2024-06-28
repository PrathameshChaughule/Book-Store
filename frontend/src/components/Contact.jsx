import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className=" dark:bg-slate-900 dark:text-white border p-10 rounded-lg">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-3xl">Contact Us</h3>
            {/*Name*/}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your fullname"
                className="text-black w-96 px-3 py-1 border rounded-md outline-none"
                {...register("name", { required: true })}
              />
            </div>
            {/*Email*/}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-96 px-3 py-1 border rounded-md outline-none text-black"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  <br />
                  This field is required
                </span>
              )}
            </div>
            {/*Message*/}
            <div className="mt-4 space-y-2">
              <span>Message</span>
              <br />
              <textarea
                type="text"
                placeholder="Type your message"
                className="w-96 h-36 px-3 py-1 border rounded-md outline-none text-black"
                {...register("message")}
              />
            </div>
            {/*Button*/}
            <div className=" justify-around mt-4">
              <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
