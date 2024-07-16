import { menuData } from "../data/Menu";

//models
export const getAllMenu = () => {
  return menuData;
};

export const getMenuName = (name: string) => {
  const menu = menuData.find((menu) => menu.name === name);
  if (!menu) {
    return;
  }
  return menu;
};
