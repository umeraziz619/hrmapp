import React from 'react'
import Link from 'next/link'
const Services = ({items}) => {
  
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div>
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">The Services That We <br /> Provide you
          </h1>
        </div>

          <div >
            <p></p>
          </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        {items?.map((item) => (
          <Link href={item.mylink} class="p-4 md:w-1/3 sm:mb-0 mb-6" key={item.id}>
            <div class="rounded-lg h-64 overflow-hidden transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
              {/* <img alt="content" class="object-cover object-center h-full w-full" src="https://t4.ftcdn.net/jpg/02/84/04/63/360_F_284046358_xFSfxtd82cPOQijgflp1jqhjABTVyEol.jpg"/> */}
              <img alt="content" class="object-cover object-center h-full w-full" src={item.img} />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">{item.name}</h2>
            <p class="text-base leading-relaxed mt-2">{item.des}</p>
            <p class="text-indigo-500 inline-flex items-center mt-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">{item.tag ? item.tag : "Learn More"}
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </p>
          </Link>
           ))}
          {/* <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" src="https://glservices.pk/wp-content/uploads/2020/11/legal_consultancy.jpg"/>
          </div>
          <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Legal Consultancy</h2>
          <p class="text-base leading-relaxed mt-2">Legal Consultancy is a service provided by legal professionals to individuals, businesses, and organizations seeking legal advice and guidance. Legal consultancy involves providing expert advice on various legal matters, including but not limited to, corporate law, labor law, commercial law, intellectual property law, and litigation.</p>
          <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" src="https://www.lawyer-monthly.com/Lawyer-Monthly/wp-content/uploads/2018/12/iStock-1079268358.jpg"/>
          </div>
          <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Law Consultancy</h2>
          <p class="text-base leading-relaxed mt-2">Law consultancy is a service provided by legal experts to individuals, businesses, and organizations seeking legal advice and guidance.</p>
          <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div> */}
        </div>
      </div>
    </section>
  )
}

export default Services