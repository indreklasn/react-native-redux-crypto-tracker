import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: "flex",
    },
    image: {
        width: 50,
        height: 50,
    }
    
})

const { container, image } = styles;

const CoinCard = ({ imageID, symbol, price_usd, percent_change_24h }) => {
    return (
        <View style={container}>
            <Image
                style={image}
                source={require(`./../CoinIcons/${imageID}.png`)}
             />
            <Text>{symbol}</Text>
            <Text>{price_usd}</Text>
            <Text>{percent_change_24h}</Text>
        </View> 
    );
}



export default CoinCard;