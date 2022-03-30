import React, { useState, useEffect } from 'react'
import { ScrollView, View, FlatList, SafeAreaView } from 'react-native'
import { SearchBar, Card } from 'react-native-elements'
import { Button, Text, InputField } from '../../components'
import { Picker } from '@react-native-picker/picker'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import styles from './styles'

const VaccineAddress = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    const fetch_data = () => {
        database().ref("injectedLocation").once("value").then(snapshot => {
            var temp_data = [];
            snapshot.forEach(e => {
                temp_data.push({
                    name: e.key,
                    address: e.val().address,
                    commune: e.val().commune,
                    city: e.val().city,
                    province: e.val().province
                });
            })
            setData(temp_data);
        }).catch(err => { console.log(err) })
    }

    useEffect(() => {
        fetch_data();

        return () => {
            setData([]);
        }
    }, [])

    const findLocation = () => {
        if (search != "") {
            database().ref("injectedLocation").orderByKey("province").startAt(search).endAt(search).once("value").then(snapshot => {
                var temp_data = [];
                snapshot.forEach(e => {
                    temp_data.push({
                        name: e.key,
                        address: e.val().address,
                        commune: e.val().commune,
                        city: e.val().city,
                        province: e.val().province
                    });
                })
                setData(temp_data);
            }).catch(err => { console.log(err) })
        }
        else {
            fetch_data();
        }
    }

    const Item = ({ name, address, commune, city, province }) => {
        return (
            <View>
                <Card>
                    <Card.Title>{name}</Card.Title>
                    <Text>{address + ", " + commune + ", " + city + ", " + province}</Text>
                </Card>
            </View>
        )
    }

    const renderItem = ({ item }) => {
        return (
            <Item name={item.name} address={item.address} commune={item.commune} city={item.city} province={item.province}></Item>
        )
    }

    return (
        <View>
            <SearchBar
                inputContainerStyle={styles.inputContainer}
                containerStyle={styles.searchContainer}
                placeholder="Tìm kiếm..."
                onChangeText={setSearch}
                value={search}
                onChange={findLocation()}
            />
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.address}
            />
        </View>
    )
}

export default VaccineAddress