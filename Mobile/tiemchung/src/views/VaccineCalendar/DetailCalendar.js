import React from 'react'
import { ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'
import { Text, Icon } from '../../components'
import styles from './styles'

const DetailCalendar = () => {

    const dataList = [
        {
            title: "Phạm Nguyễn Thanh Huy",
            subtitle: "Họ và tên người đăng ký",
            icon: "user-alt"
        },
        {
            title: "02/01/2000",
            subtitle: "Ngày tháng năm sinh",
            icon: "calendar-alt"
        },
        {
            title: "Giới tính",
            subtitle: "Nam",
            icon: "venus-mars"
        },
        {
            title: "CMND/CCCD/Hộ chiếu",
            subtitle: "123456789",
            icon: "id-card"
        },
        {
            title: "Tỉnh/Thành phố",
            subtitle: "Tỉnh Khánh Hòa",
            icon: "map-marker-alt"
        },
        {
            title: "Quận/Huyện",
            subtitle: "Thành phố Nha Trang",
            icon: "map-marker-alt"
        },
        {
            title: "Phường/Xã",
            subtitle: "Xã Vĩnh Thạnh",
            icon: "map-marker-alt"
        },
        {
            title: "Địa chỉ nơi ở",
            subtitle: "Tổ 2, thôn Phú Trung",
            icon: "map-marker-alt"
        }
    ]

    return (
        <ScrollView>
            {dataList.map((l, i) => (
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

export default DetailCalendar