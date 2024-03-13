import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { useFetch } from '../hooks/useFetch'
import { CategoryButton } from './CategoryButton';


export const CategorieList = () => {

  const {data: categories, error, isLoading} = useFetch('/categories');

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
          <FlatList
              data={ categories }
              renderItem={({ item })=>(
                <CategoryButton name = {item.name}/>
              )}
              horizontal
              contentContainerStyle={{ columnGap: 12, marginBottom: 30 }}
              showsHorizontalScrollIndicator = { false }
              keyExtractor={( item ) => (item.id)}
          />
        }
    </View>
  )
}
