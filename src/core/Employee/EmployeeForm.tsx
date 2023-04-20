import UserAvatar from "@/assets/user-avatar.png";
import FormLayout from "@/components/FormComponents/FormLayout";
import { FormGroupName } from "@/components/FormComponents/FormLayout.styles";
import Input from "@/components/FormComponents/Input";
import React, { useRef } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import {
  EmployeeFormWrapper,
  EmployeeImageView,
  FlexCenteredWrapper,
  FlexStartWrapper,
  InputGrid,
  UploadProfileImageButton,
} from "./Employee.styles";
const EmployeeForm = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setFieldValue(name, {
    //   image: (e.target.files && URL.createObjectURL(e.target.files[0])) || "",
    //   name: e.target.files?.[0].name || "",
    //   original: e.target.files?.[0],
    // });
  };
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileUpload(e);
  };
  return (
    <EmployeeFormWrapper>
      <FormLayout
        leftContent={
          <FlexCenteredWrapper right>
            <EmployeeImageView src={UserAvatar} alt="employee-image" />
          </FlexCenteredWrapper>
        }
        rightContent={
          <FlexCenteredWrapper>
            <FormGroupName>Profile Image</FormGroupName>
            <input
              name={""}
              id={""}
              hidden
              type="file"
              ref={fileRef}
              onChange={onFileChange}
              accept={"image/*"}
              onDrag={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            />
            <UploadProfileImageButton onClick={() => fileRef?.current?.click()}>
              <IoMdCloudUpload size={24} />
              Upload Profile Image
            </UploadProfileImageButton>
          </FlexCenteredWrapper>
        }
      />
      <FormLayout
        leftContent={
          <FlexStartWrapper right>
            <FormGroupName>Basic Information</FormGroupName>
          </FlexStartWrapper>
        }
        rightContent={
          <InputGrid>
            <Input placeholder="Enter Name" label="Name" />
            <Input placeholder="Enter Middle Name" label="Middle Name" />
            <Input placeholder="Enter Surname" label="Surname" />
            <Input placeholder="DD/MM/YYYY" label="Birth Date" type="date" />
            <Input placeholder="Enter Name" label="Name" />
            <Input placeholder="Enter Address" label="Address" />
            <Input placeholder="Enter Phone Number" label="Phone Number" />
            <Input placeholder="Enter Email Address" label="Email Address" />
          </InputGrid>
        }
      />
      <FormLayout
        leftContent={
          <FlexStartWrapper right>
            <FormGroupName>Working Hours</FormGroupName>
          </FlexStartWrapper>
        }
        rightContent={
          <InputGrid>
            <Input placeholder="Enter Name" label="Name" type="time" />
            <Input placeholder="Enter Name" label="Name" type="time" />
          </InputGrid>
        }
      />
      <FormLayout
        leftContent={
          <FlexStartWrapper right>
            <FormGroupName>Jobs</FormGroupName>
          </FlexStartWrapper>
        }
        rightContent={
          <InputGrid>
            <Input placeholder="Enter Job Position" label="Name" />
            <Input placeholder="Enter Name" label="Name" />
          </InputGrid>
        }
      />
      <FormLayout
        leftContent={
          <FlexStartWrapper right>
            <FormGroupName>Billable Information</FormGroupName>
          </FlexStartWrapper>
        }
        rightContent={<FlexStartWrapper></FlexStartWrapper>}
      />
    </EmployeeFormWrapper>
  );
};

export default EmployeeForm;
