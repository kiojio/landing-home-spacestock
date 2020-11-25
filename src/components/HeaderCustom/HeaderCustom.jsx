import React from 'react';
import { 
  View, 
  TouchableOpacity,
  Text
} from 'react-native';
import {SvgCss} from 'react-native-svg';
import colors from '../../themes/colors';
 
const HeaderPage = ({
  leftIcon,
  rightIcon,
  onPressLeft,
  onPressRight,
  rightText,
  title
}) => {
  return (
    <View
        transparent
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          minHeight: 50
        }} 
      >
          <TouchableOpacity
            style={{justifyContent: 'center', padding: 5, zIndex:1}}
            onPress={onPressLeft}
          >
            <SvgCss xml={leftIcon} width={30} height={30} />            
          </TouchableOpacity>
          <Text
            style={{
              width: '100%',
              justifyContent: 'center',
              alignSelf: 'center',
              textAlign: 'center',
              color: colors.black,
              marginLeft: 'auto',
              marginRight: 'auto',
              fontSize: 18
            }}
          >{title}</Text>
          <TouchableOpacity
            style={{justifyContent: 'center', padding: 5}}
            onPress={onPressRight}
          >
            {
              rightIcon ?
              <SvgCss xml={rightIcon} width={30} height={30} />
              :
              rightText ?
              <Text>{rightText}</Text>
              :
              <View/>
            }
          </TouchableOpacity>
      </View>
  );
};

export default HeaderPage;