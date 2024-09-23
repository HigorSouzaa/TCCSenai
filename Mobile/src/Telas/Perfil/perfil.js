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

export default function Perfil() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    BreeSerif_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={[styles.container]}>
      <View style={styles.container_header}>
        <View style={styles.container_nav}>
          <Image
            source={require("../../../assets/miniLogo.png")}
            resizeMode="contain"
          />
          <View style={styles.nav_links}>
            <TouchableOpacity
              style={styles.touchableopacity_header}
              onPress={() => navigation.navigate("Home")}
            >
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

      <View style={styles.body}>
        <View style={styles.imgPerfilContainer}>
          <Image
            source={require("../../../assets/bigodao.jpeg")}
            style={styles.imgPerfil}
            resizeMode="cover" // ou 'contain' dependendo do ajuste desejado
          />
        </View>
        <Text style={styles.greeting}>Olá, Breno.</Text>
      </View>
    </View>
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

  body: {
    alignItems: "center",
    marginTop: 10,
  },

  imgPerfilContainer: {
    width: 150, // largura do contêiner da imagem de perfil
    height: 150, // altura do contêiner da imagem de perfil
    borderRadius: 75, // isso cria um formato circular
    overflow: "hidden", // garante que a imagem fique contida no círculo
    borderWidth: 3, // opcional, para adicionar uma borda ao redor da imagem
    borderColor: "#B5B2C6", // cor da borda
  },

  imgPerfil: {
    width: "100%",
    height: "100%",
  },

  greeting: {
    fontSize: 32,
    color: "#B5B2C6",
    marginTop: 10,
    fontFamily: "BreeSerif_400Regular",
  },
});
