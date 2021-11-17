import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';




const Home = ({navigation}) => {

  return (
    <SafeAreaView
      style={{
        flex: 1,
        
        position: 'relative',
      }}>
      <StatusBar  barStyle={'dark-content'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          
          elevation: 4,
          paddingHorizontal: 20,
        }}>
        <Text style={{fontSize: 20, }}>Quiz App</Text>
      </View>

      {/* Quiz list */}
      <FlatList
        
        style={{
          paddingVertical: 20,
        }}
        renderItem={({item: quiz}) => (
          <View
            style={{
              padding: 20,
              borderRadius: 5,
              marginVertical: 5,
              marginHorizontal: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              elevation: 2,
            }}>
            <View style={{flex: 1, paddingRight: 10}}>
              <Text style={{fontSize: 18, }}>
                {quiz.title}
              </Text>
              {quiz.description != '' ? (
                <Text style={{opacity: 0.5}}>{quiz.description}</Text>
              ) : null}
            </View>
            <TouchableOpacity
              style={{
                paddingVertical: 10,
                paddingHorizontal: 30,
                borderRadius: 50,

              }}
              >
              <Text >Play</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Button */}
     
    </SafeAreaView>
  );
};

export default Home;
