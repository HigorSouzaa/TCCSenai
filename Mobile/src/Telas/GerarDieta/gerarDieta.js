import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
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
            <TouchableOpacity
              style={styles.touchableopacity_header}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.txt_links}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchableopacity_header}
              onPress={() => navigation.navigate("Perfil")}
            >
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
            <TextInput
              style={styles.txt_escreAq}
              placeholder="escreva aqui"
              placeholderTextColor="#E5E3F6"
            />
            <TouchableOpacity style={styles.btEnviar}>
              <Image
                source={require("../../../assets/botaoEnviar.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            style={styles.txt_area_proteinas}
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
          >
            {/* Conteúdo rolável para proteínas */}
            <View style={styles.conteiner_ScrollView}>
              <View style={styles.item_id1}>
                <Text style={styles.txt_item_id1}>Frango</Text>
                <TouchableOpacity>
                  <Image
                    source={require("../../../assets/BtCancelar.png")}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.item_id1}>
                <Text style={styles.txt_item_id1}>Carne moida</Text>
                <TouchableOpacity>
                  <Image
                    source={require("../../../assets/BtCancelar.png")}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.item_id1}>
                <Text style={styles.txt_item_id1}>Peixe</Text>
                <TouchableOpacity>
                  <Image
                    source={require("../../../assets/BtCancelar.png")}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.item_id1}>
                <Text style={styles.txt_item_id1}>Frango</Text>
                <TouchableOpacity>
                  <Image
                    source={require("../../../assets/BtCancelar.png")}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.item_id1}>
                <Text style={styles.txt_item_id1}>Carne moida</Text>
                <TouchableOpacity>
                  <Image
                    source={require("../../../assets/BtCancelar.png")}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.item_id1}>
                <Text style={styles.txt_item_id1}>Peixe</Text>
                <TouchableOpacity>
                  <Image
                    source={require("../../../assets/BtCancelar.png")}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.item_id1}>
                <Text style={styles.txt_item_id1}>Frango</Text>
                <TouchableOpacity>
                  <Image
                    source={require("../../../assets/BtCancelar.png")}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.item_id1}>
                <Text style={styles.txt_item_id1}>Carne moida</Text>
                <TouchableOpacity>
                  <Image
                    source={require("../../../assets/BtCancelar.png")}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.item_id1}>
                <Text style={styles.txt_item_id1}>Peixe</Text>
                <TouchableOpacity>
                  <Image
                    source={require("../../../assets/BtCancelar.png")}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={styles.box}>
          <Text style={styles.txtBox_h1}>Carboidratos:</Text>
          <View style={styles.campo_escreAq}>
            <TextInput
              style={styles.txt_escreAq}
              placeholder="escreva aqui"
              placeholderTextColor="#E5E3F6"
            />
            <TouchableOpacity style={styles.btEnviar}>
              <Image
                source={require("../../../assets/botaoEnviar.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            style={styles.txt_area_carboidratos}
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
          >
            {/* Conteúdo rolável para carboidratos */}
            <View style={styles.conteiner_ScrollView}>
              <View style={styles.item_id1}>
                <Text style={styles.txt_item_id1}>Arroz</Text>
                <TouchableOpacity>
                  <Image
                    source={require("../../../assets/BtCancelar.png")}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.item_id1}>
                <Text style={styles.txt_item_id1}>Pão integral</Text>
                <TouchableOpacity>
                  <Image
                    source={require("../../../assets/BtCancelar.png")}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={styles.box}>
          <Text style={styles.txtBox_h1}>Vegetais e Legumes:</Text>
          <View style={styles.campo_escreAq}>
            <TextInput
              style={styles.txt_escreAq}
              placeholder="escreva aqui"
              placeholderTextColor="#E5E3F6"
            />
            <TouchableOpacity style={styles.btEnviar}>
              <Image
                source={require("../../../assets/botaoEnviar.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            style={styles.txt_area_vegetais_legumes}
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
          >
            {/* Conteúdo rolável para vegetais e legumes */}
          </ScrollView>
        </View>

        <View style={styles.box}>
          <Text style={styles.txtBox_h1}>Frutas:</Text>
          <View style={styles.campo_escreAq}>
            <TextInput
              style={styles.txt_escreAq}
              placeholder="escreva aqui"
              placeholderTextColor="#E5E3F6"
            />
            <TouchableOpacity style={styles.btEnviar}>
              <Image
                source={require("../../../assets/botaoEnviar.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            style={styles.txt_area_frutas}
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
          >
            {/* Conteúdo rolável para frutas */}
          </ScrollView>
        </View>

        <View style={styles.box}>
          <Text style={styles.txtBox_h1}>Doces:</Text>
          <View style={styles.campo_escreAq}>
            <TextInput
              style={styles.txt_escreAq}
              placeholder="escreva aqui"
              placeholderTextColor="#E5E3F6"
            />
            <TouchableOpacity style={styles.btEnviar}>
              <Image
                source={require("../../../assets/botaoEnviar.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            style={styles.txt_area_doces}
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
          >
            {/* Conteúdo rolável para doces */}
          </ScrollView>
        </View>

        <View style={styles.box}>
          <Text style={styles.txtBox_h1}>Outros:</Text>
          <View style={styles.campo_escreAq}>
            <TextInput
              style={styles.txt_escreAq}
              placeholder="escreva aqui"
              placeholderTextColor="#E5E3F6"
            />
            <TouchableOpacity style={styles.btEnviar}>
              <Image
                source={require("../../../assets/botaoEnviar.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            style={styles.txt_area_outros}
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
          >
            {/* Conteúdo rolável para outros */}
          </ScrollView>
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
    marginTop: 80,
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
    marginTop: 10,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    height: 35,
    width: "70%",
    marginBottom: 20,
  },

  btEnviar: {
    backgroundColor: "#E5E3F6",
    padding: 5,
    borderRadius: 30,
  },

  txt_escreAq: {
    color: "#E5E3F6",
    fontSize: 18,
    fontFamily: "BreeSerif_400Regular",
  },

  txt_area_proteinas: {
    width: "100%",
    height: 150,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
  },

  txt_area_carboidratos: {
    width: "100%",
    height: 150,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
  },

  txt_area_vegetais_legumes: {
    width: "100%",
    height: 150,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
  },

  txt_area_frutas: {
    width: "100%",
    height: 150,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
  },

  txt_area_doces: {
    width: "100%",
    height: 150,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
  },

  txt_area_outros: {
    width: "100%",
    height: 150,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
  },

  gerarButton: {
    backgroundColor: "#B5B2C6",
    width: "100%",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 100,
  },

  gerarButtonText: {
    color: "#E5E3F6",
    fontSize: 24,
    fontFamily: "BreeSerif_400Regular",
  },

  txt_item_id1: {
    color: "white",
    fontSize: 18,
    fontFamily: "BreeSerif_400Regular",
    marginRight: 10,
  },

  item_id1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 15,
    backgroundColor: "#E6E3F6",
    marginHorizontal: 5,
    marginVertical: 5,
  },

  conteiner_ScrollView: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
