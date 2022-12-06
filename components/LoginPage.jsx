import React, { useState } from "react";
import { View, Button, TextInput, Text, ScrollView } from "react-native";
import { style } from "./stylesheet";
import axios from "axios";

const LoginPage = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const url = "https://mobile-backend.onrender.com/checkforuser";

  async function handleSubmit() {
    setError("");
    try {
      const { data } = await axios.post(url, {
        email: email.trim(),
        password,
      });
      if (data.error) {
        setError("Usuário inexistente");
        return;
      }
      navigation.navigate("Brands");
    } catch (e) {
      setError(JSON.stringify(e));
    }
  }

  return (
    <View style={[style.centered]}>
      {error != "" && <Text>{error}</Text>}
      <View style={{ minWidth: "70%", display: "flex" }}>
        <TextInput
          placeholder="Email"
          onChangeText={(e) => setEmail(e)}
          defaultValue={email}
          style={style.input}
        />
        <TextInput
          onChangeText={(e) => setPassword(e)}
          placeholder="Senha"
          defaultValue={password}
          secureTextEntry={true}
          style={style.input}
        />
        <View
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Text style={style.button} onPress={() => handleSubmit()}>
            Fazer Login
          </Text>
          <Text
            style={style.button}
            onPress={() => navigation.navigate("RegisterPage")}
          >
            Registrar
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;
