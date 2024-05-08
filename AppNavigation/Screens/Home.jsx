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
  HomeHeaderContainer,
  HomeHeader,
  SearchBar,
  SearchIcon,
  SidewaysSlidingNavView,
  SidewaysNavText,
  NavTextView,
  SidewaysNavBall,
  AllView,
  AllViewContent,
  AllViewImageView,
  AllViewImage,
  AllViewTextView,
  AllViewHeader,
  AllViewDetails,
  AllBottom,
  AllBottomDollarView,
  AllDollarSign,
  AllPrice,
  AllPlusIcon,
} from '../../components/Styles';
const { Primary, Secondary, SecondaryDark, Tertiary, Red, DarkBlue } = Colors;
const HomeScreen = () => {
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

        <HomeHeaderContainer>
          <HomeHeader>Find The Best Coffee For You.</HomeHeader>
        </HomeHeaderContainer>
        <ScrollView>
          <View>
            <SearchBar
              placeholder="Find your coffee..."
              placeholderTextColor={Primary}
              style={{ fontSize: 16 }}
              color={SecondaryDark}
            />
            <SearchIcon>
              <Icon name="search" size={28} color={Primary} />
            </SearchIcon>
          </View>

          <ScrollView horizontal={true}>
            <SidewaysSlidingNavView>
              <NavTextView onPress={() => handleItemSelected('All')}>
                <SidewaysNavText isSelected={selectedItem === 'All'}>All</SidewaysNavText>
                <SidewaysNavBall isSelected={selectedItem === 'All'}></SidewaysNavBall>
              </NavTextView>
              <NavTextView onPress={() => handleItemSelected('Cappuccino')}>
                <SidewaysNavText isSelected={selectedItem === 'Cappuccino'}>Cappuccino</SidewaysNavText>
                <SidewaysNavBall isSelected={selectedItem === 'Cappuccino'}></SidewaysNavBall>
              </NavTextView>
              <NavTextView onPress={() => handleItemSelected('Espresso')}>
                <SidewaysNavText isSelected={selectedItem === 'Espresso'}>Espresso</SidewaysNavText>
                <SidewaysNavBall isSelected={selectedItem === 'Espresso'}></SidewaysNavBall>
              </NavTextView>
              <NavTextView onPress={() => handleItemSelected('Americano')}>
                <SidewaysNavText isSelected={selectedItem === 'Americano'}>Americano</SidewaysNavText>
                <SidewaysNavBall isSelected={selectedItem === 'Americano'}></SidewaysNavBall>
              </NavTextView>
              <NavTextView onPress={() => handleItemSelected('Brewed-Coffee')}>
                <SidewaysNavText isSelected={selectedItem === 'Brewed-Coffee'}>Brewed Coffee</SidewaysNavText>
                <SidewaysNavBall isSelected={selectedItem === 'Brewed-Coffee'}></SidewaysNavBall>
              </NavTextView>
              <NavTextView onPress={() => handleItemSelected('Latte')}>
                <SidewaysNavText isSelected={selectedItem === 'Latte'}>Latte</SidewaysNavText>
                <SidewaysNavBall isSelected={selectedItem === 'Latte'}></SidewaysNavBall>
              </NavTextView>
              <NavTextView onPress={() => handleItemSelected('Macchiato')}>
                <SidewaysNavText isSelected={selectedItem === 'Macchiato'}>Macchiato</SidewaysNavText>
                <SidewaysNavBall isSelected={selectedItem === 'Macchiato'}></SidewaysNavBall>
              </NavTextView>
              <NavTextView onPress={() => handleItemSelected('Flat-White')}>
                <SidewaysNavText isSelected={selectedItem === 'Flat-White'}>Flat White</SidewaysNavText>
                <SidewaysNavBall isSelected={selectedItem === 'Flat-White'}></SidewaysNavBall>
              </NavTextView>
            </SidewaysSlidingNavView>
          </ScrollView>

          {/* FIRST Row Content */}
          <ScrollView horizontal={true}>
            <AllView style={{ flexDirection: 'row' }}>
              {/* First Content*/}
              <AllViewContent>
                <AllViewImageView>
                  <AllViewImage resizeMode="cover" source={require('./../assets/Group110.png')} />
                </AllViewImageView>
                <AllViewTextView>
                  <AllViewHeader>Cappuccino</AllViewHeader>
                  <AllViewDetails>With oat milk</AllViewDetails>
                  <AllBottom style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ color: Secondary, fontSize: 20 }}>$</Text>
                      <Text style={{ color: Tertiary, fontSize: 20 }}>4.20</Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: Secondary,
                        borderRadius: 8,
                        width: 30,
                        height: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Icon name="plus" />
                    </TouchableOpacity>
                  </AllBottom>
                </AllViewTextView>
              </AllViewContent>

              {/* Second Content*/}
              <AllViewContent>
                <AllViewImageView>
                  <AllViewImage resizeMode="cover" source={require('./../assets/groupOne.png')} />
                </AllViewImageView>
                <AllViewTextView>
                  <AllViewHeader>Cappuccino</AllViewHeader>
                  <AllViewDetails>With Chocolate</AllViewDetails>
                  <AllBottom style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ color: Secondary, fontSize: 20 }}>$</Text>
                      <Text style={{ color: Tertiary, fontSize: 20 }}>3.41</Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: Secondary,
                        borderRadius: 8,
                        width: 30,
                        height: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Icon name="plus" />
                    </TouchableOpacity>
                  </AllBottom>
                </AllViewTextView>
              </AllViewContent>

              {/* Third Content*/}
              <AllViewContent>
                <AllViewImageView>
                  <AllViewImage resizeMode="cover" source={require('./../assets/coofee.png')} />
                </AllViewImageView>
                <AllViewTextView>
                  <AllViewHeader>Espresso</AllViewHeader>
                  <AllViewDetails>With oat milk</AllViewDetails>
                  <AllBottom style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ color: Secondary, fontSize: 20 }}>$</Text>
                      <Text style={{ color: Tertiary, fontSize: 20 }}>2.30</Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: Secondary,
                        borderRadius: 8,
                        width: 30,
                        height: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Icon name="plus" />
                    </TouchableOpacity>
                  </AllBottom>
                </AllViewTextView>
              </AllViewContent>

              {/* Forth Content*/}
              <AllViewContent>
                <AllViewImageView>
                  <AllViewImage resizeMode="cover" source={require('./../assets/Group110.png')} />
                </AllViewImageView>
                <AllViewTextView>
                  <AllViewHeader>Americano</AllViewHeader>
                  <AllViewDetails>With milk</AllViewDetails>
                  <AllBottom style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ color: Secondary, fontSize: 20 }}>$</Text>
                      <Text style={{ color: Tertiary, fontSize: 20 }}>4.00</Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: Secondary,
                        borderRadius: 8,
                        width: 30,
                        height: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Icon name="plus" />
                    </TouchableOpacity>
                  </AllBottom>
                </AllViewTextView>
              </AllViewContent>
            </AllView>
          </ScrollView>

          {/*2 role */}
          {/*Header*/}
          <View>
            <Text style={{ color: Tertiary, fontSize: 25, fontWeight: 'bold' }}>Coffee Bean</Text>
          </View>
          {/* SECOND Row Content */}
          <ScrollView horizontal={true}>
            <AllView style={{ flexDirection: 'row' }}>
              {/* First Content*/}
              <AllViewContent>
                <AllViewImageView>
                  <AllViewImage resizeMode="cover" source={require('./../assets/Group110.png')} />
                </AllViewImageView>
                <AllViewTextView>
                  <AllViewHeader>Cappuccino</AllViewHeader>
                  <AllViewDetails>With oat milk</AllViewDetails>
                  <AllBottom style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ color: Secondary, fontSize: 20 }}>$</Text>
                      <Text style={{ color: Tertiary, fontSize: 20 }}>4.20</Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: Secondary,
                        borderRadius: 8,
                        width: 30,
                        height: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Icon name="plus" />
                    </TouchableOpacity>
                  </AllBottom>
                </AllViewTextView>
              </AllViewContent>

              {/* Second Content*/}
              <AllViewContent>
                <AllViewImageView>
                  <AllViewImage resizeMode="cover" source={require('./../assets/groupOne.png')} />
                </AllViewImageView>
                <AllViewTextView>
                  <AllViewHeader>Cappuccino</AllViewHeader>
                  <AllViewDetails>With Chocolate</AllViewDetails>
                  <AllBottom style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ color: Secondary, fontSize: 20 }}>$</Text>
                      <Text style={{ color: Tertiary, fontSize: 20 }}>3.41</Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: Secondary,
                        borderRadius: 8,
                        width: 30,
                        height: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Icon name="plus" />
                    </TouchableOpacity>
                  </AllBottom>
                </AllViewTextView>
              </AllViewContent>

              {/* Third Content*/}
              <AllViewContent>
                <AllViewImageView>
                  <AllViewImage resizeMode="cover" source={require('./../assets/coofee.png')} />
                </AllViewImageView>
                <AllViewTextView>
                  <AllViewHeader>Espresso</AllViewHeader>
                  <AllViewDetails>With oat milk</AllViewDetails>
                  <AllBottom style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ color: Secondary, fontSize: 20 }}>$</Text>
                      <Text style={{ color: Tertiary, fontSize: 20 }}>2.30</Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: Secondary,
                        borderRadius: 8,
                        width: 30,
                        height: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Icon name="plus" />
                    </TouchableOpacity>
                  </AllBottom>
                </AllViewTextView>
              </AllViewContent>

              {/* Forth Content*/}
              <AllViewContent>
                <AllViewImageView>
                  <AllViewImage resizeMode="cover" source={require('./../assets/Group110.png')} />
                </AllViewImageView>
                <AllViewTextView>
                  <AllViewHeader>Americano</AllViewHeader>
                  <AllViewDetails>With milk</AllViewDetails>
                  <AllBottom style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ color: Secondary, fontSize: 20 }}>$</Text>
                      <Text style={{ color: Tertiary, fontSize: 20 }}>4.00</Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: Secondary,
                        borderRadius: 8,
                        width: 30,
                        height: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Icon name="plus" />
                    </TouchableOpacity>
                  </AllBottom>
                </AllViewTextView>
              </AllViewContent>
            </AllView>
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </StyledContainer>
  );
};

export default HomeScreen;
