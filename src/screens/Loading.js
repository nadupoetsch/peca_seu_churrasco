import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Loading = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SignIn'); // Navigate to the 'SignIn' screen
    }, 2000); // Delay for 2 seconds (2000 milliseconds)

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, [navigation]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../images/image.jpg')} accessibilityLabel="logo do app" />
        <Text style={styles.title}>PEÇA SEU CHURRASCO</Text>
        <Text style={styles.text}>Carregando...</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#691D1D',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '75%',
    height: '50%',
    margin: 50,
    borderRadius: 25,
    marginBottom: 100,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#FFF',
    margin: 25,
  },
  text: {
    color: '#FFF',
    marginTop: 100,
    margin: 50,
  },
});

export default Loading;
