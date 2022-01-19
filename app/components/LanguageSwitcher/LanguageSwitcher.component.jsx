import React from "react";
import { View, Pressable, Text } from "react-native";

import TriangleDownIcon from "../../assets/TriangleDown.icon";
import LanguageIcon from "../../assets/Language.icon";
import UKFlagIcon from "../../assets/UKFlag.icon";
import VietnameseFlagIcon from "../../assets/VietnameseFlag.icon";

const LanguageSwitcher = (props) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.toggleBtn}>
        <LanguageIcon style={styles.languageIcon} />
        <TriangleDownIcon style={styles.triangleDownIcon} />
      </Pressable>
      <View style={styles.languageList}>
        <Pressable style={styles.languageItem}>
          <UKFlagIcon style={styles.flagIcon} />
          <Text style={styles.languageName}>English</Text>
        </Pressable>
        <Pressable style={styles.languageItem}>
          <VietnameseFlagIcon style={styles.flagIcon} />
          <Text style={styles.languageName}>Tiếng Việt</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LanguageSwitcher;

function HandleClick() {
  alert("Clicked");
} 
