import { StyleSheet } from 'react-native';
import colors from '../../themes/colors';

export default StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  text: {
    fontSize: 16,
  },
  sectionFilter:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    maxHeight: 80,
    backgroundColor: colors.bg
  },
  btnFilter: {
    flex: 1,
    backgroundColor: colors.appColor,
    borderRadius: 10,
    alignItems: "center",
    maxWidth: 80,
    height: 40
  },
  textFilter:{
    paddingVertical: 5,
    color: colors.white
  },
  filterDropdown:{
    flex: 1,
    flexDirection: "row",
    marginLeft: 30
  },
  dropdown:{
    borderWidth:1,
    borderRadius: 10,
    minWidth: 180,
  },
  textSort:{
    padding: 10,
    paddingVertical: 10
  },
  toggleBtn:{
    borderWidth: 2,
    borderColor: colors.appColor,
    width: 120,
    height: 52,
    borderRadius: 10,
    padding: 4,
  },
  contentToggle:{
    position: 'relative',
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal:5,
    top: 5,
    zIndex: 10
  },
});
