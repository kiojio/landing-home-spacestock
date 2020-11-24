import React, {useEffect, useState} from 'react';
import {
  Animated, 
  Easing,
  View, 
  ScrollView, 
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {SvgCss} from 'react-native-svg';
import Header from 'components/Header';
import InputIcon from 'components/InputIcon';

import styles from './homeScreen.styles';
import colors from '../../themes/colors';

import office from '../../Assets/svg/office';
import unitApartemen from '../../Assets/svg/unitApartemen';
import entrust from '../../Assets/svg/entrust';
import house from '../../Assets/svg/house';

function HomeScreen() {
  const [category, setCategory] = useState(null)
  const [isOn, setIsOn] = useState(false)
  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0))
  const [search, setSearch] = useState('')
  const categoryList = ["Apartmen", "Rumah", "Kantor"];
  const menu = [
    {
      title: 'Unit Apartemen',
      icon: unitApartemen
    },
    {
      title: 'Rumah',
      icon: house
    },
    {
      title: 'Kantor',
      icon: office
    },
    {
      title: 'Titip Jual/Sewa',
      icon: entrust
    }
  ]
  const knobOffset = 50


  const toggleHandle = () => {
    setIsOn(!isOn);
  }

  useEffect(() => {
    Animated.timing(
      animatedValue,
      { 
        toValue: isOn ? knobOffset : 0,
        easing: Easing.elastic(0.7),
        duration: 100,
        useNativeDriver: true
      }
    ).start()
  }, [isOn])

  return (
    <View style={styles.screen}>
      <Header
        onPressLeft={() => {console.log("test left")}}
        onPressSearch={() => {console.log("test search")}}
        onPressDrawer={() => {console.log("test drawer")}}
      />
      <ScrollView>
        <View
          style={styles.banner}
        >
          <ImageBackground
            style={styles.bannerImage}
            source={{uri:'https://res.cloudinary.com/dpqdlkgsz/image/upload/v1/homepage/hero.png'}}
          >
            <Text style={styles.textBanner}>Properti{"\n"}di Ujung Jari</Text>
          </ImageBackground>
        </View>
        <View
          style={styles.searchSection}
        >
          {/* search category */}
          <View
            style={styles.searchCategory}
          >
            <View
              style={styles.firstCategory}
            >
              <Text>Cari</Text>
              <View
                style={styles.dropdown}
              >
                <Picker
                  mode="dropdown"
                  selectedValue={category}
                  onValueChange={(value) => {setCategory(value)}}
                >
                  {
                    categoryList.map((item, index) => {
                      return(
                        <Picker.Item
                          label={item}
                          value={item}
                          index={index}
                        />
                      )
                    })
                  }
                </Picker>
              </View>
            </View>
            {/* type category */}
            <View
              style={styles.secondCategory}
            >
              <Text>Saya Ingin</Text>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.toggleBtn}
                onPress={() => toggleHandle()}
              >
                <Animated.View style={[
                  styles.slide,
                  {
                  transform: [{
                    translateX: animatedValue,
                  }]
                  }
                ]}>
                </Animated.View>
                <View
                  style={{
                    position: 'relative',
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    paddingHorizontal:5,
                    top: -33,
                    zIndex: 10
                  }}
                >
                  <Text style={[styles.textSlide, isOn ? {color:colors.black} : {color:colors.white, paddingLeft:5}]}>Sewa</Text>
                  <Text style={[styles.textSlide, isOn ? {color:colors.white, paddingRight:10} : {color:colors.black}]}>Beli</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.searchLocation}>
          <Text style={styles.textSearchLocation}>Cari Lokasi</Text>
          <InputIcon
            title=""
            leftIcon="search"
            placeholder="Ketik lokasi atau nama gedung"
            value={search}
            onChange={value => setSearch(value)}
          />
        </View>
        <View style={styles.menuList}>
        {
          menu.map((item, index) => {
            return(
              <View
                style={styles.menu}
              >
                <SvgCss xml={item.icon} width={30} height={30} />
                <Text>{item.title}</Text>
              </View>
            )
          })
        }
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
