import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    ChevronDownIcon,
    UserIcon,
    AdjustmentsHorizontalIcon,
    MagnifyingGlassIcon
} from "react-native-heroicons/outline";
import { TextInput } from "react-native";
import { ScrollView } from "react-native";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);
    return (
        <SafeAreaView className="bg-white pt-5">
            {/* header */}
            <View className="flex-row  items-center mx-4 space-x-2">
                <Image
                    source={require("../assets/delivery-image.png")}
                    className="w-7 h-7 rounded-full p-4 bg-gray-300"
                />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400">Deliver Now!</Text>
                    <Text className="font-bold text-xl">
                        Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>
                <UserIcon size={35} color={"#00CCBB"} />
            </View>
            {/* Search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3 items-center">
                    <MagnifyingGlassIcon color={"gray"} size={20} />
                    <TextInput placeholder="Restaurants and cuisines" />
                </View>
                <AdjustmentsHorizontalIcon color={"#00CCBB"} />
            </View>
            {/* Body */}
            <ScrollView
                className="bg-gray-100"
                contentContainerStyle={{
                    paddingBottom: 100
                }}
            >
                {/* Categories */}
                <Categories />
                {/* featured Rows */}
                <FeaturedRow
                    id={1}
                    title="Featured"
                    description={"Paid placements from our partners"}
                    featuredCategory={"featured"}
                />
                {/* Tasty Discounts */}
                <FeaturedRow
                    id={2}
                    title="Tasty Discounts"
                    description={"Everyone's been enjoying these juicy discounts"}
                    featuredCategory={"discounts"}
                />
                <FeaturedRow
                    id={3}
                    title="Featured"
                    description={"Paid placements from our partners"}
                    featuredCategory={"featured"}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
