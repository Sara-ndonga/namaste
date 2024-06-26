import React from "react";
import Header from "@/app/components/Header/Header";
import TeaPageComponent from "./components/TeaPageComponent/TeaPageComponent";
import { TeaType } from "../models/TeaType";
import { TeaVariety } from "../models/TeaVariety";
import { toTeaType } from "@/app/utils/toTeaType";
import teaData from "../../data/tea.json";

export function generateStaticParams() {
  return [
    { tea: "te-azul" },
    { tea: "te-blanco" },
    { tea: "te-infusiones" },
    { tea: "te-negro" },
    { tea: "te-rojo" },
    { tea: "te-rooibos" },
    { tea: "te-verde" },
  ];
}

export default function TeaPage({ params }: { params: { tea: string } }) {
  const selectedTea: TeaType | undefined = toTeaType(
    params.tea.split("-")[1],
    teaData[params.tea.split("-")[1] as keyof typeof teaData]
  );
  const varieties: TeaVariety[] = selectedTea?.varieties || [];

  return (
    <main className="flex flex-col items-center min-h-screen bg-green-50">
      <Header currentPage="CatalogPage" />
      <TeaPageComponent teaName={params.tea} varieties={varieties} />
    </main>
  );
}
