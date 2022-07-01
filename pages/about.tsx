import Experience from '@/components/Experience'
import { GiHubIcon, LinkedInIcon, MessageIcon, TwitterIcon, WhatsAppIcon } from '@/components/Icons'
import { aboutStyles } from '@/css/customStyles/about'
import { getFileBySlug } from '@/lib/mdx'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'


// @ts-ignore
export const getStaticProps: GetStaticProps<{
  authorDetails: { mdxSource: string; frontMatter: AuthorFrontMatter }
}> = async () => {
  const authorDetails = await getFileBySlug<AuthorFrontMatter>('authors', ['default'])
  const { mdxSource, frontMatter } = authorDetails
  return { props: {authorDetails: { mdxSource, frontMatter } } }
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
                    <MessageIcon/>
                  </a>
                  <a
                    className="text-sm text-gray-500 transition hover:text-gray-600"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={frontMatter.github}
                  >
                    <span className="sr-only">github</span>
                    <GiHubIcon/>
                  </a>
                  <a
                    className="text-sm text-gray-500 transition hover:text-gray-600"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={frontMatter.linkedin}
                  >
                    <span className="sr-only">linkedin</span>
                    <LinkedInIcon/>
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
                  <a
                    className="text-sm text-gray-500 transition hover:text-gray-600"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={frontMatter.whatsapp}
                  >
                    <span className="sr-only">twitter</span>
                    <WhatsAppIcon/>
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
              <div style={{paddingLeft: "1rem", paddingRight: "1rem"}} className="prose prose-lg max-w-none pt-8 pb-8 dark:prose-dark sm:prose-xl xl:col-span-2">

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

