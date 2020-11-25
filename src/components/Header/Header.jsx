import React from 'react';
import { 
  View, 
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import {SvgCss, SvgCssUri} from 'react-native-svg';
import searchIcon from '../../Assets/svg/searchIcon';
import barIcon from '../../Assets/svg/barIcon';
import close from '../../Assets/svg/close';
import arrowIcon from '../../Assets/svg/arrowIcon';
 
const HeaderPage = ({
  onPressLeft,
  onPressSearch,
  onPressDrawer,
  goBack,
  canGoBack,
  isSearch
}) => {
  return (
    <View
        transparent
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          minHeight: 50,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 1,
          borderBottomWidth: 1,
          borderBottomColor: '#E2E2E2'
        }} 
      >
          <View
            style={{justifyContent: 'center', padding: 5, zIndex:1}}
          >
          {
            canGoBack ? 
            <View
              style={{
                flex:1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
                paddingRight: 25
              }}
            >
            <TouchableOpacity
              onPress={goBack}
            >
              <SvgCss xml={arrowIcon} width={30} height={30} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPressLeft}
            >
              <SvgCssUri
                width={150}
                height={30}
                uri="https://res.cloudinary.com/dpqdlkgsz/image/upload/t_aparecium_minima/v1/Periurus%20Memoria/icon/spacestock.svg"
              />
            </TouchableOpacity>
            </View>
            :
            <SvgCssUri
              width={150}
              height={30}
              uri="https://res.cloudinary.com/dpqdlkgsz/image/upload/t_aparecium_minima/v1/Periurus%20Memoria/icon/spacestock.svg"
            />
          }
          </View>
          <View
            style={{
              flex:1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              padding: 10,
              paddingRight: 25
            }}
          > 
            <TouchableOpacity
              style={{
                paddingRight: 15
              }}
              onPress={onPressSearch}
            >
              {
                isSearch ?
                <SvgCss xml={close} width={30} height={30} />   
                :
                <SvgCss xml={searchIcon} width={30} height={30} />   
              }
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPressDrawer}
            >
              {
                isSearch ?
                <View/>
                :
                <SvgCss xml={barIcon} width={30} height={30} />
              }
            </TouchableOpacity>
          </View>
      </View>
  );
};

export default HeaderPage;