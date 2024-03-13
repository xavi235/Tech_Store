import { useRouter } from 'expo-router'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const ProductCard = ({ product }) => {

    
    const router = useRouter()
    

    const handleNavigation = ( id ) => {
        router.push(`/product/${ id }`);
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handleNavigation(product.id)}
        >
            <View style={ styles.container }>
                <Image
                    source={{ uri: product.images[0] }}
                    style={{ width: 160, height: 160 }}
                />
                
                <View>
                    <Text style={ styles.name }>{ product.name }</Text>
                    <Text style={{ color:'rgba(0,0,0,0.7)' }}>{ product.category }</Text>
                    <View  style={{ flex: 1/3 }}></View>
                    <Text style={{ color:'rgba(0,0,0,0.7)' }}>Precio: ${ product.price }</Text>
                </View>
            </View>

            <View style={ styles.divider }></View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems:'center'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 20,
        maxWidth: 180
    },
    divider:{
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        marginVertical: 30
    }
});