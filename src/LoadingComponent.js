import React, {useRef, useEffect, useState} from 'react';
import {View, Animated, Button, ActivityIndicator} from 'react-native';

const LoadingComponent = props => {
  const spinLogoRef = useRef(new Animated.Value(0)).current;
  const springLogoRef = useRef(new Animated.Value(1)).current;
  const disappearLogoRef = useRef(new Animated.Value(1)).current;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    flippingBoxAnimation();
  });

  const flippingBoxAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(spinLogoRef, {
          useNativeDriver: true,
          toValue: 1,
          duration: 750,
        }),
        Animated.spring(springLogoRef, {
          useNativeDriver: true,
          toValue: 1.5,
          friction: 5,
          tension: 200,
        }),
        Animated.timing(spinLogoRef, {
          useNativeDriver: true,
          toValue: 0,
          duration: 750,
        }),
        Animated.spring(springLogoRef, {
          useNativeDriver: true,
          toValue: 1,
          friction: 5,
          tension: 200,
        }),
      ]),
    ).start();
  };
  const endLoading = () => {
    Animated.parallel([
      Animated.timing(spinLogoRef).stop(),
      Animated.spring(springLogoRef, {
        useNativeDriver: true,
        toValue: 1000,
        friction: 2,
        tension: 20,
      }),
      Animated.timing(disappearLogoRef, {
        useNativeDriver: true,
        toValue: 0,
        duration: 500,
      }),
    ]).start();
    setLoading(false);
    setTimeout(() => {
      props.navigation.navigate('Second');
    }, 250);
  };
  const interpolated = spinLogoRef.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const interpolatedOpacity = disappearLogoRef.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [0, 0.25, 0.5, 0.75, 1],
  });

  const flippingBoxStyle = {
    opacity: interpolatedOpacity,
    transform: [{rotate: interpolated}, {scale: springLogoRef}],
  };

  setTimeout(() => endLoading(), 5000);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 150,
      }}>
      {loading && <ActivityIndicator size="large" color="blue" />}
      <Animated.Image
        source={require('./assets/ford-logo.png')}
        style={[
          {height: 150, width: 150, marginVertical: 50},
          flippingBoxStyle,
        ]}
        resizeMode={'contain'}
      />
      <Button
        title="Cancel Loading"
        onPress={() => {
          props.changeLoading(false);
        }}
      />
      <Button title="End Loading" onPress={() => endLoading()} />
    </View>
  );
};

export default LoadingComponent;
