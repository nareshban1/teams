import { BreadCrumb, ScreenName } from "@/core/Employee/Employee.styles";
import TeamForm from "@/core/Team/TeamForm";
import { MdKeyboardArrowRight } from "react-icons/md";

const AddTeam = () => {
  return (
    <>
      <BreadCrumb>
        Manage Users <MdKeyboardArrowRight size={24} color="#929295" />
        Teams
        <MdKeyboardArrowRight size={24} color="#929295" /> Add Team
      </BreadCrumb>
      <ScreenName>Add Team</ScreenName>

      <TeamForm />
    </>
  );
};

export default AddTeam;
