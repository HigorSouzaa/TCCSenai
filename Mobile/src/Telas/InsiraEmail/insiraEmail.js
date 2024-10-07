import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts, BreeSerif_400Regular } from "@expo-google-fonts/bree-serif";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import emailjs from "emailjs-com"; // Certifique-se de instalar a biblioteca emailjs

export default function InsiraEmail() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    BreeSerif_400Regular,
  });

  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  if (!fontsLoaded) {
    return null;
  }

  const generateCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // Gera um código de 6 dígitos
  };

  const handleSendCode = async () => {
    if (!email) {
      setErrorMessage("Por favor, insira seu email.");
      return;
    }

    console.log("Email enviado para verificação:", email);

    const code = generateCode(); // Gere o código

    try {
      // Envio do e-mail
      const templateParams = {
        to_email: email, // O e-mail do destinatário
        code: code, // O código de 6 dígitos gerado
      };

      // Envie o e-mail usando EmailJS
      await emailjs.send("service_aq2ec2e", "template_f2xtvih", templateParams, "t_Xxs3v0auAAChNhF"); 

      Alert.alert("Sucesso", `Código enviado para ${email}`);
      navigation.navigate("InserirCodigo");
   
    } catch (error) {
      console.log("Erro ao verificar o email:", error);
      if (error.code === "auth/invalid-email") {
        setErrorMessage("Email inválido. Por favor, verifique o formato.");
      } else {
        setErrorMessage("Erro ao verificar o email. Tente novamente.");
      }
    }
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/imgLogoHome.png")}
          style={{ width: 340, marginTop: 140 }}
          resizeMode="contain"
        />
        <View style={styles.containerInputs}>
          <Text style={styles.txtInputs}>Email:</Text>
          <View style={styles.inputContainer}>
            <Image
              source={require("../../../assets/emailImg.png")}
              resizeMode="contain"
            />
            <TextInput
              style={styles.input}
              fontSize={22}
              placeholder="Insira seu email"
              placeholderTextColor={"#E6E3F6"}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>

        {errorMessage ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{errorMessage}</Text>
          </View>
        ) : null}

        <TouchableOpacity style={styles.btSendCode} onPress={handleSendCode}>
          <View>
            <Text style={styles.txt_btSendCode}>Enviar código</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.txt_footer}>LOGIN</Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  containerInputs: {
    width: "80%",
    marginTop: 80,
  },
  inputContainer: {
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
    width: "85%",
  },
  txtInputs: {
    marginBottom: 3,
    fontSize: 40,
    fontFamily: "BreeSerif_400Regular",
    color: "#FFFF",
  },
  btSendCode: {
    marginTop: 50,
    backgroundColor: "#CAC1F9",
    width: "70%",
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    shadowColor: "#0003",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 3,
    shadowRadius: 1,
  },
  txt_btSendCode: {
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
    top: 200,
  },
  txt_footer: {
    fontSize: 60,
    fontFamily: "BreeSerif_400Regular",
    color: "#FFFF",
    bottom: 56,
    letterSpacing: 3,
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  errorIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  errorText: {
    color: "red",
    fontSize: 18,
  },
});
