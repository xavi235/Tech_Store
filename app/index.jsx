import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native'
import { CategorieList, ProductList, Search } from '../components';
import { Stack } from 'expo-router';


const Home = () => {

    const optionHeader ={
      headerStyle: { backgroundColor: 'white'},
      headerShadowVisible: false,
      headerTitle:'Tech Store',
      headerTitleAlign: 'center'
    }

    return (
       <SafeAreaView
        style ={{ backgroundColor: 'white', flex: 1 }}
        >
          <Stack.Screen options={optionHeader}/>

            <ScrollView>
                <View style ={{ flex:1, padding:16}}>

                  <Text style = {styles.textBienvenida}> Bienvenido Xavis </Text>

                  <Search/>

                  <Text style = { styles.tittle }>Categorias</Text>
                  <CategorieList/>
                  
                  <Text style = { styles.tittle }>Productos</Text>
                  <ProductList/>

                </View>

            </ScrollView>


       </SafeAreaView>
    )

}

const styles = StyleSheet.create({
  textBienvenida: {
    fontSize: 22,
    fontWeight: '500'
  },
  tittle:{
    fontSize: 22,
    fontWeight:'bold',
    marginBottom: 10

  }
}); 

export default Home ;