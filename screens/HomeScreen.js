import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../theme";
import { StatusBar } from "expo-status-bar";
import Carousel from "react-native-snap-carousel";
import CoffeeCard from "../components/coffeeCard";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { categories, foodsItems } from "../constants/index";
import Search from "../components/Search";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState(null);
  const navigation = useNavigation();

  // Lọc danh sách sản phẩm dựa trên danh mục được chọn
  const filteredFoods = activeCategory
    ? foodsItems.filter((item) => item.categoryId === activeCategory)
    : foodsItems;

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar />

      <SafeAreaView style={ios ? { marginBottom: -8 } : null}>
        {/* avatar and bell icon */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 16,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Image
              source={require("../assets/images/avatar.png")}
              style={{ height: 45, width: 45, borderRadius: 22.5 }}
            />
          </TouchableOpacity>
          <View
            style={{ flexDirection: "row", alignItems: "center", spacing: 2 }}
          >
            <MapPinIcon size={25} color={themeColors.bgLight} />
            <Text style={{ fontWeight: "600", fontSize: 16 }}>
              New York, NYC
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
            <BellIcon size={27} color="black" />
          </TouchableOpacity>
        </View>

        {/* search bar */}
        <Search />

        {/* categories */}
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
                    style={[
                      { fontWeight: "600", fontSize: 16 },
                      activeTextStyles,
                    ]}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </SafeAreaView>

      {/* coffee cards */}
      <View
        style={{ flex: 1, justifyContent: "center", marginTop: ios ? 40 : 0 }}
      >
        <View>
          <Carousel
            data={filteredFoods}
            renderItem={({ item }) => <CoffeeCard item={item} />}
            firstItem={1}
            loop={true}
            inactiveSlideScale={0.75}
            inactiveSlideOpacity={0.75}
            sliderWidth={width}
            itemWidth={width * 0.63}
          />
        </View>
      </View>
    </View>
  );
}
