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
    height: 'auto',
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
    flexGrow: 3
  },
  dropdown:{
    borderWidth:1,
    borderRadius: 10
  },
  secondCategory:{
    paddingLeft: 10,
  },
  toggleBtn:{
    borderWidth: 2,
    borderColor: colors.appColor,
    width: 120,
    height: 52,
    borderRadius: 10,
    padding: 4,
  },
  slide:{
    alignItems: "center",
    backgroundColor: colors.appColor,
    width: 60,
    height: 40,
    borderRadius: 10,
    zIndex: 1
  },
  textSlide:{
    fontSize: 15    
  },
  searchLocation:{
    flex:1
  },
  textSearchLocation:{
    paddingLeft: 20
  },
  menuList:{
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#ccc',
    marginTop: 30,
    padding: 20,
    height:130,
    alignItems: "center"
  },
  menu:{
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  }
});
