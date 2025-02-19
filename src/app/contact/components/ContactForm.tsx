 "use client"
import { useState } from "react";
import { IoAlertCircle, IoCheckmarkCircle } from "react-icons/io5"
import { toast, ToastContainer } from "react-toastify";
 


export const ContactForm = () => {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    // const notify = () => toast.promise('Mensaje enviado !', { position: "bottom-left", autoClose: 2000,theme: 'colored' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      if (!formData.name || !formData.email || !formData.message) {
        setStatus("Faltan datos");
        toast.error("Por favor, completa todos los campos.", { position: "bottom-left" });
        return;
      }
  
      setStatus("Enviando...");
  
      const sendEmail = async () => {
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) throw new Error("Error al enviar el mensaje");
  
        return "¡Mensaje enviado con éxito! 🎉";
      };
  
      toast.promise(sendEmail(), {
        pending: "Procesando...",
        success: "¡Mensaje enviado con éxito!",
        error: "Error al enviar el mensaje",
      }, { position: "bottom-left" });
  
      try {
        await sendEmail();
        setStatus("Mensaje enviado con éxito");
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        setStatus("Error al enviar el mensaje");
      }
    };


  return (
      <>
        <form onSubmit={handleSubmit}>
            <div className=" rounded-2xl  bg-opacity-65 shadow bg-background  p-6">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-textPrimary font-primary text-[20px] ">Dejame un mensaje</h2>
                    
                </div>
                {/* <p className="mb-4 text-start text-sm text-textPrimary font-primary">
                    We'd love to hear what went well or how we can improve the product experience.
                </p> */}
                <input
                    name="name"
                    id="name"
                    className="mb-3 w-full rounded-lg border text-textPrimary bg-gray-500 bg-opacity-20 border-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    type="text" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nombre"
                />
                <input
                    id="email"
                    name="email"
                    className="mb-3 w-full rounded-lg border text-textPrimary bg-gray-500 bg-opacity-20 border-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    type="email"
                    value={formData.email} 
                    onChange={handleChange}
                    placeholder="Email"
                />

                <textarea
                    id="message"
                    name="message"
                    className="mb-3 w-full rounded-lg border text-textPrimary bg-gray-500 bg-opacity-20 border-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    rows={4} 
                    value={formData.message} 
                    onChange={handleChange}
                    placeholder="Mensaje"
                ></textarea>

              
                <button 
                  disabled={ status === 'Enviando...' } 
                  className="w-full rounded-lg bg-gray-900 py-2.5 text-sm text-white transition duration-300 hover:bg-gray-800 font-semibold"
                > 
                  Enviar
                </button>
                {
                    // status === 'faltan' &&
                    // <div className={`bg-green-300 rounded-lg p-3 mt-4 flex items-center gap-2`}>
                    //     <IoCheckmarkCircle color="#14532d" size={28}/>
                    //     <p className="font-primary text-green-900"> El correo ha sido enviado </p> 
                    // </div>
                    status === 'faltan' &&
                    <div className={`bg-red-300 rounded-lg p-3 mt-4 flex items-center gap-2`}>
                        <IoAlertCircle color="#dc2626" size={28}/>
                        <p className="font-primary text-red-900"> Debe llenar todos los campos </p> 
                    </div>
                }

                {/* <p className="text-textPrimary">{status}</p> */}
            </div>
        </form>
        <ToastContainer 
          
        />
      </>
  )
}
