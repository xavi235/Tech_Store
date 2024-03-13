import React from 'react'
import {  Stack, useSearchParams } from 'expo-router'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { ProductList } from '../../components';

const CategoryScreen = () => {

    const { name } = useSearchParams();
    
    const optionHeader ={
        headerStyle: { backgroundColor: 'white'},
        headerShadowVisible: false,
        headerTitle: `${ name }` ,
        headerTitleAlign: 'center'
    }

    return (
      <SafeAreaView
        style ={{ backgroundColor: 'white', flex: 1 }}
        >
          <Stack.Screen options={optionHeader}/>

            <ScrollView>
              <View style ={{ flex:1, padding:16}}>
                <ProductList url ={ name }/>

              </View>

            </ScrollView>


      </SafeAreaView>
    )
}

export default CategoryScreen