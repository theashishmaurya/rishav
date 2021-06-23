import React from "react";
import ecomweb from "../../image/ecommerce.png";
import covidTrack from "../../image/covidtracker.jpg";
import chat from "../../image/Chat.jpg";
import mobileecom from "../../image/mobileecom.jpg";
const Projects = () => {
  return (
    <div className='container p-2 mt-20'>
      <h1 className='text-4xl font-bold'>Personal Projects</h1>
      {/* Project One  */}
      <div className='my-20 p-2 grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='col-span-2 row-start-2 col-start-1 lg:row-auto lg:col-auto'>
          <div className='text-2xl font-bold '>Shoppholic</div>
          <div className='text-gray-400	'>E-commerce Website</div>
          <ul className='my-5 text-gray-600'>
            <li className='py-2 my-5'>
              An E-commerce website for buying and selling your clothes with
              reasonable price and various other options.
            </li>
            <li className='py-2 my-5'>
              Made using HTML,CSS,Javascript and php and mysql in backend and
              also integrated Razorpay payment gateway and also Oauth 2.0 and
              Open ID connect Protocol for fast signing in.
            </li>
            <li className='py-2 my-5'>
              We also take all information regarding ip address and give real
              time analytics regarding our website.
            </li>
          </ul>
        </div>

        <div className='col-span-2 col-start-1 row-start-1 row-span-1 lg:col-auto lg:row-auto rounded-t-xl '>
          <img clasName='rounded-t-lg' src={ecomweb} alt='' />
        </div>
      </div>
      {/* *********************************************** Project-2 ************************************************************ */}
      <div className='my-20 p-2 grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='col-span-2 row-start-2 col-start-1 lg:row-auto lg:col-auto'>
          <div className='text-2xl font-bold '>Covid-19 Tracker</div>
          <div className='text-gray-400	'>
            Nodejs,mongodB,redis,cron jobs backup
          </div>
          <ul className='my-5 text-gray-600'>
            <li className='py-2 my-5'>
              It’s a COVID-19 tracker which shows real data using graphs with
              chart.js and map using mappa.js.
            </li>
            <li className='py-2 my-5'>
              It also uses mongodb for storing user information and we also used
              cron jobs to automatically take backup of our data using spawn
              child process and uses redis as a cache.
            </li>
          </ul>
        </div>

        <div className='col-span-2 col-start-1 row-start-1 row-span-1 lg:col-auto lg:row-auto rounded-t-xl '>
          <img clasName='rounded-t-lg' src={covidTrack} alt='' />
        </div>
      </div>
      {/* ***********************************************Project-3 *********************************************** */}
      <div className='my-20 p-2 grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='col-span-2 row-start-2 col-start-1 lg:row-auto lg:col-auto'>
          <div className='text-2xl font-bold '>
            Real time chatting Application
          </div>
          <div className='text-gray-400	'>
            Websocket, HAPROXY , DOCKER, REDIS, EC2 INSTANCE , NODEJS
          </div>
          <ul className='my-5 text-gray-600'>
            <li className='py-2 my-5'>
              Used HAPROXY as a reverse proxy and also websocket autoscaling and
              multiple docker containers running nodejs for high availability
              and also docker compose for running multiple containers.
            </li>
            <li className='py-2 my-5'>
              Used Redis as a publisher subscriber model to publish to a channel
              and get messages from it and works over HTTP1.1.
            </li>
          </ul>
        </div>

        <div className='col-span-2 col-start-1 row-start-1 row-span-1 lg:col-auto lg:row-auto rounded-t-xl '>
          <img clasName='rounded-t-lg' src={chat} alt='' />
        </div>
      </div>
      {/* ************************************************Project-4******************************************************** */}
      <div className='my-20 p-2 grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='col-span-2 row-start-2 col-start-1 lg:row-auto lg:col-auto'>
          <div className='text-2xl font-bold '>Bahi-E-Khaata Grocery</div>
          <div className='text-gray-400	'>
            (Android App for E-commerce Platform
          </div>
          <ul className='my-5 text-gray-600'>
            <li className='py-2 my-5'>
              An E-commerce app for my fathers business regarding groceries and
              other food items.
            </li>
            <li className='py-2 my-5'>
              Used Firebase as a solution to backend and Android Studio as a
              tool for developing it
            </li>
          </ul>
        </div>

        <div className='col-span-2 col-start-1 row-start-1 row-span-1 lg:col-auto lg:row-auto rounded-t-xl '>
          <img
            clasName='rounded-t-lg '
            style={({ maxHeight: "60%" }, { maxWidth: "100%" })}
            src={mobileecom}
            alt=''
          />
        </div>
      </div>
    </div>
  );
};
export default Projects;
