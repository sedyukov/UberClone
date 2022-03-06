import React from "react"
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import {Icon} from "react-native-elements"
import tw from "twrnc";
import {useDispatch} from "react-redux";
import {setOrigin} from "../slices/navSlice";

const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "Code Street, London, UK",
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "London Eye, London, UK",
    }
];

const NavFavourites = () => {
    const dispatch = useDispatch()
    return (
        <FlatList
            data={data}
            keyExtractor={(item => item.id)}
            ItemSeparatorComponent={() => (
                <View
                    style={[tw`bg-gray-200`,{height: 0.5}]}
                />
            )}
            renderItem={({item: {location, destination, icon}}) => (
                <TouchableOpacity
                    // onPress={
                    //     dispatch(setOrigin({
                    //         location: details.geometry.location,
                    //         description: data.description
                    //     }))
                    // }
                    style={tw`flex-row items-center p-5`}
                >
                    <Icon
                        style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                        name={icon}
                        type="ionicon"
                        color="white"
                        size={18}
                    />
                    <View>
                        <Text style={tw`font-semibold text-lg`}>
                            {location}
                        </Text>
                        <Text style={tw`text-gray-500`}>
                            {destination}
                        </Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavFavourites