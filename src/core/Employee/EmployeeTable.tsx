import Input from "@/components/FormComponents/Input";
import DeleteModal from "@/components/Modals/DeleteModal";
import OffCanvas from "@/components/OffCanvas/OffCanvas";
import Table from "@/components/Table/Table";
import TableActions from "@/components/Table/TableActions";
import useBoolean from "@/helpers/hooks/useBoolean";
import { AppContext } from "@/provider/AppProvider";
import { ColumnDef, Row } from "@tanstack/react-table";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
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
  const [selectedEmployee, setSelectedEmployee] =
    useState<IEmployeeData | null>(null);
  const { employees, deleteEmployee } = useContext(AppContext);
  const router = useRouter();
  const defaultColumns: ColumnDef<IEmployeeData>[] = [
    {
      header: "ID",
      cell: ({ row: { index } }: { row: Row<IEmployeeData> }) => index + 1,
    },
    {
      header: "Full Name",
      accessorKey: "fullName",
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
      cell: ({ row }: { row: Row<IEmployeeData> }) => {
        return (
          <TableActions
            handleDelete={() => {
              setSelectedEmployee(row.original);
              toggleModal();
            }}
            handleEdit={() => {
              router.push(`/employee/edit/${row.original.id}`);
            }}
            handleView={() => {
              setSelectedEmployee(row.original);
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
        modalBody={
          <>
            Are you sure you want to delete{" "}
            <strong>{selectedEmployee?.fullName}</strong> from the list?
          </>
        }
        modalTitle="Delete Employee"
        onCancel={() => {
          setSelectedEmployee(null);
        }}
        onSubmit={() => {
          if (selectedEmployee?.id) deleteEmployee(selectedEmployee.id);
        }}
        toggleModal={toggleModal}
      />
      <OffCanvas
        body={
          <>
            <EmployeeImageView
              alt={""}
              src={selectedEmployee?.photo ?? ""}
              className="employee-margin"
              width={120}
              height={120}
            />
            <EmployeeName>{selectedEmployee?.fullName}</EmployeeName>
            <EmployeeEmail>{selectedEmployee?.email}</EmployeeEmail>
            <DesignationBadge>{selectedEmployee?.role}</DesignationBadge>
            <HorizontalLine />
            <EmployeeDetailGrid>
              <EmployeeDetailContainer>
                <EmployeeDetailTitle>Designation</EmployeeDetailTitle>
                <EmployeeDetail>{selectedEmployee?.position}</EmployeeDetail>
              </EmployeeDetailContainer>
              <EmployeeDetailContainer>
                <EmployeeDetailTitle>Contact</EmployeeDetailTitle>
                <EmployeeDetail>{selectedEmployee?.phoneNumber}</EmployeeDetail>
              </EmployeeDetailContainer>
              <EmployeeDetailContainer>
                <EmployeeDetailTitle>Address</EmployeeDetailTitle>
                <EmployeeDetail>{selectedEmployee?.address}</EmployeeDetail>
              </EmployeeDetailContainer>
            </EmployeeDetailGrid>

            <HorizontalLine />
            <EmployeeDetailGrid>
              <EmployeeDetailContainer>
                <EmployeeDetailTitle>Start Date</EmployeeDetailTitle>
                <EmployeeDetail>{selectedEmployee?.startDate}</EmployeeDetail>
              </EmployeeDetailContainer>
              <EmployeeDetailContainer>
                <EmployeeDetailTitle>Role</EmployeeDetailTitle>
                <EmployeeDetail>{selectedEmployee?.role}</EmployeeDetail>
              </EmployeeDetailContainer>
              <EmployeeDetailContainer>
                <EmployeeDetailTitle>Billable Status</EmployeeDetailTitle>
                <EmployeeDetail>
                  {selectedEmployee?.isBillable ? "Billable" : "Not Billable"}
                </EmployeeDetail>
              </EmployeeDetailContainer>
              <EmployeeDetailContainer>
                <EmployeeDetailTitle>Billable Hours</EmployeeDetailTitle>
                <EmployeeDetail>
                  {selectedEmployee?.billableHours}
                </EmployeeDetail>
              </EmployeeDetailContainer>
            </EmployeeDetailGrid>
            <EditProfileButton href={`/employee/edit/${selectedEmployee?.id}`}>
              <FaPen size={16} />
              Edit Profile
            </EditProfileButton>
          </>
        }
        isOpen={isCanvasOpen}
        title="Employee Information"
        toggleModal={() => {
          toggleCanvas();
          setSelectedEmployee(null);
        }}
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
