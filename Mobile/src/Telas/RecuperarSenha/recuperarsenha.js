import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts, BreeSerif_400Regular } from "@expo-google-fonts/bree-serif";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function RecuperarSenha() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    BreeSerif_400Regular,
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  const handleResendCode = () => {
    // Função para reenvio de código
    console.log("Código reenviado");
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txt_h1_header}>Crie uma nova senha</Text>
        <Text style={styles.txt_p_header}>
          crie uma nova senha e nunca mande para ninguem para sua segurança
        </Text>
      </View>
      <View style={styles.box}>
        <View style={styles.inputs_codigos}>
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <Text style={styles.dash}>-</Text>
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
        </View>
        <TouchableOpacity style={styles.btRecuperar}>
          <Text style={styles.txt_h1_btRecuperar}>Recuperar</Text>
        </TouchableOpacity>
        <Text style={styles.reenviar}>
          não recebeu código?{" "}
          <TouchableOpacity onPress={handleResendCode}>
            <Text style={styles.link}>reenvie.</Text>
          </TouchableOpacity>
        </Text>
      </View>
      <Image
        source={require("../../../assets/imgLogoHome.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
  },
  header: {
    marginBottom: 40,
    backgroundColor: "#CAC1F9",
    width: "100%",
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    height: 300,
  },
  txt_h1_header: {
    fontSize: 28,
    fontFamily: "BreeSerif_400Regular",
    color: "#FFF",
    left: 30,
    top: 90,
  },
  txt_p_header: {
    fontSize: 16,
    fontFamily: "BreeSerif_400Regular",
    color: "#FFF",
    marginTop: 30,
    left: 34,
    top: 60,
    width: 300,
  },
  box: {
    backgroundColor: "#FFF",
    borderRadius: 50,
    paddingVertical: 30,
    paddingHorizontal: 40,
    alignItems: "center",
    width: "90%",
    bottom: 90,
  },
  inputs_codigos: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 40,
  },
  input: {
    width: 45,
    height: 45,
    borderRadius: 10,
    backgroundColor: "#E6E3F6",
    textAlign: "center",
    fontSize: 24,
    color: "#333",
    marginHorizontal: 5,
  },
  dash: {
    fontSize: 28,
    color: "#CAC1F9",
  },
  btRecuperar: {
    backgroundColor: "#CAC1F9",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 50,
    marginVertical: 20,
  },
  txt_h1_btRecuperar: {
    fontSize: 32,
    fontFamily: "BreeSerif_400Regular",
    color: "#FFF",
    bottom: 3,
  },
  reenviar: {
    fontSize: 14,
    color: "#666",
    fontFamily: "BreeSerif_400Regular",
    marginBottom: 15,
  },
  link: {
    color: "#CAC1F9",
    textDecorationLine: "underline",
  },
  logo: {
    width: 350,
    marginTop: 50,
  },
});
