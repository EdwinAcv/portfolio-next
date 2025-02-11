import Image from "next/image";
import contactJson from "@/data/contact.json";
import Link from "next/link";
import { ContactForm } from "@/app/contact/components/ContactForm";

export const ContactSection = () => {

  const { tittle, description, contact, social } = contactJson;

  return (
      <div className="rounded-2xl bg-opacity-2 min-w-full flex flex-col items-center justify-center p-8">
        <h1 className="text-textPrimary text-[26px] sm:text-[30px] capitalize font-primary py-8"> { tittle } </h1>
        <div className="max-display rounded-3xl mt-2 md:flex justify-center sm:justify-between items-start lg:w-[65%]">

          {/* form */}
          <div className="max-w-[400px] m-2">
            <ContactForm />
          </div>

          {/* info */}
          <div className="max-w-[350px] m-2">
            <div className="mb-4">
              <Image className='hover:cursor-pointer size-[80px]  sm:size-[135px]' src={'/logov2.svg'} alt='logo' width={0} height={0}/>
            </div>
            <p className="pb-4 text-textPrimary font-mono text-[14px] sm:text-[16px]">
              { description }
            </p>
            {
              contact.length > 1 && <div>
                {
                  contact.map( ( { label, value, icon } ) => {
                    return (
                      <div key={label} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-2">
                        <div className="bg-white p-2 rounded-md">
                          <Image className="size-[16px] sm:size-[20px]" src={`/contact/${icon}`} alt={label} width={0} height={0}/>
                        </div>
                        <h1 className="text-textPrimary text-[14px] sm:text-[16px]">{value}</h1>
                      </div>
                    )
                  } )
                }
              </div>
            }
      
            <hr className="my-6 border-gray-300" />
            {/* <h3>Sigueme en</h3> */}
  
            <div className="flex gap-4">
              {
                social.map( ( { label, value, icon } ) => {
                  return (
                    <Link key={label} href={value} target="_blank" rel="noopener noreferrer">
                        <div className="bg-white p-2 rounded-md">
                         <Image src={`/contact/${icon}`} alt={label} width={0} height={0}
                            className="hover:bg-slate-200 rounded-md size-[25px] sm:size-[30px]"
                          />
                        </div>
                    </Link>
                )})
                }
            </div>
          </div>

        </div>
      </div>
    );
}