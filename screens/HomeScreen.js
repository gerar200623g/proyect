import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Inicio</Text>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content}>
        <Image
          source={require('../assets/clima.jpg')}
          style={styles.mainImage}
        />
        <Text style={styles.mainTitle}>
          El cambio climático está a punto de empeorar
        </Text>
        <Text style={styles.mainSubtext}>2.7M views • 3 days ago</Text>

        {/* Video List */}
        <View style={styles.videoList}>
          <VideoItem 
            title="¿QUÉ ES EL MEDIO AMBIENTE?" 
            views="6.8M views • 1 week ago" 
            imageSource={require('../assets/climate_image.png')}
          />
          <VideoItem 
            title="Cómo el cambio climático está afectando al mundo" 
            views="4.9M views • 2 weeks ago" 
            imageSource={require('../assets/climate_image.png')}
          />
          <VideoItem 
            title="Por qué debemos actuar ahora sobre el cambio climático" 
            views="5.3M views • 1 month ago" 
            imageSource={require('../assets/climate_image.png')}
          />
        </View>
      </ScrollView>

      {/* Bottom Icons */}
      <View style={styles.bottomIconsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconContainer}>
          <Icon name="home" size={30} color="white" />
          <Text style={styles.iconText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')} style={styles.iconContainer}>
          <Icon name="list" size={30} color="white" />
          <Text style={styles.iconText}>Categorías</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Reviews')} style={styles.iconContainer}>
          <Icon name="star" size={30} color="white" />
          <Text style={styles.iconText}>Progreso</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.iconContainer}>
          <Icon name="person" size={30} color="white" />
          <Text style={styles.iconText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const VideoItem = ({ title, views, imageSource }) => (
  <View style={styles.videoItem}>
    <Image source={imageSource} style={styles.videoImage} />
    <View style={styles.videoTextContainer}>
      <Text style={styles.videoTitle}>{title}</Text>
      <Text style={styles.videoViews}>{views}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
  mainImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  mainTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  mainSubtext: {
    fontSize: 14,
    color: '#999',
    marginBottom: 20,
  },
  videoList: {
    marginTop: 10,
  },
  videoItem: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  videoImage: {
    width: 120,
    height: 90,
    borderRadius: 10,
    marginRight: 10,
  },
  videoTextContainer: {
    justifyContent: 'center',
  },
  videoTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  videoViews: {
    fontSize: 12,
    color: '#999',
  },
  bottomIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#222',
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    fontSize: 12,
    color: 'white',
    marginTop: 4,
  },
});

export default HomeScreen;
