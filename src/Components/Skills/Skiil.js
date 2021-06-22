import React from "react";
import frontend from "../../image/Frontend.png";
import backend from "../../image/backend.png";
import mobile from "../../image/mobile.png";

const Skills = () => {
  return (
    <div id='skills' className='container p-2'>
      <div className='font-bold text-4xl mb-10'>
        <h1>What I do</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-1 justify-center'>
        {/* frontend Developer */}
        <div className='grid grid-row-2 md:justify-start'>
          <div>
            <img src={frontend} alt='' />
          </div>
          <div>
            <div className='text-2xl font-medium '>Aws Enthusiast</div>
          </div>
        </div>
        {/* Backend developer */}
        <div className='grid grid-row-2 md:justify-center'>
          <div>
            <img src={backend} alt='' />
          </div>
          <div>
            <div className='text-2xl font-medium '>Backend Developer</div>
          </div>
        </div>
        {/* Android developer */}
        <div className='grid grid-row-2 md:justify-end'>
          <div>
            <img src={mobile} alt='' />
          </div>
          <div>
            <div className='text-2xl font-medium'>Android Developer</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
