import { Table } from "../types/table";

// TODO: add mock value
const tables: Table[] = [
  { no: 1, status: "done" },
  { no: 2, status: "pending" },
  { no: 3, status: "cleaning" },
];

export const getAllTable = () => {
  return tables;
};

export const getTableByNo = (tableNo: number) => {
  const table = tables.find((table) => table.no === tableNo);
  if (!table) {
    return;
  }
  return table;
};

export const updateTableByNo = (
  tableNo: number,
  updatedTable: Partial<Table>
) => {
  const table = tables.find((table) => table.no === tableNo);
  if (!table) {
    return;
  }

  // TODO only able to update status
  if (updatedTable.status) {
    table.status = updatedTable.status;
  }

  // TODO update carts
  // if check payload have carts, then update the carts in be

  return updatedTable;
};

// type PartialTable = Partial<Table>
// type PickTable = Pick<Table, 'status'>
