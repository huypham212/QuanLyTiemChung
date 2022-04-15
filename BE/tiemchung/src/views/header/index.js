import React from 'react';
import { Button } from '../../components';
import './styles.css';

const AppHeader = () => {
    return (
        <header id="app-header">
            <div className='container'>
                <div className='left-container'>
                    <a href='/'>
                        <span>Hệ thống quản lý tiêm chủng</span>
                    </a>
                </div>
                <div className='right-container'>
                    <nav className='menu'>
                        <ul>
                            <li>
                                <a href="/">Trang chủ</a>
                            </li>
                            <li className='dropdown'>
                                <button className="dropbtn">Tra cứu <i className="fas fa-angle-down"></i></button>
                                <div className="dropdown-content">
                                    <a href="/">Tra cứu thông tin người tiêm</a>
                                    <a href="/">Tra cứu địa điểm tiêm</a>
                                </div>
                            </li>
                            <li>
                                <a href="/">Tài liệu</a>
                            </li>
                            <hr className='solid divider' />
                            <li>
                                <Button className="button" style={{
                                    backgroundColor: '#fff',
                                    fontFamily: 'SFProDisplay-Regular',
                                    margin: '0px -15px 5px 30px'
                                }}>Đăng nhập</Button>
                            </li>
                            <li>
                                <a href='/'>Đăng ký</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header >
    )
}

export default AppHeader