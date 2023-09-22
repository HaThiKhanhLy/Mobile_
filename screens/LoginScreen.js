import React from "react";
import CheckBox from "react-native-check-box";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  useState,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/fontawesome-svg-core";
const handleLogin = () => {
  console.log("hello");
};
const toggleCheckBox = () => {
  console.log("hh");
};
export default class LoginScreen extends React.Component {
  state = { email: "", password: "", errorMessage: null };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/store.jpg")}
          style={styles.background}
        />
        <Image
          source={require("../assets/icons/fast-food.png")}
          style={styles.loginIcon1}
        />
        <Text style={styles.textLogin1}>Login To Your Account</Text>
        {this.state.errorMessage && (
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        )}
        <View style={styles.inputContainer}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color="gray" />
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
          />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesomeIcon icon={faLock} size={20} color="gray" />
          <TextInput
            secureTextEntry
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          />
        </View>
        <View style={styles.CheckRemember}>
          <CheckBox
            checkBoxColor="#29974D"
            onClick={true}
            onValueChange={toggleCheckBox}
          />
          <Text style={{ marginLeft: 8 }}>Remember me</Text>
        </View>
        <TouchableOpacity // Sử dụng TouchableOpacity thay cho Button
          style={styles.buttonLogin}
          onPress={this.handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View>
          <Text>or continue with</Text>
          <FontAwesomeIcon icon={faGoogle} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    height: 40,
    width: 350,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 0,
    marginTop: 8,
    paddingLeft: 50,
  },
  loginIcon1: {
    height: 100,
    width: 100,
  },
  textLogin1: {
    fontSize: 30,
    margin: 20,
  },
  inputContainer: {
    flexDirection: "row", // Hiển thị các phần tử theo hàng ngang
    alignItems: "center", // Căn chỉnh các phần tử theo chiều dọc
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    height: 50,
  },
  buttonLogin: {
    flexDirection: "row", // Hiển thị các phần tử theo hàng ngang
    alignItems: "center",
    backgroundColor: "#29974D",
    width: 390,
    borderRadius: 30,
    height: 50,
    marginTop: 30,
  },
  buttonText: {
    alignItems: "center",
    marginLeft: 170,
    color: "white",
    fontSize: 15,
  },
  CheckRemember: {
    flexDirection: "row",
    alignItems: "center",
  },
});
