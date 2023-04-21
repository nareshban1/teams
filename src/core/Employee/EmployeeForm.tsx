import UserAvatar from "@/assets/user-avatar.png";
import FormLayout from "@/components/FormComponents/FormLayout";
import { FormGroupName } from "@/components/FormComponents/FormLayout.styles";
import Input from "@/components/FormComponents/Input";
import { InputWrapper, Label } from "@/components/FormComponents/Input.styles";
import ValidationMessage from "@/components/FormComponents/ValidationMessage";
import { AppContext } from "@/provider/AppProvider";
import { useFormik } from "formik";
import React, { useContext, useEffect, useRef, useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import Select from "react-select";
import {
  employeeInitialData,
  employeeValidationSchema,
} from "./Employee.schema";
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
import { useRouter } from "next/router";
const EmployeeForm = () => {
  const [formData, setFormData] = useState(employeeInitialData);
  const { addEmployee, getEmployee } = useContext(AppContext);
  const router = useRouter();
  console.log(router.query.id);

  useEffect(() => {
    if (router.query.id && !Array.isArray(router.query.id)) {
      const empData = getEmployee(Number(router.query.id));
      console.log(empData);
      if (empData) setFormData(empData);
    }
  }, [getEmployee, router.query.id]);

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
    validationSchema: employeeValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values, { resetForm }) => {
      if (values) {
        if (router.query.id) {
          //update logic remaining
        } else {
          console.log(values);
          const newEmployeeData = {
            ...values,
            id: Date.now(),
            fullName: [values.name, values.middleName, values.surName]
              .filter(Boolean)
              .join(" "),
            role: "Staff",
            startDate: new Date().toLocaleDateString(),
          };
          addEmployee(newEmployeeData);
        }

        resetForm();
        router.push("/");
      }
    },
  });

  const fileRef = useRef<HTMLInputElement>(null);
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();
    if (file) reader.readAsDataURL(file);

    reader.onloadend = () => {
      setFieldValue("photo", reader.result);
    };
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
                <EmployeeImageView
                  src={values?.photo ?? UserAvatar}
                  alt="employee-image"
                  width={120}
                  height={120}
                />
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
                <ValidationMessage
                  name="photo"
                  errors={errors}
                  touched={touched}
                />
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
                  <Input
                    placeholder="Enter Name"
                    label="Name"
                    name="name"
                    errors={errors}
                    touched={touched}
                    onChange={handleChange}
                    value={values.name}
                  />
                  <Input
                    placeholder="Enter Middle Name"
                    label="Middle Name"
                    name="middleName"
                    errors={errors}
                    touched={touched}
                    onChange={handleChange}
                    value={values.middleName}
                  />
                  <Input
                    placeholder="Enter Surname"
                    label="Surname"
                    name="surName"
                    errors={errors}
                    onChange={handleChange}
                    touched={touched}
                    value={values.surName}
                  />
                  <Input
                    placeholder="DD/MM/YYYY"
                    label="Birth Date"
                    type="date"
                    name="birthDate"
                    errors={errors}
                    touched={touched}
                    onChange={handleChange}
                    value={values.birthDate}
                  />
                  <InputWrapper>
                    <Label>Gender</Label>
                    <Select
                      options={[
                        { label: "Male", value: "Male" },
                        { label: "Female", value: "Female" },
                        { label: "Other", value: "Others" },
                      ]}
                      placeholder="Choose gender"
                      onChange={(e) => {
                        setFieldValue("gender", e?.value ?? "");
                      }}
                      value={[
                        { label: "Male", value: "Male" },
                        { label: "Female", value: "Female" },
                        { label: "Other", value: "Others" },
                      ].find((gender) => gender.value === values?.gender)}
                    />
                    <ValidationMessage
                      errors={errors}
                      name={"gender"}
                      touched={touched}
                    />
                  </InputWrapper>

                  <Input
                    placeholder="Enter Address"
                    label="Address"
                    name="address"
                    errors={errors}
                    touched={touched}
                    onChange={handleChange}
                    value={values.address}
                  />
                  <Input
                    placeholder="Enter Phone Number"
                    label="Phone Number"
                    name="phoneNumber"
                    errors={errors}
                    touched={touched}
                    onChange={handleChange}
                    value={values.phoneNumber}
                  />
                  <Input
                    placeholder="Enter Email Address"
                    label="Email Address"
                    type="email"
                    name="email"
                    errors={errors}
                    touched={touched}
                    onChange={handleChange}
                    value={values.email}
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
                  <Input
                    label="Starts At"
                    type="time"
                    name="startTime"
                    errors={errors}
                    touched={touched}
                    onChange={handleChange}
                    value={values.startTime}
                  />
                  <Input
                    label="Ends In"
                    type="time"
                    name="endTime"
                    errors={errors}
                    touched={touched}
                    onChange={handleChange}
                    value={values.endTime}
                  />
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
                    name="position"
                    errors={errors}
                    touched={touched}
                    onChange={handleChange}
                    value={values.position}
                  />
                  <InputWrapper>
                    <Label>Team</Label>
                    <Select
                      options={[]}
                      placeholder="Choose team"
                      onChange={(e: any) => {
                        setFieldValue("gender", e?.value ?? "");
                      }}
                    />{" "}
                    <ValidationMessage
                      errors={errors}
                      name={"team"}
                      touched={touched}
                    />
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
                  <Checkbox
                    type="checkbox"
                    id="isBillable"
                    name="isBillable"
                    checked={values.isBillable}
                    onClick={() => {
                      setFieldValue("isBillable", !values.isBillable);
                    }}
                  />
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
                        disabled={!values.isBillable}
                        name="billableHours"
                        placeholder="Enter Billable Hours"
                        onChange={handleChange}
                        value={values.billableHours}
                      />
                      <HourText>Hours</HourText>
                    </HoursInputWrapper>
                    <ValidationMessage
                      errors={errors}
                      name={"billableHours"}
                      touched={touched}
                    />
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
        <SaveButton type="submit" onClick={() => handleSubmit()}>
          Save
        </SaveButton>
      </FormFooter>
    </>
  );
};

export default EmployeeForm;
