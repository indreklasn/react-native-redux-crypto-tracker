import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';


import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './CoinCard';

class CryptoContainer extends Component {

    componentWillMount() {
        console.log(this.props);        
        this.props.FetchCoinData();

    }

    renderCoinCards() {
        console.log(this.props);
        return this.props.crypto.data[0].map(coin => 
            <CoinCard imageID={coin.symbol} />
        )
    }


    render() {

        const { crypto } = this.props;

        if (crypto.isFetching) {
            return (
                <View>
                    <Spinner
                        visible={crypto.isFetching}
                        textContent={"Loading..."}
                        textStyle={{color: '#253145'}}
                        animation="fade"
                    />
                </View>
            )
 
        }

        return (
            <View>
                <Text>{this.renderCoinCards()}</Text>
            </View>
        )
        

    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)