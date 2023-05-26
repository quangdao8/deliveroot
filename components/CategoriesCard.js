import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const CategoriesCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity className="relative mr-2">
            <Image source={require("../assets/piza.jpg")} className="w-20 h-20 rounded" />
            <Text className="absolute bottom-2 left-2 text-gray-500">{title}</Text>
        </TouchableOpacity>
    );
};

export default CategoriesCard;
