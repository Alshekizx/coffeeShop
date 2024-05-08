import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

import {
  Colors,
  StyledContainer,
  TopContainer,
  TopImgContainer,
  TopImg,
  TopIcon,
  CartDetailsContainer,
  CartDetailImg,
  CartHeader,
  CartTextDetails,
  CartButtonLike,
} from '../../components/CartStyle';
const { Primary, Secondary, SecondaryDark, Tertiary, Red, DarkBlue } = Colors;
const Cart = () => {
  const [selectedItem, setSelectedItem] = useState('All'); // Initialize with your default selected item

  const handleItemSelected = (item) => {
    setSelectedItem(item);
    // Add any additional logic you want to perform when an item is selected
  };
  return (
    <StyledContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <TopContainer>
          <TopIcon>
            <Icon name="gear" size={30} color={Red} />
          </TopIcon>
          <TopImgContainer>
            <TopImg resizeMode="cover" source={require('./../assets/groupOne.png')} />
          </TopImgContainer>
        </TopContainer>
        <CartDetailsContainer>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ backgroundColor: '#000000', height: 100, width: 100, borderRadius: 20 }}>
              <CartDetailImg resizeMode="cover" source={require('./../assets/groupOne.png')} />
            </View>
            <View style={{ marginLeft: 30 }}>
              <CartHeader>Cappuccino</CartHeader>
              <CartTextDetails>With steamed milk...</CartTextDetails>
              <View
                style={{
                  height: 45,
                  width: 130,
                  backgroundColor: Primary,
                  borderRadius: 10,
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <CartButtonLike>Medium Roasted</CartButtonLike>
              </View>
            </View>
          </View>
        </CartDetailsContainer>
      </SafeAreaView>
    </StyledContainer>
  );
};

export default Cart;
