import Input from "@/components/FormComponents/Input";
import Table from "@/components/Table/Table";
import TableActions from "@/components/Table/TableActions";
import useBoolean from "@/helpers/hooks/useBoolean";
import { ColumnDef } from "@tanstack/react-table";
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
import DeleteModal from "@/components/Modals/DeleteModal";
import OffCanvas from "@/components/OffCanvas/OffCanvas";
import { FaPen } from "react-icons/fa";

const EmployeeTable = () => {
  const { toggle: toggleModal, value: isOpen } = useBoolean();
  const { toggle: toggleCanvas, value: isCanvasOpen } = useBoolean();
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
            handleDelete={() => {
              toggleModal();
            }}
            handleEdit={() => {}}
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
            <EmployeeImageView alt={""} src={""} />
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
            <EditProfileButton>
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
