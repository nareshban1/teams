export interface IEmployeeData {
  name: string;
  password: string;
  teamMembers: Array<IEmployeeBasicData>;
  totalBillableHours: string;
  qrCode: string;
}

export interface IEmployeeBasicData {
  id: string | number;
  fullName: string;
}
