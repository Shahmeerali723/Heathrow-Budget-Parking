import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';

const BlogDetail = ({ title, description, places, image }: any) => {
    return (
        <div className=" mx-auto p-4">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center mb-2">{title}</CardTitle>
                    <CardDescription className="text-center">{description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="relative  mb-4">
                        <Image width={1200} height={100}
                            src={image || "/car.png"}
                            alt="Airplane wing in clouds"
                            className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover rounded-lg"
                        />
                    </div>


                    <div className='p-5 border-[#CACACA] border text-sm rounded-lg  w-fit mx-auto'>
                        <div className=" text-sm   h-[485px] overflow-y-auto custom-scrollbar">
                            <div className="space-y-4">
                                {places.map((place: any, index: any) => (
                                    <div key={index} className=" pb-4 ">
                                        <h3 className="text-base sm:text-lg font-semibold mb-2">{place.name}</h3>
                                        <p className=" text-gray-600 text-xs sm:text-base">{place.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default BlogDetail