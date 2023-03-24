import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import RegisterForm from "../components/account/RegisterForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function RegisterScreen() {
  return (
    <KeyboardAwareScrollView>
      {/* <Image
        source={require("../../assets/img/lavine.png")}
        style={styles.logo}
      /> */}
      <View style={styles.viewForm}>
        <RegisterForm/>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "50%",
    heigth: 100,
    resizeMode: "contain",
    marginTop: 20,
  },
  viewForm: {
    marginHorizontal: 40
  },
});
