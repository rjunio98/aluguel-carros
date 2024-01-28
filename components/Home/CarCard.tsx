import Image from "next/image";
import React, { useState } from "react";

function CarCard(props: any) {
  const [car, setCar] = useState<any>(props.car);

  return (
    <div>
      <h2 className="text-[20px] font-medium mb-2">{car.name}</h2>
      <h2 className="text-[28px] font-bold mb-2">
        <span className="text-[12px] font-light">$ </span> {car.price}
        <span className="text-[12px] font-light"> /day</span>
      </h2>

      <Image
        src={car.image?.url}
        alt={car.name}
        width={200}
        height={200}
        className="w-[250px] h-[150px] mb-3 object-contain"
      />
    </div>
  );
}

export default CarCard;
