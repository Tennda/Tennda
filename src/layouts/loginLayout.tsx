// components/DashboardLayout.tsx
import elipice2 from '../../assets/images/img_ellipse_5.png'
import elipice3 from '../../assets/images/img_vector.png'
import Image from 'next/image'
import Navbar from '@/components/ui/navbar'
import elipice4 from '../../assets/images/img_vector_463x463.png'
import faviconimg from '../../assets/images/favicon1.png'
export default function DashboardLayout({ children, title }: { children: React.ReactNode, title?: string }) {
    return (
        <div className=" h-[100vh] ">

            <section className="bg-[#c8cace] relative h-[100vh] flex flex-col ">
                <section className='hidden md:block'>
                    <Navbar title={title} />
                </section>
                <div className=' flex flex-col justify-center items-center h-[80vh] relative '>
                    <div className="absolute top-[0px] left-0">
                        <Image src={elipice2} alt="" width={200} height={200} className="" />
                    </div>
                    <div className="absolute bottom-[-60px] right-[13px] hidden md:block">
                        <Image src={elipice2} alt="" width={200} height={200} className="" />
                    </div>
                    <div className="absolute top-[0px] right-[12px] hidden md:block">
                        <Image src={elipice3} alt="" width={300} height={340} />
                    </div>
                    <div className="absolute bottom-[-60px] left-0">
                        <Image src={elipice4} alt="" width={400} height={463} />

                    </div>
                    <div className='z-20 w-full flex items-center h-[100vh] justify-center pt-10'>
                        {children}
                    </div>
                    <div className='absolute bottom-[-75px] right-0 hidden md:block'>
                        <Image src={faviconimg} alt="" width={75} height={100} className=" " />
                    </div>
                </div>
            </section>


        </div>

    );
}
