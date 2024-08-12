import Image from 'next/image';
import React from 'react';

const ContactForm = () => {
    return (
        <div className="relative flex overflow-hidden p-2 justify-center">
            <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg w-[665px] h-[550px] mt-[10px]">
                <h2 className="text-xl sm:text-3xl font-bold mb-6 text-[#44372F]">Send A Message</h2>
                <form>
                    <div className="mb-7">
                        <input
                            type="text"
                            className="w-full px-3 py-2 border-b focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Name"
                        />
                    </div>
                    <div className="mb-7">
                        <input
                            type="text"
                            className="w-full px-3 py-2 border-b focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Phone"
                        />
                    </div>
                    <div className="mb-7">
                        <input
                            type="email"
                            className="w-full px-3 py-2 border-b focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Email address"
                        />
                    </div>
                    <div className="">
                        <textarea
                            className="w-full px-3 py-2 border-b"
                            placeholder="Message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="px-4 bg-primary w-fit text-white py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 ml-[30%] mt-[100px]"
                    >
                        SEND MESSAGE
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
