import React, {useState} from 'react';
import { 
  View, 
  ScrollView, 
  Text,
  ImageBackground,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import Header from 'components/Header';

import styles from './homeScreen.styles';


function HomeScreen() {
  const [category, setCategory] = useState(null)
  const [categoryList] = useState(["Apartmen", "Rumah", "Kantor"])

  const itemCategory = () => {
    let items;
    for (let item of categoryList) {
      items.push(
        <Picker.Item label={item} value={item} />
      )
      console.log("dadadad")
    }
    return items;
  }

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
                  <Picker.Item
                    label={"Pilih Kategori"}
                  />
                  {
                    categoryList.map((item, index) => {
                      <Picker.Item
                        label={item}
                        value={item}
                        index={index}
                      />
                    })
                  }
                  {itemCategory}
                </Picker>
              </View>
            </View>
            <View
              style={styles.secondCategory}
            >
              <Text>Toggle</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
