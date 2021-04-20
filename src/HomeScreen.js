import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import LoadingComponent from './LoadingComponent';

const HomeScreen = props => {
  const [loading, setLoading] = useState(false);

  console.log('props', props);
  if (loading) {
    return (
      <LoadingComponent
        changeLoading={setLoading}
        navigation={props.navigation}
      />
    );
  }
  return (
    <View>
      <Text style={styles.mainText}>Home Screen</Text>
      <Button
        title="Press Me"
        onPress={() => {
          setLoading(true);
        }}
      />
      <Button
        title="Second Screen"
        onPress={() => props.navigation.navigate('Second')}
      />
      <Button
        title="Third Screen"
        onPress={() => props.navigation.navigate('Third')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainText: {
    fontSize: 32,
    marginVertical: 150,
    textAlign: 'center',
  },
});
export default HomeScreen;
