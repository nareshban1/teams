import * as Yup from "yup";

export interface IEmployeeData {
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
}

export const employeeInitialData = {
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
  billableHours: Yup.string()
    .when("isBillable", {
      is: true,
      otherwise: Yup.string().trim().required("This is required"),
      then: Yup.string().trim().required("This is required"),
    })
    .required("This is required"),
});
