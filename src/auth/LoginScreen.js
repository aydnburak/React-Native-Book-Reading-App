import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View, SafeAreaView, Platform, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native';


export class LoginScreen extends Component {

    state = {
        email: "",
        password: ""
    }

    render() {
        let { navigation } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.logo} >LOGİN</Text>
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
                        secureTextEntry={true}
                        placeholder="Password..."
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({ password: text })} />
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgot}>Parolanızı mı unuttunuz?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => navigation.navigate('HomeApp')}
                >
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.loginText}>Register</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#fb5b5a",
        marginBottom: 40
    },
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
    forgot: {
        color: "white",
        fontSize: 11
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



/* render() {
     let { navigation } = this.props
     return (
         <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>

             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                 <Text>Login Screen!</Text>
                 <TouchableOpacity
                     style={{ marginTop: 20 }}
                     onPress={() => navigation.navigate('HomeApp')}
                 >
                     <Text style={{ fontSize: 25 }}>Login</Text>
                 </TouchableOpacity>
                 <TouchableOpacity
                     style={{ marginTop: 20 }}
                     onPress={() => navigation.navigate('Register')}
                 >
                     <Text style={{ fontSize: 25 }}>Register</Text>
                 </TouchableOpacity>
             </View>
         </SafeAreaView>
     );
 }
}*/
