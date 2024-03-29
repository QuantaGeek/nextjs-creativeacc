import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image';
import profileImage from '../../public/images/profile/Profile bg.png'
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/icon';
import HireMe from '@/components/HireMe';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'

export default function Home() {
 
  return (
    <>
      <Head>
        <title>Bett Enock GeoIntelligent</title>
        <meta name="description" content="Generated by create next app" />
       
      </Head>
      <main className='flex flex-col items-center text-dark dark:text-light w-full min-h-screen'>
        <Layout className='pt-16 xs:pt-32 '>
          <div className=' flex items-center justify-content-between w-full lg:flex-col'>
              <div className='w-1/2 md:w-full pt-2'>
                <Image src= {profileImage} alt =" BKE" 
                className = 'w-full h-auto bg-blend-normal lg:hidden md:inline-block md:w-full' 
                priority
                sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw'
                 />
              </div>
              <div className='w-1/2  pt-8 flex flex-col items-center self-center lg:w-full'>
                
                <AnimatedText text='Turning Vision Into Reality With Code And Design.' className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-3xl xm:!text-base'/>
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                  As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                  Explore my latest projects and articles, showcasing my expertise in React.js, Ruby on Rails,  Django,  and web development.
                  </p>
                  <div className='flex items-center self-start mt-2 lg:self-center'>
                    <Link href="/BKECV.pdf" target={'_blank'}
                     className='flex items-center bg-dark dark:bg-light dark:text-dark text-light p-2.5 px-6 md:p-2 md:px-4 sm:p-1 sm:px-2 md:text-base sm:text-sm rounded-lg text-lg font-semibold hover:bg-light hover:text-dark hover:dark:bg-dark hover:dark:text-lime-200 border-2 border-solid border-transparent hover:border-dark hover:dark:border-lime-300'
                     download={true}
                     >
                      Resume <LinkArrow className={"w-6 ml-1"} />
                    </Link>
                    <Link href="/contact"
                    className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                    >Contact
                    </Link>
                  </div>
              </div>
              <div className='flex items-center self-end pr-8 top-0 md:hidden'>
          <div className="">
            <Image src={lightBulb} alt='BKE' className='w-24 h-auto '/>
          </div>
          
        </div>
          </div>
        </Layout>
        <HireMe />

      </main>
    </>
  )
}
