"use client";


import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    // Overall container
    <div className="min-h-screen mt-20">
      <div className="flex flex-col md:flex-row md:items-center items-center p-3 max-w-3xl mx-auto">

        {/* left side */}
        <div className="flex-1">
          <Link href="/" className='whitespace-nowrap text-4xl  font-semibold dark:text-white self-center'>
          <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1 px-2 text-white rounded-lg'>Atibyan</span> 
          Blog
          </Link>
        </div>

        {/* right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div className="">
              <Label htmlFor="username" value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label htmlFor="username" value="E-mail" />
              <TextInput type="email" placeholder="Email@gmail.com" id="email" />
            </div>
            <div>
              <Label htmlFor="username" value="Enter Password" />
              <TextInput type="text" placeholder="password" id="password" />
            </div>
            <Button gradientDuoTone='purpleToPink'  type="submit">Sign Up</Button>
          </form>

          <div className="mt-5">
            <Button gradientDuoTone='purpleToPink' outline type="submit" className="w-full">Continue With Google</Button>
          </div>

          {/* sign in shinanigans */}
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an Account?</span>
            <Link to='/signin' className="text-blue-500"> Sign In</Link>

          </div>
        </div>
      </div>

    </div>
  )
}
