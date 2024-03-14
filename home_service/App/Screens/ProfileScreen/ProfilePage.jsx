import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Colors from "../Utils/Colors";
import BgProfileImage from './Bg&ProfileImage';
import FollowFollowers from './Follow&Followers';
import RankCoins from './Rank&Coins';
import RankingProgress from './RankingProgress';
import FavouriteTeams from './FavouriteTeams';
import PredictionsPoints from './PredictionsPoints';
import Stats from './Stats';

const ProfilePage = () => {
  const correctScore = 80
  const outComes = 68
  const incorrect = 67
  const total_predictoins= correctScore+outComes+incorrect;
  const pointsObtaing = (correctScore*20+outComes*5);
  const per_prediction = pointsObtaing / total_predictoins;
  return (
    <ScrollView >
      <View style={styles.container}>
      {/* First Card */}
      <View style={styles.firstCardContainer}>
       {/* Section 1 */}
       <BgProfileImage/>
        {/* Section 2 */}
       <FollowFollowers/>
        {/* Section 3 */}
        <RankCoins/>
        {/* Section 4 */}
        <RankingProgress/>
        {/* Section 5 */}
        <FavouriteTeams/>
        </View>

      {/* Second Card */}
      <View style={styles.secondCardContainer}>
        {/* Section 1 */}
        <PredictionsPoints total_predictoins={total_predictoins} pointsObtaing={pointsObtaing} per_prediction={per_prediction}/>
        {/* Section 2 */}
        <Stats correctScore={correctScore} outComes={outComes} incorrect={incorrect} total_predictoins={total_predictoins}/>
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LIGHT_GREY,
    padding: 4, // Adjust paddingTop as needed
    paddingBottom: 20, // Adjust paddingBottom as needed
    gap:-2,
    marginTop:20
  },
  firstCardContainer:{ paddingHorizontal: 4, backgroundColor:Colors.DARK_GREY, borderRadius:19 },
  secondCardContainer:{ marginVertical: 10, paddingHorizontal: 4, backgroundColor:Colors.DARK_GREY, borderRadius:19,  }
});

export default ProfilePage;
