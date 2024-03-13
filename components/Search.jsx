import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export const Search = () => {
  return (
    <View style={styles.container}>
        <TextInput
            style={styles.search}
        />
        <TouchableOpacity style = {styles.buttonSearch}>
            <Text style={{color:'white', textAlign:'center'}}>Buscar</Text>
        </TouchableOpacity>
    </View>
  )
 }

 const styles =StyleSheet.create({


    container:{

        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:15,
    },
    search:{
        fontSize:16,
        fontWeight:'500',
        borderColor:'rgba(0,0,0 ,0.2)',
        borderWidth:1,
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius: 15,
        width:'75%',
        
        
        
    },
    buttonSearch:{
        padding: 10,
        backgroundColor:'black',
        borderRadius: 15,
        width:'20%'

    }

 })
