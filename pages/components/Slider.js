import React from 'react'
import Hrm from '../hrm'

const Slider = ({image,title,red,tdes}) => {
  return (
    <>
    {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them they are not needed in your project.
*/}

<section
  className={image}
>
  <div
    className="absolute inset-0 bg-white/25 bg-transparent from-white/95 to-white/25 bg-gradient-to-r bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        {title}
        <strong className="block font-extrabold text-rose-700">
          {red}
        </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
     {tdes}
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Slider