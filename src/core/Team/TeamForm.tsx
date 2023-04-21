import FormLayout from "@/components/FormComponents/FormLayout";
import { FormGroupName } from "@/components/FormComponents/FormLayout.styles";
import Input from "@/components/FormComponents/Input";
import React, { useContext, useEffect, useRef, useState, useMemo } from "react";

import { InputWrapper, Label } from "@/components/FormComponents/Input.styles";
import { AppContext } from "@/provider/AppProvider";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { RxCross2 } from "react-icons/rx";
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
import { teamsInitialData, teamsValidationSchema } from "./Team.schema";
import {
  EmployeeBadgeContainer,
  EmployeeOption,
  EmployeeSelectBadge,
  QRButtons,
  QRButtonsContainer,
  QRCodeContainer,
  QRContainer,
  TeamMemberContainer,
  TeamMemberSelect,
  TeamMembersWrapperGrid,
} from "./Team.styles";
import ValidationMessage from "@/components/FormComponents/ValidationMessage";
import QRCode from "react-qr-code";
import { IoMdDownload, IoMdPrint } from "react-icons/io";
const TeamForm = () => {
  const [formData, setFormData] = useState(teamsInitialData);
  const [qrData, setQrData] = useState<any>(null);

  const { employees, addTeam, updateTeam, getTeam } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    if (router.query.id && !Array.isArray(router.query.id)) {
      const teamData = getTeam(Number(router.query.id));
      if (teamData) setFormData(teamData);
    }
  }, [getTeam, router.query.id]);

  const {
    errors,
    touched,
    values,
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldValue,
  } = useFormik({
    initialValues: formData,
    enableReinitialize: true,
    validationSchema: teamsValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values, { resetForm }) => {
      if (values) {
        if (router.query.id) {
          const newTeamsData = {
            ...values,
          };
          updateTeam(newTeamsData);
        } else {
          const newTeamsData = {
            ...values,
            id: Date.now(),
          };
          addTeam(newTeamsData);
        }

        resetForm();
        router.push("/");
      }
    },
  });

  const employeeOptions = useMemo(
    () =>
      employees.map((emp) => {
        return {
          ...emp,
          label: (
            <EmployeeOption>
              {emp.fullName}
              <span>{emp.team ? "Not Available" : "Available"}</span>
            </EmployeeOption>
          ),
          value: emp.id,
        };
      }),
    [employees]
  );

  //copied from the react qr package
  const onQRDownload = () => {
    const svg = document.getElementById("TeamQRCode");
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        const pngFile = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.download = "QRCode";
        downloadLink.href = `${pngFile}`;
        downloadLink.click();
      };
      img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
    }
  };

  useEffect(() => {
    if (values.teamName && values.teamPassword && values.teamMembers.length) {
      setQrData({
        teamName: values.teamName,
        teamMembers: values.teamMembers.map((member) => member.fullName),
      });
    } else {
      setQrData(null);
    }
  }, [setFieldValue, values.teamMembers, values.teamName, values.teamPassword]);

  useEffect(() => {
    const svg = document.getElementById("TeamQRCode");
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg);
      if (svgData)
        setFieldValue("qrCode", `data:image/svg+xml;base64,${btoa(svgData)}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qrData]);

  const handleQRPrint = () => {
    const svg = document.getElementById("TeamQRCode");
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg);
      if (svgData) {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx?.drawImage(img, 0, 0);
          const pngFile = canvas.toDataURL("image/png");
          const printWindow = window.open(pngFile, "Print Image");
          if (printWindow) {
            const document = printWindow.document;
            document.open();
            document.write(
              `<html><head><title>Print Image</title></head><body><img src="${pngFile}" /></body></html>`
            );
            document.close();
            printWindow.print();
          }
        };
        img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
      }
    }
  };

  useEffect(() => {
    setFieldValue(
      "totalBillableHours",
      values.teamMembers.reduce(
        (acc, item) => acc + Number(item.billableHour),
        0
      )
    );
  }, [setFieldValue, values.teamMembers]);

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
                  <Input
                    placeholder="Enter Team Name"
                    label="Team Name"
                    name="teamName"
                    errors={errors}
                    touched={touched}
                    onChange={handleChange}
                    value={values.teamName}
                  />
                  <Input
                    name="teamPassword"
                    placeholder="Enter Team Password"
                    label="Team Password"
                    type="password"
                    errors={errors}
                    touched={touched}
                    onChange={handleChange}
                    value={values.teamPassword}
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
                      options={employeeOptions.filter(
                        (emp) =>
                          !values.teamMembers.some(
                            (member) => Number(member.id) === Number(emp.id)
                          )
                      )}
                      placeholder="Select Employees"
                      onChange={(e: any) => {
                        if (e.team) return;
                        setFieldValue("teamMembers", [
                          ...values.teamMembers,
                          {
                            id: e.id,
                            fullName: e.fullName,
                            billableHour: e.billableHours,
                          },
                        ]);
                      }}
                      value={""}
                    />
                    <EmployeeBadgeContainer>
                      {values?.teamMembers.map((member) => (
                        <EmployeeSelectBadge key={member.id}>
                          {member.fullName}{" "}
                          <RxCross2
                            size={16}
                            onClick={() =>
                              setFieldValue("teamMembers", [
                                ...values.teamMembers.filter(
                                  (teamMember) => teamMember.id !== member.id
                                ),
                              ])
                            }
                          />
                        </EmployeeSelectBadge>
                      ))}
                    </EmployeeBadgeContainer>
                    <ValidationMessage
                      errors={errors}
                      name={"teamMembers"}
                      touched={touched}
                    />
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
                        value={values.totalBillableHours ?? ""}
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
            rightContent={
              <FlexStartWrapper>
                <QRContainer>
                  <QRCodeContainer>
                    {qrData && (
                      <QRCode
                        style={{
                          height: "auto",
                          maxWidth: "100%",
                          width: "100%",
                        }}
                        value={JSON.stringify(qrData)}
                        id="TeamQRCode"
                      />
                    )}
                  </QRCodeContainer>
                  <QRButtonsContainer>
                    <QRButtons
                      color="#20BC08"
                      onClick={onQRDownload}
                      disabled={!qrData}
                    >
                      <IoMdDownload size={16} />
                      Download
                    </QRButtons>
                    <QRButtons
                      color="#1E83F7"
                      onClick={handleQRPrint}
                      disabled={!qrData}
                    >
                      <IoMdPrint size={16} />
                      Print
                    </QRButtons>
                  </QRButtonsContainer>
                </QRContainer>
              </FlexStartWrapper>
            }
          />
        </EmployeeFormWrapper>
      </EmployeeFormContainer>
      <FormFooter>
        <SaveButton type="submit" onClick={() => handleSubmit()}>
          Save
        </SaveButton>
      </FormFooter>
    </>
  );
};

export default TeamForm;
