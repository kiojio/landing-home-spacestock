import React from 'react';
import {StyleSheet, Modal, Dimensions} from 'react-native';
import Header from 'components/Header';
import { 
  View, 
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native';
import colors from '../../themes/colors';
import HeaderCustom from 'components/HeaderCustom';
import close from '../../Assets/svg/close';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  modalFilter:{
    flex:1,
    width: width,
    borderWidth: 0,
  },
  modalHeader:{
    backgroundColor: colors.white
  },  
  filterSection:{
    flex:1,
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20
  },
  filterContent:{
    flex: 1,
    flexDirection: "row",
    flexWrap:"wrap"
  },
  btnFilter:{
    flex:1,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    margin: 5
  },
  btnSubmit:{
    alignItems: "center",
    backgroundColor: colors.appColor,
    borderRadius: 10,
    padding: 10,
    margin: 20
  },
  textSubmit: {
    color: colors.white
  }
})
 
const ModalFilter = ({
  chosen,
  filterList,
  filterPress,
  resetPress,
  visible,
  setVisible
}) => {
  return (
    <Modal 
      animationType="slide"
      transparent={false}
      visible={visible}
    >
      <View style={styles.modalFilter}>
        <View
          style={styles.modalHeader}
        >
          <HeaderCustom
            onPressLeft={setVisible}
            onPressRight={resetPress}
            leftIcon={close}
            title="Unit Filter"
            rightText="Reset"
          />
        </View>
        <ScrollView>
          <FlatList
            extraData={chosen}
            data={filterList}
            renderItem={({item}) => {
              return(
                <View
                style={styles.filterSection}
                >
                  <Text>{item.title}</Text>
                  <View style={styles.filterContent}>
                    <FlatList
                      style={styles.filterContent}
                      data={item.value}
                      renderItem={({item}) => {
                        return(
                          <TouchableOpacity
                            style={[styles.btnFilter, chosen.includes(item) ? {borderColor: colors.appColor, backgroundColor: colors.appColor} : {}]}
                            onPress={() => filterPress(item)}
                          >
                            <Text>{item}</Text>
                          </TouchableOpacity>
                        )
                      }}
                    />
                  </View>
                </View>
              )
            }}
          />
          {/* {filterList.map((item, index) => {
            let value = item.value;
            return(
              <View
                style={styles.filterSection}
              >
                <Text>{item.title}</Text>
                <View style={styles.filterContent}>
                  {
                    value.map((item, index) => {
                      return(
                        <TouchableOpacity
                          style={[styles.btnFilter, chosen.includes(item) ? {borderColor: colors.appColor, backgroundColor: colors.appColor} : {}]}
                          onPress={() => filterPress(item)}
                        >
                          <Text>{item}</Text>
                        </TouchableOpacity>
                      )
                    })
                  }
                </View>
              </View>
            )
          })} */}
        </ScrollView>
        <TouchableOpacity
          style={styles.btnSubmit}
        >
          <Text style={styles.textSubmit}>Cari Listing</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalFilter;