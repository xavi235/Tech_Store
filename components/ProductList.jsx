import { ActivityIndicator, View } from "react-native"
import { useFetch } from "../hooks/useFetch"

import { ProductCard } from "./"


export const ProductList = ({ url = '' }) => {

    const { data: products, isLoading } = useFetch( `/products${ url.trim() == '' ? '' : `?category=${ url }` }`)

    
    if( isLoading ){
        return(
            <View>
                <ActivityIndicator color='#000'/>
            </View>
        )
    }

    return (
        <View>
            {
                products.map((product) => (
                  <ProductCard 
                    key ={ product.id }
                    product={ product }
                   />
                ))
            }
        </View>
    )
}