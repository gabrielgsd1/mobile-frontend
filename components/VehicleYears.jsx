import React, { useEffect, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import axios from "axios";
import { style } from "./stylesheet";
import { useFonts, loadAsync } from "expo-font";

const VehicleYears = ({ navigation, route }) => {
  const [years, setYears] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get(
          `https://parallelum.com.br/fipe/api/v1/carros/marcas/${route.params.brandId}/modelos/${route.params.carId}/anos`
        );
        setYears(data);
      } catch (e) {}
    })();
  }, []);

  return (
    <ScrollView>
      <View style={{ marginHorizontal: 20 }}>
        {years.length != 0 && (
          <>
            {years.map((year) => (
              <Text
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 20,
                  borderRadius: 10,
                  marginVertical: 4,
                  color: "#fff",
                  backgroundColor: "#333",
                }}
                onPress={() =>
                  navigation.navigate("VehicleData", {
                    brandId: route.params.brandId,
                    carId: route.params.carId,
                    yearCode: year.codigo,
                  })
                }
              >
                {year.nome}
              </Text>
            ))}
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default VehicleYears;
