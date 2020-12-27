import React, { Component } from 'react';
import { Text, View, SafeAreaView, Platform, StatusBar, TextInput, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import { CustomHeader } from '../index'


export class SettingScreen extends Component {
    state = {
        text: ''
    };

    render() {
        const { text } = this.state;
        let { navigation } = this.props
        return (
            <SafeAreaView style={{ backgroundColor: '#003f5c', flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
                <CustomHeader title="Search" isHome={true} navigation={navigation} />
                <View style={{ flex: 1, paddingLeft: 15, paddingRight: 15 }}>
                    <TextInput
                        onChangeText={text => {
                            this.setState({
                                text,
                            });

                        }}
                        value={text}
                        placeholder="Search..."
                        style={{
                            fontSize: 16,
                            backgroundColor: '#f9f9f9',
                            padding: 10,
                            borderRadius: 10
                        }} />



                </View>
            </SafeAreaView>
        );
    }
}
