import React from 'react';
import { StyleSheet, Text, Platform, View, Image, Dimensions, ScrollView, SafeAreaView } from 'react-native';
import Category from "./components/Explore/Category";

const { height, width } = Dimensions.get("window");


const dataBoard = [
  {
    title: "Valores",
    collection: [
      {
        subtitle: "Eficiencia",
        description:
          "Tenemos que ser conscientes de lo que nos cuesta hacer lo que hacemos, y buscar la manera de hacerlo a menor coste.Nuestro tiempo es muy valioso, y debemos utilizarlo de la mejor manera posible.Cada hora y cada euro que dediquemos a visitas, desarrollos, entrevistas, informes...debemos aprovecharla al máximo.En eso está nuestra rentabilidad."
      },
      {
        subtitle: "Exigencia",
        description:
          "No nos basta con lo que hemos conseguido, queremos hacer más de lo que hacemos y mejor de lo que lo hemos hecho. Sólo con este espíritu seremos capaces de acercanos a la excelencia que nuestros clientes nos demandan, y estaremos de verdad en un círculo de mejora continua."
      },
      {
        subtitle: "Actitud",
        description:
          "Valoramos la cultura del esfuerzo y la excelencia. No esperamos la respuesta perfecta, sino que plantees soluciones a los problemas del día a día. Sin temor al error, asumiendo el riesgo y la responsabilidad que implican las decisiones."
      },
      {
        subtitle: "Diversión",
        description:
          "Queremos divertirnos con lo que hacemos. No nos importan los conflictos, sino lo que aprendemos de ellos. Espíritu de superación, de aportación de valor, de ayuda, de verdaderamente disfrutar con nuestro trabajo. Si no estamos bien, si no nos sentimos bien, no nos saldrán bien las cosas..."
      },
      {
        subtitle: "Equipo",
        description:
          "Todos somos uno, y nuestro éxito depende de todos. Queremos personas que sepan observar las percepciones y sensaciones de los que están a su alrededor, y sean capaces de identificar la necesidad de ayuda que en cada momento puedan tener. No basta con sacar adelante nuestro trabajo, los demás nos necesitan..."
      },
      {
        subtitle: "Talento",
        description:
          "La mejor forma de gestionar el talento es utilizar el sentido común. Es importante conocer los procesos, las tendencias, los modelos que soportan la gestión del talento. Pero no queremos grandes gurús, sino personas prácticas que aporten soluciones."
      },
      {
        subtitle: "Ideas",
        description:
          "Valoramos el aprendizaje y la preocupación por el desarrollo. Queremos personas curiosas, observadoras, interesadas en aprender de los demás, y que planteen ideas. Que cuando sea necesario impulsen los proyectos, pero que también estén dispuestas a escuchar a otros y apoyar sus ideas."
      },
      {
        subtitle: "Iniciativa",
        description:
          "Queremos personas que no se conformen con lo de siempre, que se cuestionen las cosas y busquen alternativas para hacerlas mejor."
      }
    ]
  },
  {
    title: "Normas",
    collection: [
      {
        subtitle: "Eficiencia",
        description:
          "Tenemos que ser conscientes de lo que nos cuesta hacer lo que hacemos, y buscar la manera de hacerlo a menor coste.Nuestro tiempo es muy valioso, y debemos utilizarlo de la mejor manera posible.Cada hora y cada euro que dediquemos a visitas, desarrollos, entrevistas, informes...debemos aprovecharla al máximo.En eso está nuestra rentabilidad."
      },
      {
        subtitle: "Exigencia",
        description:
          "No nos basta con lo que hemos conseguido, queremos hacer más de lo que hacemos y mejor de lo que lo hemos hecho. Sólo con este espíritu seremos capaces de acercanos a la excelencia que nuestros clientes nos demandan, y estaremos de verdad en un círculo de mejora continua."
      },
      {
        subtitle: "Actitud",
        description:
          "Valoramos la cultura del esfuerzo y la excelencia. No esperamos la respuesta perfecta, sino que plantees soluciones a los problemas del día a día. Sin temor al error, asumiendo el riesgo y la responsabilidad que implican las decisiones."
      },
      {
        subtitle: "Diversión",
        description:
          "Queremos divertirnos con lo que hacemos. No nos importan los conflictos, sino lo que aprendemos de ellos. Espíritu de superación, de aportación de valor, de ayuda, de verdaderamente disfrutar con nuestro trabajo. Si no estamos bien, si no nos sentimos bien, no nos saldrán bien las cosas..."
      },
      {
        subtitle: "Equipo",
        description:
          "Todos somos uno, y nuestro éxito depende de todos. Queremos personas que sepan observar las percepciones y sensaciones de los que están a su alrededor, y sean capaces de identificar la necesidad de ayuda que en cada momento puedan tener. No basta con sacar adelante nuestro trabajo, los demás nos necesitan..."
      },
      {
        subtitle: "Talento",
        description:
          "La mejor forma de gestionar el talento es utilizar el sentido común. Es importante conocer los procesos, las tendencias, los modelos que soportan la gestión del talento. Pero no queremos grandes gurús, sino personas prácticas que aporten soluciones."
      },
      {
        subtitle: "Ideas",
        description:
          "Valoramos el aprendizaje y la preocupación por el desarrollo. Queremos personas curiosas, observadoras, interesadas en aprender de los demás, y que planteen ideas. Que cuando sea necesario impulsen los proyectos, pero que también estén dispuestas a escuchar a otros y apoyar sus ideas."
      },
      {
        subtitle: "Iniciativa",
        description:
          "Queremos personas que no se conformen con lo de siempre, que se cuestionen las cosas y busquen alternativas para hacerlas mejor."
      }
    ]
  },
  {
    title: "Herramientas",
    collection: [
      {
        subtitle: "Eficiencia",
        description:
          "Tenemos que ser conscientes de lo que nos cuesta hacer lo que hacemos, y buscar la manera de hacerlo a menor coste.Nuestro tiempo es muy valioso, y debemos utilizarlo de la mejor manera posible.Cada hora y cada euro que dediquemos a visitas, desarrollos, entrevistas, informes...debemos aprovecharla al máximo.En eso está nuestra rentabilidad."
      },
      {
        subtitle: "Exigencia",
        description:
          "No nos basta con lo que hemos conseguido, queremos hacer más de lo que hacemos y mejor de lo que lo hemos hecho. Sólo con este espíritu seremos capaces de acercanos a la excelencia que nuestros clientes nos demandan, y estaremos de verdad en un círculo de mejora continua."
      },
      {
        subtitle: "Actitud",
        description:
          "Valoramos la cultura del esfuerzo y la excelencia. No esperamos la respuesta perfecta, sino que plantees soluciones a los problemas del día a día. Sin temor al error, asumiendo el riesgo y la responsabilidad que implican las decisiones."
      },
      {
        subtitle: "Diversión",
        description:
          "Queremos divertirnos con lo que hacemos. No nos importan los conflictos, sino lo que aprendemos de ellos. Espíritu de superación, de aportación de valor, de ayuda, de verdaderamente disfrutar con nuestro trabajo. Si no estamos bien, si no nos sentimos bien, no nos saldrán bien las cosas..."
      },
      {
        subtitle: "Equipo",
        description:
          "Todos somos uno, y nuestro éxito depende de todos. Queremos personas que sepan observar las percepciones y sensaciones de los que están a su alrededor, y sean capaces de identificar la necesidad de ayuda que en cada momento puedan tener. No basta con sacar adelante nuestro trabajo, los demás nos necesitan..."
      },
      {
        subtitle: "Talento",
        description:
          "La mejor forma de gestionar el talento es utilizar el sentido común. Es importante conocer los procesos, las tendencias, los modelos que soportan la gestión del talento. Pero no queremos grandes gurús, sino personas prácticas que aporten soluciones."
      },
      {
        subtitle: "Ideas",
        description:
          "Valoramos el aprendizaje y la preocupación por el desarrollo. Queremos personas curiosas, observadoras, interesadas en aprender de los demás, y que planteen ideas. Que cuando sea necesario impulsen los proyectos, pero que también estén dispuestas a escuchar a otros y apoyar sus ideas."
      },
      {
        subtitle: "Iniciativa",
        description:
          "Queremos personas que no se conformen con lo de siempre, que se cuestionen las cosas y busquen alternativas para hacerlas mejor."
      }
    ]
  }
];



