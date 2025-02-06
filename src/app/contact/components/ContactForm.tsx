
export const ContactForm = () => {
  return (
    <div className="flex items-center justify-center bg-black/30 p-4">
        <div className=""> {/*w-full max-w-sm*/}
            <div className="relative rounded-2xl bg-white p-6 shadow">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">Dejame un mensaje</h2>
                    
                </div>
                <p className="mb-4 text-start text-sm">
                    We'd love to hear what went well or how we can improve the product experience.
                </p>
                <input className="mb-3 w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" placeholder="Email"/>

                <textarea className="mb-3 w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4} placeholder="Mensaje"></textarea>
                <div className="mb-4 flex justify-start gap-2">
                    {/* <button className="text-md rounded-lg border border-gray-200 px-2.5 py-1.5 hover:bg-gray-50">😞</button>
                    <button className="text-md rounded-lg border border-gray-200 px-2.5 py-1.5 hover:bg-gray-50">😐</button>
                    <button className="text-md rounded-lg border border-gray-200 px-2.5 py-1.5 hover:bg-gray-50">😊</button> */}
                </div>
                <button className="w-full rounded-lg bg-gray-900 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-gray-800">Submit</button>
            </div>
        </div>
    </div>
  )
}
