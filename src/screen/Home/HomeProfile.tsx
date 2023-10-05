import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../constants/Colors';
import {AllImages} from '../../constants/Images';

const HomeProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHeader}>
        <Image source={AllImages.leftProfileIcon} style={styles.topCardIcon} />
        <Text style={styles.screenText}>Profile</Text>
        <TouchableOpacity onPress={() => {}} activeOpacity={0.6}>
          <Image source={AllImages.notification} style={styles.topCardIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.profileCardContainer}>
        <Image source={AllImages.profileIcon} style={styles.profileIconStyle} />
        <Text style={styles.screenText}>Jina Simons</Text>
        <Text style={styles.textStyle}>6000 Pts</Text>
      </View>

      <Text style={styles.textStyle}>
        I’m a software developer that has been in the crypto space since 2012.
        And I’ve seen it grow and falter over a period of time. Really happy to
        be here!
      </Text>

      <TouchableOpacity
        onPress={() => {}}
        activeOpacity={0.6}
        style={styles.logoutContainer}>
        <Image source={AllImages.logout} style={styles.icon} />
        <Text style={styles.textStyle}>Logout</Text>
      </TouchableOpacity>

      <View style={styles.bottomCard}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 12,
          }}>
          <View style={{flex: 0.8}}>
            <Text style={styles.bottomCardText}>Under or Over</Text>
            <View style={styles.bottomPercentContainer}>
              <Image source={AllImages.greenUp} style={styles.icon} />
              <Text style={styles.percentText}>81%</Text>
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.bottomCardText}>Top 5</Text>
            <View style={styles.bottomPercentContainer}>
              <Image source={AllImages.redDown} style={styles.icon} />
              <Text style={styles.percentText}>-51%</Text>
            </View>
          </View>
        </View>
        <Image
          source={AllImages.star}
          style={{
            position: 'absolute',
            top: -18,
            left: '50%',
            height: 30,
            width: 30,
            resizeMode: 'contain',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  profileCardContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15,
  },
  topCardIcon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  icon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    marginRight: 12,
  },
  profileIconStyle: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
  screenText: {
    fontSize: 20,
    color: Colors.primaryText,
  },
  textStyle: {
    fontSize: 15,
    color: Colors.grayText,
    fontWeight: '400',
  },
  bottomCardText: {
    fontSize: 16,
    color: Colors.grayText,
    fontWeight: '600',
  },
  percentText: {
    fontSize: 20,
    color: Colors.primaryText,
    fontWeight: '800',
  },
  logoutContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 25,
  },
  bottomCard: {
    borderWidth: 0.3,
    borderColor: Colors.grayText,
    height: 'auto',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  bottomPercentContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
});
