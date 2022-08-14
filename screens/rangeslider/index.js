
import React, { useState } from 'react';
import Carousel from 'react-native-snap-carousel';

import {
    View,
    Dimensions,
    Text,
    Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Img from "../../assets/alicia.jpg";
let width = Dimensions.get('screen').width
let height = Dimensions.get('screen').height


const data = [
    {
        title: 'hello world'
    },
    {
        title: 'Testing'
    },
    {
        title: 'Testing abc'
    },
    {
        title: 'hello world'
    }
]

const RangeSlider = () => {

    return (

        <View style={{ flex: 1, borderWidth: 1, backgroundColor: 'white' }}>
            <Carousel
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <View>
                                <Image
                                    style={{ borderRadius: 100 }}
                                    source={Img}
                                />
                                
                            </View>
                            <View>
                                <Text style={{ textAlign: 'center' }}>
                                    {item.title}
                                </Text>
                            </View>
                        </View>
                    )
                }}
                sliderWidth={width}
                itemWidth={width / 3}
            />
        </View>

    );
};

export default RangeSlider