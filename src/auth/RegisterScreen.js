import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { CustomHeader } from '../index'

export class RegisterScreen extends Component {

    state = {
        adi: "",
        soyadi: "",
        email: "",
        password: ""
    }
    render() {
        let { navigation } = this.props
        return (
            <SafeAreaView style={{ backgroundColor: '#003f5c', flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
                <CustomHeader navigation={navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 50,
                        color: "#fb5b5a",
                        marginBottom: 40
                    }} > KAYIT OL</Text>
                    <View style={styles.inputView} >
                        <TextInput
                            style={styles.inputText}
                            placeholder="Adınız..."
                            placeholderTextColor="#003f5c"
                            onChangeText={text => this.setState({ adi: text })} />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            style={styles.inputText}
                            placeholder="Soyadınız..."
                            placeholderTextColor="#003f5c"
                            onChangeText={text => this.setState({ soyadi: text })} />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            style={styles.inputText}
                            placeholder="Email..."
                            placeholderTextColor="#003f5c"
                            onChangeText={text => this.setState({ email: text })} />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            style={styles.inputText}
                            placeholder="Şifre..."
                            placeholderTextColor="#003f5c"
                            onChangeText={text => this.setState({ password: text })} />
                    </View>
                    <TouchableOpacity style={styles.loginBtn}
                        onPress={() => navigation.navigate('HomeApp')}
                    >
                        <Text style={styles.loginText}>GİRİŞ</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    inputView: {
        width: "80%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    },
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
