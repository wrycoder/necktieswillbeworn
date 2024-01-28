import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Flex = () => {
  const labels = ['This is a necktie app', 'Necktie [tied]'];
  const [titleText, setTitleText] = useState(labels[0]);
  const bodyText = 'Neckties will be worn in this area!';

  const onPressTitle = () => {
    if(titleText === labels[0]) {
      setTitleText(labels[1]);
    } else {
      setTitleText(labels[0]);
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 1, backgroundColor: 'red'}} />
      <View style={{flex: 2, backgroundColor: 'darkorange'}} >
        <Text style={[
          styles.baseText,
          {
            flexDirection: 'column',
          },
        ]} >
          <Text style={[styles.titleText, titleText === labels[1] && styles.tiedNecktie]} onPress={onPressTitle}>
            {titleText}
            {'\n'}
          </Text>
          <Text>
            {bodyText}
          </Text>
        </Text>
      </View>
      <View style={{flex: 3, backgroundColor: 'green'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  baseText: {
    flex: 0,
    backgroundColor: 'grey',
    fontFamily: 'Cochin',
    textAlign: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tiedNecktie: {
    color: 'red',
  },
});

export default Flex;