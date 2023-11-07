import PageHeader from '@/components/page-header';
import Image from 'next/image';
import styles from '../page.module.css'

const About = () => {
  return (
    <>
      <PageHeader
        title='About'
        subHeader='This is what I do.'
        backgroundImage='/images/about-bg-1.jpg'
      />
      <main className={styles.main + ' mt-[300px]'}>
        <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12 flex self-start">
                <Image src="/images/about-bg-1.jpg" alt="image" loading="lazy" width={700} height={420} className="rounded-md" />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">NextJs 13 development is carried out by passionate developers</h2>
                <p className="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                <p className="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;