class Saved extends React.Component {

  componentWillMount() {
    this.startHeaderHeight = 20
    if (Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  };

  mountDataFromJson(data){
    let dataPut;
    for(element in data){
      dataPut = dataPut +
      <Text style={{
          fontSize: 24,
          fontWeight: "700",
          color: "white"
        }}
        key={element}
      > element.title
      </Text>
      // <View style={{ height: 130, marginTop: 20 }}>
      // <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      // for(elementContent in element){
      //       <Category imageUri={require("../assets/home.jpg")} name={elementContent.subtitle} />
      // }
      // </ScrollView>
      // </View>
    }
    return dataPut;
  }



  render() {
    return <SafeAreaView style={{ flex: 1, backgroundColor: "#0072ce" }}>
        <View style={{ flex: 1 }}>
          <View style={{ height: this.startHeaderHeight }} />

          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, paddingTop: 20 }}>
              
              {/* <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Category imageUri={require("../assets/home.jpg")} name="Home" />
                  <Category imageUri={require("../assets/experiences.jpg")} name="Experiences" />
                  <Category imageUri={require("../assets/restaurant.jpg")} name="Restaurant" />
                </ScrollView>
              </View> */}
            <View style={{  paddingHorizontal: 20, }}>
              { dataBoard.map( (e,i) => 
              <View key={i} style={styles.container}>
                <Text style={{
                  fontSize: 24,
                  fontWeight: "700",
                  color: "white"
                }}>{e.title}</Text>
                  <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
                  {e.collection.map((element,i) =>
                  <View key={i} style={{ height: 130, marginTop: 20 }}>
                      <Category imageUri={require("../assets/home.jpg")} name={element.subtitle} />
                  </View>
                )}
                  </ScrollView>
                  </View>
               </View>
              )}
            </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>;
  }
}

export default Saved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0072ce",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40
  }
});