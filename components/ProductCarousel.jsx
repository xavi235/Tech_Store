import React from 'react'
import { FlatList, Image, Text } from 'react-native'

export const ProductCarousel = ({ images }) => {
    return (
        <FlatList
            data={ images }
            renderItem={({ item }) => (
                <Image
                    source={{ uri: item }}
                    style={{
                        width : 400,
                        height: 400
                    }}
                />
            )}
            horizontal
            contentContainerStyle={{ columnGap: 12, marginBottom: 30 }}
            showsHorizontalScrollIndicator={ false }
            keyExtractor={( item ) => item}
        />
    )
}