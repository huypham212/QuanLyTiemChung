import React, { useState, useEffect } from 'react'
import { Alert, ScrollView, View, TouchableOpacity } from 'react-native'
import { Card, Divider } from 'react-native-elements'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import styles from './styles'
import { Text, Icon, Button } from '../../components'
import { connect } from 'react-redux'
import * as ActionCreator from '../../redux/actions'

const VaccineCalendar = (props) => {

    useEffect(() => {
        props.dispatch(ActionCreator.getUser(auth().currentUser.uid));
        props.dispatch(ActionCreator.getVaccineCalendar(auth().currentUser.uid));
    }, [])

    return (
        <ScrollView>
            {props.vaccineCalendar == null ? (
                <View>
                    <Text>Bạn chưa đăng ký lịch tiêm</Text>
                </View>
            ) : (
                <Card containerStyle={styles.cardContainer}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('DetailCalendar')}>
                        <View style={styles.cardContainer}>
                            <View style={styles.cardContentLeft}>
                                <Text style={styles.titleStyle}>15</Text>
                                <Text style={styles.subTitleStyle}>04/2022</Text>
                            </View>
                            <Divider orientation='vertical' width={1.5} style={styles.dividerStyle} />
                            <View>
                                <View style={styles.cardContentRight}>
                                    <Icon name='user-alt' type='font-awesome-5' size={18} iconStyle={styles.iconStyles} />
                                    <Text style={styles.textStyles}>{props.userInfo.name}</Text>
                                </View>
                                <View style={styles.cardContentRight}>
                                    <Icon name='birthday-cake' type='font-awesome-5' size={18} iconStyle={styles.iconStyles} />
                                    <Text style={styles.textStyles}>{props.userInfo.dob}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Card>
            )}
        </ScrollView>
    )
}

const mapStateToProps = (state) => {
    return {
        vaccineCalendar: state.appState.vaccineCalendar,
        userInfo: state.appState.user
    }
}

export default connect(mapStateToProps)(VaccineCalendar)

//export default VaccineCalendar
