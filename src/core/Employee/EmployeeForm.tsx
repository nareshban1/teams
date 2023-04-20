import UserAvatar from "@/assets/user-avatar.png";
import FormLayout from "@/components/FormComponents/FormLayout";
import { FormGroupName } from "@/components/FormComponents/FormLayout.styles";
import Input from "@/components/FormComponents/Input";
import React, { useRef } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import {
  ButtonFlex,
  Checkbox,
  CheckboxLabel,
  CheckboxWrapper,
  EmployeeFormContainer,
  EmployeeFormWrapper,
  EmployeeImageView,
  EnterButton,
  FlexCenteredWrapper,
  FlexStartWrapper,
  FormFooter,
  HorizontalLine,
  HourText,
  HoursInput,
  HoursInputWrapper,
  InputGrid,
  SaveButton,
  UploadProfileImageButton,
} from "./Employee.styles";
import Select from "react-select";
import { InputWrapper, Label } from "@/components/FormComponents/Input.styles";
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
    <>
      <EmployeeFormContainer>
        <EmployeeFormWrapper>
          <FormLayout
            className="form-margin"
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
                <UploadProfileImageButton
                  onClick={() => fileRef?.current?.click()}
                >
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
              <>
                <InputGrid>
                  <Input placeholder="Enter Name" label="Name" />
                  <Input placeholder="Enter Middle Name" label="Middle Name" />
                  <Input placeholder="Enter Surname" label="Surname" />
                  <Input
                    placeholder="DD/MM/YYYY"
                    label="Birth Date"
                    type="date"
                  />
                  <InputWrapper>
                    <Label>Gender</Label>
                    <Select options={[]} placeholder="Choose gender" />
                  </InputWrapper>

                  <Input placeholder="Enter Address" label="Address" />
                  <Input
                    placeholder="Enter Phone Number"
                    label="Phone Number"
                  />
                  <Input
                    placeholder="Enter Email Address"
                    label="Email Address"
                    type="email"
                  />
                </InputGrid>
                <HorizontalLine />
              </>
            }
          />
          <FormLayout
            leftContent={
              <FlexStartWrapper right>
                <FormGroupName>Working Hours</FormGroupName>
              </FlexStartWrapper>
            }
            rightContent={
              <>
                <InputGrid>
                  <Input label="Starts At" type="time" />
                  <Input label="Ends In" type="time" />
                </InputGrid>
                <HorizontalLine />
              </>
            }
          />
          <FormLayout
            leftContent={
              <FlexStartWrapper right>
                <FormGroupName>Jobs</FormGroupName>
              </FlexStartWrapper>
            }
            rightContent={
              <>
                <InputGrid>
                  <Input
                    placeholder="Enter Job Position"
                    label="Job Position"
                  />
                  <InputWrapper>
                    <Label>Team</Label>
                    <Select options={[]} placeholder="Choose team" />
                  </InputWrapper>
                </InputGrid>
                <HorizontalLine />
              </>
            }
          />
          <FormLayout
            leftContent={
              <FlexStartWrapper right>
                <FormGroupName>Billable Information</FormGroupName>
              </FlexStartWrapper>
            }
            rightContent={
              <FlexStartWrapper>
                <CheckboxWrapper>
                  <Checkbox type="checkbox" id="isBillable" name="isBillable" />
                  <CheckboxLabel htmlFor="isBillable">
                    This User is billable
                  </CheckboxLabel>
                </CheckboxWrapper>
                <InputGrid>
                  <InputWrapper>
                    <Label>Billable Hours</Label>
                    <HoursInputWrapper>
                      <HoursInput
                        type="text"
                        disabled
                        placeholder="Enter Billable Hours"
                      />
                      <HourText>Hours</HourText>
                    </HoursInputWrapper>
                  </InputWrapper>
                  <ButtonFlex>
                    <EnterButton>Enter</EnterButton>
                  </ButtonFlex>
                </InputGrid>
              </FlexStartWrapper>
            }
          />
        </EmployeeFormWrapper>
      </EmployeeFormContainer>
      <FormFooter>
        <SaveButton>Save</SaveButton>
      </FormFooter>
    </>
  );
};

export default EmployeeForm;
