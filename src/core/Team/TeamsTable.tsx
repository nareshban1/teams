import Input from "@/components/FormComponents/Input";
import Table from "@/components/Table/Table";
import TableActions from "@/components/Table/TableActions";
import { ColumnDef } from "@tanstack/react-table";
import { FiSearch } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { AddTeamButton, TeamsSearchBar } from "./Team.styles";

const TeamsTable = () => {
  const defaultColumns: ColumnDef<any>[] = [
    {
      header: "Team Name",
      accessorKey: "id",
    },
    {
      header: "Members",
      accessorKey: "id",
    },
    {
      header: "QR Details",
      accessorKey: "id",
    },
    {
      header: "Total Man Hours",
      accessorKey: "id",
    },

    {
      header: "Actions",
      cell: () => {
        return <TableActions handleDelete={() => {}} handleEdit={() => {}} />;
      },
    },
  ];
  return (
    <>
      <TeamsSearchBar>
        <Input icon={<FiSearch />} placeholder="Search Item" />
        <AddTeamButton>
          <IoMdAdd size={24} />
          Add Team
        </AddTeamButton>
      </TeamsSearchBar>
      <Table<any>
        columns={defaultColumns}
        data={[
          { id: "1" },
          { id: "1" },
          { id: "1" },
          { id: "1" },
          { id: "1" },
          { id: "1" },
          { id: "1" },
          { id: "1" },
          { id: "1" },
          { id: "1" },
          { id: "1" },
          { id: "1" },
          { id: "1" },
          { id: "1" },
          { id: "1" },
        ]}
      />
    </>
  );
};

export default TeamsTable;
