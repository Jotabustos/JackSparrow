import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Dimensions, WebView } from 'react-native';


const { height, width } = Dimensions.get("window");


class Trips extends React.Component {
  render() {
    return <SafeAreaView style={{ flex: 1, backgroundColor: "#0072ce" }}>
        <View style={{ flex: 1 }}>
          <View style={{ height: this.startHeaderHeight }} />

          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, paddingTop: 20 }}>
              <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: "700", color: "white" }}>
                  Bienvenido!
                </Text>
                <Text style={{ marginTop: 10, fontWeight: "100", color: "white" }}>
                  Si estás leyendo esto, es porque formas parte del proyecto de The Key Talent. Si te acabas de incorporar, queremos darte las gracias por la confianza que nos has demostrado, y sinceramente esperamos que podamos compartir muchos éxitos juntos. Seguro que tienes tanta ilusión como inquietudes. En esta aplicación encontrarás respuesta a algunas de las preguntas del día a día, así como referencias sobre como actuar en ciertas situaciones.
                </Text>
              <Text style={{ marginTop: 10, fontWeight: "100", color: "white" }}>
                Hemos querido recoger, en las distintas secciones de esta aplicación, las pautas que deben regir el desarrollo de nuestro trabajo. También iremos incorporando todo aquello que entendamos que nos puede ayudar a ser mejores como empresa, y a facilitar los trámites más operativos de forma que no exijan una dedicación excesiva.
                </Text>
              <Text style={{ marginTop: 10, fontWeight: "100", color: "white" }}>
               Información sobre la empresa que queremos ser, nuestro estilo y filosofía de trabajo, políticas, herramientas de trabajo, servicios y soluciones que ofrecemos a nuestros clientes... en general, cosas que consideramos que pueden ser útiles para todos. Aquí estarán, de forma que podremos dedicar nuestro tiempo y esfuerzo a lo que verdaderamente es importante: la excelencia en el servicio y nuestro aprendizaje y crecimiento profesional.
                </Text>
              <Text style={{ marginTop: 10, fontWeight: "100", color: "white" }}>
               Gracias por estar con The Key Talent. Esperamos que todos podamos disfrutar con los retos que nos esperan y con el éxito que, seguro, vamos a conseguir.
                </Text>
              <View style={{ width: width - 40, height: 200, marginTop: 20,marginBottom:40 }}>
                <WebView
                  style={{ flex: 1, backgroundColor:'#000' }}
                  javaScriptEnabled={true}
                  source={{ uri: 'https://player.vimeo.com/video/258286266' }}
                />
                </View>
              </View>
              
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>;
  }
}

export default Trips;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
