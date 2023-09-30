import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { themeColors } from "../theme";
import { categories, foodsItems } from "../constants/index";

const CategoriesFilter = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  // Lọc danh sách sản phẩm dựa trên danh mục được chọn
  const filteredFoods = activeCategory
    ? foodsItems.filter((item) => item.categoryId === activeCategory)
    : foodsItems;

  return (
    <View style={{ paddingHorizontal: 16, marginTop: 24 }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isActive = item.id === activeCategory;
          const activeTextStyles = isActive
            ? { color: "white" }
            : { color: "gray" };
          const categoryBackground = isActive
            ? themeColors.bgLight
            : "rgba(0,0,0,0.07)";

          return (
            <TouchableOpacity
              onPress={() => setActiveCategory(item.id)}
              style={{
                paddingHorizontal: 16,
                paddingVertical: 10,
                marginRight: 8,
                borderRadius: 25,
                backgroundColor: categoryBackground,
              }}
            >
              <Text
                style={[{ fontWeight: "600", fontSize: 16 }, activeTextStyles]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CategoriesFilter;

const styles = StyleSheet.create({});
