import { BreadCrumb, ScreenName } from "@/core/Employee/Employee.styles";
import EmployeeForm from "@/core/Employee/EmployeeForm";
import { useRouter } from "next/router";
import { MdKeyboardArrowRight } from "react-icons/md";

const EditEmployee = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <BreadCrumb>
        Manage Users <MdKeyboardArrowRight size={24} color="#929295" />
        Employees
        <MdKeyboardArrowRight size={24} color="#929295" /> Edit Employee
      </BreadCrumb>
      <ScreenName>Edit Employee</ScreenName>
      <EmployeeForm />
    </>
  );
};

export default EditEmployee;
