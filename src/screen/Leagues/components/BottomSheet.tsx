import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {Picker} from 'react-native-wheel-pick';
import {Colors} from '../../../constants/Colors';
import {AllImages} from '../../../constants/Images';
import {wheelPickerData} from '../../../constants/MockData';

const BottomSheet = () => {
  return (
    <View style={{height: 'auto', paddingHorizontal: 20}}>
      <Text style={styles.bottomText}>Your Prediction is Under</Text>
      <Text style={styles.ticketText}>ENTRY TICKET</Text>

      <Picker
        selectedValue="6"
        style={{backgroundColor: Colors.white, width: '100%', height: 200}}
        selectBackgroundColor={'rgba(238, 234, 243, 0.6)'}
        selectTextColor={Colors.primaryText}
        pickerData={wheelPickerData}
        onValueChange={(value: any) => {
          console.log(value);
        }}
      />

      <Text style={{color: Colors.primaryText}}>You can win</Text>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.dollarText}>$2000</Text>

        <View style={styles.totalCoinContainer}>
          <Text style={{color: Colors.primaryText}}>Total</Text>
          <Image source={AllImages.gold} style={styles.topCardIcon} />
          <Text style={{color: Colors.primaryText, marginLeft: 5}}>5</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {}}
        activeOpacity={0.8}
        style={styles.submitBtn}>
        <Text style={{color: Colors.white, fontSize: 16}}>
          Submit my prediction
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  bottomText: {
    fontSize: 18,
    color: Colors.grayText,
    fontWeight: '900',
  },
  topCardIcon: {
    height: 14,
    width: 14,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  ticketText: {
    color: Colors.grayText,
    fontSize: 14,
    fontWeight: '500',
    marginTop: 10,
  },
  submitBtn: {
    height: 'auto',
    padding: 10,
    marginTop: 15,
    borderRadius: 30,
    backgroundColor: Colors.lightPurple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dollarText: {color: Colors.green, fontWeight: '800', flex: 1},
  totalCoinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
});
