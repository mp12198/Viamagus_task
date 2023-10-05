import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {AllImages} from '../../../constants/Images';
import {Colors} from '../../../constants/Colors';

interface props {
  startTime: string;
  priceDescription: string;
}

const TopCard = (props: props) => {
  const {startTime, priceDescription} = props;
  return (
    <View style={styles.topCardContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.topTextContainer}>
          <Text style={styles.topCardText}>UNDER OR OVER</Text>
          <Image source={AllImages.iIcon} style={styles.topCardIcon} />
        </View>

        <View style={styles.topTextContainerEnd}>
          <Text style={styles.topCardText}>Starting in</Text>
          <Image source={AllImages.clock} style={styles.topCardIcon} />
          <Text style={[styles.topCardText, {marginLeft: 10}]}>
            {startTime}
          </Text>
        </View>
      </View>

      <View style={{marginTop: 12}}>
        <Text style={styles.topCardText}>Bitcoin price will be under</Text>
        <Text style={[styles.topCardText, {color: Colors.white}]}>
          {priceDescription}
        </Text>
      </View>

      <View style={styles.bitcoinImgContainer}>
        <Image
          source={AllImages.bitcoin}
          style={{height: 45, width: 140, resizeMode: 'contain'}}
        />
      </View>
    </View>
  );
};

export default TopCard;

const styles = StyleSheet.create({
  topCardContainer: {
    height: 'auto',
    width: '100%',
    backgroundColor: Colors.lightPurple,
    padding: 12,
  },
  topTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  topTextContainerEnd: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  topCardText: {
    fontSize: 14,
    color: Colors.purpleText,
  },
  topCardIcon: {
    height: 14,
    width: 14,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  bitcoinImgContainer: {position: 'absolute', bottom: 0, right: 0, zIndex: -1},
});
