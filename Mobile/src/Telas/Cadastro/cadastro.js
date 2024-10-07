// Cadastro.js
import React, { useState } from "react";
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
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export default function Cadastro() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({ BreeSerif_400Regular });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  if (!fontsLoaded) {
    return null; // Adicionar componente de carregamento opcional
  }

  const handleSignUp = async () => {
    // Validação do e-mail e das senhas
    if (!email.includes("@")) {
      setErrorMessage("Por favor, insira um e-mail válido que contenha '@'.");
      setModalVisible(true);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("As senhas não coincidem!");
      setModalVisible(true);
      return;
    }

    try {
      // Armazenar dados do usuário no Firestore
      await setDoc(doc(db, "users", email), {
        email: email,
        password: password,
        createdAt: serverTimestamp(),
      });

      setErrorMessage(""); // Limpa a mensagem de erro
      setModalVisible(false); // Fecha o modal se estava aberto
      Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
      navigation.navigate("Login");
    } catch (error) {
      console.error(error);
      setErrorMessage("Ocorreu um erro ao tentar criar o usuário.");
      setModalVisible(true); // Abre o modal para mostrar o erro
    }
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.conteiner}>
        <View style={styles.footer}>
          <Text style={styles.txt_footer}>Cadastro</Text>
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
              keyboardType="email-address"
              autoCapitalize="none"
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

        <View style={styles.conteinerInput}>
          <Text style={styles.txtInputs}>Repita a Senha:</Text>
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
              secureTextEntry={!confirmPasswordVisible}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity
              onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            >
              <Image
                source={
                  confirmPasswordVisible
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
          <Text style={styles.text_recuperarSenha}>Já tem conta faça </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.highlight}>login?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btEntrar} onPress={handleSignUp}>
          <View>
            <Text style={styles.txt_btEntrar}>Cadastre-se</Text>
          </View>
        </TouchableOpacity>

        {/* Modal para exibir mensagens de erro */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>{errorMessage}</Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
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
  },
  conteinerInputs: {
    width: "80%",
    marginTop: 20,
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
    fontSize: 24,
    fontFamily: "BreeSerif_400Regular",
    color: "#FFFF",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 15,
  },
  modalButton: {
    backgroundColor: "#A397E3",
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
  },

  footer: {
    marginTop: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CAC1F9",
    width: "98%",
    height: 190,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  txt_footer: {
    fontFamily: "BreeSerif_400Regular",
    fontSize: 70,
    color: "#FFF",
  },
});
