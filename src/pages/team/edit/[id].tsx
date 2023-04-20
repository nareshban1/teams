import { BreadCrumb, ScreenName } from "@/core/Employee/Employee.styles";
import TeamForm from "@/core/Team/TeamForm";
import { useRouter } from "next/router";
import { MdKeyboardArrowRight } from "react-icons/md";

const EditTeam = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <BreadCrumb>
        Manage Users <MdKeyboardArrowRight size={24} color="#929295" />
        Teams
        <MdKeyboardArrowRight size={24} color="#929295" /> Edit Team
      </BreadCrumb>
      <ScreenName>Edit Team</ScreenName>
      <TeamForm />
    </>
  );
};

export default EditTeam;
