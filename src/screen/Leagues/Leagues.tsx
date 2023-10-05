import React, {useCallback, useMemo, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Colors} from '../../constants/Colors';
import {AllImages} from '../../constants/Images';
import Button from './components/Button';
import MidCard from './components/MidCard';
import BottomSheet from './components/BottomSheet';
import TopCard from './components/TopCard';

const Leagues = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['50%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <SafeAreaView style={styles.container}>
          <Text style={styles.headingText}>Today's Games</Text>
          <TopCard
            startTime={'03:23:12'}
            priceDescription={`$24,524 at 7 a ET on 22nd Jan'21`}
          />

          <View style={styles.midCardContainer}>
            <MidCard
              poolPrize={'12,000'}
              under={'3.25x'}
              over={'1.25x'}
              fees={5}
            />

            <View style={{marginVertical: 18, paddingHorizontal: 20}}>
              <Text style={styles.bottomText}>What's your prediction?</Text>
              <View style={{flexDirection: 'row'}}>
                <Button
                  bgColor={Colors.darkPurple}
                  title="Under"
                  icon={AllImages.downArrow}
                />
                <Button
                  onPress={() => {
                    handlePresentModalPress();
                  }}
                  bgColor={Colors.lightPurple}
                  title="Over"
                  icon={AllImages.upArrow}
                />
              </View>
            </View>

            <View style={styles.bottomCardContiner}>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <View style={styles.topTextContainer}>
                  <Image
                    source={AllImages.playerIcon}
                    style={styles.topCardIcon}
                  />
                  <Text style={[styles.bottomText, {marginLeft: 10}]}>
                    355 Players
                  </Text>
                </View>
                <View style={styles.topTextContainerEnd}>
                  <Image
                    source={AllImages.graphIcon}
                    style={styles.topCardIcon}
                  />
                  <Text style={[styles.bottomText, {marginLeft: 10}]}>
                    View chart
                  </Text>
                </View>
              </View>

              <View style={styles.barContainer}>
                <View style={styles.leftBar}></View>
                <View style={styles.rightBar}></View>
              </View>

              <View style={{flexDirection: 'row', marginBottom: 20}}>
                <View style={styles.topTextContainer}>
                  <Text style={styles.bottomEndText}>232 predicated under</Text>
                </View>
                <View style={styles.topTextContainerEnd}>
                  <Text style={styles.bottomEndText}>123 predicated over</Text>
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <BottomSheet />
          </ScrollView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default Leagues;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },
  headingText: {
    fontSize: 20,
    color: Colors.primaryText,
    fontWeight: '600',
    marginVertical: 12,
  },
  midCardContainer: {
    borderWidth: 0.3,
    borderColor: Colors.grayText,
    height: 'auto',
    width: '100%',
    backgroundColor: Colors.white,
  },
  bottomCardContiner: {
    backgroundColor: Colors.purpleOffShade,
    height: 'auto',
    width: '100%',
    paddingHorizontal: 10,
  },
  topCardIcon: {
    height: 14,
    width: 14,
    resizeMode: 'contain',
    marginLeft: 10,
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
  bottomText: {
    fontSize: 18,
    color: Colors.grayText,
    fontWeight: '500',
  },
  bottomEndText: {
    fontSize: 12,
    color: Colors.grayText,
    fontWeight: '300',
  },
  barContainer: {
    flexDirection: 'row',
    marginTop: 5,
    height: 20,
    width: '100%',
  },
  leftBar: {
    flex: 1,
    backgroundColor: Colors.barLightPink,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  rightBar: {
    flex: 0.2,
    backgroundColor: Colors.barLightgreen,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
