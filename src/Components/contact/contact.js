import React from "react";
import ContactForm from "./contactform";
import Social from "./Social";

const Contact = () => {
  return (
    <div className='container my-40 p-4'>
      <div className='text-6xl font-bold'>just Say hi.</div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-60'>
        <div>
          <Social />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
export default Contact;
