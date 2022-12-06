import { ScrollView, StyleSheet, Text, View } from "react-native";
import { style } from "./stylesheet";

export default function Home({ navigation, route }) {
  return (
    <View style={style.centered}>
      <Text style={{ fontWeight: "800", fontSize: 30 }}>
        {"Consultor de Veículos"}
      </Text>
      <Text
        style={{
          fontWeight: "500",
          marginTop: 15,
          fontSize: 20,
          textAlign: "center",
        }}
      >
        {"Veja o preço de diversos veículos de acordo com a tabela FIPE atual!"}
      </Text>
      <Text
        style={{
          fontWeight: "500",
          marginTop: 15,
          fontSize: 20,
          textAlign: "center",
        }}
      >
        {"Registre-se para usufruir!"}
      </Text>
      <View style={{ width: "50%", marginTop: 30 }}>
        <Text
          onPress={() => navigation.navigate("RegisterPage")}
          style={style.button}
        >
          Registrar
        </Text>
        <Text
          onPress={() => navigation.navigate("LoginPage")}
          style={style.button}
        >
          Fazer Login
        </Text>
      </View>
    </View>
  );
}
