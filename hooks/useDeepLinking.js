import { useEffect } from 'react';
import * as Linking from 'expo-linking';

export default function useDeepLinking(navigationRef) {
  useEffect(() => {
    const getInitialURL = async () => {
      const url = await Linking.getInitialURL();
      if (url) {
        navigateToProfile(url);
      }
    };

    const handleDeepLinkEvent = (event) => {
      navigateToProfile(event.url);
    };

    Linking.addEventListener('url', handleDeepLinkEvent);
    getInitialURL();

    return () => {
      Linking.removeEventListener('url', handleDeepLinkEvent);
    };
  }, []);

  const navigateToProfile = (url) => {
    const match = url.match(/^meety:\/\/profile\/(.+)$/);
    if (match) {
      const userTag = match[1];
      if (navigationRef.current && navigationRef.current.isReady()) {
        navigationRef.current.navigate('Profile', { userTag });
      }
    }
  };

  const linking = {
    prefixes: [Linking.createURL('/')],
    config: {
      screens: {
        Profile: 'profile/:userTag',
      },
    },
  };

  return linking
}
