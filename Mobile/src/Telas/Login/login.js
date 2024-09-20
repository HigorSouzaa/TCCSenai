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

export default function Login() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    BreeSerif_400Regular,
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  if (!fontsLoaded) { 
    return null; 
  } 

  return (
    <KeyboardAwareScrollView>
      <View style={styles.conteiner}>
        <Image
          source={require("../../../assets/imgLogoHome.png")}
          style={{ width: 340, marginTop: 140 }}
          resizeMode="contain"
        />
        <View style={styles.conteinerInputs}>
          <Text style={styles.txtInputs}>Email:</Text>
          <View style={styles.Inputs}>
            <Image
              source={require("../../../assets/emailImg.png")}
              resizeMode="contain"
            />
            <TextInput
              style={styles.input}
              fontSize={22}
              placeholder="seu@email.com"
              placeholderTextColor={"#E6E3F6"}
            />
          </View>
        </View>
        <View style={styles.conteinerInput}>
          <Text style={styles.txtInputs}>Senha:</Text>
          <View style={styles.Inputs}>
            <Image
              source={require("../../../assets/senhaImg.png")}
              resizeMode="contain"
            />
            <TextInput
              style={styles.input2}
              fontSize={22}
              placeholder="**********"
              placeholderTextColor={"#E6E3F6"}
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Image
                source={
                  passwordVisible
                    ? require("../../../assets/olhoFechado.png")
                    : require("../../../assets/olhoAberto.png")
                }
                resizeMode="contain"
                style={{ width: 30 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.conteiner_restaurarSenha}>
          <Text style={styles.text_recuperarSenha}>recupera a senha </Text>
          <TouchableOpacity>
            <Text style={styles.highlight}>clique aqui!</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btEntrar}>
          <View>
            <Text style={styles.txt_btEntrar}>Entrar</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.txt_footer}>Login</Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  conteinerInputs: {
    width: "80%",
    marginTop: 40,
  },
  conteinerInput: {
    marginTop: 10,
    width: "80%",
  },
  Inputs: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 55,
    borderRadius: 15,
    backgroundColor: "#FFF",
    paddingHorizontal: 10,
  },
  input: {
    marginLeft: 10,
    color: "#CAC1F9",
    display: "flex",
    justifyContent: "center",
    width: "85%",
  },
  input2: {
    marginLeft: 10,
    color: "#CAC1F9",
    display: "flex",
    justifyContent: "center",
    width: "75%",
  },
  txtInputs: {
    marginBottom: 3,
    fontSize: 40,
    fontFamily: "BreeSerif_400Regular",
    color: "#FFFF",
    //Sombra IOS
    shadowColor: "#0003",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 3,
    shadowRadius: 1,
  },

  conteiner_restaurarSenha: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 15,
    marginTop: 8,
  },

  highlight: {
    color: "#A397E3",
    fontFamily: "BreeSerif_400Regular",
    fontSize: 16,
  },

  text_recuperarSenha: {
    color: "#CAC1F9",
    fontFamily: "BreeSerif_400Regular",
    fontSize: 16,
  },

  btEntrar: {
    marginTop: 50,
    backgroundColor: "#CAC1F9",
    width: "70%",
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    //Sombra IOS
    shadowColor: "#0003",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 3,
    shadowRadius: 1,
  },

  txt_btEntrar: {
    fontSize: 40,
    fontFamily: "BreeSerif_400Regular",
    color: "#FFFF",
  },

  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CAC1F9",
    width: "98%",
    height: 230,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    top: 100,
  },

  txt_footer: {
    fontSize: 60,
    fontFamily: "BreeSerif_400Regular",
    color: "#FFFF",
    bottom: 56  ,
    letterSpacing: 3
  },
});
