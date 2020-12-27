import React, { Component } from 'react';
import { Text, View, SafeAreaView, Platform, StatusBar, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { CustomHeader } from '../index'
import axios from 'axios';

export class KullanicilarScreen extends Component {
    state = {
        contacts: []
    };

    componentDidMount() {
        this.getContacts();
    }

    getContacts = async () => {
        const { data: { results: contacts } } = await axios.get('https://randomuser.me/api/?results=30');
        this.setState({
            contacts,
        });
    };

    renderContactsItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={[styles.itemContainer, { backgroundColor: index % 2 === 1 ? '#fafafa' : '' }]}>
                <Image
                    style={styles.avatar}
                source={{ uri: item.picture.thumbnail }}/>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.name.first} {item.name.last}</Text>
                    <Text>{item.location.state}</Text>
                </View>
            </TouchableOpacity>
        )
    };


    render() {
        let { navigation } = this.props
        return (
            <SafeAreaView style={{flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
                <CustomHeader title="Kullanicilar" navigation={navigation} />
                <FlatList
                    renderItem={this.renderContactsItem}
                    keyExtractor={item => item._id}
                    keyExtractor={item => item.login.uuid}
                    data={this.state.contacts} />
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    itemContainer: {
		flex: 1,
		flexDirection: 'row',
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#eee'
	},
	avatar: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginHorizontal: 10
	},
	textContainer: {
		justifyContent: 'space-around'
	},
	name: {
		fontSize: 16
	},
	searchContainer: {
		padding: 10
	},
	searchInput: {
		fontSize: 16,
		backgroundColor: '#f9f9f9',
		padding: 10
	}
});