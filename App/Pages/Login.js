import { Text, View, Image, StyleSheet, Button } from "react-native";
import React, { Component } from "react";
import Colors from "./Shared/Colors";
import { FontAwesome } from "@expo/vector-icons";
export class Login extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Image source={require("./../Assets/LearnerLogo.png")}></Image>
        <Text style={styles.welcomeText}>Welcome to CodeClub</Text>
        <Text style={styles.Heading}> Login/Signup </Text>

        <View style={styles.button}>
          <FontAwesome name="google" size={24} color="black" />
                <Text style={(color = Colors.white)}> SignIn With Google</Text>
                <Button>Hello</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
    paddingTop: 10,
  },
  Container: {
    paddindTop: 40,
    marginTop: -20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "#fff",
  },
  Heading: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 20,
  },
  button: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
    color: Colors.primary,
    backgroundColor: Colors.primary,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
  },
});

export default Login;
