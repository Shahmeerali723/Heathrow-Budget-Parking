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
                            <p className='mb-3 mt-6'>{'Welcome to Heathrow Budget Parking ("we", "us", or "our"). This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website'} <a href="http://www.heathrowbudgetparking.co.uk" target='_blank'>http://www.heathrowbudgetparking.co.uk</a>{' or use our services. We are committed to safeguarding your privacy in accordance with the General Data Protection Regulation (GDPR) and other applicable UK data protection laws.'}</p>

                            
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

                            <h3 className="text-[14px] font-bold text-gray-700 mt-6 mb-2">Security of Data</h3>
                            <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
                            <h3 className="text-[14px] font-bold text-gray-700 mt-6 mb-2">Service Providers</h3>
                            <p>{'We may employ third party companies and individuals to facilitate our Service "Service Providers", to provide the Service on our behalf, to perform Service-related services or to assist us in analysing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.'}</p>
                            <h3 className="text-[14px] font-bold text-gray-700 mt-6 mb-2">Analytics</h3>
                            <p>We may use third-party Service Providers to monitor and analyse the use of our Service. Google Analytics Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its advertising network. You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity. For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page.</p>
                            <h3 className="text-[14px] font-bold text-gray-700 mt-6 mb-2">Links to Other Sites</h3>
                            <p>{"Our Service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third-party sites or services."}</p>
                            <h3 className="text-[14px] font-bold text-gray-700 mt-6 mb-2">{"Children's Privacy"}</h3>
                            <p>{'Our Service does not address anyone under the age of 18 "Children". We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.'}</p>
                            <h3 className="text-[14px] font-bold text-gray-700 mt-6 mb-2">Changes to This Privacy Policy</h3>
                            <p>{'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, before the change becoming effective and update the "effective date" at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.'}</p>
                            <h3 className="text-[14px] font-bold text-gray-700 mt-6 mb-2">Contact Us</h3>
                            <p>If you have any questions about this Privacy Policy, please contact us: By email: info@x-ride.co.uk</p>
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