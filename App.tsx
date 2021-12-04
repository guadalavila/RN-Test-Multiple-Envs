import Config from 'react-native-config';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

function App() {
  useEffect(() => {
    console.log(Config.ENVIRONMENT);
  }, []);
  return (
    <View>
      <Text>Hola Mundo</Text>
      <Text>{Config.ENVIRONMENT}</Text>
      <Text>{Config.PACKAGE_APP}</Text>
    </View>
  );
}

export default App;
