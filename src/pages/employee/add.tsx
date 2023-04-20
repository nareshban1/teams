import { BreadCrumb, ScreenName } from "@/core/Employee/Employee.styles";
import EmployeeForm from "@/core/Employee/EmployeeForm";
import { MdKeyboardArrowRight } from "react-icons/md";

const AddEmployee = () => {
  return (
    <>
      <BreadCrumb>
        Manage Users <MdKeyboardArrowRight size={24} color="#929295" />
        Employees
        <MdKeyboardArrowRight size={24} color="#929295" /> Add Employee
      </BreadCrumb>
      <ScreenName>Add Employee</ScreenName>
      <EmployeeForm />
    </>
  );
};

export default AddEmployee;
