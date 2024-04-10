import React from "react";
import { TeaCardProps } from "./TeaCard.props";

export default function TeaCard(props: TeaCardProps) {
  return (
    <div className="flex flex-col items-center justify-center w-64 h-96 bg-white rounded-lg shadow-md m-2 p-2">
      <picture>
        <img
          src={`img/teas/${props.tea.name}-tea.jpeg`}
          alt={`${props.tea.name}-tea`}
          className="w-20"
        />
      </picture>
      <div className="flex flex-col mt-2 p-2">
        <p className="text-center text-sm">{props.tea.description}</p>
        <div className="mt-4">
          <p className="font-bold text-sm xl:text-base">Beneficios:</p>
          {props.tea.benefits.map((benefit) => (
            <p key={benefit} className="text-sm">
              · {benefit}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
