import React, {useRef, useEffect, useState} from 'react';
import {
  Animated, 
  Easing,
  View, 
  ScrollView, 
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import Carousel from 'react-native-snap-carousel';
import IonIcon from 'react-native-vector-icons/Ionicons';

import {SvgCss, SvgCssUri} from 'react-native-svg';
import Header from 'components/Header';
import ModalSearch from 'components/ModalSearch';
import InputIcon from 'components/InputIcon';

import styles from './homeScreen.styles';
import colors from '../../themes/colors';

import office from '../../Assets/svg/office';
import unitApartemen from '../../Assets/svg/unitApartemen';
import entrust from '../../Assets/svg/entrust';
import house from '../../Assets/svg/house';

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

const InfoData = [
  {
    title: 'Ribuan Listings Terverifikasi',
    content: 'Pencarian properti lebih cepat dan mudah',
    img: 'https://res.cloudinary.com/dpqdlkgsz/image/upload/homepage/exp-service-3.svg'
  },
  {
    title: 'Pengetahuan Properti Terbaik',
    content: 'Agen kami terpilih berkat pengalaman dan pengetahuan yang luas',
    img: 'https://res.cloudinary.com/dpqdlkgsz/image/upload/homepage/exp-service-2.svg'
  },
  {
    title: 'Transparan & Terpercaya',
    content: 'Komitmen untuk memberikan layanan yang jujur dan transparan',
    img: 'https://res.cloudinary.com/dpqdlkgsz/image/upload/homepage/exp-service-5.svg'
  }
]

const bannerData = [
  {
    imgLink: 'https://res.cloudinary.com/dpqdlkgsz/image/upload/t_alohomora/v1/homepage/carousel/mcarousel1.jpg'
  },
  {
    imgLink: 'https://res.cloudinary.com/dpqdlkgsz/image/upload/t_alohomora/v1/homepage/carousel/mcarousel2.jpg'
  },
  {
    imgLink: 'https://res.cloudinary.com/dpqdlkgsz/image/upload/t_alohomora/v1/homepage/carousel/mcarousel3.jpg'
  },
  {
    imgLink: 'https://res.cloudinary.com/dpqdlkgsz/image/upload/t_alohomora/v1/homepage/carousel/mcarousel4.jpg'
  },
  {
    imgLink: 'https://res.cloudinary.com/dpqdlkgsz/image/upload/t_alohomora/v1/homepage/carousel/mcarousel5.jpg'
  }
]

const capitalCity = [
  {
    title: 'Jakarta Utara',
    imgLink: 'https://res.cloudinary.com/dpqdlkgsz/image/upload/t_alohomora/v1/Periurus%20Memoria/area/thumbnail/jakarta_barat.png'
  },
  {
    title: 'Jakarta Utara',
    imgLink: 'https://res.cloudinary.com/dpqdlkgsz/image/upload/t_alohomora/v1/Periurus%20Memoria/area/thumbnail/jakarta_barat.png'
  },
  {
    title: 'Jakarta Utara',
    imgLink: 'https://res.cloudinary.com/dpqdlkgsz/image/upload/t_alohomora/v1/Periurus%20Memoria/area/thumbnail/jakarta_barat.png'
  },
  {
    title: 'Jakarta Utara',
    imgLink: 'https://res.cloudinary.com/dpqdlkgsz/image/upload/t_alohomora/v1/Periurus%20Memoria/area/thumbnail/jakarta_barat.png'
  },
  {
    title: 'Jakarta Utara',
    imgLink: 'https://res.cloudinary.com/dpqdlkgsz/image/upload/t_alohomora/v1/Periurus%20Memoria/area/thumbnail/jakarta_barat.png'
  },
]
const categoryList = ["Apartmen", "Rumah", "Kantor"];

function HomeScreen({navigation}) {
  const [isOn, setIsOn] = useState(false)
  const [category, setCategory] = useState(null)
  const [search, setSearch] = useState('')
  const [modalSearch, setModalSearch] = useState(false)
  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0))
  const carousel = useRef()
  const banner = useRef()
 
  const knobOffset = 50

  const info = ({item, index}) => {
    return (
      <View style={styles.infoSlide}>
        <SvgCssUri
          width={50}
          height={50}
          uri={item.img}
        />
        <Text style={styles.infoTitle}>{ item.title }</Text>
        <Text style={styles.infoContent}>{ item.content }</Text>
      </View>
    );
  }

  const bannerCard = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => console.log("banner pressed")}
      >
        <Image
          style={styles.bannerCard}
          source={{uri: item.imgLink}}
        />
      </TouchableOpacity>
    );
  }

  const cityCard = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => console.log("city pressed")}
      >
        <ImageBackground
          style={styles.cityCard}
          imageStyle={{borderRadius:10}}
          source={{uri: item.imgLink}}
        >
        <Text style={styles.textCity}>
          {item.title}
        </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }


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
        onPressSearch={() => setModalSearch(!modalSearch)}
        onPressDrawer={() => navigation.toggleDrawer()}
        isSearch={modalSearch}
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
                  style={styles.contentToggle}
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
              <TouchableOpacity
                style={styles.menu}
                onPress={() => navigation.navigate('Menu')}
              >
                <SvgCss xml={item.icon} width={40} height={40} />
                <Text style={styles.textMenu}>{item.title}</Text>
              </TouchableOpacity>
            )
          })
        }
        </View>
        <View
          style={styles.sectionInfo}
        >
          <Text style={styles.sectionInfoTitle}>Agen properti terpercaya berbasis teknologi</Text>
          <Carousel
            ref={carousel}
            data={InfoData}
            renderItem={info}
            sliderWidth={styles.sliderWidth}
            itemWidth={styles.itemWidth}
          />
        </View>
        <View
          style={styles.sectionBanner}
        >
          <Carousel
            ref={banner}
            data={bannerData}
            renderItem={bannerCard}
            sliderWidth={styles.sliderWidth}
            itemWidth={styles.itemWidth * 0.8}
          />
        </View>
        <View
          style={styles.sectionCity}
        >
          <Text style={styles.sectionTitleCity}>Telusuri</Text>
          <Carousel
            ref={banner}
            data={capitalCity}
            slideStyle={{margin:10}}
            renderItem={cityCard}
            sliderWidth={styles.sliderWidth}
            itemWidth={200}
            layout='default'
            activeSlideAlignment='start'
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
          />
        </View>
      </ScrollView>
      <ModalSearch
        visible={modalSearch}
        setVisible={() => setModalSearch(!modalSearch)}
        categoryList={categoryList}
        valueSearch={search}
        onChangeSearch={(value) => setSearch(value)}
        category={category}
        onChangeCategory={(value)=> setCategory(value)}
      />
    </View>
  );
}

export default HomeScreen;
