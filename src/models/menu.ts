import { menuData } from "../data/Menu";
import { MenuItem } from "../types/menuItem";

export const getMenuAll = () => {
  return menuData;
};

// menu category
export const getMenuItem = (group: string) => {
  const item = menuData.filter((item) => item.group === group);
  if (!item) {
    return;
  }
  return item;
};

// get menu by id
export const getMenuById = (id: number) => {
  const item = menuData.find((item) => item.id === id);
  if (!item) {
    return;
  }
  return item;
};

// update menu by id
export const updateItemById = (id: number, updateById: Partial<MenuItem>) => {
  const itemId = menuData.find((item) => item.id === id);
  if (!itemId) {
    return;
  }

  if (updateById.name) {
    itemId.name = updateById.name;
  }
  if (updateById.price) {
    itemId.price = updateById.price;
  }
  if (updateById.image) {
    itemId.image = updateById.image;
  }
  if (updateById.group) {
    itemId.group = updateById.group;
  }
  console.log("update successful");
  return itemId;
};

//create
export const addMenuItem = (newMenu: MenuItem) => {
  // Find the maximum current ID in menuData and generate a new ID
  const newId = Math.max(...menuData.map((item) => item.id)) + 1;

  // Create a new MenuItem object with the provided id and other properties
  const newItem: MenuItem = {
    id: newId,
    name: newMenu.name,
    price: newMenu.price,
    image: newMenu.image,
    group: newMenu.group,
  };
  // Add the new item to menuData

  menuData.push(newItem);
};
