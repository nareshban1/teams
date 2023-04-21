import Input from "@/components/FormComponents/Input";
import Table from "@/components/Table/Table";
import TableActions from "@/components/Table/TableActions";
import { ColumnDef, Row } from "@tanstack/react-table";
import { FiSearch } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { AddTeamButton, TeamsSearchBar } from "./Team.styles";
import DeleteModal from "@/components/Modals/DeleteModal";
import useBoolean from "@/helpers/hooks/useBoolean";
import { useRouter } from "next/router";
import { ITeamData } from "./Team.schema";
import { useContext, useState } from "react";
import { AppContext } from "@/provider/AppProvider";
import Image from "next/image";

const TeamsTable = () => {
  const { toggle: toggleModal, value: isOpen } = useBoolean();
  const [selectedTeam, setSelectedTeam] = useState<ITeamData | null>(null);
  const { teams, deleteTeam } = useContext(AppContext);
  const router = useRouter();
  const defaultColumns: ColumnDef<any>[] = [
    {
      header: "Team Name",
      accessorKey: "teamName",
    },
    {
      header: "Members",
      accessorKey: "teamMembers",
      cell: ({ row }: { row: Row<ITeamData> }) => {
        const sliceArray = [...row.original.teamMembers].slice(0, 2);
        const memberLength =
          row.original.teamMembers.length > 2
            ? row.original.teamMembers.length - 2
            : null;
        return (
          <>
            {sliceArray.map(
              (member, index) =>
                `${member.fullName}${index < sliceArray.length - 1 ? "," : ""} `
            )}{" "}
            {memberLength && `& ${memberLength}more`}
          </>
        );
      },
    },
    {
      header: "QR Details",
      cell: ({ row }: { row: Row<ITeamData> }) => {
        return (
          <>
            <Image
              src={row.original.qrCode}
              alt="teamQR"
              height={30}
              width={30}
            />
          </>
        );
      },
    },
    {
      header: "Total Man Hours",
      accessorKey: "totalBillableHours",
    },

    {
      header: "Actions",
      cell: ({ row }: { row: Row<ITeamData> }) => {
        return (
          <TableActions
            handleDelete={() => {
              setSelectedTeam(row.original);
              toggleModal();
            }}
            handleEdit={() => {
              router.push(`/team/edit/${row.original.id}`);
            }}
          />
        );
      },
    },
  ];
  return (
    <>
      <DeleteModal
        isOpen={isOpen}
        modalBody={
          <>
            Are you sure you want to delete
            <strong> {selectedTeam?.teamName} </strong> from the list?
          </>
        }
        modalTitle="Delete Team"
        onCancel={() => {
          setSelectedTeam(null);
        }}
        onSubmit={() => {
          if (selectedTeam?.id) deleteTeam(selectedTeam?.id);
        }}
        toggleModal={toggleModal}
      />
      <TeamsSearchBar>
        <Input
          icon={<FiSearch />}
          placeholder="Search Item"
          name="searchTeam"
        />
        <AddTeamButton href={"/team/add"}>
          <IoMdAdd size={24} />
          Add Team
        </AddTeamButton>
      </TeamsSearchBar>
      <Table<any> columns={defaultColumns} data={teams} />
    </>
  );
};

export default TeamsTable;
