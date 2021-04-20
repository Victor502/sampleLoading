import React, {useRef, useEffect, useState} from 'react';
import {View, Animated, Button} from 'react-native';

const LoadingComponent2 = props => {
  const spinLogoRef = useRef(new Animated.Value(0)).current;
  const springLogoRef = useRef(new Animated.Value(1)).current;
  const disappearLogoRef = useRef(new Animated.Value(1)).current;

  useEffect(() => {});

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 150,
      }}>
      <Animated.Image
        source={require('./assets/ford-logo.png')}
        style={[{height: 150, width: 150, marginVertical: 50}]}
        resizeMode={'contain'}
      />
      <Button
        title="Cancel Loading"
        onPress={() => {
          props.changeLoading(false);
        }}
      />
      <Button title="End Loading" onPress={() => props.changeLoading(false)} />
    </View>
  );
};

export default LoadingComponent2;
