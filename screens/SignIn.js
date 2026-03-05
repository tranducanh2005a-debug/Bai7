import React, { useState } from "react";
import { Alert } from "react-native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default function SignInScreen({ navigation }) {

  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const validatePhone = (value) => {
    const regex = /^0\d{9}$/;
    return regex.test(value);
  };

  const handleChange = (text) => {

    const cleaned = text.replace(/\D/g, "");
    setPhone(cleaned);

    if (cleaned.length === 10) {

      if (!validatePhone(cleaned)) {
        setError("Số điện thoại không hợp lệ");
      } else {
        setError("");
      }

    } else {
      setError("Số điện thoại phải đủ 10 số");
    }


  };

  const handleSubmit = () => {

    if (!validatePhone(phone)) {
      setError("Số điện thoại không hợp lệ");
      return;
    }
    Alert.alert(
    "Thành công",
    "Đăng nhập thành công",
    [
      {
        text: "OK",
        onPress: () => navigation.navigate("Home")
      }
    ]
  );
    navigation.navigate("Home");

  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Đăng nhập</Text>

      <TextInput
        style={[styles.input, error ? styles.inputError : null]}
        placeholder="Nhập số điện thoại"
        keyboardType="numeric"
        value={phone}
        onChangeText={handleChange}
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8
  },

  inputError: {
    borderColor: "red"
  },

  errorText: {
    color: "red",
    marginTop: 5
  },

  button: {
    backgroundColor: "#2F5BEA",
    padding: 14,
    borderRadius: 8,
    marginTop: 20
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold"
  }

});