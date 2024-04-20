import { TeaType } from "../catalogo/models/TeaType";

export const toTeaType = (type: string, data: any): TeaType => {
  return {
    name: type,
    description: data.description,
    benefits: data.benefits,
    varieties: data.varieties,
  };
};
