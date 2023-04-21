import * as Yup from "yup";
export interface ITeamData {
  id?: number | null;
  teamName: string;
  teamPassword: string;
  teamMembers: Array<IEmployeeBasicData>;
  totalBillableHours: number | null;
  qrCode: string;
}

export interface IEmployeeBasicData {
  id: string | number;
  fullName: string;
  billableHour: string;
}
export const teamsInitialData: ITeamData = {
  qrCode: "",
  teamMembers: [],
  teamName: "",
  teamPassword: "",
  totalBillableHours: null,
};

export const teamsValidationSchema = Yup.object({
  teamName: Yup.string().trim().required("This is required"),
  teamPassword: Yup.string().trim().required("This is required"),
  teamMembers: Yup.array()
    .min(1, "Please select a team member")
    .required("This is required"),
  qrCode: Yup.string().trim().required("This is required"),
});
