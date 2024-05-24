// 즐겨찾기 약국 리스트 출력

import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { listStyles } from '../styles/listStyle';

const MedicineList = () => {
    const [favorites, setFavorites] = useState<Record<string, boolean>>({});

    // 즐겨찾기 데이터 로딩
    useEffect(() => {
        loadFavorites();
    }, []);

    const loadFavorites = async () => {
        const favs = await AsyncStorage.getItem('favorite_pharmacy');
        setFavorites(favs ? JSON.parse(favs) : {});
    };

    return (
        <View style={listStyles.container}>
            <Text>약 정보 출력 화면입니다.</Text>
        </View>
    );
};

export default MedicineList;
