import React from "react";

const Work = (props) => {
  console.log(props);
  return (
    <div
      id={props.name}
      className='container px-4 py-20  mb-10 md:pr-40 lg:pr-20 '
    >
      <div className='text-4xl font-bold py-5 my-10'>Work Experience</div>
      {/* Project-1 starts */}
      <div className='grid grid-col-1 mt-20'>
        <div>
          <div className='text-2xl font-bold'>Focuses PVT Limited</div>
          <div className='text-gray-400	'>As Web Developer</div>
          <div className='text-gray-300 text-xs	'>Oct -2020 to Nov-2020</div>
          <div className='text-gray-500	 mt-10'>
            Worked as a Web Developer Intern for building website for their
            company. I used Nodejs and mongoDB with features like Oauth 2.0 and
            Open ID connect. Involved in improving the security of the website
            using AWS inspector and AWS cloudwatch
          </div>
          {/* <div className='my-10 grid grid-cols-3 sm:grid-cols-8'>
            <span className='border p-2 m-2 rounded-lg font-medium text-xs text-white bg-indigo-600 '>
              MongoDB
            </span>
            <span className='border p-2 m-2 rounded-lg font-medium text-xs text-white bg-indigo-600'>
              Nodejs
            </span>
            <span className='border p-2 m-2 rounded-lg font-medium text-xs text-white bg-indigo-600'>
              Oauth 2.0
            </span>
            <span className='border p-2 m-2 rounded-lg font-medium text-xs text-white bg-indigo-600'>
              AWS inspector
            </span>
            <span className='border p-2 m-2 rounded-lg font-medium text-xs text-white bg-indigo-600 '>
              AWS cloudwatch
            </span>
          </div> */}
        </div>
      </div>
      {/* Project-2 starts */}
      <div className='grid grid-col-1 mt-20'>
        <div>
          <div className='text-2xl font-bold'>Applex.in </div>
          <div className='text-gray-400	'>As Andorid App Developer</div>
          <div className='text-gray-300 text-xs	'>feb-2021 to march-2021</div>
          <div className='text-gray-500	 mt-10'>
            Worked as an Android App Developer intern and creating a feature in
            an app like Facebook Marketplace with Firebase as a backend. Lead a
            team of 6 developers to complete this project.
          </div>
          {/* <div className='my-10 grid grid-cols-3 sm:grid-cols-8'>
            <span className='border p-2 m-2 rounded-lg font-medium text-xs text-white bg-indigo-600'>
              Android App
            </span>
            <span className='border p-2 m-2 rounded-lg font-medium text-xs text-white bg-indigo-600'>
              Firebase
            </span>
            <span className='border p-2 m-2 rounded-lg font-medium text-xs text-white bg-indigo-600'>
              Facebook Marketplace
            </span>
            <span className='border p-2 m-2 rounded-lg font-medium text-xs text-white bg-indigo-600'>
              Backend
            </span>
          </div> */}
        </div>
      </div>
      {/* Project-3 */}
      <div className='grid grid-col-1 mt-20'>
        <div>
          <div className='text-2xl font-bold'>FEPSI </div>
          <div className='text-gray-400	'>NGO and health care</div>
          <div className='text-gray-300 text-xs	'>Oct -2020 to Nov-2020</div>
          <div className='text-gray-500	 mt-10'>
            Core Committee Member - Contributed majorly to the finance
            department by collecting funds and sponsorships for different
            events.
          </div>
          {/* <div className='my-10 grid grid-cols-3 sm:grid-cols-8'>
            <span className='border p-2 m-2 rounded-lg font-medium text-xs text-white bg-indigo-600 md:-mx-2 lg:m-2'>
              Contribution
            </span>
            <span className='border p-2 m-2 rounded-lg font-medium text-xs text-white bg-indigo-600 md:-mx-2 lg:m-2'>
              teamwork
            </span>
            <span className='border p-2 m-2 rounded-lg font-medium text-xs text-white bg-indigo-600 md:-mx-2 lg:m-2'>
              management
            </span>
            <span className='border p-2 m-2 rounded-lg font-medium text-xs text-white bg-indigo-600 md:-mx-2 lg:m-2'>
              NGO
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Work;
