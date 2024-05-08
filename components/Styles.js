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

export const HomeHeaderContainer = styled.View`
  width: 100%;
`;
export const HomeHeader = styled.Text`
  font-weight: bold;
  font-size: 35px;
  color: ${Tertiary};
`;

export const SearchBar = styled.TextInput`
  font-weight: bold;
  font-size: 20px;
  height: 50px;
  width: 300px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: ${DarkBlue};
  border-radius: 20px;
  padding-left: 50px;
`;
export const SearchIcon = styled.TouchableOpacity`
  position: absolute;
  top: 30px;
  left: 15px;
`;
export const SidewaysSlidingNavView = styled.View`
  height: 20px;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 50px;
`;

export const NavTextView = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 50px;
  flex-direction: column;

  margin-left: 15px;
  margin-right: 15px;
`;
export const SidewaysNavText = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
  color: ${(props) => (props.isSelected ? '#D17842' : '#52555A')};
`;
export const SidewaysNavBall = styled.View`
  height: 10px;
  width: 10px;
  background-color: ${(props) => (props.isSelected ? '#D17842' : '#0C0F14')};

  border-radius: 50px;
`;

export const AllView = styled.View`
  margin-top: 15px;
  margin-bottom: 10px;
  flex: 1;
  position: relative;
`;

export const AllViewContent = styled(LinearGradient).attrs({
  colors: [Primary, DarkBlue], // Replace 'your-second-color' with the second color of your gradient
  start: { x: 0, y: 1 },
  end: { x: 1, y: 0 },
})`
  height: 220px;
  width: 130px;
  border-radius: 25px;
  align-items: center;
  margin-right: 15px;
`;
export const AllViewImageView = styled.View`
  height: 110px;
  width: 110px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const AllViewImage = styled.Image`
  height: 110px;
  width: 110px;
  border-radius: 20px;
`;
export const AllViewTextView = styled.View`
  align-items: left;
  justify-content: center;
  margin-top: 10px;
  width: 110px;
`;
export const AllViewHeader = styled.Text`
  font-size: 20px;
  text-align: left;
  color: ${Tertiary};
`;
export const AllViewDetails = styled.Text`
  color: ${Tertiary};
  font-size: 12;
`;

export const AllBottom = styled.View`
  justify-content: space-between;
  align-items: Left;
`;
export const AllBottomDollarView = styled.View`
  justify-content: center;
  align-items: Left;
`;

export const AllDollarSign = styled.Text`
  color: ${Secondary};
  font-size: ${Tertiary};
`;

export const AllPrice = styled.Text`
  color: ${Tertiary};
  font-size: 20px;
`;
export const AllPlusIcon = styled.TouchableOpacity`
  color: ${Secondary};
  font-size: 20px;
`;
