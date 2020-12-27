import React, { Component } from 'react';
import { Text, View, SafeAreaView, Platform, StatusBar, StyleSheet,TouchableOpacity, Image, ScrollView } from 'react-native';
import { CustomHeader } from '../index';
import { Dimensions } from "react-native";
import { KİTAP } from '../constants/kitap';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
export class HomeScreen extends Component {


    render() {
        let { navigation } = this.props
        return (
            <SafeAreaView style={{
                backgroundColor: '#003f5c',flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
            }}>
                <CustomHeader title="Kitaplar" isHome={true} navigation={navigation} />
                <ScrollView style={{ flex: 1 }} >
                    <View style={{ alignItems: 'center', }} >

                        <View style={styles.container} >
                            <View style={styles.foto}>
                                <Image resizeMode='contain' source={require('../images/kitap1.jpg')} style={{flex:1 }} />
                            </View>
                            <View style={styles.veri}>
                                <Text style={{ justifyContent:'center',alignItems:'center',color:'white', margin: 2, flex: 1 }} >Vezir Gambiti</Text>
                                <Text style={{ justifyContent:'center',alignItems:'center',color:'white', margin: 2, flex: 1 }}>Türü: Roman </Text>
                                <Text style={{ justifyContent:'center',alignItems:'center',color:'white', margin: 2, flex: 1 }}>Yazar: Walter Tevis </Text>
                                <Text style={{ justifyContent:'center',alignItems:'center',color:'white', margin: 2, flex: 1 }}>Sayfa Sayısı: 336</Text>
                                <TouchableOpacity style ={{flex:1}} onPress={() => navigation.navigate('HomeDetail')}>
                                <Text style={{ justifyContent:'center',alignItems:'center',color:'white', margin: 2, flex: 1,fontSize:30 }}>OKU</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', }} >

                        <View style={styles.container} >
                            <View style={styles.foto}>
                                <Image resizeMode='contain' source={require('../images/kitap2.jpg')} style={{flex:1 }} />
                            </View>
                            <View style={styles.veri}>
                                <Text style={{ justifyContent:'center',alignItems:'center',color:'white', margin: 2, flex: 1 }} >Türk-Yunan Savaşı</Text>
                                <Text style={{ justifyContent:'center',alignItems:'center',color:'white', margin: 2, flex: 1 }}>Türü: Tarih Araştırma ve </Text>
                                <Text style={{ justifyContent:'center',alignItems:'center',color:'white', margin: 2, flex: 1 }}>Yazar: Nikolay Georgiyeviç Korsun </Text>
                                <Text style={{ justifyContent:'center',alignItems:'center',color:'white', margin: 2, flex: 1 }}>Sayfa Sayısı: 128</Text>
                                <TouchableOpacity style ={{flex:1}} onPress={() => navigation.navigate('HomeDetail')}>
                                <Text style={{ justifyContent:'center',alignItems:'center',color:'white', margin: 2, flex: 1,fontSize:30 }}>OKU</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', }} >

                        <View style={styles.container} >
                            <View style={styles.foto}>
                                <Image resizeMode='contain' source={require('../images/kitap3.jpg')} style={{flex:1 }} />
                            </View>
                            <View style={styles.veri}>
                                <Text style={{ justifyContent:'center',alignItems:'center',color:'white', margin: 2, flex: 1 }} >Kitap Okuyan Çocuk Yetiştirmek</Text>
                                <Text style={{ justifyContent:'center',alignItems:'center',color:'white', margin: 2, flex: 1 }}>Türü: Kişisel Gelişim Kitapları </Text>
                                <Text style={{ justifyContent:'center',alignItems:'center',color:'white', margin: 2, flex: 1 }}>Yazar: Megan Daley </Text>
                                <Text style={{ justifyContent:'center',alignItems:'center',color:'white', margin: 2, flex: 1 }}>Sayfa Sayısı: 288</Text>
                                <TouchableOpacity style ={{flex:1}} onPress={() => navigation.navigate('HomeDetail')}>
                                <Text style={{ justifyContent:'center',alignItems:'center',color:'white', margin: 2, flex: 1,fontSize:30 }}>OKU</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', }} >

                        <View style={styles.container} >
                            <View style={styles.foto}>
                                <Image resizeMode='contain' source={require('../images/kitap4.jpg')} style={{flex:1 }} />
                            </View>
                            <View style={styles.veri}>
                                <Text style={{ justifyContent:'center',alignItems:'center',color:'white', margin: 2, flex: 1 }} >Rehine</Text>
                                <Text style={{ justifyContent:'center',alignItems:'center',color:'white', margin: 2, flex: 1 }}>Türü: Çizgi Roman Kitapları </Text>
                                <Text style={{ justifyContent:'center',alignItems:'center',color:'white', margin: 2, flex: 1 }}>Yazar: Guy Delisle </Text>
                                <Text style={{ justifyContent:'center',alignItems:'center',color:'white', margin: 2, flex: 1 }}>Sayfa Sayısı: 432</Text>
                                <TouchableOpacity style ={{flex:1}} onPress={() => navigation.navigate('HomeDetail')}>
                                <Text style={{ justifyContent:'center',alignItems:'center',color:'white', margin: 2, flex: 1,fontSize:30 }}>OKU</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    
               
                </ScrollView>


            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        width: screenWidth * 0.95,
        height: screenHeight * 0.3,
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 2,
        flexDirection: 'row',
        marginBottom: 5,
    },
    foto: {
        width: "40%",
        height: "90%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginLeft: 10
    },
    veri: {
        flexDirection: 'column',
        height: "90%",
        width: "55%",
        borderRadius: 20,
        marginLeft: 5,
        padding: 10,
    }
});


/* <TouchableOpacity
                        style={{ marginTop: 20 }}
                        onPress={() => navigation.navigate('HomeDetail')}
                    >
                        <Text style={{ fontSize: 25 }}>Go Home Detail</Text>
                    </TouchableOpacity> */