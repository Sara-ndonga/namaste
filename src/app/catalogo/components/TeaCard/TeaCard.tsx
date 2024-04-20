import React from "react";
import { TeaCardProps } from "./TeaCard.props";
import Link from "next/link";

export default function TeaCard({ tea }: TeaCardProps) {
  return (
    <Link
      href={`/catalogo/te-${tea.name}`}
      className="flex flex-col items-center justify-center w-64 h-96 bg-white rounded-lg shadow-md m-2 p-2 transition-transform transform-gpu hover:scale-110"
    >
      <picture>
        <img
          src={`img/teas/te-${tea.name}.jpeg`}
          alt={`te-${tea.name}`}
          className="w-20"
        />
      </picture>
      <div className="flex flex-col mt-2 p-2">
        <p className="text-center text-sm">{tea.description}</p>
        <div className="mt-4">
          <p className="font-bold text-sm xl:text-base">Beneficios:</p>
          {tea.benefits.map((benefit) => (
            <p key={benefit} className="text-sm">
              · {benefit}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
}
