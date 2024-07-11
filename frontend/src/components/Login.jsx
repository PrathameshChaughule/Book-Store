import React from 'react';
import {Link} from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo={
      email:data.email,
      password:data.password,
    }
    await axios.post("http://localhost:4001/user/login", userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("Login Successfully");
        document.getElementById("my_modal_3").close(); 
        setTimeout(() => {
          window.location.reload();
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        },1000); 
      }
    }).catch((err)=>{
      if(err.response){
        console.log(err)
        toast.error("Error: "+ err.response.data.message);
        setTimeout(() => {}, 2000);
      }
    });
  }
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => 
              document.getElementById("my_modal_3").close()}>
              ✕
            </Link>
          
          <h3 className="font-bold text-lg">LogIn</h3>
          {/*Email*/}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 border rounded-md outline-none text-black"
              {...register("email", { required: true })}            
            />
            {errors.email && <span className='text-sm text-red-500'><br />This field is required</span>}
          </div>
          {/*Password*/}
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-80 px-3 py-1 border rounded-md outline-none text-black"
              {...register("password", { required: true })}
            />
            {errors.password && <span className='text-sm text-red-500'><br />This field is required</span>}
          </div>
          {/*Button*/}
          <div className='flex justify-around mt-4'>
          <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>LogIn</button>
          <p>Not register? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
          </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Login