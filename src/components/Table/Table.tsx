import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import React from "react";
import {
  PaginationArrow,
  PaginationContainer,
  PaginationDetails,
  StyledTable,
  TableBody,
  TableContainer,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "./Table.styles";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface TableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
}

const Table = <T extends object>({ columns, data }: TableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const getValueFromPageNumber = (pageIndex: number) => {
    if (pageIndex === 0) {
      return 1;
    } else {
      return pageIndex * 10 + 1;
    }
  };
  return (
    <>
      <TableContainer>
        <StyledTable>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHeader key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHeader>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableData key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableData>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>{" "}
      <PaginationContainer>
        <PaginationArrow
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <MdKeyboardArrowLeft size={24} />
        </PaginationArrow>
        <PaginationArrow
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <MdKeyboardArrowRight size={24} />
        </PaginationArrow>

        <PaginationDetails>
          Showing{" "}
          {getValueFromPageNumber(table.getState().pagination.pageIndex)} to{" "}
          {getValueFromPageNumber(table.getState().pagination.pageIndex) +
            table.getPaginationRowModel().rows.length -
            1}{" "}
          of {data.length} entries
        </PaginationDetails>
      </PaginationContainer>
    </>
  );
};

export default Table;
