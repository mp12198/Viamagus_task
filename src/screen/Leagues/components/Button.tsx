import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Colors} from '../../../constants/Colors';

interface btnProps {
  onPress?: any;
  title: string;
  icon: any;
  bgColor: string;
}

const Button = (props: btnProps) => {
  const {onPress, bgColor, title, icon} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[
        styles.button,
        {
          backgroundColor: bgColor,
        },
      ]}>
      <Image source={icon} style={styles.iconStyle} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    height: 40,
    borderRadius: 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: Colors.white,
  },
  iconStyle: {
    height: 12,
    width: 12,
    resizeMode: 'contain',
    marginRight: 10,
  },
});

export default Button;
