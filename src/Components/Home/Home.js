import React from "react";
import banner from "../../../src/assets/banner.webp";

const Home = () => {
  return (
    <div className="min-h-screen bg-customColor flex flex-col items-center justify-center p-4 md:p-8">
      <section className="w-full flex flex-col items-center justify-center">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-auto object-cover mb-4"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-customColorText mt-4 font-extrabold text-center">
          ¿Antojos?
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-customColorText font-bold text-center mt-2">
          Descubre el menú más fresco y anímate a probar el auténtico sabor de
          nuestro Sushi.
        </h2>
      </section>
    </div>
  );
};

export default Home;
