import React from 'react';

import {
  Text,
  View,
} from 'react-native';

import styles from './styles';

function Header() {
    return (
        <View style={styles.container}>
          <Text>Header de la app</Text>
        </View>
    );
}


export default Header;
