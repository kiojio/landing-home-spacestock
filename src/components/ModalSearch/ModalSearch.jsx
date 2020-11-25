import React from 'react';
import {StyleSheet, Modal, Dimensions} from 'react-native';
import Header from 'components/Header';
import { 
  View, 
  Text,
} from 'react-native';
import colors from '../../themes/colors';
import {Picker} from '@react-native-community/picker';
import InputIcon from 'components/InputIcon';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  modalSearch:{
    flex:1,
    width: width,
    borderWidth: 0,
  },
  modalHeader:{
    backgroundColor: colors.white
  },  
  modalSearchCat:{
    padding: 20,
    backgroundColor: colors.white
  },
  modalSearchLoc:{
    height: 70,
    backgroundColor: colors.white,
    marginBottom: 20
  },
  modalTitleSearchLoc:{
    paddingLeft: 20
  },
  dropdown:{
    borderWidth:1,
    borderRadius: 10
  }
})
 
const ModalSearch = ({
  valueSearch,
  onChangeSearch,
  category,
  onChangeCategory,
  categoryList,
  visible,
  setVisible
}) => {
  return (
    <Modal 
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <View style={styles.modalSearch}>
        <View
          style={styles.modalHeader}
        >
          <Header
            onPressSearch={setVisible}
            isSearch={visible}
          />
        </View>
        <View
            style={styles.modalSearchCat}
          >
          <Text>Cari</Text>
          <View
            style={styles.dropdown}
          >
            <Picker
              mode="dropdown"
              selectedValue={category}
              onValueChange={onChangeCategory}
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
        <View style={styles.modalSearchLoc}>
          <Text style={styles.modalTitleSearchLoc}>Lokasi Pencarian</Text>
          <InputIcon
            title=""
            leftIcon="search"
            placeholder="Ketik lokasi atau nama gedung"
            value={valueSearch}
            onChange={onChangeSearch}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalSearch;