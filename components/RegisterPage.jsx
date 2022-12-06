import React, { useState } from "react";
import { View, Button, TextInput, Text, ScrollView } from "react-native";
import { style } from "./stylesheet";
import axios from "axios";

const RegisterPage = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const url = "https://mobile-backend.onrender.com/registeruser";

  async function handleSubmit() {
    try {
      const { data } = await axios.post(url, {
        name,
        email,
        password,
      });
      if (data.error) {
        setError("Preencha todas as informações");
        return;
      }
      navigation.navigate("Home");
    } catch (e) {
      setError(JSON.stringify(e));
    }
  }

  return (
    <View style={[style.centered]}>
      {error != "" && <Text>{error}</Text>}
      <View style={{ minWidth: "70%", display: "flex" }}>
        <TextInput
          placeholder="Nome"
          onChangeText={(e) => setName(e)}
          defaultValue={name}
          style={style.input}
        />
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
          secureTextEntry
          style={style.input}
        />
        <View
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Text style={style.button} onPress={() => handleSubmit()}>
            Registrar
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RegisterPage;
