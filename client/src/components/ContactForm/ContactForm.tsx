import React, {useState} from "react";
import { useForm } from "react-hook-form";

function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: any) => {
    console.log(data);
    setSubmitted(true);
    reset();
  }

  return (
    <div className="min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto py-12">
      <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
    <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
        Contact Us
      </h1>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        First Name
      </label>
      <input 
      {...register("firstName", { required: true })}
      className="appearance-none block w-full bg-gray-200 border text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
      {errors.firstName && (
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
      )}
      </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Last Name
      </label>
      <input 
      {...register("lastName", { required: true })}
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
       {errors.lastName && (
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
      )}
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        E-mail
      </label>
      <input
      {...register("email", { required: true })} 
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"/>
       {errors.email && (
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
      )}
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Message
      </label>
      <textarea
      {...register("message", { required: true })} 
      className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
       {errors.message && (
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
      )}
    </div>
  </div>
  {submitted && (
            <h1 className="text-green-500 mb-5">Thank you for your message!</h1>
          )}
  <div className="md:flex md:items-center">
    <div className="md:w-1/3">
      <button className="shadow btn hover:scale-110 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
        Send
      </button>
    </div>
    <div className="md:w-2/3"></div>
  </div>
</form>
</div>
</div>
  );
}

export default ContactForm;