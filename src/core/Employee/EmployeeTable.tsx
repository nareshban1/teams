import Input from "@/components/FormComponents/Input";
import DeleteModal from "@/components/Modals/DeleteModal";
import OffCanvas from "@/components/OffCanvas/OffCanvas";
import Table from "@/components/Table/Table";
import TableActions from "@/components/Table/TableActions";
import useBoolean from "@/helpers/hooks/useBoolean";
import { AppContext } from "@/provider/AppProvider";
import { ColumnDef, Row } from "@tanstack/react-table";
import { useRouter } from "next/router";
import { useContext } from "react";
import { FaPen } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import {
  AddEmployeeButton,
  DesignationBadge,
  EditProfileButton,
  EmployeeDetail,
  EmployeeDetailContainer,
  EmployeeDetailGrid,
  EmployeeDetailTitle,
  EmployeeEmail,
  EmployeeImageView,
  EmployeeName,
  EmployeeSearchBar,
  HorizontalLine,
} from "./Employee.styles";
import { IEmployeeData } from "./Employee.schema";
const EmployeeTable = () => {
  const { toggle: toggleModal, value: isOpen } = useBoolean();
  const { toggle: toggleCanvas, value: isCanvasOpen } = useBoolean();
  const { employees, deleteEmployee } = useContext(AppContext);
  const router = useRouter();
  const defaultColumns: ColumnDef<IEmployeeData>[] = [
    {
      header: "ID",
      cell: ({ row: { index } }: { row: Row<IEmployeeData> }) => index + 1,
    },
    {
      header: "Full Name",
      cell: ({ row }: { row: Row<IEmployeeData> }) => {
        return (
          <>
            {[row.original.name, row.original.middleName, row.original.surName]
              .filter(Boolean)
              .join(" ")}
          </>
        );
      },
    },
    {
      header: "Current Team",
      cell: ({ row }: { row: Row<IEmployeeData> }) => {
        return <>{row.original.team ? row.original.team : "Available"}</>;
      },
    },
    {
      header: "Mobile Number",
      accessorKey: "phoneNumber",
    },
    {
      header: "Email Address",
      accessorKey: "email",
    },
    {
      header: "Designation",
      accessorKey: "position",
    },
    {
      header: "Billable Hours",
      accessorKey: "billableHours",
    },
    {
      header: "Actions",
      cell: () => {
        return (
          <TableActions
            handleDelete={() => {
              toggleModal();
            }}
            handleEdit={() => {
              router.push("/employee/edit/teamId");
            }}
            handleView={() => {
              toggleCanvas();
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
        modalBody={""}
        modalTitle="Delete Employee"
        onCancel={() => {}}
        onSubmit={() => {}}
        toggleModal={toggleModal}
      />
      <OffCanvas
        body={
          <>
            <EmployeeImageView alt={""} src={""} className="employee-margin" />
            <EmployeeName>Naresh Ban</EmployeeName>
            <EmployeeEmail>demo@gmail.com</EmployeeEmail>
            <DesignationBadge>Employee</DesignationBadge>
            <HorizontalLine />
            <EmployeeDetailGrid>
              <EmployeeDetailContainer>
                <EmployeeDetailTitle>Designation</EmployeeDetailTitle>
                <EmployeeDetail></EmployeeDetail>
              </EmployeeDetailContainer>
              <EmployeeDetailContainer>
                <EmployeeDetailTitle>Contact</EmployeeDetailTitle>
                <EmployeeDetail></EmployeeDetail>
              </EmployeeDetailContainer>
              <EmployeeDetailContainer>
                <EmployeeDetailTitle>Address</EmployeeDetailTitle>
                <EmployeeDetail></EmployeeDetail>
              </EmployeeDetailContainer>
            </EmployeeDetailGrid>

            <HorizontalLine />
            <EmployeeDetailGrid>
              <EmployeeDetailContainer>
                <EmployeeDetailTitle>Start Date</EmployeeDetailTitle>
                <EmployeeDetail></EmployeeDetail>
              </EmployeeDetailContainer>
              <EmployeeDetailContainer>
                <EmployeeDetailTitle>Role</EmployeeDetailTitle>
                <EmployeeDetail></EmployeeDetail>
              </EmployeeDetailContainer>
              <EmployeeDetailContainer>
                <EmployeeDetailTitle>Billable Status</EmployeeDetailTitle>
                <EmployeeDetail></EmployeeDetail>
              </EmployeeDetailContainer>
              <EmployeeDetailContainer>
                <EmployeeDetailTitle>Billable Hours</EmployeeDetailTitle>
                <EmployeeDetail></EmployeeDetail>
              </EmployeeDetailContainer>
            </EmployeeDetailGrid>
            <EditProfileButton href={"/employee/edit/empId"}>
              <FaPen size={16} />
              Edit Profile
            </EditProfileButton>
          </>
        }
        isOpen={isCanvasOpen}
        title="Employee Information"
        toggleModal={toggleCanvas}
      />
      <EmployeeSearchBar>
        <Input icon={<FiSearch />} placeholder="Search Item" name="search" />
        <AddEmployeeButton href={"/employee/add"}>
          <IoMdAdd size={24} />
          Add Employee
        </AddEmployeeButton>
      </EmployeeSearchBar>
      <Table<any> columns={defaultColumns} data={employees || []} />
    </>
  );
};

export default EmployeeTable;
