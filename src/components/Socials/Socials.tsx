'use client';
import React from "react";
import FontAwesomeIcon from "@/components/FontAwesomeIcon/FontAwesomeIcon";
import {Social} from "@/types/Social";

interface SocialProps {
    socials: Social[];
}

const Socials: React.FC<SocialProps> = ({ socials }) => {
    return (
        <>
            {socials.map((social, index) => (
                <a key={index} href={social.link} target="_blank">
                    <FontAwesomeIcon icon={social.icon}/>
                </a>
            ))}
        </>
    )
};

export default Socials;
