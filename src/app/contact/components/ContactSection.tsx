import Image from "next/image";
import contactJson from "@/data/contact.json";
import Link from "next/link";
import { ContactForm } from "./ContactForm";

export const ContactSection = () => {

  const {  contact, social } = contactJson;

  return (
    <div className="max-display flex flex-col items-center justify-center p-8 border-2 ">
      <h1 className="text-textPrimary text-[25px] underline uppercase font-thin">Contactame</h1>
      <div className="mt-2 flex justify-between w-[70%]">
        {/* info */}
        <div className="max-w-[350px]">
          <div className="mb-4">
            <Image className='hover:cursor-pointer' src={'/logov2.svg'} alt='logo' width={150} height={150}/>
          </div>
          <p className="pb-4 text-textPrimary">
            Si necesitas ayuda con un proyecto, quieres colaborar o simplemente quieres saludar, no dudes en ponerte en contacto conmigo. ¡Estoy aquí para ayudar!
            {/* We'd love to hear what went well or how we can improve the product experience. */}
          </p>
          {
            contact.length > 1 && <div>
              {
                contact.map( ( { label, value, icon } ) => {
                  return (
                    <div key={label} className="flex items-center gap-2 mb-2">
                      <div className="bg-white p-2 rounded-md">
                        <Image src={`/contact/${icon}`} alt={label} width={20} height={20}/>
                      </div>
                      <h1 className="text-textPrimary">{value}</h1>
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
                       <Image src={`/contact/${icon}`} alt={label} width={30} height={30}
                          className="hover:bg-slate-200 rounded-md"
                        />
                      </div>
                  </Link>
              )})
              }
          </div>
        </div>

        {/* form */}
        <div className="max-w-[350px]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}