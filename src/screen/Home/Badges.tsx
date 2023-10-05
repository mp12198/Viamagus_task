import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import {Colors} from '../../constants/Colors';
import {AllImages} from '../../constants/Images';
import {badgeScreenMockData} from '../../constants/MockData';

const Badges = () => {
  const RenderItem = (props: {item: any; index: number}) => {
    const {item} = props;
    return (
      <View style={styles.itemContainer}>
        <View style={{flexDirection: 'row'}}>
          <Image source={AllImages.badgeIcon} style={styles.badgeIcon} />
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: Colors.primaryText}}>{item.title}</Text>
              <Text style={{color: Colors.gold, marginLeft: 5}}>
                {item.addtionalTitle}
              </Text>
            </View>
            <Text style={{color: Colors.grayText}}>{item.description}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.offWhite,
        paddingHorizontal: 20,
      }}>
      <FlatList
        data={badgeScreenMockData}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={RenderItem}
        ListFooterComponent={({_, i}) => (
          <View style={{paddingBottom: 50}}></View>
        )}
      />
    </SafeAreaView>
  );
};

export default Badges;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Colors.white,
    height: 'auto',
    marginVertical: 10,
    padding: 20,
  },
  badgeIcon: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
    marginRight: 15,
  },
});
