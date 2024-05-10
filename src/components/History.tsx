import React from "react";
import Tama from "../assets/tama.jpg";
import Sabar from "../assets/sabar-postcard.jpg";

const History = () => {
  return (
    <div className="w-full font-serif bg-[#F4F3F2]">
      <div className="mx-[450px]">
        <h1 className="pt-8 font-extrabold text-red-500 text-6xl">
          Early Music
        </h1>
        <div className="">
          <p className="pt-5 pb-4 font-semibold text-2xl text-gray-600">
            As mentioned earlier, Senegal is very ethnically diverse. A short
            breakdown of different ethnic groups in Senegal are 41.3% Wolof,
            17.8% Fula, 14.7% Serer, 3.7% Jola, and 2.1% Soninka. Before Senegal
            gained independence from France in 1960, a lot of the popular music
            in Senegal comprised of European music, with a lot of the European
            music containing French songs. Early traditional music tended to be
            fast and upbeat while lyrics were almost exclusively in Wolof, the
            unofficial language of Senegal. To understand early music, let's
            take a look at some of the instruments used.
          </p>
          <h2 className="text-4xl font-bold">Sabar</h2>
          <div className="flex flex-row">
            <p className="pt-3 pb-4 font-semibold text-2xl text-gray-600 pr-4">
              The sabar is a drum that is used by both Wolof and Serer people.
              The drum is traditionally played using a stick and a hand. Sabar
              drums come in different sizes, each producing unique tones, and
              are often played in ensambles to create a complex rhythmic
              pattern. The sabar plays a significant role in traditional events,
              such as weddings, naming ceremonies, and wrestling matches. The
              sabar was such a core part of many songs, that it is also
              recognized as a style of music when a song in large part is
              created using the drum.
            </p>
            <img src={Sabar} width={500} />
          </div>
          <h2 className="text-4xl font-bold">Tama (Talking Drum)</h2>
          <div className="flex flex-row">
            <p className="pt-3 pb-4 font-semibold text-2xl text-gray-600">
              The Tama, also known as the talking drum, is a drum originating in
              West Africa that is shaped like an hourglass as shown. The drum
              has two drumheads on each side of the drum. Each of those sides
              are connected by leather tension cords, which allows the artist to
              change the pitch of the drum by manipulating the cords on the
              sides of the drum. Traditionally, tama drums are used in various
              different cultural contexts, such as storytelling, ceremonies, and
              festivals. More recently, the tama's versatility has made it a
              popular instrument in contemporary music, finding its way into
              different generes like Afrobeat and Mbalax.{" "}
            </p>
            <img src={Tama} className="p-3" />
          </div>
          <p className="pb-4 font-semibold text-2xl text-gray-600">
            Something special about this drum is that with the ability to change
            the pitch of the drum, it can be played to mimic words and sometimes
            even phrases. Historically, players of the tama would use the drum
            to express different messages, an example being news of a ceremony,
            for miles around.
          </p>
          <p className="pb-4 font-semibold text-2xl text-gray-600">
            Overall, the tama drum is more than just a musical instrument. It is a device for communication and an item of deep cultural heritage, bridging the gap between traditional and more modern music in Senegal and West Africa in general.
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
