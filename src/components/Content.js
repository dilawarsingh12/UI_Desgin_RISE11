import React from 'react';
import '../css/Content.css'

export default function Content() {
    let url='';
  return (
    <div>
      <section className="text-gray-600 body-font contentbackground">
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Book from <h1 style={{display:'inline-block',color:'#b77a85',fontSize:'46px'}}>San Francisco</h1> to :</h2>
    </div>
    <div className="flex no-wrap -m-4 temp">
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border  border-black p-6 rounded-lg">
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">LAS VEGAS</h2>
          <p className="leading-relaxed text-base">NV (LAS)</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-black p-6 rounded-lg">
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">LOS ANGELES</h2>
          <p className="leading-relaxed text-base">CA (LAX)</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-black p-6 rounded-lg">
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">NEW YORK CITY</h2>
          <p className="leading-relaxed text-base">NY (NYC)</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-black p-6 rounded-lg">
           
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">PALM SPRINGS</h2>
          <p className="leading-relaxed text-base">CA (PSP)</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-black p-6 rounded-lg">
          
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">PORTLAND</h2>
          <p className="leading-relaxed text-base">OR (PDX)</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-black p-6 rounded-lg">
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">ALL CITIES</h2>
          <a href={url}>click for other Cities</a>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
