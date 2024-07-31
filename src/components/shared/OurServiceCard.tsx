// components/MeetAndGreetCard.js
import Image from 'next/image';
import meetingImage from '../public/meeting.png'; // apni image ko yahan import karen

const OurServiceCard = ({...props}) => {

    const {data} = props

    return (
        <div

            className={`rounded-3xl w-full  relative  border-0 p-0   `}

        >
            <div className={`absolute bottom-0 flex flex-col justify-end text-white left-0 right-0 w-full object-cover h-full bg-black bg-opacity-25 rounded-lg`}>
                <div className="relative p-4 z-10">
                    <h2 className="text-lg font-bold mb-2 sm:text-xl">{data?.title || "Meet And Greet"}</h2>
                    <p className="text-xs sm:text-sm">
                        {data?.desc || "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
                    </p>
                </div>
            </div>
            <Image
                src={data?.image || "/service2.png"}
                alt={""}
                className="w-full h-full  rounded-xl"
                width={520}
                height={100}
            />


        </div>
    );
};

export default OurServiceCard;
