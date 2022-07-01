import React from 'react'
import { Alert, ScrollView, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Card, Divider } from 'react-native-elements'
import auth from '@react-native-firebase/auth'
import styles from './styles'
import { Text, Icon, Button } from '../../components'
import { connect } from 'react-redux'
import * as ActionCreator from '../../redux/actions'

const VaccineCalendar = (props) => {
    const [vaccineCalendar, setVaccineCalendar] = React.useState([])
    const [loading, setLoading] = React.useState(true);
    const [datePart, setDatePart] = React.useState([]);

    const fetchData = () => {
        //props.dispatch(ActionCreator.getVaccineCalendar(auth().currentUser.uid));
        console.log(Object.values(props.vaccineCalendar))
        setVaccineCalendar(Object.values(props.vaccineCalendar))
        setLoading(false);
        console.log(vaccineCalendar)
    }

    const getDatePart = (date) => {
        let datePart = date.split('/');
        return datePart;
    }

    React.useEffect(() => {
        fetchData();
    }, [])

    return (
        <ScrollView>
            {loading ? (
                <View style={{ marginTop: 20 }}>
                    <ActivityIndicator size="large" color="#00ff00" />
                </View>
            ) : (
                <View>
                    {props.vaccineCalendar == null ? (
                        <View>
                            <Text>Bạn chưa đăng ký lịch tiêm</Text>
                        </View>
                    ) : (
                        vaccineCalendar.map((item, index) => (
                            <Card key={index} containerStyle={styles.cardContainer}>
                                <TouchableOpacity onPress={() => props.navigation.navigate('DetailCalendar')}>
                                    <View style={styles.cardContainer}>
                                        <View style={styles.cardContentLeft}>
                                            <Text style={styles.titleStyle}>{getDatePart(item.registrationDate)[0]}</Text>
                                            <Text style={styles.subTitleStyle}>{getDatePart(item.registrationDate)[1] + "/" + getDatePart(item.registrationDate)[2]}</Text>
                                        </View>
                                        <Divider orientation='vertical' width={1.5} style={styles.dividerStyle} />
                                        <View>
                                            <View style={styles.cardContentRight}>
                                                <Icon name='user-alt' type='font-awesome-5' size={18} iconStyle={styles.iconStyles} />
                                                <Text style={styles.textStyles}>{props.user.name}</Text>
                                            </View>
                                            <View style={styles.cardContentRight}>
                                                <Icon name='birthday-cake' type='font-awesome-5' size={18} iconStyle={styles.iconStyles} />
                                                <Text style={styles.textStyles}>{props.user.dob}</Text>
                                            </View>
                                            <View style={styles.cardContentRight}>
                                                <Icon name='info-circle' type='font-awesome-5' size={18} iconStyle={styles.iconStyles} />
                                                <Text style={styles.textStyles}>{item.status}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </Card>
                        ))
                    )}
                </View>
            )}
        </ScrollView>
    )
}

const mapStateToProps = (state) => {
    return {
        vaccineCalendar: state.appState.vaccineCalendar,
        user: state.appState.user
    }
}

export default connect(mapStateToProps)(VaccineCalendar)
