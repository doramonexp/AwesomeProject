import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Comment from './components/week3/Comment';

export default function Review() {
  // ตัวอย่างจำนวนรีวิวแต่ละระดับ
  const counts = [12, 6, 3, 2, 1]; // 5→1 ดาว
  const total = counts.reduce((sum, val) => sum + val, 0);
  const average = 4.7;

  return (
    <><View style={styles.container}>
      <View style={styles.profileSection}>
        {/* คะแนนหลัก */}
        <View style={styles.ratingBox}>
          <Text style={styles.ratingText}>{average}</Text>
        </View>


        {/* รายละเอียดดาว + แถบ bar */}
        <View style={styles.starDetail}>
          {counts.map((count, index) => {
            const star = 5 - index;
            const percent = (count / total) * 100;

            return (
              <View key={index} style={styles.starRow}>
                {/* ดาว */}
                <View style={styles.starIcons}>
                  {[...Array(star)].map((_, i) => (
                    <FontAwesome
                      key={i}
                      name="star"
                      size={12}
                      color="orange"
                      style={{ marginHorizontal: 1 }} />
                  ))}
                </View>

                {/* แถบ bar */}
                <View style={styles.barContainer}>
                  <View style={[styles.barFill, { width: `${percent}%` }]} />
                </View>

                {/* จำนวนรีวิว */}
                <Text style={styles.countText}>{count}</Text>
              </View>

            );
          })}


        </View>

      </View>
      <View style={styles.subInfoRow}>
        <Text style={styles.subText}>out of 5</Text>
        <Text style={styles.subTextLeft}>25 Ratings</Text>
      </View>

    </View>
    
    <View>
        <Comment />
    </View></>
    
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    margin: 10,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  ratingBox: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  starDetail: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'center',
  },
  starRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -1,//กำหนดให้ ดาวชิด
  },
  starIcons: {
    flexDirection: 'row-reverse',
    width: 150,
    justifyContent: 'flex-start',
  },
  barContainer: {
    flex: 1,
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 4,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  barFill: {
    height: '100%',
    backgroundColor: 'orange',
  },
  countText: {
    width: 24,
    fontSize: 10,
    color: '#333',
    textAlign: 'right',
  },
  totalBarWrapper: {
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 4,
    overflow: 'hidden',
    marginTop: 8,
    marginBottom: 4,
    marginRight: 40,
  },
  totalBarFill: {
    height: '100%',
    backgroundColor: 'orange',
  },
  subText: {
  fontSize: 10,
  color: '#333',  

  },

  subTextLeft: {
  fontSize: 10,
  color: '#F44336', 
  marginBottom: -5,
  },

  subInfoRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',  
  marginTop: 4,
  marginHorizontal: 10,
},

});