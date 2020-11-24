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
    backgroundColor: colors.bg,
    marginTop: 30,
    padding: 10,
    height:130,
    alignItems: "center",
  },
  menu:{
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    width: 86,
    height: 90,
    borderRadius: 10,
    padding: 8,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
  textMenu:{
    textAlign: 'center', 
    width:100
  },
  sectionInfo:{
    marginTop: 30,
  },
  sectionInfoTitle:{
    fontWeight:"bold",
    fontSize: 15,
    padding: 20,
    paddingBottom: 20,
  },  
  infoSlide:{
    alignItems: "center"
  },
  infoTitle:{
    paddingLeft: 30,
    alignSelf: "flex-start",
    fontWeight: "bold",
    width: width * 0.5
  },
  infoContent:{
    paddingLeft: 30,
    alignSelf: "flex-start",
    width: width * 0.8
  },
  sliderWidth: width,
  itemWidth: width,
  halfWidth: width/2,
  sectionBanner:{
    marginTop: 30,
  },
  bannerCard:{
    width: width * 0.8,
    height: 200,
    borderRadius: 10
  },
  sectionCity:{
    marginTop: 20,
  },
  sectionTitleCity:{
    padding:10,
    fontSize: 25,
    fontWeight:"bold"
  },
  cityCard:{
    width: 200,
    height: 300,
    borderRadius: 10
  },
  textCity: {
    position: 'absolute',
    fontSize: 24,
    alignSelf: "center",
    textAlign: "center",
    padding: 20,
    color: colors.white,
    fontWeight: 'bold',
    bottom: 0
  },
});
