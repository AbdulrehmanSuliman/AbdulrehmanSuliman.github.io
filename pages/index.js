import Head from 'next/head';
import Image from 'next/image';
const people = [
  {
    name: 'Abdulrehman Suliman',
    email: 'abdulrehmansuliman@gmail.com',
    github: 'https://github.com/AbdulrehmanSuliman',
    linkedIn: 'https://www.linkedin.com/in/abdulrehmansuliman/',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQGHdXkN0yLPvQ/profile-displayphoto-shrink_400_400/0/1681067624731?e=1692230400&v=beta&t=4HUmaUGR2pKn9TjNEir6MtCZ7iPqMJOR9mweVLeFp_Q',
  },
  {
    name: 'Amr Zayed',
    email: 'amrzayed40@gmail.com',
    github: 'https://github.com/amr-zayed',
    linkedIn: 'https://www.linkedin.com/in/amr-zayed40/',
    imageUrl:
      '/Amr.jpg',
  },
  {
    name: 'Samar Nabil',
    email: 'samarnabil22@gmail.com',
    github: 'https://github.com/samarnabil',
    linkedIn: 'https://www.linkedin.com/in/samar-elshiekh/',
    imageUrl:
      '/Samar.png',
  },
  {
    name: 'Yomna Sabah',
    email: 'yomnasabah07@gmail.com',
    github: 'https://github.com/Yomna-Sabah',
    linkedIn: 'https://www.linkedin.com/in/yomna-sabah/',
    imageUrl:
      '/YomnaSabah.jpeg',
  },
]
export default function Home() {
  return (
   <>
    <div className="bg-white py-0">
    
<nav className="bg-slate-900 border-gray-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center">
        <img src="/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap">Voxight</span>
    </a>
    
  </div>
</nav>
<div className="relative isolate px-6 pt-14 lg:px-8 mb-20 " style={{ backgroundImage: "url('/hero.jpeg')",
 backgroundRepeat:'no-repeat',
 backgroundPosition:'center',
 backgroundSize:'cover'
  }}>
    <div className="mx-auto max-w-2xl py-4">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Web-based 2D/3D Medical Imaging Visualization Platform</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">Improve patient outcomes by providing healthcare professionals with comprehensive and accessible tool for a more effective and efficient means of analyzing medical images.</p>
      </div>
    </div>
    <video id='demoVideo' controls autoPlay className="w-full md:w-4/5 flex justify-center m-auto my-4 mb-20 pb-16">
      <source src="/Video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  {/* <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl w-4/5 mx-auto'>Demo</h2> */}
  <div className='flex flex-col w-4/5 mx-auto mb-20'>
    <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Problem</h2>
  <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
  Current medical imaging practices rely heavily on volumetric datasets composed of 2D images that require manual review by radiologists and referring physicians, leading to potential inefficiencies and limited diagnostic information. Moreover, traditional imaging platforms present additional challenges, including the need for dedicated workstations, complex installation processes, software updates, and operating system dependencies.

        </p>
  </div>
  <div className='flex flex-col w-4/5 mx-auto mb-20'>
    <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Solution</h2>
  <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
  We propose a "Web-based Medical Imaging Visualization Platform" that offers universal access to medical images, enabling healthcare professionals to access and analyze them from any location at any time.

        </p>
  <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
  The potential impact of our platform goes beyond its features and functionality; 
  as it offers significant advantages over traditional desktop viewers. Our ray casting volume rendering technique provides enhanced quality and richer information, enabling healthcare professionals to make more accurate and informed diagnoses.
   Additionally, the user-friendly interface and web-based approach make our platform highly accessible and easy to use.
        </p>
  </div>
  <div className='w-full bg-slate-300'>

      <div className="mx-auto mt-3 grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 pt-6 pb-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          A dedicated team of graduates working on our exciting graduation project. With a diverse range of skills and expertise, we collaborate to bring innovative ideas to life. 
        </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <a className="text-base font-semibold leading-7 tracking-tight text-indigo-600">{person.email}</a>
                  <div className='flex '>
                  <a href={person.github} className="text-sm font-semibold leading-6 text-indigo-600"><Image width={24} height={24} src="/github.png" alt='github' /></a>
                  <a href={person.linkedIn} className="text-sm font-semibold leading-6 text-indigo-600 ml-2 "><Image width={24} height={24} src="/linkedin.png" alt='github' /></a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      </div>
      </div>
        <footer className="bg-gray-800 text-white p-2 text-center">
          <p>&copy; 2023 Voxight</p>
        </footer>
  </>
  );
}
