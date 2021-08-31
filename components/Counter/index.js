import React, {
  useState,
} from 'react';

import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

function Counter() {
  console.info('running Counter');
  const [count, setCount] = useState(0);

  function onPress(sig) {
    console.info('Clicked');
    if (sig > 0) {
      return setCount(count + 1);
    }
    setCount(count - 1);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
         style={styles.button}
         onPress={() => onPress(1)}
       >
         <Text>Sumar 1</Text>
       </TouchableOpacity>

      <Text>{count}</Text>
        <TouchableOpacity
           style={styles.button}
           onPress={() => onPress(-1)}
         >
           <Text>Restar 1</Text>
         </TouchableOpacity>
    </View>
  );
}

export default Counter;
