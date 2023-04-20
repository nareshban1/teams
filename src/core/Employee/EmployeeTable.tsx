import Table from "@/components/Table/Table";
import { ColumnDef } from "@tanstack/react-table";
import { AddEmployeeButton, EmployeeSearchBar } from "./Employee.styles";
import Input from "@/components/FormComponents/Input";
import { FiSearch } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import TableActions from "@/components/Table/TableActions";

const EmployeeTable = () => {
  const defaultColumns: ColumnDef<any>[] = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Full Name",
      accessorKey: "id",
    },
    {
      header: "Current Team",
      accessorKey: "id",
    },
    {
      header: "Mobile Number",
      accessorKey: "id",
    },
    {
      header: "Email Address",
      accessorKey: "id",
    },
    {
      header: "Designation",
      accessorKey: "id",
    },
    {
      header: "Billable Hours",
      accessorKey: "id",
    },
    {
      header: "Actions",
      cell: () => {
        return (
          <TableActions
            handleDelete={() => {}}
            handleEdit={() => {}}
            handleView={() => {}}
          />
        );
      },
    },
  ];

  return (
    <>
      <EmployeeSearchBar>
        <Input icon={<FiSearch />} placeholder="Search Item" />
        <AddEmployeeButton href={"/employee/add"}>
          <IoMdAdd size={24} />
          Add Employee
        </AddEmployeeButton>
      </EmployeeSearchBar>
      <Table<any> columns={defaultColumns} data={[{ id: "1" }, { id: "1" }]} />
    </>
  );
};

export default EmployeeTable;
