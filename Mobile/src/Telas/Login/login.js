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
import { auth } from '../../Config/Firebase/firebase'; // Importando o auth do Firebase
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    BreeSerif_400Regular,
  });

  const [email, setEmail] = useState("");  // Adicionando estados para email e senha
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");  // Estado para armazenar mensagens de erro

  if (!fontsLoaded) {
    return null;
  }

  // Função para realizar o login com feedback de erros
  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage("Por favor, preencha todos os campos.");  // Exibir mensagem se os campos estiverem vazios
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      Alert.alert("Sucesso", `Bem-vindo ${user.email}`);
      navigation.navigate('Home');  // Navegar para a tela principal após o login
    } catch (error) {
      // Verificando o tipo de erro para dar feedback ao usuário
      if (error.code === 'auth/user-not-found') {
        setErrorMessage("Usuário não cadastrado!");
      } else if (error.code === 'auth/wrong-password') {
        setErrorMessage("Senha incorreta!");
      } else if (error.code === 'auth/invalid-email') {
        setErrorMessage("Email inválido!");
      } else {
        setErrorMessage("Usuario ou senha invalido!");
      }
    }
  };

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
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}  // Ligando o estado do email
              onChangeText={setEmail}  // Atualizando o estado do email
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
              value={password}  // Ligando o estado da senha
              onChangeText={setPassword}  // Atualizando o estado da senha
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

        {/* Exibir mensagem de erro, se houver */}
        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}

        <View style={styles.conteiner_restaurarSenha}>
          <Text style={styles.text_recuperarSenha}>Recuperar senha </Text>
          <TouchableOpacity onPress={() => navigation.navigate("RecuperarSenha")}>
            <Text style={styles.highlight}>clique aqui!</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btEntrar} onPress={handleLogin}>
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
    bottom: 56,
    letterSpacing: 3,
  },
  errorText: {
    color: "red",
    fontSize: 18,
    marginTop: 10,
  },
});
