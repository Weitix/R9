import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  Avatar,
  WelcomeImage,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  InnerContainer,
  WelcomeContainer,
  ButtonText,
  Line,
} from './../components/styles';

// Async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// credentials context
import { CredentialsContext } from './../components/CredentialsContext';

const Welcome = ({navigation}) => {
  // credentials context
  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);

  const { name, email,roles ,quiz} = storedCredentials;


  const clearLogin = () => {
    AsyncStorage.removeItem('R9')
      .then(() => {
        setStoredCredentials("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <StatusBar style="light" />
      <InnerContainer>
        <WelcomeImage resizeMode="contain" source={require('./../assets/img/expo-bg2.png')} />

        <WelcomeContainer>
          <PageTitle welcome={true}>Добро пожаловать</PageTitle>
          <SubTitle welcome={true}>{name || 'Olga Simpson'}</SubTitle>
          <SubTitle welcome={true}>{email || 'olgasimp@gmail.com'}</SubTitle>
          <SubTitle welcome={true}>Ваша роль {roles}</SubTitle>
          <StyledFormArea>
            <Line />
            <StyledButton onPress={() => navigation.navigate('Home')}>
              <ButtonText>Вход</ButtonText>
            </StyledButton>
            <StyledButton onPress={clearLogin}>
              <ButtonText>Выход из системы</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;
