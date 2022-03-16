import React from 'react'
import { Alert, ScrollView, View } from 'react-native'
import { Card, Divider } from 'react-native-elements'
import styles from './styles'
import { Text, Icon, Button } from '../../components'

const VaccineCalendar = ({ navigation }) => {
    return (
        <ScrollView>
            <Card containerStyle={styles.cardContainer}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardContentLeft}>
                        <Text style={styles.titleStyle}>15</Text>
                        <Text style={styles.subTitleStyle}>04/2022</Text>
                    </View>
                    <Divider orientation='vertical' width={1.5} style={styles.dividerStyle} />
                    <View>
                        <View style={styles.cardContentRight}>
                            <Icon name='user-alt' type='font-awesome-5' size={18} iconStyle={styles.iconStyles} />
                            <Text style={styles.textStyles}>Phạm Nguyễn Thanh Huy</Text>
                        </View>
                        <View style={styles.cardContentRight}>
                            <Icon name='birthday-cake' type='font-awesome-5' size={18} iconStyle={styles.iconStyles} />
                            <Text style={styles.textStyles}>02/01/2000</Text>
                        </View>
                    </View>
                    <View>
                        <Button
                            icon={{
                                name: "ellipsis-v",
                                color: "#888888",
                                type: "font-awesome-5",
                                size: 15,
                            }}
                            iconPosition='top'
                            iconContainerStyle={{ marginTop: -10, marginLeft: 10 }}
                            buttonStyle={{ backgroundColor: '#FFFFFF' }}
                            onPress={() => navigation.navigate('DetailCalendar')} />
                    </View>
                </View>
            </Card>
        </ScrollView>
    )
}

export default VaccineCalendar
