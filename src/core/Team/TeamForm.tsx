import FormLayout from "@/components/FormComponents/FormLayout";
import { FormGroupName } from "@/components/FormComponents/FormLayout.styles";
import Input from "@/components/FormComponents/Input";
import React, { useRef } from "react";

import { InputWrapper, Label } from "@/components/FormComponents/Input.styles";
import {
  EmployeeFormContainer,
  EmployeeFormWrapper,
  FlexStartWrapper,
  FormFooter,
  HorizontalLine,
  HourText,
  HoursInput,
  HoursInputWrapper,
  InputGrid,
  SaveButton,
} from "../Employee/Employee.styles";
import {
  EmployeeBadgeContainer,
  EmployeeSelectBadge,
  TeamMemberContainer,
  TeamMemberSelect,
  TeamMembersWrapperGrid,
} from "./Team.styles";
import { RxCross2 } from "react-icons/rx";
const TeamForm = () => {
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
            leftContent={
              <FlexStartWrapper right>
                <FormGroupName>Basic Information</FormGroupName>
              </FlexStartWrapper>
            }
            rightContent={
              <>
                <InputGrid>
                  <Input placeholder="Enter Team Name" label="Team Name" />
                  <Input
                    placeholder="Enter Team Password"
                    label="Team Password"
                    type="password"
                  />
                </InputGrid>
                <HorizontalLine />
              </>
            }
          />

          <FormLayout
            leftContent={
              <FlexStartWrapper right>
                <FormGroupName>Members</FormGroupName>
              </FlexStartWrapper>
            }
            rightContent={
              <FlexStartWrapper>
                <TeamMembersWrapperGrid>
                  <TeamMemberContainer>
                    <Label>Team Members</Label>
                    <TeamMemberSelect
                      options={[]}
                      placeholder="Select Employees"
                    />
                    <EmployeeBadgeContainer>
                      <EmployeeSelectBadge>
                        Name <RxCross2 size={16} />
                      </EmployeeSelectBadge>
                    </EmployeeBadgeContainer>
                  </TeamMemberContainer>
                </TeamMembersWrapperGrid>
                <InputGrid>
                  <InputWrapper>
                    <Label>Billable Hours</Label>
                    <HoursInputWrapper>
                      <HoursInput
                        type="text"
                        disabled
                        placeholder="Enter Billable Hours"
                      />
                      <HourText background="#1E83F7" color="white">
                        Hours
                      </HourText>
                    </HoursInputWrapper>
                  </InputWrapper>
                </InputGrid>
                <HorizontalLine />
              </FlexStartWrapper>
            }
          />
          <FormLayout
            leftContent={
              <FlexStartWrapper right>
                <FormGroupName>Team QR</FormGroupName>
              </FlexStartWrapper>
            }
            rightContent={<FlexStartWrapper></FlexStartWrapper>}
          />
        </EmployeeFormWrapper>
      </EmployeeFormContainer>
      <FormFooter>
        <SaveButton>Save</SaveButton>
      </FormFooter>
    </>
  );
};

export default TeamForm;
