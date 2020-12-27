import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Platform, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native';
import { IMAGE } from './constants/image'

export class CustomDrawerContent extends Component {


    render() {
        let { navigation } = this.props
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#003f5c', }} >
                <View style={{ flex: 1, marginTop: 50, }}>
                    <View style={{
                        height: 150, alignItems: 'center', justifyContent: 'center'
                    }} >
                        <Image source={IMAGE.ICON_USER}
                            style={{ height: 120, width: 120, borderRadius: 60 }} />

                    </View>
                    <ScrollView style={{ marginLeft: 10 }} >
                        <TouchableOpacity
                            style={{ marginTop: 20 }}
                            onPress={() => navigation.navigate('MenuTab')}
                        >
                            <Text style={{ fontSize: 25,color:'white' }}>Ana Sayfa</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ marginTop: 20 }}
                            onPress={() => navigation.navigate('Kullanıcılar')}
                        >
                            <Text style={{ fontSize: 25,color:'white' }}>Kullanıcılar</Text>
                        </TouchableOpacity>
                    </ScrollView>

                    <View style={{
                        paddingBottom: 30,
                        alignItems: "center",
                        justifyContent: "center",
                    }} >
                        <TouchableOpacity style={styles.loginBtn}
                            onPress={() => navigation.navigate('Login')}
                        >
                            <Text style={styles.loginText}>LogOut</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    loginBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 21,

    }
});
