import { Stack, useSearchParams } from 'expo-router';
import { useFetch } from '../../hooks/useFetch';

import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ProductCarousel } from '../../components/ProductCarousel';


const ProductScreen = () => {
    const { id } = useSearchParams();
    const { data:product, isLoading } = useFetch(`/products/${ id }`);


    if( isLoading ){
        return(
            <View>
                <ActivityIndicator color='#000'/>
            </View>
        )
    }


    const optionsHeader = {
        headerStyle: { backgroundColor: 'white' },
        headerShadowVisible : false,
        headerTitle: `${ product.name }`,
        headerTitleAlign: 'center'
    }

    return (
        <SafeAreaView 
            style={{ backgroundColor: 'white', flex: 1 }}
        >
            <Stack.Screen options={ optionsHeader }/>
            <ScrollView>
                <View style={{ flex: 1, padding: 16 }}>
                    <ProductCarousel images={ product.images }/>
                    
                    <Text style={ styles.title }>
                        { product.name }
                    </Text>
                    
                    <Text style={ styles.details }>
                        Precio: ${ product.price }
                    </Text>
                    
                    <Text style={ styles.details }>
                        Disponibles: { product.inStock }
                    </Text>
                    
                    <Text style={{ ...styles.title, marginTop: 20 }}>Descripcion</Text>
                    <Text style={ styles.details }>{ product.description }</Text>

                    <TouchableOpacity style={ styles.button } activeOpacity={ 0.7 }>
                        <Text style={{ textAlign:'center', color:'white' }}>Comprar producto</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default ProductScreen;


const styles = StyleSheet.create({
    title: {
        fontSize: 26,
        fontWeight:'bold',
    }, 
    details: {
        color: 'rgba(0,0,0, 0.8)',
    },
    button:{
        padding: 15,
        backgroundColor: '#000000',
        marginTop: 15,
        borderRadius: 20
    }
})