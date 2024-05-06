import Image from "next/image";
import React from "react";
import { TeaVarietyCardProps } from "./TeaVarietyCard.props";

export default function TeaVarietyCard({
  teaName,
  varietyName,
  onClick,
}: TeaVarietyCardProps) {
  let image: string = "";

  try {
    image = require(`../../../../utils/images/${teaName}/${varietyName
      .replaceAll(" ", "-")
      .toLowerCase()}.jpeg`);
  } catch (error) {
    console.error(error);
  }

  return (
    <button
      className="flex flex-col justify-center items-center w-56 bg-white p-4 m-2 xl:m-10 border rounded shadow transition-transform transform-gpu hover:scale-110"
      onClick={onClick}
    >
      <Image src={image} alt={varietyName} width={128} height={128} />
      <p className="font-bold text-lg">{varietyName}</p>
    </button>
  );
}
