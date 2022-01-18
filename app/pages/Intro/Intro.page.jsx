import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./Intro.styles";

import Logo from "../../components/Logo/Logo.component";
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher.component";

const Intro = () => {
  return (
    <View style={styles.container}>
      <LanguageSwitcher />
      <Logo style={{zIndex: 1}} />
      <Text style={[styles.brandName, styles.brandNameLightBg]}>Tenpoint</Text>
      <Text style={[styles.introText]}>
        We help you find the best repair services in town.
      </Text>
      <Pressable style={[styles.btn, styles.btnPrimary]} title="Log in">
        <Text style={[styles.btnText, styles.btnTextPrimary]}>SIGN UP</Text>
      </Pressable>
      <Pressable style={[styles.btn, styles.btnSecondary]} title="Sign up">
        <Text style={[styles.btnText, styles.btnTextSecondary]}>LOG IN</Text>
      </Pressable>
      <Pressable style={styles.linkAction}>
        <Text style={styles.linkActionText}>Join as repair technician</Text>
      </Pressable>
    </View>
  );
};

export default Intro;
