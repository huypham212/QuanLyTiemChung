import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Dimensions, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { Text, Button } from '../../components';
import { Card } from 'react-native-elements';
import styles from './styles';

const VaccineInfo = () => {

    const [injectedData, setInjectedData] = useState([]);
    const [isLoad, setIsLoad] = useState(false);

    const fetchData = () => {
        setIsLoad(true);
        database().ref("/injectedHistories/" + auth().currentUser.uid).on('value', snapshot => {
            setInjectedData(Object.values(snapshot.val()))
            setIsLoad(false)
            // console.log("injectedData: ", injectedData)
        })
    }

    useEffect(() => {
        fetchData();

        return () => {
            setInjectedData([]);
        }
    }, [])

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
                loading={isLoad}
                iconPosition='left'
                titleStyle={{ fontSize: 18 }}
                buttonStyle={styles.btnStyle}
                onPress={() => fetchData()}
            />
            {injectedData == null ? (
                <View>
                    <Text>Bạn chưa tiêm mũi nào</Text>
                </View>
            ) : (
                <View>
                    {injectedData.map((l, i) => (
                        <Card key={i} containerStyle={styles.cardTopContainer}>
                            <Card.Title style={styles.titleStyle}>Mũi {i + 1}</Card.Title>
                            <Card.Divider width={1.5} />
                            <Text style={styles.contentStyle}>Tên Vaccine:
                                <Text style={styles.detailStyle}> {l.vaccineName}</Text>
                            </Text>
                            <Text style={styles.contentStyle}>Ngày tiêm:
                                <Text style={styles.detailStyle}> {l.injectedDate}</Text>
                            </Text>
                            <Text style={styles.contentStyle}>Số lô vaccine:
                                <Text style={styles.detailStyle}> {l.batchNumber}</Text>
                            </Text>
                            <Text style={styles.contentStyle}>Cơ sở tiêm:
                                <Text style={styles.detailStyle}> {l.injectedLocation}</Text>
                            </Text>
                        </Card>
                    ))}
                </View>
            )}

        </ScrollView>
    )
}

export default VaccineInfo