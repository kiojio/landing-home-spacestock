import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import colors from '../../themes/colors';
import {SvgCssUri} from 'react-native-svg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
});

function SplashScreen() {
  return (
    <View style={styles.container}>
      <SvgCssUri
        width={250}
        height={100}
        uri="https://res.cloudinary.com/dpqdlkgsz/image/upload/t_aparecium_minima/v1/Periurus%20Memoria/icon/spacestock.svg"
      />
      <ActivityIndicator />
    </View>
  );
}

export default SplashScreen;
