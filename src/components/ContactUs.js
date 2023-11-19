import React from 'react';
const ContactUs = () => {
    return (
        <div className="text-center">
            <h1 className="m-auto font-bold p-2">Contact</h1>
            <form>
                <input type="text" className="border border-gray-300 m-2 p-2" placeholder="Name" />
                <input type="text" className="border border-gray-300 m-2 p-2" placeholder="Message" />
                <button type="button" className="m-3 p-3 bg-blue-200 text-black rounded-lg">Submit</button>
            </form>
        </div>
        
    )
}
export default ContactUs;