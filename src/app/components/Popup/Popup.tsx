import React from "react";
import { PopupProps } from "./Popup.props";

export default function Popup({
  title,
  message,
  showPopup,
  closePopup,
}: PopupProps) {
  return showPopup ? (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50">
      <div className="absolute top-1/2 left-1/2 w-[80vw] sm:w-fit transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg">
        <button
          className="absolute top-0 right-4 transition-transform transform-gpu hover:scale-110"
          onClick={closePopup}
        >
          <p className="font-bold text-red-500 text-2xl">x</p>
        </button>
        <h1 className="text-lg sm:text-2xl font-bold text-center mb-2">{title}</h1>
        <p className="text-sm sm:text-lg">{message}</p>
      </div>
    </div>
  ) : (
    ""
  );
}
