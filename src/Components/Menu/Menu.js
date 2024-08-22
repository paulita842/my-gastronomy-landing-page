import React from "react";

// Importa las imágenes desde la carpeta assets
import bacadoArroz from "../../../src/assets/bocado-arroz.webp";
import cocoebi from "../../../src/assets/cocoebi.webp";
import crabroll from "../../../src/assets/crabroll.jpg";
import kaniespecial from "../../../src/assets/kaniespecial.webp";
import osaki from "../../../src/assets/osaki.jpg";
import timbal from "../../../src/assets/timbal.webp";

const menuItems = [
  {
    id: 1,
    name: "Gunkan",
    image: bacadoArroz,
    description:
      "Bocados de arroz con trozos de atún y salmón, envueltos en nori con salsa acevichada, togarashi y tope de cebollín.   $24.500",
  },
  {
    id: 2,
    name: "Coco Ebi",
    image: cocoebi,
    description:
      "Camarones tempurizados y salteados al wok, con una exquisita salsa de coco y sambal.   $25.500",
  },
  {
    id: 3,
    name: "Crab Roll",
    image: crabroll,
    description:
      "Atrevida entrada donde se integran el masago, palmito de cangrejo, aguacate y mayonesa japonesa con un toque de sriracha envueltos.   $27.500",
  },
  {
    id: 4,
    name: "Kani Especial",
    image: kaniespecial,
    description:
      "Seis crujientes bocados de kani con queso crema, apanados en queso parmesano y servidos con salsa de anguila.   $24.500",
  },
  {
    id: 5,
    name: "Osaki",
    image: osaki,
    description:
      "Seis bocados de arroz crocante envueltos en salmón fresco con salsa divorcio. Levemente picante.   $29.500",
  },
  {
    id: 6,
    name: "Timbal",
    image: timbal,
    description:
      "Deliciosa preparación de kani, camarones y wakame en molde mezclado con salsa de anguila, ponzu, salsa shangai y miel mostaza.   $39.000",
  },
];

const Menu = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 h-full bg-customColor items-start justify-center pt-16">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col min-h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex-grow flex flex-col justify-between">
            <h3 className="text-xl font-bold text-customColorText mb-2">
              {item.name}
            </h3>
            <p className="text-gray-600 line-clamp-3">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
