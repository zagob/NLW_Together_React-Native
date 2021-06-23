import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
    const uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ETDrb4IpEsEo4UVMYGMTsiAtdJzFGNxKcw&usqp=CAU'
    return (
        <Image
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />
    )
}