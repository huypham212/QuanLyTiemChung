import React from 'react';
import { StyleSheet, ScrollView, Dimensions, View } from 'react-native';
import { Text, Button } from '../../components';
import { Card } from 'react-native-elements';

const VaccineInfo = () => {
    return (
        <ScrollView>
            <Button
                title="Cập nhật thông tin"
                icon={{
                    name: "sync-alt",
                    color: "#FFFFFF",
                    type: "font-awesome-5",
                    size: 20,
                }}
                iconPosition='left'
                titleStyle={{ fontSize: 20 }}
                buttonStyle={styles.btnStyle}
            />
            <Card containerStyle={styles.cardTopContainer}>
                <Card.Title style={styles.titleStyle}>Mũi 3</Card.Title>
                <Card.Divider width={1.5} />
                <Text style={styles.contentStyle}>Tên Vaccine:</Text>
                <Text style={styles.contentStyle}>Ngày tiêm:</Text>
                <Text style={styles.contentStyle}>Số lô vaccine:</Text>
                <Text style={styles.contentStyle}>Cơ sở tiêm:</Text>

                <Card.Title style={styles.titleStyle}>Mũi 2</Card.Title>
                <Card.Divider width={1.5} />
                <Text style={styles.contentStyle}>Tên Vaccine:</Text>
                <Text style={styles.contentStyle}>Ngày tiêm:</Text>
                <Text style={styles.contentStyle}>Số lô vaccine:</Text>
                <Text style={styles.contentStyle}>Cơ sở tiêm:</Text>

                <Card.Title style={styles.titleStyle}>Mũi 1</Card.Title>
                <Card.Divider width={1.5} />
                <Text style={styles.contentStyle}>Tên Vaccine:</Text>
                <Text style={styles.contentStyle}>Ngày tiêm:</Text>
                <Text style={styles.contentStyle}>Số lô vaccine:</Text>
                <Text style={styles.contentStyle}>Cơ sở tiêm:</Text>
            </Card>
        </ScrollView>
    )
}

export default VaccineInfo

const styles = StyleSheet.create({
    cardTopContainer: {
        borderRadius: 20,
        backgroundColor: '#4CC552',
        color: '#FFFFFF',
        paddingTop: 30,
        marginBottom: 10
    },

    btnStyle: {
        borderRadius: 30,
        width: 200,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#4CC552',
        fontSize: 24,
        marginTop: 30,
        marginBottom: 15
    },

    titleStyle: {
        color: '#FFFFFF',
        fontSize: 25
    },

    contentStyle: {
        color: '#FFFFFF',
        fontSize: 18,
        marginBottom: 15
    }
})