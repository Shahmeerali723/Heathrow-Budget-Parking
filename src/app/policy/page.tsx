import ContentScroll from '@/components/shared/ContentScroll'
import DateTimeInput from '@/components/shared/DateTimeInput'
import React from 'react'

const Page = () => {
  return (
    <>
    <div className='flex flex-col gap-5 py-[50px] sm:container '>
        <div className='md:w-[50%] mx-auto sm:w-[80%] w-full space-y-[20px] text-center sm:p-0 '>
            <h1 className='capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-extraDark'>
            Privacy Policy

            </h1>
           
        </div>

        <div className="">
            <div className=" items-center justify-center bg-white  pb-[20px]">
                <div className='p-5 border-[#CACACA] border text-sm rounded-lg  w-full'>
                    <div className=" text-sm   sm:container  h-[485px] overflow-y-auto  sm:p-6 custom-scrollbar ">
                        <div className='sm:container'>
                            <p className='mb-3 mt-6'>{'Welcome to Heathrow Budget Parking ("we", "us", or "our"). This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website'} <a href="http://www.heathrowbudgetparking.co.uk" target='_blank' className='text-blue-500'>http://www.heathrowbudgetparking.co.uk</a>{' or use our services. We are committed to safeguarding your privacy in accordance with the General Data Protection Regulation (GDPR) and other applicable UK data protection laws.'}</p>

                            
                            <h4 className="text-[16px] font-bold text-gray-700 mb-0 mt-6">1. Information We Collect</h4>
                            <p className='mb-2'>{'We only collect the personal data that you provide to us directly:'}</p>

                            <p><b className='text-[14px] font-bold'>Contact Information:</b> Name, email address, and phone number.</p>
                            <p><b className='text-[14px] font-bold'>Booking Details:</b> Information related to your booking, including dates and car information.</p>
                            <p><b className='text-[14px] font-bold'>Payment Information:</b> Although we may handle payments through third-party payment processors, we do not store payment details ourselves.</p>

                            <h4 className="text-[16px] font-bold text-gray-700  mt-6">2. How We Use Your Information</h4>
                            <p className='mb-2'>{'We use your personal data for the following purposes:'}</p>

                            <p><b className='text-[14px] font-bold'>To Process Your Booking:</b> Handling reservations, managing your account, and providing customer support.</p>
                            <p><b className='text-[14px] font-bold'>To Communicate with You:</b> Sending booking confirmations, updates, and relevant information related to your reservation.</p>
                            <p><b className='text-[14px] font-bold'>To Improve Our Services:</b> Analyzing how you interact with our website to enhance user experience and service quality.</p>


                            <h4 className="text-[16px] font-bold text-gray-700  mt-6">3. Legal Basis for Processing</h4>
                            <p className='mb-2'>{'We process your personal data based on the following legal grounds:'}</p>

                            <p><b className='text-[14px] font-bold'>Performance of a Contract:</b> To fulfill your booking and related services.</p>
                            <p><b className='text-[14px] font-bold'>Legitimate Interests:</b> To manage our business effectively and improve our services.</p>
                            <p><b className='text-[14px] font-bold'>Consent:</b> For sending any promotional communications, which you can withdraw at any time.</p>

                            <h4 className="text-[16px] font-bold text-gray-700  mt-6">4. Sharing Your Information</h4>
                            <p className='mb-2'>{'We may share your personal data with:'}</p>

                            <p><b className='text-[14px] font-bold'>Service Providers:</b> Third-party vendors who assist with processing bookings and managing our website.</p>
                            <p><b className='text-[14px] font-bold'>Legal Authorities:</b> When required by law or to protect our rights and the safety of others.</p>
                           

                        
                            <h3 className="text-[16px] font-bold text-gray-700 mt-6 mb-2">5. Data Retention</h3>
                            <p>We retain your personal data only as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. Typically, this means retaining your data for [specific period, e.g., "after deleting the account"] after your booking is complete.</p>

                            <h4 className="text-[16px] font-bold text-gray-700  mt-6">6. Your Rights</h4>
                            <p className='mb-2'>{'Under GDPR, you have the following rights regarding your personal data:'}</p>

                            <p><b className='text-[14px] font-bold'>Right to Access:</b> Request a copy of the data we hold about you.</p>
                            <p><b className='text-[14px] font-bold'>Right to Rectification:</b> Request corrections to any inaccurate or incomplete data.</p>
                            <p><b className='text-[14px] font-bold'>Right to Erasure:</b> Request the deletion of your data under certain conditions.</p>
                            <p><b className='text-[14px] font-bold'>Right to Restrict Processing:</b> Request that we limit how we process your data.</p>
                            <p><b className='text-[14px] font-bold'>Right to Data Portability:</b> Request that we transfer your data to another service provider.</p>
                            <p><b className='text-[14px] font-bold'>Right to Object:</b> Object to the processing of your data in specific situations.To exercise any of these rights, please contact us at <a href="mailto:info@heathrowbudgetparking.co.uk" className='text-blue-500'>info@heathrowbudgetparking.co.uk</a></p>

                            <h3 className="text-[16px] font-bold text-gray-700 mt-6 mb-2">7. Data Security</h3>
                            <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or disclosure. However, no online transmission is entirely secure, so we cannot guarantee absolute security</p>

                            <h3 className="text-[16px] font-bold text-gray-700 mt-6 mb-2">8. Cookies and Tracking Technologies</h3>
                            <p>We may use cookies and similar technologies to enhance your experience on our website. For more details, please refer to our [Cookie Policy] on our website.</p>


                            <h3 className="text-[16px] font-bold text-gray-700 mt-6 mb-2">9. Changes to This Privacy Policy</h3>
                            <p>We may update this Privacy Policy periodically. The latest version will be posted on our website, and significant changes will be communicated to you directly.</p>

                            <h3 className="text-[16px] font-bold text-gray-700 mt-6 mb-2">10. Contact Us</h3>
                            <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
                            <h3 className="text-[16px] font-bold text-gray-700 mt-6 mb-2">Heathrow Budget Parking</h3>
                            <p><b className='text-[14px] font-bold'>Email:</b> info@heathrowbudgetparking.co.uk</p>
                            <p><b className='text-[14px] font-bold'>Phone:</b> R+447880333368</p>
                            <p><b className='text-[14px] font-bold'>Website:</b> <a href="http://www.heathrowbudgetparking.co.uk" target="_blank" className='text-blue-500'>http://www.heathrowbudgetparking.co.uk</a></p>

                            
                            
                        </div>
                    </div>
                </div>

                <div className="sm:w-[85%] mx-auto">
                    <div className='w-[90%] mx-auto h-5 rounded-b-[10px]  bg-[#193D1C] sm:w-[85%]'>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
     </>
  )
}

export default Page