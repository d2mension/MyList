import React, { useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import * as Location from 'expo-location';
import MapButton from './components/Button';
import Navigation from './components/Navigation';
import { styles } from './styles/appStyle';
import PharmacyList from './components/PharmacyList';
import MedicineList from './components/MedicineList';


const App = () => {
  const [viewMode, setViewMode] = useState('pharmacy'); // 누르는 버튼에 따라 값을 다르게 하여 다른 컴포넌트 호출
  const [isGranted, setIsgranted] = useState(false); 

  useEffect(() => {
    const requestGrant = async () => {
      // 사용자 위치 정보 허용
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        setIsgranted(false);
        return;
      }
      setIsgranted(true);
    };
  
    requestGrant(); 
  }, []); 
  
      
  return (
    <View style={styles.container} >
      <StatusBar />
      <View style={styles.buttonContainer}>
        <MapButton title="약국 보기" onPress={() => setViewMode('pharmacy')} />
        <MapButton title="약 목록 보기" onPress={() => setViewMode('medecine')} />
      </View>
        {viewMode === 'pharmacy' ? <PharmacyList /> : <MedicineList />}
      <Navigation />
    </View>
  );
};



export default App;