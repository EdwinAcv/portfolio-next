import Image from "next/image";
import contactJson from "@/data/contact.json";
import { ContactForm } from "./components/ContactForm";
import Link from "next/link";

export default function ContactPage() {

  const {  contact, social } = contactJson;

  return (
    <div className="min-w-full flex flex-col items-center justify-center p-8">
      <h1 className="text-[25px]">Contactame</h1>
      <div className="mt-2 flex justify-between w-[70%]">
        {/* info */}
        <div className="max-w-[350px]">
        {/* <p className="pb-4">
          We'd love to hear what went well or how we can improve the product experience.
        </p> */}
          {
            contact.length > 1 && <div>
              {
                contact.map( ( { label, value, icon } ) => {
                  return (
                    <div key={label} className="flex items-center gap-2">
                      <Image src={`/contact/${icon}`} alt={label} width={20} height={20}/>
                      <h1>{value}</h1>
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
                    <Image src={`/contact/${icon}`} alt={label} width={30} height={30}
                      className="hover:bg-slate-200 rounded-md"
                    />
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