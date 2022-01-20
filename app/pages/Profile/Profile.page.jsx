import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number } from "yup";

import styles from "./Profile.styles";
import LabeledInput from "../../components/LabeledInput/LabeledInput.component";

const Profile = () => {
  const schema = object({
    fullName: string().required("Full name is required"),
    email: string()
      .email("Please enter valid a email address")
      .required("Email is required"),
    phone: number()
      .typeError("Please enter valid a phone number")
      .required("Phone is required"),
    address: string().required("Address is required"),
  }).required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      geocode: "",
    },
    resolver: yupResolver(schema),
  });

  const submit = (data) => console.log(errors);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Complete Profile</Text>
      <LabeledInput
        inputLabel="Full Name"
        inputName="fullName"
        inputControl={control}
        inputRule={{ required: true }}
        inputError={errors.fullName}
      />
      <LabeledInput
        inputLabel="Email"
        inputName="email"
        inputControl={control}
        inputRule={{ required: true }}
        inputError={errors.email}
      />
      <LabeledInput
        inputLabel="Phone"
        inputName="phone"
        inputControl={control}
        inputRule={{ required: true }}
        inputError={errors.phone}
      />
      <LabeledInput
        inputLabel="Address"
        inputName="address"
        inputControl={control}
        inputRule={{ required: true }}
        inputError={errors.address}
      />
      <Pressable
        style={[styles.btn, styles.btnPrimary]}
        onPress={handleSubmit(submit)}
      >
        <Text style={[styles.btnText, styles.btnTextPrimary]}>CONTINUE</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
