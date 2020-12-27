import React, { Component } from 'react';
import { Text, View, SafeAreaView, Platform, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native';
import { CustomHeader } from '../index'
import { KİTAP } from '../constants/kitap';

export class HomeScreenDetail extends Component {


    render() {
        let { navigation, } = this.props
        return (
            <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
                <CustomHeader title="Kitap İçerigi" navigation={navigation} />
                <ScrollView style={{padding: 10,}}>
                    <Text style={{fontSize:25}} >{KİTAP.ICERİK}
                    </Text>
                </ScrollView>
                
            </SafeAreaView>
        );
    }
}
