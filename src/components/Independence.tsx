import Celebration from '../assets/celebration.jpg'

const Independence = () => {
  return (
    <div className="w-full font-serif bg-[#F4F3F2]">
      <div className="mx-[450px]">
        <h1 className="pt-8 font-extrabold text-yellow-500 text-6xl">
          Independence
        </h1>
        <div className="">
          <p className="pt-5 pb-4 font-semibold text-2xl text-gray-600">
            As Senegal got closer to independence, they wanted to distance
            themselves from their colonial past. Popular Senegalese music began
            to get influenced by Cuban music that was gaining popularity all
            around Africa. Once Senegal gained independence from France on
            August 20th, 1960, the impact was massive on the musical scene.
          </p>
          <div className='flex flex-row'>
            <p className="pb-4 pr-3 font-semibold text-2xl text-gray-600">
              Independence led to a greater interest in Senegalese culture and
              heritage. Traditional music and instruments were embraced such as
              the Sabar and Tama drums for people to reconnect with their culture.
              This shift was reflected in the music being released, as people were
              hearing the familiar instruments and rhythms of their culture.
            </p>
            <img src={Celebration} width={700} className='p-4' />
          </div>
          <p className="pb-4 font-semibold text-2xl text-gray-600">
            With colonialism in the past for Senegal, political expression was a
            very important right for them, and with a new sense of political
            freedom and identity, music was often used to comment on political
            issues, critique the government, and inspire national unity.
          </p>
          <p className="pb-4 font-semibold text-2xl text-gray-600">
            Different styles of music mixed and artists would create fusions of
            traditional and newer music styles. Inspired by the spirit of
            independence, they sought to create a new sound for the newly
            sovereign nation. Pioneers of the industry like Youssou N’Dour and
            Baaba Maal turned this new wave into a wildly successful genre, and
            helped establish Senegal on the global stage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Independence;
