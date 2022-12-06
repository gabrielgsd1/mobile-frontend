import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const BrandVehicles = ({ navigation, route }) => {
  const [vehicles, setVehicles] = useState(null);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(
        `https://parallelum.com.br/fipe/api/v1/carros/marcas/${route.params.brandId}/modelos`
      );
      setVehicles(data.modelos);
    })();
  }, []);

  return (
    <ScrollView>
      <View
        style={{
          marginTop: 25,
          display: "flex",
          alignItems: "center",
        }}
      >
        {vehicles ? (
          <>
            <Text style={{ fontWeight: "600", fontSize: 30 }}>
              {route.params.brandName}
            </Text>
            {vehicles.map((vehicle) => (
              <Text
                key={vehicle.nome}
                style={{
                  width: "90%",
                  paddingHorizontal: 10,
                  paddingVertical: 20,
                  borderRadius: 10,
                  marginVertical: 4,
                  color: "#fff",
                  backgroundColor: "#333",
                }}
                onPress={() =>
                  navigation.navigate("Years", {
                    brandId: route.params.brandId,
                    carId: vehicle.codigo,
                  })
                }
              >
                {vehicle.nome}
              </Text>
            ))}
          </>
        ) : (
          <Text>Carregando</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default BrandVehicles;
