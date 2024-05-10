import Youssou from '../assets/youssou.jpg'

const Nineties = () => {
  return (
    <div className="w-full font-serif bg-[#F4F3F2]">
      <div className="mx-[450px]">
        <h1 className="pt-8 font-extrabold text-red-500 text-6xl">The 90s</h1>
        <div className="">
          <p className="pt-5 pb-4 font-semibold text-2xl text-gray-600">
            The late 1980s and 1990s were transformative for Senegal’s music
            scene marked by new genres, international collaboration, and a
            growing global presence. Here is an overview of noteworthy things
            about the music scene in Senegal during these years.
          </p>
          <h2 className="text-4xl font-bold">The Emergence of Mbalax</h2>
          <p className="pt-3 pb-4 font-semibold text-2xl text-gray-600 pr-4">
            Mbalax, is a genre that is a derivative of traditional Senegalese
            rhythms like the sabar drums, and this genre became the dominant
            music style of this time. This fusion genre combined the traditional
            elements with newer developments of the music scene including jazz,
            funk, and pop. The genre gained massive popularity due to the
            danceable beats and high energy.
          </p>
          <h2 className="text-4xl font-bold pb-3">Youssou N'Dour</h2>
          <div className='mb-3'>
            <img src={Youssou} className='mb-2' />
            <p className="pb-4 font-semibold text-2xl text-gray-600">
              Although there are many artists that rose in popularity, Youssou
              N’Dour gained an incredible amount of attention, both within Senegal
              and on the global music scene. As one of Africa’s most celebrated
              musicians, he played a pivotal role in popularizing Senegalese music
              and bringing African music to international audiences.
            </p>
          </div>
          <h2 className="text-4xl font-bold">Media and Technology</h2>
          <p className="pt-2 pb-4 font-semibold text-2xl text-gray-600">
            During the 80s and 90s, there was a large increase in the media’s
            role in promotion of music. Radio stations focused on African music
            as well as the rise in popularity of music videos helped spread
            Senegalese music to a much wider audience. With these mediums,
            artists were able to reach newer heights, not only having an easier
            time in gaining a national audience, but making it more possible to
            gain an international audience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nineties;
