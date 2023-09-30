import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Search from "../components/Search";
import { themeColors } from "../theme";
const { width, height } = Dimensions.get("window");
const Menu = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      {/* render header */}

      {/* Categories filter */}
      <Search />
      <View style={{ marginTop: 22 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Danh mục</Text>
        {/* Categories list */}
        <CategoriesFilter />
      </View>

      {/* Recipe List Filter */}
      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Thực đơn</Text>
        {/* Recipes list */}
        <RecipeCard />
      </View>
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({});
