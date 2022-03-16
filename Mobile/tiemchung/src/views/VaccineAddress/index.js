import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { SearchBar, Card } from 'react-native-elements'
import { Button, Text, InputField } from '../../components'
import styles from './styles'

const VaccineAddress = () => {
    const [search, setSearch] = useState("");
    return (
        <View>
            <SearchBar
                inputContainerStyle={styles.inputContainer}
                containerStyle={styles.searchContainer}
                placeholder="Tìm kiếm..."
                onChangeText={setSearch}
                value={search}
            />
            <ScrollView>
                <Card>
                    <Card.Title>ABC</Card.Title>
                    <Text>abcajascalm</Text>
                </Card>
                <Card>
                    <Card.Title>ABC</Card.Title>
                    <Text>abcajascalm</Text>
                </Card>
                <Card>
                    <Card.Title>ABC</Card.Title>
                    <Text>abcajascalm</Text>
                </Card>
            </ScrollView>
        </View>
    )
}

export default VaccineAddress