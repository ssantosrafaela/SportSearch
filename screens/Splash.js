import { Image, View, StyleSheet} from 'react-native';

export default function Splash(){
    const img = require('../assets/port.png')

    return(
        <View style={styles.container}>
            <Image source={img} style={styles.img}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: '#83a1ef',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img:{
        width: '90%',
        resizeMode: 'contain'
    }
})