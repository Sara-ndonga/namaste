"use client";

import React from "react";
import Header from "../components/Header/Header";
import AuthContext from "../components/AuthContext/AuthContext";
import { TeaType } from "./models/TeaType";
import teaData from "../data/tea.json";
import TeaCard from "./components/TeaCard/TeaCard";

export default function CatalogPage() {
  const toTeaType = (type: string, data: any): TeaType => {
    return {
      name: type,
      description: data.description,
      benefits: data.benefits,
    };
  };

  return (
    <AuthContext>
      <main className="flex flex-col items-center justify-center min-h-screen bg-green-50">
        <Header />
        <div className="flex flex-wrap justify-center mt-20">
          <div className="flex w-full items-center justify-center my-6">
            <h1 className="text-lg md:text-2xl text-gray-500">CATÁLOGO</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {Object.entries(teaData).map(([type, data]) => (
              <TeaCard key={type} tea={toTeaType(type, data)} />
            ))}
          </div>
        </div>
      </main>
    </AuthContext>
  );
}
