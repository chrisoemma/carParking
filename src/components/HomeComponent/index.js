import React, {useState, useCallback, useMemo, useRef, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Button,
  Platform,
  Alert,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import colors from '../../assets/theme/colors';
import Icon from '../common/Icon';
import styles from './styles';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import {mapStyle} from '../common/mapStyles';
import Geolocation from 'react-native-geolocation-service';
import {request, PERMISSIONS} from 'react-native-permissions';
import {parkingInfo} from '../../context/data';

const HomeComponent = ({navigation}) => {
  const [position, setPosition] = useState({});

  const [markerContent, setMarkerContent] = useState(parkingInfo[0]);
  const bottomSheetModalRef = useRef(null);

  const _map = useRef(1);

  // variables
  const snapPoints = useMemo(() => ['25%', '97%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback(index => {}, []);

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        {...props}
      />
    ),
    [],
  );

  const locateCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      position => {
        let initialPosition = {
          latitude: parseFloat(position.coords.latitude),
          longitude: parseFloat(position.coords.longitude),
          latitudeDelta: 0.08,
          longitudeDelta: 0.08,
        };
        setPosition(initialPosition);
      },
      error => {
        // See error code charts below.
        Alert.alert(error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      if (response === 'granted') {
        locateCurrentPosition();
      }
    } else {
      var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      if (response === 'granted') {
        locateCurrentPosition();
        console.log('Android', response);
      }
    }
  };

  const onRegionChange = () => {
    setPosition(position);
  };

  const changeMakerContent = index => {
    let location = parkingInfo[index];

    setMarkerContent(location);
  };

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.mapDiv}>
          <MapView
            ref={_map}
            style={styles.map}
            customMapStyle={mapStyle}
            showsUserLocation={true}
            followsUserLocation={true}
            rotateEnabled={true}
            zoomEnabled={true}
            toolbarEnabled={true}
            onRegionChange={onRegionChange}>
            {parkingInfo.map((marker, index) => (
              <TouchableOpacity key={marker.name}>
                <Marker
                  onPress={() => changeMakerContent(index)}
                  coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                  }}>
                  <View style={styles.makerStyle}>
                    <View style={styles.carMarker}>
                      <Icon
                        type="fontAwesome5"
                        name="car-alt"
                        size={scale(22)}
                        color={colors.black}
                        style={{padding: scale(5)}}
                      />
                    </View>
                    <View>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          marginLeft: 5,
                          fontSize: scale(16),
                          color: colors.black,
                        }}>
                        ${marker.price}
                      </Text>
                    </View>
                  </View>
                </Marker>
              </TouchableOpacity>
            ))}
          </MapView>
        </View>

        <View style={styles.container}>
          <View style={styles.topNav}>
            <TouchableOpacity
              style={styles.nav}
              onPress={() => navigation.openDrawer()}>
              <Icon
                type="antiDesign"
                name="bars"
                size={scale(25)}
                color={colors.primary}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.carInfo}>
              <View style={styles.carTag}>
                <Icon
                  type="fontAwesome5"
                  name="car-alt"
                  size={scale(22)}
                  color={colors.white}
                  style={{padding: scale(5)}}
                />
              </View>
              <View>
                <Text>My car</Text>
                <Text style={{color: colors.primary, fontWeight: 'bold'}}>
                  ADS2345
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.parkingInfo}
            onPress={handlePresentModalPress}>
            <View style={styles.textInfo}>
              <Text style={styles.name}>{markerContent.name}</Text>
              <Text style={styles.street}>555 mwenge. Mjengoni </Text>
              <View style={styles.distancePrice}>
                <View style={styles.distance}>
                  <Icon
                    type="fontAwesome5"
                    name="car-alt"
                    size={scale(16)}
                    style={{padding: scale(5)}}
                  />
                  <Text
                    style={{
                      fontSize: scale(16),
                      marginTop: scale(3),
                      marginLeft: scale(5),
                    }}>
                    40
                  </Text>
                </View>
                <View style={styles.price}>
                  <Icon
                    type="fontAwesome"
                    name="money"
                    size={scale(16)}
                    style={{padding: scale(5)}}
                  />
                  <Text
                    style={{
                      fontSize: scale(16),
                      marginTop: scale(3),
                      marginLeft: scale(5),
                    }}>
                    ${markerContent.price}/h
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.imageInfo}>
              <Image
                source={require('../../assets/images/parking.jpg')}
                resizeMode="cover"
                style={{
                  width: scale(100),
                  height: scale(120),
                  borderRadius: scale(20),
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.searchContainer}>
          <Icon
            type="antiDesign"
            name="search1"
            size={scale(20)}
            color={colors.black}
            style={{marginLeft: scale(40)}}
          />
          <Text
            style={{
              fontSize: 17,
              color: colors.greyText,
            }}>
            Parking address
          </Text>

          <Icon
            type="antiDesign"
            name="left"
            size={scale(14)}
            color={colors.black}
            style={{marginLeft: scale(40), marginRight: scale(10)}}
          />
        </TouchableOpacity>
      </View>

      <BottomSheetModalProvider>
        <View
          style={{
            flex: 1,
          }}>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            enablePanDownToClose={true}
            backdropComponent={renderBackdrop}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.sheetContainer}>
                <View style={styles.specificMap}>
                  <MapView
                    style={styles.parkingSpotMap}
                    // region={{
                    //   latitude: 37.78825,
                    //   longitude: -122.4324,
                    //   latitudeDelta: 0.015,
                    //   longitudeDelta: 0.0121,
                    // }}
                    showsUserLocation={true}
                    followsUserLocation={true}
                    customMapStyle={mapStyle}
                  />
                </View>
                <View style={styles.areaInfo}>
                  <Text style={styles.areaName}>JINGID Plaza Mall</Text>
                  <Text style={styles.streetText}>Morroco,namanga</Text>
                  <View style={styles.distancePriceHour}>
                    <View style={styles.distance}>
                      <Icon
                        type="fontAwesome5"
                        name="car-alt"
                        size={scale(16)}
                        style={{padding: scale(5)}}
                      />
                      <Text
                        style={{
                          fontSize: scale(16),
                          marginTop: scale(3),
                          marginLeft: scale(5),
                        }}>
                        40
                      </Text>
                    </View>
                    <View style={styles.price}>
                      <Icon
                        type="fontAwesome"
                        name="money"
                        size={scale(16)}
                        style={{padding: scale(5)}}
                      />
                      <Text
                        style={{
                          fontSize: scale(16),
                          marginTop: scale(3),
                          marginLeft: scale(5),
                        }}>
                        Tsh 6/h
                      </Text>
                    </View>
                  </View>
                  <View style={styles.spaceTime}>
                    <TouchableOpacity style={styles.commonTimeSpace}>
                      <View style={styles.iconDiv}>
                        <Icon
                          type="materialCommunityIcons"
                          name="car-parking-lights"
                          size={scale(16)}
                          color={colors.white}
                        />
                      </View>
                      <Text style={styles.middleText}>B1</Text>
                      <Text>Parking space</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.commonTimeSpace}>
                      <View style={styles.iconDiv}>
                        <Icon
                          type="ionicons"
                          name="time-outline"
                          size={scale(16)}
                          color={colors.white}
                        />
                      </View>
                      <Text style={styles.middleText}>2h 30min</Text>
                      <Text>Time</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.bottomDiv}>
                    <View>
                      <Text style={styles.priceText}>Tsh 20,000.00</Text>
                    </View>
                    <TouchableOpacity style={styles.payBtn}>
                      <Text style={styles.payText}>Pay</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </>
  );
};

export default HomeComponent;
