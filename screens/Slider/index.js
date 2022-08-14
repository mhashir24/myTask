
import React, { useState } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Slider from 'react-native-slider';

const SliderScreen = () => {
  const [slider, setSlider] = useState(0)

  return (

    <View style={{ flex: 1, borderWidth: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent:'space-between' }}>
        <View>
          <Text>
            {'Hashir'}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Slider
            value={slider}
            // trackStyle={{ backgroundColor: 'red' }}
            thumbStyle={{ backgroundColor: 'green' }}
            minimumTrackTintColor={'green'}
            maximumTrackTintColor={'pink'}
            onValueChange={(value) => setSlider(value)}
          />
        </View>
        <View>
          <Text>
            {'Hashir'}
          </Text>
        </View>
      </View>
    </View>

  );
};

export default SliderScreen
