import React from "react";

export const PlainButton = (detail, link) => {
  return (
    <span className='p-2 pl-0 m-4 ml-0'>
      <button className='border-2 p-3 px-4 rounded-md font-medium text-indigo-900 shadow-md'>
        My Work
      </button>
    </span>
  );
};

export const ColouredButton = (detail, link) => {
  return (
    <span className='p-2 m-4'>
      <button className='border-2 p-3 px-4 rounded-md bg-indigo-600 text-white shadow-md'>
        Let's Talk
      </button>
    </span>
  );
};
