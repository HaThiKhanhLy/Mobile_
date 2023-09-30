import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";

import { themeColors } from "../theme";
const { width, height } = Dimensions.get("window");

const Search = () => {
  return (
    <View className="mx-5 shadow" style={{ marginTop: height * 0.06 }}>
      <View className="flex-row items-center rounded-full p-1 bg-[#e6e6e6]">
        <TextInput
          placeholder="Search"
          className="p-4 flex-1 font-semibold text-gray-700"
        />
        <TouchableOpacity
          className="rounded-full p-2"
          style={{ backgroundColor: themeColors.bgLight }}
        >
          <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
