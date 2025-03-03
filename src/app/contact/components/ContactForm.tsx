 "use client"
import { useState } from "react";
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

      if( status === 'Enviando...') return;
  
      if (!formData.name || !formData.email || !formData.message) {
        setStatus("Faltan datos");
        toast.error("Por favor, completa todos los campos.", { position: "bottom-left" });
        return;
      }
  
      setStatus("Enviando...");
      const sendEmail = async () => {
        try {
          const response = await fetch("/api/sendEmail", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
    
          if (response.status === 429) {
            throw new Error("Límite de solicitudes alcanzado. Intente más tarde.");
          }
    
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Error al enviar el mensaje.");
          }
    
          setStatus("Mensaje enviado con éxito");
          setFormData({ name: "", email: "", message: "" });
          return "¡Mensaje enviado con éxito!";
        } catch (error) {
          setStatus("Error al enviar el mensaje");
          throw error; // Es importante lanzar el error para que `toast.promise` lo maneje
        }
      };
    
      toast.promise(
        sendEmail(),
        {
          pending: "Procesando...",
          success: "¡Mensaje enviado con éxito!",
          error: {
            render({ data }: { data:Error }) {
              return data.message || "Error al enviar el mensaje";
            },
          },
        },
        { position: "bottom-left" }
      );
  
    };


  return (
      <>
        <form onSubmit={handleSubmit}>
            <div className=" rounded-2xl  bg-opacity-65 shadow bg-background p-6">
                <div className=" mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-textPrimary font-primary text-[14px] sm:text-[17px] ">Déjame un mensaje</h2>
                    
                </div>
                
                <input
                    name="name"
                    id="name"
                    className="mb-3 w-full rounded-lg border text-textPrimary bg-gray-500 bg-opacity-20 border-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500" 
                    type="text" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nombre"
                    maxLength={50}
                />

                <input
                    id="email"
                    name="email"
                    className="mb-3 w-full rounded-lg border text-textPrimary bg-gray-500 bg-opacity-20 border-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500" 
                    type="email"
                    value={formData.email} 
                    onChange={handleChange}
                    placeholder="Email"
                    maxLength={50}
                />
                <div className="w-full"></div>


                <textarea
                    id="message"
                    name="message"
                    className="mb-3 w-full rounded-lg border text-textPrimary bg-gray-500 bg-opacity-20 border-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500" 
                    rows={4}
                    maxLength={500}
                    value={formData.message} 
                    onChange={handleChange}
                    placeholder="Mensaje"
                    style={{ resize: 'none' }}
                ></textarea>

              
                <button 
                  disabled={ status === 'Enviando...' } 
                  className={`w-full rounded-lg py-2.5
                      ${status === 'Enviando...' ? 'bg-gray-500' : 'bg-gray-900 text-sm text-white transition duration-300 hover:bg-gray-800 font-semibold'}
                    `}
                > 
                  Enviar
                </button>
            </div>
        </form>
        <ToastContainer 
          
        />
      </>
  )
}
