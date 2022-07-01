import experience from "@/data/experienceData";

function Experience() {
    return (<ol className="relative border-l border-gray-200 dark:border-gray-700">
      {
        experience.map((exp, i) => {
  
            return (<li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-500 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-400">
              <svg className="w-3 h-3 text-white dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{exp.company}</h3>
            <time className="block mb-2 font-mono font-bold text-sm leading-none text-gray-400 dark:text-gray-500">{exp.title}  - {exp.year}</time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{exp.desc}</p>
          </li>)
        })
      }
    </ol>);
  }

  
  export default Experience;