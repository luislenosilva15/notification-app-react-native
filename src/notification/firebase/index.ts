import {getMessaging} from '@react-native-firebase/messaging';
import {Alert, PermissionsAndroid} from 'react-native';

const notificationRequestUserPermission = async () => {
  await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
  );
};

const notificationOpenedApp = () => {
  const messaging = getMessaging();

  return messaging.onNotificationOpenedApp(remoteMessage => {
    Alert.alert('Notificação Clicada', JSON.stringify(remoteMessage, null, 2));
  });
};

export {notificationRequestUserPermission, notificationOpenedApp};
