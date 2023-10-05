import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {AllImages} from '../../../constants/Images';

interface btnProps {
  poolPrize: string;
  under: string;
  over: string;
  fees: number;
}

const MidCard = (props: btnProps) => {
  const {poolPrize, under, over, fees} = props;

  return (
    <View style={styles.cardContainer}>
      <View>
        <Text style={styles.classificationTypeText}>PRIZE POOL</Text>
        <Text style={styles.classificationBottomText}>${poolPrize}</Text>
      </View>
      <View>
        <Text style={styles.classificationTypeText}>UNDER</Text>
        <Text style={styles.classificationBottomText}>{under}</Text>
      </View>
      <View>
        <Text style={styles.classificationTypeText}>OVER</Text>
        <Text style={styles.classificationBottomText}>{over}</Text>
      </View>
      <View>
        <Text style={styles.classificationTypeText}>ENTRY FEES</Text>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Text style={styles.classificationBottomText}>{fees}</Text>
          <Image source={AllImages.gold} style={styles.topCardIcon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  classificationTypeText: {
    fontSize: 14,
    color: Colors.grayText,
    fontWeight: '300',
  },
  classificationBottomText: {
    fontSize: 14,
    color: Colors.primaryText,
    fontWeight: '500',
  },
  topCardIcon: {
    height: 14,
    width: 14,
    resizeMode: 'contain',
    marginLeft: 10,
  },
});

export default MidCard;
