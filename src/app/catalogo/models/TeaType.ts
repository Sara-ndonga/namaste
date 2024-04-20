import { TeaVariety } from "./TeaVariety";

export type TeaType = {
  name: string;
  description: string;
  benefits: string[];
  varieties: TeaVariety[];
};
