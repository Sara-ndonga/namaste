"use client";

import React, { useState } from "react";
import AuthContext from "@/app/components/AuthContext/AuthContext";
import Popup from "@/app/components/Popup/Popup";
import { TeaVariety } from "@/app/catalogo/models/TeaVariety";
import TeaVarietyCard from "../TeaVarietyCard/TeaVarietyCard";
import { TeaPageComponentProps } from "./TeaPageComponent.props";

export default function TeaPageComponent({
  teaName,
  varieties,
}: TeaPageComponentProps) {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [titlePopup, setTitlePopup] = useState<string>("");
  const [messagePopup, setMessagePopup] = useState<string>("");

  return (
    <AuthContext>
      <div className="flex flex-wrap justify-center mt-20">
        <div className="flex flex-col items-center justify-center w-full my-6">
          <h1 className="text-lg md:text-2xl text-gray-500">
            {!teaName.includes("infusiones") &&
              !teaName.includes("rooibos") &&
              "TÉ "}
            {teaName.split("-")[1].toUpperCase()}
          </h1>
        </div>
        <div className="flex flex-wrap justify-center">
          {varieties.map((variety: TeaVariety) => (
            <TeaVarietyCard
              key={Object.keys(variety)[0]}
              teaName={teaName}
              varietyName={Object.keys(variety)[0]}
              onClick={() => {
                setTitlePopup(Object.keys(variety)[0]);
                setMessagePopup(Object.values(variety)[0]);
                setShowPopup(true);
              }}
            />
          ))}
        </div>
      </div>
      <Popup
        title={titlePopup}
        message={messagePopup}
        showPopup={showPopup}
        closePopup={() => setShowPopup(false)}
      />
    </AuthContext>
  );
}
