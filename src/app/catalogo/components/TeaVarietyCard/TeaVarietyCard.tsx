import React from "react";
import { TeaVarietyCardProps } from "./TeaVarietyCard.props";
import Image from "next/image";

export default function TeaVarietyCard({
  teaName,
  varietyName,
  onClick,
}: TeaVarietyCardProps) {
  console.log(
    `img/teas/${teaName}/${varietyName.split(" ")[0].toLowerCase()}.jpeg`
  );

  return (
    <button
      className="flex flex-col justify-center items-center w-56 bg-white p-4 m-2 border rounded shadow transition-transform transform-gpu hover:scale-110"
      onClick={onClick}
    >
      <Image
        src={`/img/teas/${teaName}/${varietyName
          .split(" ")[0]
          .toLowerCase()}.jpeg`}
        alt={varietyName}
        width={128}
        height={128}
      />
      <p className="font-bold text-lg">{varietyName}</p>
    </button>
  );
}
