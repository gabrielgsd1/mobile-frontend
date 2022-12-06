import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-native";
import UserContext, { UserProvider } from "./contexts/UserContext";

export default function Brands({ navigation, route }) {
  const [brands, setBrands] = useState([]);

  const userData = useContext(UserProvider);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(
        "https://parallelum.com.br/fipe/api/v1/carros/marcas"
      );
      setBrands(data);
    })();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {brands && brands !== {} && (
          <View
            style={{
              display: "flex",
              width: "90%",
            }}
          >
            {brands.map((d) => (
              <Text
                key={d.codigo}
                onPress={() =>
                  navigation.navigate("Brand Vehicles", {
                    brandId: d.codigo,
                    brandName: d.nome,
                  })
                }
                style={{
                  width: "100%",
                  display: "flex",
                  textAlign: "center",
                  paddingVertical: 30,
                  marginVertical: 10,
                  fontSize: 20,
                  backgroundColor: "#333",
                  borderRadius: 20,
                  color: "#fff",
                  fontWeight: "800",
                }}
              >
                {d.nome}
              </Text>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: 10,
    borderRadius: 10,
  },
  bold: {
    fontWeight: "700",
  },
});
