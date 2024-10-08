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
<<<<<<< HEAD
import { auth } from "../../Config/Firebase/firebase"; // Usando a configuração correta
import { fetchSignInMethodsForEmail } from "firebase/auth"; // Importando corretamente
=======
import emailjs from "emailjs-com"; // Certifique-se de instalar a biblioteca emailjs
import { db } from "../../Config/Firebase/fb"; // Importando a configuração do Firestore
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore"; // Importando métodos do Firestore
>>>>>>> 4134181ea3e94901d131d380758d9775c6721599

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

<<<<<<< HEAD
=======
  // Gera um código de 6 dígitos
  const generateCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Função para lidar com o envio do código
>>>>>>> 4134181ea3e94901d131d380758d9775c6721599
  const handleSendCode = async () => {
    if (!email) {
      setErrorMessage("Por favor, insira seu email.");
      return;
    }

<<<<<<< HEAD
    console.log("Email enviado para verificação:", email); // Log para verificar o valor do email

    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      console.log("Métodos de autenticação disponíveis:", signInMethods); // Log para verificar

      if (signInMethods.length === 0) {
        setErrorMessage("Nenhum usuário encontrado com este email.");
      } else {
        // Se o usuário for encontrado, você pode seguir para enviar o código
        Alert.alert("Sucesso", `Código enviado para ${email}`);
        navigation.navigate("InserirCodigo");
      }
    } catch (error) {
      console.log("Erro ao verificar o email:", error); // Log para o erro detalhado
      // Verificação detalhada do tipo de erro
      if (error.code === "auth/invalid-email") {
        setErrorMessage("Email inválido. Por favor, verifique o formato.");
      } else {
        setErrorMessage("Erro ao verificar o email. Tente novamente.");
      }
=======
    console.log("Tentando enviar código para o email:", email);

    const code = generateCode(); // Gere o código de recuperação

    try {
      // Referência para a coleção 'usuarios'
      const usuariosRef = collection(db, "usuarios");

      // Cria uma query para buscar o documento com o email fornecido
      const q = query(usuariosRef, where("email", "==", email));

      // Executa a query
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setErrorMessage("Usuário não encontrado.");
        return;
      }

      // Salvar o código no Firestore na coleção 'passwordResets'
      await setDoc(doc(db, "passwordResets", email), {
        code: code,
        createdAt: new Date(), // Salvando o timestamp
      });

      // Parâmetros para o template do EmailJS
      const templateParams = {
        to_email: email, // O e-mail do destinatário
        code: code, // O código de 6 dígitos gerado
      };

      // Envie o e-mail usando EmailJS
      await emailjs.send(
        "service_aq2ec2e", // Substitua pelo seu ID de serviço
        "template_f2xtvih", // Substitua pelo seu ID de template
        templateParams,
        "t_Xxs3v0auAAChNhF" // Substitua pela sua chave pública
      );

      // Exibe um alerta de sucesso e navega para a próxima tela
      Alert.alert("Sucesso", `Código enviado para ${email}`);
      navigation.navigate("RecuperarSenha", { email: email });
    } catch (error) {
      console.log("Erro ao verificar o email ou enviar o código:", error);
      setErrorMessage("Erro ao enviar o código. Tente novamente.");
>>>>>>> 4134181ea3e94901d131d380758d9775c6721599
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
<<<<<<< HEAD
              onChangeText={setEmail}
=======
              onChangeText={(text) => {
                setEmail(text);
                setErrorMessage(""); // Limpar mensagem de erro ao digitar
              }}
>>>>>>> 4134181ea3e94901d131d380758d9775c6721599
            />
          </View>
        </View>

        {errorMessage ? (
          <View style={styles.errorContainer}>
<<<<<<< HEAD
            <Image
              source={require("../../../assets/errorIcon.png")} // Certifique-se de que o caminho está correto
              style={styles.errorIcon}
            />
=======
>>>>>>> 4134181ea3e94901d131d380758d9775c6721599
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
<<<<<<< HEAD
  errorIcon: {
    width: 24, // Ajuste o tamanho conforme necessário
    height: 24, // Ajuste o tamanho conforme necessário
    marginRight: 10,
  },
=======
>>>>>>> 4134181ea3e94901d131d380758d9775c6721599
  errorText: {
    color: "red",
    fontSize: 18,
  },
});
