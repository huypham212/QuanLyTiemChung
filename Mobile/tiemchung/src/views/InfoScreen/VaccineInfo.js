import React from 'react';
import { StyleSheet, ScrollView, Dimensions, View } from 'react-native';
import { Text, Button } from '../../components';
import { Card } from 'react-native-elements';
import styles from './styles';

const VaccineInfo = () => {

    const data = [
        {
            vaccineName: 'COVID-19 Vaccine AstraZeneca',
            vaccineDate: '02/01/2022',
            vaccineNumber: 'CTMAV5130',
            vaccineAddress: 'TYT Vĩnh Thạnh'
        },
        {
            vaccineName: 'COVID-19 Vaccine AstraZeneca',
            vaccineDate: '29/10/2021',
            vaccineNumber: 'CTMAV587',
            vaccineAddress: 'TYT Vĩnh Thạnh'
        },
        {
            vaccineName: 'COVID-19 Vaccine AstraZeneca',
            vaccineDate: '13/09/2021',
            vaccineNumber: 'PV46670',
            vaccineAddress: 'TYT Vĩnh Thạnh'
        }
    ]

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
                <Text style={styles.contentStyle}>Tên Vaccine:
                    <Text style={styles.detailStyle}> Covid-19 AstraZeneca</Text>
                </Text>
                <Text style={styles.contentStyle}>Ngày tiêm:
                    <Text style={styles.detailStyle}> 02/01/2000</Text>
                </Text>
                <Text style={styles.contentStyle}>Số lô vaccine:
                    <Text style={styles.detailStyle}> ASTR11111</Text>
                </Text>
                <Text style={styles.contentStyle}>Cơ sở tiêm:
                    <Text style={styles.detailStyle}> TYT Vĩnh Thạnh</Text>
                </Text>

                <Card.Title style={styles.titleStyle}>Mũi 2</Card.Title>
                <Card.Divider width={1.5} />
                <Text style={styles.contentStyle}>Tên Vaccine:
                    <Text style={styles.detailStyle}> Covid-19 AstraZeneca</Text>
                </Text>
                <Text style={styles.contentStyle}>Ngày tiêm:
                    <Text style={styles.detailStyle}> 02/01/2000</Text>
                </Text>
                <Text style={styles.contentStyle}>Số lô vaccine:
                    <Text style={styles.detailStyle}> ASTR11111</Text>
                </Text>
                <Text style={styles.contentStyle}>Cơ sở tiêm:
                    <Text style={styles.detailStyle}> TYT Vĩnh Thạnh</Text>
                </Text>

                <Card.Title style={styles.titleStyle}>Mũi 1</Card.Title>
                <Card.Divider width={1.5} />
                <Text style={styles.contentStyle}>Tên Vaccine:
                    <Text style={styles.detailStyle}> Covid-19 AstraZeneca</Text>
                </Text>
                <Text style={styles.contentStyle}>Ngày tiêm:
                    <Text style={styles.detailStyle}> 02/01/2000</Text>
                </Text>
                <Text style={styles.contentStyle}>Số lô vaccine:
                    <Text style={styles.detailStyle}> ASTR11111</Text>
                </Text>
                <Text style={styles.contentStyle}>Cơ sở tiêm:
                    <Text style={styles.detailStyle}> TYT Vĩnh Thạnh</Text>
                </Text>
            </Card>
        </ScrollView>
    )
}

export default VaccineInfo