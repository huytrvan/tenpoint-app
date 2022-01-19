import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import styles from './Profile.styles';
import LabeledInput from '../../components/LabeledInput/LabeledInput.component';

const Profile = () => {
  const { control, handleSubmit, errors } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      geocode: '',
    }
  });

  const onSubmit = data => alert(data);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Complete Profile</Text>
      <LabeledInput
        inputLabel="Full Name"
        inputName="fullName"
        inputControl={control}
        inputRule={{ required: true }}
      />

      <LabeledInput
        inputLabel="Email"
        inputName="email"
        inputControl={control}
        inputRule={{ required: true }}
      />

      <LabeledInput
        inputLabel="Address"
        inputName="e"
        inputControl={control}
        inputRule={{ required: true }}
      />
    </View>
  );
}

export default Profile;