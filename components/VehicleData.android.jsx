import { StyleSheet, View, Text } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import VehicleItem from "./VehicleItem.android";

export default function VehicleData({ navigation, route }) {
  const [carData, setCarData] = useState({});

  useEffect(() => {
    (async function () {
      const { data } = await axios.get(
        `https://parallelum.com.br/fipe/api/v1/carros/marcas/${route.params.brandId}/modelos/${route.params.carId}/anos/${route.params.yearCode}`
      );
      setCarData(data);
    })();
  }, []);
  return (
    <View style={styles.container}>
      {carData && carData !== {} && (
        <View
          style={{ display: "flex", alignItems: "flex-start", width: "100%" }}
        >
          <VehicleItem
            attr="Modelo"
            style={{
              fontSize: 30,
              fontWeight: "700",
              letterSpacing: 1,
              textAlign: "center",
            }}
          >
            {carData["Modelo"]}
          </VehicleItem>
          <VehicleItem attr="Marca">{carData["Marca"]}</VehicleItem>
          <VehicleItem attr="Ano do Modelo">{carData["AnoModelo"]}</VehicleItem>
          <VehicleItem attr="Tipo de Combustível">
            {carData["Combustivel"]}
          </VehicleItem>
          <VehicleItem attr="Código Fipe">{carData["CodigoFipe"]}</VehicleItem>
          <VehicleItem attr="Data de Referência">
            {carData["MesReferencia"]}
          </VehicleItem>
          <VehicleItem attr="Valor">{carData["Valor"]}</VehicleItem>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: 10,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  bold: {
    fontWeight: "700",
  },
});
