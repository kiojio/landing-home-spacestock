import React, {useRef, useEffect, useState} from 'react';
import { 
  Animated,
  Easing,
  View, 
  ScrollView, 
  Text,
  TouchableOpacity 
} from 'react-native';
import {Picker} from '@react-native-community/picker';

import Header from 'components/Header';
import ModalSearch from 'components/ModalSearch';
import ModalFilter from 'components/ModalFilter';
import styles from './menuScreen.styles';

const categoryList = ["Apartmen", "Rumah", "Kantor"];
const sortList = ["Rekomendasi", "Harga Terendah", "Harga Tertinggi"];
const FilterList = [
  {
    title: 'Tipe',
    value: ['Studio', '1BR', '2BR', '3BR', '4BR+']
  },
  {
    title: 'Kondisi',
    value: ['Unfurnised', 'Semi Furnised', 'Full Furnised']
  },
  {
    title: 'Zone',
    value: ['Low', 'Medium', 'High']
  },
  {
    title: 'Amenities',
    value:['Kitchen', 'Oven', 'Electric Stove', 'Drying Machine']
  },
  {
    title: 'View',
    value: ['Pool', 'City', 'Tower', 'Sea', 'Lake']
  }
]

function MenuScreen({navigation}) {
  const [isOn, setIsOn] = useState(false)
  const [modalSearch, setModalSearch] = useState(false)
  const [modalFilter, setModalFilter] = useState(false)
  const [chosenFilter, setChosenFilter] = useState([])
  const [category, setCategory] = useState(null)
  const [sort, setSort] = useState(null)
  const [search, setSearch] = useState('')
  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0))
  const knobOffset = 50

  const toggleHandle = () => {
    setIsOn(!isOn);
  }

  const chooseFilter = (value) => {
    let chosen = [...chosenFilter];
    let index = chosen.indexOf(value)
    if(index > -1){
      chosen.splice(index, 1)
    }else {
      chosen.push(value)
    }
    setChosenFilter(chosen)
    console.log("chse", chosen);
  }

  const resetFilter = (value) => {
    setChosenFilter([])
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
        goBack={() => navigation.goBack()}
        canGoBack={true}
        onPressLeft={() => {console.log("test left")}}
        onPressSearch={() => setModalSearch(!modalSearch)}
        onPressDrawer={() => navigation.toggleDrawer()}
        isSearch={modalSearch}
      />
      <View 
        style={styles.sectionFilter}
      >
        <TouchableOpacity
          onPress={() => setModalFilter(!modalFilter)}
          style={styles.btnFilter}
        >
          <Text style={styles.textFilter}>Filter</Text>
        </TouchableOpacity>
        <View
          style={styles.filterDropdown}
        >
          <Text style={styles.textSort}>Urutkan:</Text>
          <View
            style={styles.dropdown}
          >
            <Picker
              mode="dropdown"
              selectedValue={sort}
              onValueChange={(value) => {setSort(value)}}
            >
              {
                sortList.map((item, index) => {
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
      </View>
      <ScrollView>
        <Text style={styles.text}>Menu Screen</Text>
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
      <ModalFilter
        visible={modalFilter}
        setVisible={() => setModalFilter(!modalFilter)}
        filterList={FilterList}
        filterPress={chooseFilter}
        resetPress={resetFilter}
        chosen={chosenFilter}
      />
    </View>
  );
}

export default MenuScreen;
