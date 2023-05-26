import { View, Text,ScrollView } from "react-native";
import React from "react";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
        >
           <CategoriesCard imgUrl = "" title = "testing 1"/>
           <CategoriesCard imgUrl = "" title = "testing 2"/>
           <CategoriesCard imgUrl = "" title = "testing 3"/>
           <CategoriesCard imgUrl = "" title = "testing 4"/>
           <CategoriesCard imgUrl = "" title = "testing 5"/>
           <CategoriesCard imgUrl = "" title = "testing 6"/>
           <CategoriesCard imgUrl = "" title = "testing 7"/>
           <CategoriesCard imgUrl = "" title = "testing 8"/>
        </ScrollView>
    );
};

export default Categories;
