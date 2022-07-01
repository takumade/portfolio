import { MDXLayoutRenderer } from '@/components/MDXComponents'
import experience from '@/data/experienceData'
import { getFileBySlug } from '@/lib/mdx'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'


const DEFAULT_LAYOUT = 'AuthorLayout'

// @ts-ignore
export const getStaticProps: GetStaticProps<{
  authorDetails: { mdxSource: string; frontMatter: AuthorFrontMatter }
}> = async () => {
  const authorDetails = await getFileBySlug<AuthorFrontMatter>('authors', ['default'])
  const { mdxSource, frontMatter } = authorDetails
  return { props: { authorDetails: { mdxSource, frontMatter } } }
}

let aboutStyles: any = {
  spanFirst: { "boxSizing": "border-box", "display": "inline-block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "relative", "maxWidth": "100%" },
  spanSecond: { "boxSizing": "border-box", "display": "block", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "maxWidth": "100%" },
  mainAvatar: { "position": "absolute", "inset": "0px", "boxSizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%" }
}






function Experience() {
  return (<ol className="relative border-l border-gray-200 dark:border-gray-700">
    


    {
      experience.map((exp, i) => {

          return (<li className="mb-10 ml-6">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-500 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-400">
            <svg className="w-3 h-3 text-white dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{exp.company}</h3>
          <time className="block mb-2 font-mono font-bold text-sm leading-none text-gray-400 dark:text-gray-500">{exp.title}  - {exp.year}</time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{exp.desc}</p>
        </li>)
      })
    }
  </ol>);
}


export default function About({ authorDetails }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { mdxSource, frontMatter } = authorDetails

  console.log('authorDetails', authorDetails)

  return (
    <div>
      <div className="mb-auto">
        <div>
          <div className="mt-10 divide-y divide-gray-600">
            <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
              <div className="flex flex-col items-center pt-8">
                <span style={aboutStyles.spanFirst}>
                  <span style={aboutStyles.spanSecond}>
                    <img
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27192%27%20height=%27192%27/%3e"
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: "1",
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                      }}
                    />
                  </span>
                  <Image
                    title="avatar"
                    layout="fill"
                    src={frontMatter.avatar}
                    className="h-48 w-48 rounded-full"
                    style={aboutStyles.mainAvatar}
                  />
                  <noscript></noscript>
                </span>
                <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
                  {frontMatter.name}
                </h3>
                <div className="text-gray-500 dark:text-gray-400">
                  {frontMatter.company} - 👨‍💻
                </div>
                <div className="flex space-x-3 pt-6">
                  <a
                    className="text-sm text-gray-500 transition hover:text-gray-600"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={frontMatter.email}
                  >
                    <span className="sr-only">mail</span>
                    <MessageIcon></MessageIcon>
                  </a>
                  <a
                    className="text-sm text-gray-500 transition hover:text-gray-600"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={frontMatter.github}
                  >
                    <span className="sr-only">github</span>
                    <GiHubIcon></GiHubIcon>
                  </a>
                  <a
                    className="text-sm text-gray-500 transition hover:text-gray-600"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={frontMatter.linkedin}
                  >
                    <span className="sr-only">linkedin</span>
                    <LinkedInIcon></LinkedInIcon>
                  </a>
                  <a
                    className="text-sm text-gray-500 transition hover:text-gray-600"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={frontMatter.twitter}
                  >
                    <span className="sr-only">twitter</span>
                    <TwitterIcon />
                  </a>
                </div>

                <div className="pt-6">

                <ol className='text-center'>
                  <li className="font-mono">Backend Development</li>
                  <li className="font-mono">Fronted Development</li>
                  <li className="font-mono">API Design & Development</li>
                  <li className="font-mono">Database Design</li>
                  <li className="font-mono">Desktop Development</li>
                  <li className="font-mono">Mobile Development</li>
                  <li className="font-mono">DevOps</li>
                </ol>
                  </div>



                
              </div>
              <div className="prose prose-lg max-w-none pt-8 pb-8 dark:prose-dark sm:prose-xl xl:col-span-2">

              <h3 className=" text-2xl font-bold leading-8 tracking-tight">
                 About Me
                </h3>
                <p>
                  My interest in development started back in 2017 when I decided to
                  self-teach myself Python — I was fascinated with how a person could create great things while sitting on his computer. <br /><br/>

                  Little did I know that a lot of bugs were involved 😂 <br /> <br />

                  Its like i'm a detective 🕵️‍♂️ who is trying to find the culprit in a crime scene, yet unknown to him, he is the culprit.😂😂😂 <br />
                  
                </p>

                <h3 className="text-2xl font-bold leading-8 tracking-tight">
                 Experience
                </h3>
                <Experience/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
}


const TwitterIcon = () => {
  return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-8 w-8"><path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"></path></svg>)
}

function LinkedInIcon() {
  return (<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-8 w-8"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>);
}



function GiHubIcon() {
  return (<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-8 w-8"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>);
}



function MessageIcon() {
  return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-8 w-8">
    <path d="M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"></path>
    <path d="m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"></path></svg>);
}

