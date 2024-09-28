import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
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
    <View style={styles.container}>
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

      <View style={styles.outerBorder}>
        {/* Parte superior esquerda da borda */}
        <View style={styles.topLeftPart}></View>

        {/* Parte restante da borda */}
        <View style={styles.remainderBorder}></View>

        {/* Contêiner da imagem */}
        <View style={styles.imgPerfilContainer}>
          <Image
            source={require("../../../assets/bigodao.jpeg")}
            style={styles.imgPerfil}
            resizeMode="cover"
          />
        </View>
        {/* Botão de edição - Bolinha no canto inferior direito */}
        <TouchableOpacity style={styles.editButton}>
          <Image
            source={require("../../../assets/editImg.png")} // Ícone de edição
            style={styles.editIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <Text style={styles.txt_nome}>Breno A. Silva</Text>
        <View style={styles.conteiner_bt1}>
          <Text styler={styles.txtBt}>Edite seu Perfil</Text>
        </View>
        <View style={styles.conteiner_bt2}>
          <Text styler={styles.txtBt}>Minhas Informações</Text>
        </View>
        <View style={styles.conteiner_bt3}>
          <Text styler={styles.txtBt}>Dieta diária</Text>
        </View>
        <View style={styles.conteiner_btSalvar}>
          <Text styler={styles.txtBt}>Sair da conta</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    top: 80,
  },

  container_nav: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  container_header: {
    width: "80%",
    alignItems: "center",
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
    top: 30,
    alignItems: "center",
    marginTop: 5,
    width: "90%",
    height: 400,
    borderWidth: 0.5,
  },

  outerBorder: {
    position: "relative", // para possibilitar o uso de posicionamento absoluto
    width: 200,
    height: 200,
    borderRadius: 100, // forma circular
    justifyContent: "center",
    alignItems: "center",
    top: 30,
  },

  topLeftPart: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "50%", // metade do círculo
    height: "50%",
    borderTopLeftRadius: 100, // arredondado apenas no topo esquerdo
    borderWidth: 6,
    borderColor: "#D5D3DD", // cor da parte superior esquerda
    borderBottomWidth: 0, // remove a borda inferior
    borderRightWidth: 0, // remove a borda direita
    zIndex: 2, // garantir que fique por cima da parte restante
  },

  remainderBorder: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 100,
    borderWidth: 6,
    borderColor: "#B4B1C3", // cor do restante da borda
    zIndex: 1, // ficar abaixo da parte superior esquerda
  },

  imgPerfilContainer: {
    position: "absolute",
    width: 180, // largura da imagem de perfil
    height: 180, // altura da imagem de perfil
    borderRadius: 90, // circular
    overflow: "hidden", // para garantir que a imagem fique dentro do contêiner circular
    zIndex: 3, // garantir que a imagem fique acima das bordas
    justifyContent: "center",
    alignItems: "center",
  },

  imgPerfil: {
    width: "100%",
    height: "100%",
  },

  // Estilo da bolinha de editar
  editButton: {
    position: "absolute",
    bottom: 5, // Ajuste fino para posicionar no canto inferior direito
    right: 5, // Ajuste fino para posicionar no canto inferior direito
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#B4B1C3",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 4, // Garantir que fique acima da imagem de perfil e da borda
    borderWidth: 4,
    borderColor: "#D5D3DD", // Mesma cor da borda para manter a consistência
  },

  editIcon: {
    width: 25,
    height: 25,
  },

  txt_nome: {
    color: "#fff",
    fontSize: 34,
    fontFamily: "BreeSerif_400Regular",
  },
});
