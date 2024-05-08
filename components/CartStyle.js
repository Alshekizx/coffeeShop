import styled from 'styled-components';
import { View, Text, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
  Primary: '#0C0F14',
  Secondary: '#D17842',
  SecondaryDark: '#52555A',
  Tertiary: '#AEAEAE',
  Red: '#DC3535',
  DarkBlue: '#252A32',
};

const { Primary, Secondary, Tertiary, DarkBlue, Red, SecondaryDark } = Colors;

export const StyledContainer = styled.View`
  flex: 1;

  background-color: ${Primary};
  padding-left: 25px;
  padding-right: 25px;
  padding-top: ${StatusBarHeight + 5}px;
  overflow: hidden;
`;
export const TopContainer = styled.View`
  justify-content: space-between;
  align-items: center;

  flex-direction: row;
  height: 50px;
  width: 100%;
`;

export const TopImgContainer = styled.TouchableOpacity`
  border-radius: 10px;
  height: 40px;
  width: 40px;
  overflow: hidden;
`;

export const TopImg = styled.Image`
  height: 40px;
  width: 40px;
`;

export const TopIcon = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
`;
export const CartDetailsContainer = styled(LinearGradient).attrs({
  colors: [DarkBlue, SecondaryDark], // Replace 'your-second-color' with the second color of your gradient
  start: { x: 1, y: 1 },
  end: { x: 0, y: 2 },
})`
  height: 250px;
  width: 100%;
  border-radius: 20px;
  padding: 15px;
`;

export const CartDetailImg = styled.Image`
  height: 100px;
  width: 100px;
`;

export const CartHeader = styled.Text`
  font-size: 20px;
  color: ${Tertiary};
  font-weight: bold;
`;
export const CartTextDetails = styled.Text`
  font-size: 13px;
  color: ${Tertiary};
`;
export const CartButtonLike = styled.Text`
  font-size: 13px;
  color: ${Tertiary};
  background-color: ${Primary};
`;
