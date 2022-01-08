import React from 'react';
import {View} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {
  Title,
  Avatar,
  Paragraph,
  useTheme,
  Drawer,
  Switch,
  TouchableRipple,
  Text,
  Caption,
} from 'react-native-paper';
import {ScaledSheet} from 'react-native-size-matters';
import Icon from '../components/common/Icon';

export const DrawerContent = props => {
  const paperTheme = useTheme();
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>John Doe</Title>
                <Caption style={styles.caption}>@j_doe</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="home-outline"
                  color={color}
                  size={size}
                  type="materialCommunityIcons"
                />
              )}
              label="Home"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="account-outline"
                  color={color}
                  size={size}
                  type="materialCommunityIcons"
                />
              )}
              label="Profile"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="car-brake-parking"
                  color={color}
                  size={size}
                  type="materialCommunityIcons"
                />
              )}
              label="Active Parking"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="history"
                  color={color}
                  size={size}
                  type="materialCommunityIcons"
                />
              )}
              label="History"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="rate-review"
                  color={color}
                  size={size}
                  type="materialIcons"
                />
              )}
              label="Ratings & Reviews"
              onPress={() => {}}
            />

            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="settings-outline"
                  color={color}
                  size={size}
                  type="ionicons"
                />
              )}
              label="Settings"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="account-check-outline"
                  color={color}
                  size={size}
                  type="materialCommunityIcons"
                />
              )}
              label="Support"
              onPress={() => {}}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple onPress={() => {}}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon
              name="exit-to-app"
              color={color}
              size={size}
              type="materialCommunityIcons"
            />
          )}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = ScaledSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
