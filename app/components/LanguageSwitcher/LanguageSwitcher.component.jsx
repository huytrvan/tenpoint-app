import React from "react";
import { View, Pressable, Text } from "react-native";

import TriangleDownIcon from "../../assets/TriangleDown.icon";
import LanguageIcon from "../../assets/Language.icon";
import UKFlagIcon from "../../assets/UKFlag.icon";
import VietnameseFlagIcon from "../../assets/VietnameseFlag.icon";
import theme from "../../styles/theme.styles";
import commons from "../../styles/commons.styles";
const LanguageSwitcher = (props) => {
  return (
    <View
      style={{
        position: "relative",
        height: 80,
        zIndex: 999,
      }}
    >
      <Pressable
        style={{
          height: "50%",
          width: "100%",
          justifyContent: "flex-end",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <LanguageIcon
          style={{
            width: 24,
            height: 24,
            marginRight: 5,
            color: "#000",
            strokeWidth: 10,
          }}
        />
        <TriangleDownIcon
          style={{
            width: 8,
            height: 8,
            color: theme.COLOR_DEFAULT_PRIMARY_LIGHT_BG,
          }}
        />
      </Pressable>
      <View
        style={{
          borderWidth: 1,
          borderColor: theme.COLOR_DEFAULT_PRIMARY_LIGHT_BG,
          borderRadius: 5,
          position: "absolute",
          padding: 5,
          right: 0,
          top: "45%",
          backgroundColor: "#fff",
          display: "none",
          ...commons.shadowSm,
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            padding: 12,
            marginBottom: 2,
          }}
        >
          <UKFlagIcon
            style={{
              width: 22,
              height: 22,
              opacity: 0.85,
              marginRight: 5,
              marginTop: 1,
            }}
          />
          <Text>English</Text>
        </Pressable>
        <Pressable
          style={{
            flexDirection: "row",
            padding: 12,
          }}
        >
          <VietnameseFlagIcon
            style={{
              width: 22,
              height: 22,
              opacity: 0.85,
              marginRight: 5,
              marginTop: 1,
            }}
          />
          <Text>Tiếng Việt</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LanguageSwitcher;

function HandleClick() {
  alert("Clicked");
} 
