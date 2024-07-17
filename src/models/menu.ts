import { menuData } from "../data/Menu";
import { MenuItem } from "../types/menuItem";

export const getMenuAll = () => {
  return menuData;
};

export const getMenuItem = (group: string) => {
  const item = menuData.filter((item) => item.group === group);
  if (!item) {
    return;
  }
  return item;
};

export const getMenuById = (id: number) => {
  const item = menuData.find((item) => item.id === id);
  if (!item) {
    return;
  }
  return item;
};

export const updateItemById = (id: number, updateById: Partial<MenuItem>) => {
  const itemId = menuData.find((item) => item.id === id);
  if (!itemId) {
    return;
  }

  if (updateById.price) {
    itemId.price = updateById.price;
  }
  console.log("update successful");
  return itemId;
};

//create
export const addMenuItem = (newItem: MenuItem): void => {
  menuData.push(newItem);
};
