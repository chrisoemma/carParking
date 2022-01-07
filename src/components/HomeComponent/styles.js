import {scale, ScaledSheet} from 'react-native-size-matters';
import colors from '../../assets/theme/colors';

export default ScaledSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    height: '100%',
  },

  mapDiv: {
    borderRadius: '20@s',
    ...ScaledSheet.absoluteFillObject,
    overflow: 'hidden',
  },
  map: {
    ...ScaledSheet.absoluteFillObject,
    height: '92%',
  },
  container: {
    margin: '20@s',
    position: 'absolute',
  },
  topNav: {
    marginVertical: '20@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nav: {
    width: '50@s',
    height: '50@s',
    borderRadius: '20@s',
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carInfo: {
    width: '110@s',
    height: '50@s',
    borderRadius: '20@s',
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8@s',
  },
  carTag: {
    backgroundColor: colors.primary,
    borderRadius: '10@s',
  },
  parkingInfo: {
    marginTop: '65%',
    padding: '15@s',
    height: '150@s',
    backgroundColor: colors.white,
    borderRadius: '30@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInfo: {
    width: '60%',
  },
  imageInfo: {
    marginLeft: '10@s',
  },
  name: {
    fontSize: '20@s',
    fontWeight: 'bold',
    color: colors.primary,
  },
  street: {
    fontSize: '15@s',
  },
  distancePrice: {
    flexDirection: 'row',
    marginTop: '45@s',
    justifyContent: 'space-between',
  },
  distance: {
    flexDirection: 'row',
  },
  price: {
    flexDirection: 'row',
  },

  searchContainer: {
    marginHorizontal: '20@s',
    flexDirection: 'row',
    marginTop: '-10@s',
    justifyContent: 'space-around',
  },
  sheetContainer: {
    flex: 1,
    margin: '10@s',
  },
  specificMap: {
    marginHorizontal: '10@s',
    height: '200@s',
    backgroundColor: colors.grey,
    borderRadius: '20@s',
    overflow: 'hidden',
  },
  parkingSpotMap: {
    ...ScaledSheet.absoluteFillObject,
    height: '100%',
  },
  areaInfo: {
    marginTop: '17@s',
    marginHorizontal: '10@s',
  },
  areaName: {
    fontSize: '17@s',
    color: colors.primary,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  streetText: {
    marginTop: '5@s',
    fontSize: '15@s',
    color: colors.greyText,
    alignSelf: 'center',
  },
  distancePriceHour: {
    marginTop: '8@s',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  spaceTime: {
    flexDirection: 'row',
    marginVertical: '10@s',
    justifyContent: 'space-evenly',
  },
  commonTimeSpace: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '120@s',
    width: '140@s',
    borderRadius: '10@s',
    shadowColor: '#565a61',
    elevation: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  iconDiv: {
    backgroundColor: colors.primary,
    width: '30@s',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: '5@s',
    marginTop: '20@s',
  },
  middleText: {
    marginVertical: '5@s',
    fontWeight: 'bold',
    fontSize: '20@s',
    color: colors.black,
  },
  bottomDiv: {
    margin: '10@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceText: {
    marginTop: '10@s',
    fontSize: '17@s',
    fontWeight: 'bold',
    color: colors.black,
  },
  payBtn: {
    width: '150@s',
    height: '45@s',
    borderRadius: '15@s',
    backgroundColor: colors.yellow,
    justifyContent: 'center',
    alignItems: 'center',
  },
  payText: {
    fontSize: '18@s',
    color: colors.black,
    fontWeight: 'bold',
  },
});
