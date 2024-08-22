import React from "react";
import banner from "../../../src/assets/banner_2.webp";

const Contact = () => {
  return (
    <div className="h-screen bg-customColor flex flex-col items-center justify-center p-4">
      <section className="w-full h-full flex flex-col items-center justify-center">
        <img src={banner} alt="Banner" className="w-full h-auto object-cover" />
        <h2 className="text-2xl md:text-4xl text-customColorText font-bold mt-4">
          Contacto
        </h2>
        <p className="text-lg md:text-2xl text-customColorText mt-2 text-center">
          Dirección: Calle Falsa 123, Ciudad
        </p>
        <p className="text-lg md:text-2xl text-customColorText mt-2 text-center">
          Teléfono: +123 456 7890
        </p>
        <p className="text-lg md:text-2xl text-customColorText mt-2 text-center">
          Email: info@restaurante.com
        </p>
      </section>
    </div>
  );
};

export default Contact;
