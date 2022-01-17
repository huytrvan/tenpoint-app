import React from "react";
import { View, Text } from "react-native";
import TenpointLogo from "../../assets/TenpointLogo.icon";
import styles from "./Logo.styles";

const Logo = () => {
  return <TenpointLogo style={[styles.logo, styles.logoLightBg]} />
};

export default Logo;
