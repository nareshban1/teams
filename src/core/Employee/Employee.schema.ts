import * as Yup from "yup";

export interface IEmployeeData {
  id?: number;
  name: string;
  middleName: string;
  surName: string;
  fullName: string;
  birthDate: string;
  gender: string;
  address: string;
  phoneNumber: string;
  email: string;
  startTime: string;
  endTime: string;
  position: string;
  team: string | number | null;
  isBillable: boolean;
  billableHours: string;
  photo: string;
  role: string;
  startDate: string;
}

export const employeeInitialData: IEmployeeData = {
  name: "",
  middleName: "",
  surName: "",
  fullName: "",
  birthDate: "",
  gender: "",
  address: "",
  phoneNumber: "",
  email: "",
  startTime: "",
  endTime: "",
  position: "",
  team: "",
  isBillable: false,
  billableHours: "",
  photo: "",
  role: "",

  startDate: "",
};

export const employeeValidationSchema = Yup.object({
  name: Yup.string().trim().required("This is required"),
  middleName: Yup.string().trim().required("This is required"),
  surName: Yup.string().trim().required("This is required"),
  birthDate: Yup.date().required("This is required"),
  gender: Yup.string().trim().required("This is required"),
  address: Yup.string().trim().required("This is required"),
  phoneNumber: Yup.string().trim().required("This is required"),
  email: Yup.string().email().trim().required("This is required"),
  startTime: Yup.string().trim().required("This is required"),
  endTime: Yup.string().trim().required("This is required"),
  position: Yup.string().trim().required("This is required"),
  isBillable: Yup.boolean(),
  photo: Yup.string().trim().required("This is required"),
  billableHours: Yup.string().when("isBillable", {
    is: true,
    then: Yup.string().trim().required("This is required"),
    otherwise: Yup.string().notRequired(),
  }),
});
export const EmployeeRoles = [
  { label: "Admin", value: "Admin" },
  { label: "Super Admin", value: "SuperAdmin" },
  { label: "Staff", value: "Staff" },
  { label: "Reviewer", value: "Reviewer" },
];
