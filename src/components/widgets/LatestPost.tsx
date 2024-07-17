// pages/index.js
import Head from 'next/head';



const PostCard = ({ date, title, description }:any) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-[0_3px_15px_3px_rgba(0,0,0,0.2)] mb-4">
        <p className="text-gray-500 mb-2 sm:text-base text-xs">{date}</p>
        <h3 className="text-base sm:text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 text-xs sm:text-base">{description}</p>
      </div>
    );
  };


export default function LatestPost() {
  const posts = [
    {
      date: '10 July 2023',
      title: 'Cloud Computing: A Game-Changer',
      description: 'Cybersecurity Threats Need to Know in 2023'
    },
    {
      date: '10 July 2023',
      title: 'Cloud Computing: A Game-Changer',
      description: 'Cybersecurity Threats Need to Know in 2023'
    },
    {
      date: '10 July 2023',
      title: 'Cloud Computing: A Game-Changer',
      description: 'Cybersecurity Threats Need to Know in 2023'
    },
    {
      date: '10 July 2023',
      title: 'Cloud Computing: A Game-Changer',
      description: 'Cybersecurity Threats Need to Know in 2023'
    },
    {
      date: '10 July 2023',
      title: 'Cloud Computing: A Game-Changer',
      description: 'Cybersecurity Threats Need to Know in 2023'
    },
    {
      date: '10 July 2023',
      title: 'Cloud Computing: A Game-Changer',
      description: 'Cybersecurity Threats Need to Know in 2023'
    },
  ];

  return (
    <div className="p-4 py-[50px]">
      <Head>
        <title>Latest Post</title>
      </Head>
      <header className=" mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-[40px] sm:text-start text-center font-bold text-[#232536] mb-4">Latest Post</h1>
      </header>
      <main className="flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full ">
          {posts.map((post, index) => (
            <PostCard
              key={index}
              date={post.date}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
