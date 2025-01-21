import React, { useEffect } from 'react';
import './Notification.scss'; 

const Notification = ({ message, show, onClose }) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000); // Hiển thị thông báo trong 3 giây
            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    if (!show) return null;

    return (
        <div className="notification">
            {message}
        </div>
    );
};

export default Notification;
