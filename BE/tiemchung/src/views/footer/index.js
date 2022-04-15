import React from 'react';
import './styles.css';

const AppFooter = () => {
    return (
        <footer id='app-footer'>
            <div className='container'>
                <div className='left-container'>
                    <h2>Hệ thống quản lý tiêm chủng</h2>
                    <div>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Logo_TSQTT.png/62px-Logo_TSQTT.png' alt='school-logo' />
                    </div>
                </div>
                <div className='right-container'>
                    <p>&copy; Copyright</p>
                </div>
            </div>
        </footer>
    )
}

export default AppFooter