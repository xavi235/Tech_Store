import { useRouter } from 'expo-router'
import React, { useReducer } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native'

export const CategoryButton = ({name}) => {

    const router = useRouter()
    
    const handleNavigation = ( term ) => {
        router.push(`/category/${ term }`)
    }


    return(
        <TouchableOpacity
            style={ styles.button}
            activeOpacity={ 0.6 }
            onPress={() => handleNavigation(name)}
        >
            <Text style = {{color: 'white'}}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
      button: {
          backgroundColor: 'blue',
          borderRadius: 10,
          padding: 10, 
      }
})