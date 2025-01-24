import React from 'react';

interface FontAwesomeIconProps {
    icon: string;
    title?: string;
}

const FontAwesomeIcon: React.FC<FontAwesomeIconProps> = ({ icon, title }) => {
    return (
        <span>
            <i className={`${icon}`}></i>
            {title}
        </span>
    );
};

export default FontAwesomeIcon;
