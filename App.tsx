import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {
  notificationOpenedApp,
  notificationRequestUserPermission,
} from './src/notification/firebase';

function App(): React.JSX.Element {
  useEffect(() => {
    notificationRequestUserPermission();
    console.log(notificationOpenedApp());
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'white'}}>Teste</Text>
    </View>
  );
}

export default App;
