// Login.js
import React, { useState } from "react";
<<<<<<< HEAD
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts, BreeSerif_400Regular } from "@expo-google-fonts/bree-serif";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { db } from "../../Config/Firebase/firebase"; // Verifique o caminho aqui
import { doc, getDoc } from "firebase/firestore";
=======
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts, BreeSerif_400Regular } from "@expo-google-fonts/bree-serif";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { db } from '../../Config/Firebase/fb'; // Importando a configuração do Firestore
import { collection, getDocs, query, where } from 'firebase/firestore';
>>>>>>> 4134181ea3e94901d131d380758d9775c6721599

export default function Login() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({ BreeSerif_400Regular });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  if (!fontsLoaded) {
<<<<<<< HEAD
    return null; // Adicionar componente de carregamento opcional
  }

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage("Por favor, preencha todos os campos.");
      setModalVisible(true);
      return;
    }

    try {
      // Buscar dados do usuário no Firestore
      const userDoc = await getDoc(doc(db, "usuarios", email)); // Mudado para "usuarios"
      if (userDoc.exists()) {
        // Verificar se a senha fornecida corresponde à armazenada
        if (userDoc.data().password === password) {
          // Verificando a senha
          console.log("Dados do usuário:", userDoc.data());
          Alert.alert("Sucesso", `Bem-vindo ${userDoc.data().email}`); // Mudado para email
          navigation.navigate("Home");
        } else {
          setErrorMessage("Senha incorreta!");
          setModalVisible(true);
        }
      } else {
        setErrorMessage("Usuário não encontrado!");
        setModalVisible(true);
      }
    } catch (error) {
      console.error("Erro ao buscar dados do Firestore:", error);
      setErrorMessage("Ocorreu um erro ao tentar buscar os dados.");
      setModalVisible(true);
=======
    return null;
  }

  const handleLogin = async () => {
    try {
      const q = query(collection(db, "usuarios"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        Alert.alert("Erro", "Email não encontrado.");
        return;
      }

      let user = null;
      querySnapshot.forEach((doc) => {
        user = doc.data();
      });

      if (user.password !== password) {
        Alert.alert("Erro", "Senha incorreta.");
      } else {
        Alert.alert("Sucesso", "Login realizado com sucesso!");
        navigation.navigate('Home')
        // Navegar para a tela principal ou qualquer outra tela desejada
      }
    } catch (error) {
      Alert.alert("Erro", error.message);
>>>>>>> 4134181ea3e94901d131d380758d9775c6721599
    }
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.conteiner}>
        <View style={styles.footer}>
          <Text style={styles.txt_footer}>Login</Text>
        </View>
        <Image
          source={require("../../../assets/imgLogoHome.png")}
          style={{ width: 340, marginTop: 50 }}
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
<<<<<<< HEAD
              keyboardType="email-address"
              autoCapitalize="none"
=======
>>>>>>> 4134181ea3e94901d131d380758d9775c6721599
              value={email}
              onChangeText={setEmail}
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
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
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
<<<<<<< HEAD
          <Text style={styles.text_recuperarSenha}>Não tem conta? Faça </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
            <Text style={styles.highlight}>cadastro!</Text>
          </TouchableOpacity>
        </View>

=======
          <Text style={styles.text_recuperarSenha}>recupera a senha </Text>
          <TouchableOpacity onPress={() => {navigation.navigate('InsiraEmail')}}>
            <Text style={styles.highlight}>clique aqui!</Text>
          </TouchableOpacity>
        </View>
>>>>>>> 4134181ea3e94901d131d380758d9775c6721599
        <TouchableOpacity style={styles.btEntrar} onPress={handleLogin}>
          <View>
            <Text style={styles.txt_btEntrar}>Entrar</Text>
          </View>
        </TouchableOpacity>

        {/* Modal para exibir mensagens de erro */}
        <Modal visible={modalVisible} animationType="slide">
          <View style={styles.modalContainer}>
            <Text style={styles.errorText}>{errorMessage}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButton}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
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
    flex: 1,
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CAC1F9",
    width: "100%",
    height: 80,
  },
  txt_footer: {
    fontSize: 40,
    fontFamily: "BreeSerif_400Regular",
    color: "#FFFF",
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
    fontSize: 20,
    fontFamily: "BreeSerif_400Regular",
    color: "#FFFF",
<<<<<<< HEAD
=======
    shadowColor: "#0003",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 3,
    shadowRadius: 1,
>>>>>>> 4134181ea3e94901d131d380758d9775c6721599
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
<<<<<<< HEAD
=======
    shadowColor: "#0003",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 3,
    shadowRadius: 1,
>>>>>>> 4134181ea3e94901d131d380758d9775c6721599
  },
  txt_btEntrar: {
    fontSize: 20,
    fontFamily: "BreeSerif_400Regular",
    color: "#FFFF",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 20,
  },
<<<<<<< HEAD
  errorText: {
    color: "red",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 20,
  },
  closeButton: {
    fontSize: 18,
    color: "#007BFF",
  },
  highlight: {
    color: "#007BFF",
    fontWeight: "bold",
=======

  txt_footer: {
    fontSize: 60,
    fontFamily: "BreeSerif_400Regular",
    color: "#FFFF",
    bottom: 56,
    letterSpacing: 3,
>>>>>>> 4134181ea3e94901d131d380758d9775c6721599
  },
});
