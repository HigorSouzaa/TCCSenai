import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts, BreeSerif_400Regular } from "@expo-google-fonts/bree-serif";

export default function GerarDieta() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    BreeSerif_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container_header}>
        <View style={styles.container_nav}>
          <Image
            source={require("../../../assets/miniLogo.png")}
            resizeMode="contain"
          />
          <View style={styles.nav_links}>
            <TouchableOpacity style={styles.touchableopacity_header}>
              <Text style={styles.txt_links}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableopacity_header}>
              <Text style={styles.txt_links}>Perfil</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image
          source={require("../../../assets/LineHeader.png")}
          style={{ marginTop: 10 }}
          resizeMode="contain"
        />
      </View>

      <View style={styles.container_body}>
        <Text style={styles.body_title}>Diga o que você tem em casa</Text>

        <View style={styles.box}>
          <Text style={styles.txtBox_h1}>Proteínas:</Text>
          <View style={styles.campo_escreAq}>
            <Text style={styles.txt_escreAq}>Escreva aqui</Text>
            <TouchableOpacity style={styles.btEnviar}>
              <Image
                source={require("../../../assets/botaoEnviar.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.txt_area_proteinas}></View>
        </View>

        <View style={styles.box}>
          <Text style={styles.txtBox_h1}>Carboidratos:</Text>
          <View style={styles.campo_escreAq}>
            <Text style={styles.txt_escreAq}>Escreva aqui</Text>
            <TouchableOpacity style={styles.btEnviar}>
              <Image
                source={require("../../../assets/botaoEnviar.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.txt_area_carboidratos}></View>
        </View>

        <View style={styles.box}>
          <Text style={styles.txtBox_h1}>Vegetais e Legumes:</Text>
          <View style={styles.campo_escreAq}>
            <Text style={styles.txt_escreAq}>Escreva aqui</Text>
            <TouchableOpacity style={styles.btEnviar}>
              <Image
                source={require("../../../assets/botaoEnviar.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.txt_area_vejetais_legumes}></View>
        </View>

        <View style={styles.box}>
          <Text style={styles.txtBox_h1}>Frutas:</Text>
          <View style={styles.campo_escreAq}>
            <Text style={styles.txt_escreAq}>Escreva aqui</Text>
            <TouchableOpacity style={styles.btEnviar}>
              <Image
                source={require("../../../assets/botaoEnviar.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.txt_area_frutas}></View>
        </View>

        <View style={styles.box}>
          <Text style={styles.txtBox_h1}>Doces:</Text>
          <View style={styles.campo_escreAq}>
            <Text style={styles.txt_escreAq}>Escreva aqui</Text>
            <TouchableOpacity style={styles.btEnviar}>
              <Image
                source={require("../../../assets/botaoEnviar.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.txt_area_doces}></View>
        </View>

        <View style={styles.box}>
          <Text style={styles.txtBox_h1}>Outros:</Text>
          <View style={styles.campo_escreAq}>
            <Text style={styles.txt_escreAq}>Escreva aqui</Text>
            <TouchableOpacity style={styles.btEnviar}>
              <Image
                source={require("../../../assets/botaoEnviar.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.txt_area_outros}></View>
        </View>

        <TouchableOpacity style={styles.gerarButton}>
          <Text style={styles.gerarButtonText}>GERAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
  },

  container_nav: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  container_header: {
    width: "80%",
    alignItems: "center",
    marginTop: 100,
  },

  nav_links: {
    flexDirection: "row",
    top: 8,
  },

  txt_links: {
    color: "#B5B2C6",
    fontSize: 34,
    paddingHorizontal: 10,
    fontFamily: "BreeSerif_400Regular",
  },

  container_body: {
    width: "90%",
    top: 30,
  },

  body_title: {
    color: "#B5B2C6",
    fontSize: 24,
    fontFamily: "BreeSerif_400Regular",
  },

  box: {
    top: 20,
    marginBottom: 40,
  },

  txtBox_h1: {
    color: "#B5B2C6",
    fontSize: 36,
    fontFamily: "BreeSerif_400Regular",
  },

  campo_escreAq: {
    backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "space-evenly",
  },

  btEnviar: {},
});
