import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Switch } from "react-native";
import Card from "./components/Card";
import data from "./data.json"

const App = () => {

  // States
  const [cafeList, setCafeList] = useState(data);
  const [favList, setFavList] = useState(data.filter(item => item.isFavorite))
  const [position, setPosition] = useState(false)

  // Render card for FlatList
  const renderCard = ({ item }) => <Card 
    item={item} 
    addRemove={addRemove} 
    favList={favList} 
    position={position} 
  />

  // All or only favorites
  function extarctFavorites(position) {
    setPosition(position)
    position ?
      setCafeList(favList) : setCafeList(data)
  }

  // Add or remove in favList
  function addRemove(isFav, isId) {
    isFav ?
      setFavList(favList.concat(data[isId])
        .sort((item1, item2) => {
          if (item1.id < item2.id) return -1
        }))
      : setFavList(favList.filter(cafes => cafes.id !== isId))
  }

  return (
    <View style={styles.container}>
      <View style={styles.head_container}>
        <Text style={styles.title}>SHOW ONLY FAVORITES</Text>
        <Switch
          value={position}
          onValueChange={extarctFavorites}
          trackColor={{ true: "#4a1205" }}
        />
      </View>
      <FlatList
        data={cafeList}
        renderItem={renderCard}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  head_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    marginBottom: 0
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'white',
  }
});

export default App;