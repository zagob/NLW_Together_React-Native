import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import {
    ScrollView
} from 'react-native';

import { styles } from './styles';
import { categories } from '../../utils/categories';

import { Category } from '../Category';

type Props = {
    categorySelected: string;
}

export function CategorySelect({ categorySelected }: Props) {
    return (
        <ScrollView
            style={styles.container}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {
                categories.map(category => (
                    <Category
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked={category.id === categorySelected}
                    />
                ))
            }
        </ScrollView>
    )
}