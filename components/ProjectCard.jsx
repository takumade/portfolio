import React from 'react'

export default function ProjectCard(props) {
    return (
        
    <a href={props.link} target={"_blank"}>
            <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    

    <img className="object-cover w-full h-48" src={props.img} alt={props.title}/>

    <div className="px-4 py-2">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{props.title}</h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{props.desc}</p>

        <div className='flex mt-4'>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
            <p className='text-sm ml-2 dark:text-gray-300 italic'>{props.platform}</p>
        </div>
        <div className='flex mt-1'>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
            <p className='text-sm ml-2 dark:text-gray-300 italic'>{props.stack.toString()}</p>
        </div>
        <div className='flex mt-1'>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p className='text-sm ml-2 dark:text-gray-300 italic'>{props.status}</p>
        </div>
        
    </div>

</div>
    </a>
    )
}
