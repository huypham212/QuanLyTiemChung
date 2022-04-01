import React from 'react'
import { ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'
import { Text, Icon } from '../../components'
import { connect } from 'react-redux';
import * as ActionCreator from '../../redux/actions';
import styles from './styles'

const DetailCalendar = (props) => {
    const data = [
        {
            title: "Họ và tên người đăng ký",
            subtitle: props.userInfo.name,
            icon: "user-alt"
        },
        {
            title: "Ngày tháng năm sinh",
            subtitle: props.userInfo.dob,
            icon: "calendar-alt"
        },
        {
            title: "Giới tính",
            subtitle: props.userInfo.gender,
            icon: "venus-mars"
        },
        {
            title: "CMND/CCCD/Hộ chiếu",
            subtitle: props.userInfo.idCard,
            icon: "id-card"
        },
        {
            title: "Tỉnh/Thành phố",
            subtitle: props.userInfo.address.province,
            icon: "map-marker-alt"
        },
        {
            title: "Quận/Huyện",
            subtitle: props.userInfo.address.city,
            icon: "map-marker-alt"
        },
        {
            title: "Phường/Xã",
            subtitle: props.userInfo.address.commune,
            icon: "map-marker-alt"
        },
        {
            title: "Địa chỉ nơi ở",
            subtitle: props.userInfo.address.details,
            icon: "map-marker-alt"
        }
    ]

    return (
        <ScrollView>
            {data.map((l, i) => (
                <ListItem key={i} style={styles.detailStyle} bottomDivider>
                    <Icon name={l.icon} type="font-awesome-5" color="#000000" />
                    <ListItem.Content>
                        <ListItem.Subtitle>{l.title}</ListItem.Subtitle>
                        <ListItem.Title>{l.subtitle}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            ))}
        </ScrollView>
    )
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.appState.user
    }
}

export default connect(mapStateToProps)(DetailCalendar)