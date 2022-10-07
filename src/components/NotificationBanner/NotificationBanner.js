import React from 'react'
import { useState } from 'react'
import { RiCloseCircleFill } from 'react-icons/ri'
import './NotificationBanner.css'


function NotificationBanner() {

    const [dismissed, setDismissed] = useState(false)

    function dismissNotification() {
        setDismissed(true)
    }

    return (
        <div className={dismissed ? 'notification-banner notification-dismissed' : 'notification-banner notification-active'}>
            <p className='notification-banner-text'><span>Warning: </span>To protect the privacy of users, this demo is trained on generated test data, and will not yield correct results.</p>
            <div className='notification-dismiss-button' onClick={dismissNotification}>
                <RiCloseCircleFill size={25} />
            </div>
        </div>
    )
}

export default NotificationBanner

