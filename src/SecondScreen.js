import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import LoadingComponent2 from './LoadingComponent2';

const SecondScreen = props => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <LoadingComponent2
        changeLoading={setLoading}
        navigation={props.navigation}
      />
    );
  }
  return (
    <View>
      <Text>Second Screen</Text>
    </View>
  );
};

export default SecondScreen;
