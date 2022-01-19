import React from "react";
import { View, Text, Pressable } from "react-native";

import styles from "./LogIn.styles";
import GoogleIcon from "../../assets/Google.icon";
import FacebookIcon from "../../assets/Facebook.icon";
import ArrowLeftIcon from "../../assets/ArrowLeft.icon";

const LogIn = () => {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Pressable style={styles.navBackBtn}>
          <ArrowLeftIcon style={styles.navBackIcon} />
        </Pressable>
      </View>
      <Text style={styles.header}>Log In</Text>
      <Text style={styles.descText}>Log In (or Sign up) with:</Text>
      <Pressable style={[styles.btn, styles.google]}>
        <GoogleIcon style={styles.btnIcon} />
        <Text style={styles.btnText}>| Google</Text>
      </Pressable>
      <Pressable style={[styles.facebook, styles.btn]}>
        <FacebookIcon style={styles.btnIcon} />
        <Text style={[styles.btnText, styles.btnTextFacebook]}>| Facebook</Text>
      </Pressable>
    </View>
  );
};

export default LogIn;
