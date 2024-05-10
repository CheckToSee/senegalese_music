import React from "react"; 
import Dakar from "../assets/Dakar.jpg";

const Intro = () => {
  return (
    <div className="w-full font-serif bg-[#F4F3F2]">
      <div className="mx-[450px]">
        <h1 className="pt-8 font-extrabold text-green-500 text-6xl">
          Introduction
        </h1>
        <div className="">
          <div className="flex flex-row">
            <p className="pt-5 pb-4 font-semibold text-2xl text-gray-600 pr-4">
              Senegal, a large country located in West Africa, is a country hailed
              for its rich history, vibrant culture, and government stability.
              Senegal is the westernmost country in Africa, and bordering the
              Atlantic ocean on its west coastline, it borders other West African
              countries including Mauritania, Mali, Guinea, Guinea-Bissau, and
              completely surrounds The Gambia.{" "}
            </p>
            <div className="flex flex-col">
              <img src={Dakar} />
              <p className="font-semibold text-gray-700 p-2">Dakar, The capital of Senegal and center of commerce.</p>
            </div>
          </div>
          <p className="pb-4 font-semibold text-2xl text-gray-600">
            Senegal is known for its diverse people with a wide variety of
            ethnic groups and different deep-rooted traditions. Senegal is
            largely influenced by the French, as it was previously a colonized
            country of France until it gained independence.{" "}
          </p>
          <p className="pb-4 font-semibold text-2xl text-gray-600">
            Senegal is a majority Muslim country, and with a family oriented
            culture, large families commonly live in tight-knit communities. It
            is prided for its hospitality, with communities having an open door
            policy for others in the community, and the phrase “it takes a
            village to raise a child” perfectly summarizes many communities’
            approach.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
