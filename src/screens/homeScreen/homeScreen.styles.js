import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../themes/colors';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  textBanner: {
    fontSize: 24,
    alignSelf: "flex-end",
    textAlign: "right",
    padding: 20,
    paddingTop: 50
  },
  banner:{
    overflow : "hidden"
  },
  bannerImage:{
    width: width,
    height: 150,
    resizeMode: "cover"
  },
  searchSection:{
    padding: 20
  },
  searchCategory:{
    flex: 1,
    flexDirection: "row"
  },
  firstCategory:{
    flexGrow: 2
  },
  dropdown:{
    borderWidth:1,
    borderRadius: 10
  },
  secondCategory:{
    flexGrow: 1
  }
});
