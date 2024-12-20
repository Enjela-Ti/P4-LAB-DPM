// App.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = ({ teamAName = 'Tim A', teamBName = 'Tim B' }) => {  
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [winner, setWinner] = useState('');

  const increaseScore = (team) => {
    if (team === 'A' && scoreA < 10) {
      const newScore = scoreA + 1;
      setScoreA(newScore);
      if (newScore === 10) setWinner(`${teamAName} MENANGGGG!`);
    } else if (team === 'B' && scoreB < 10) {
      const newScore = scoreB + 1;
      setScoreB(newScore);
      if (newScore === 10) setWinner(`${teamBName} MENANGGGGG!`);
    }
  };

  const decreaseScore = (team) => {
    if (team === 'A' && scoreA > 0) {
      setScoreA(scoreA - 1);
      if (winner && scoreA - 1 < 10) setWinner(''); 
    } else if (team === 'B' && scoreB > 0) {
      setScoreB(scoreB - 1);
      if (winner && scoreB - 1 < 10) setWinner('');
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
    setWinner('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Pertandingan Futsal Kelas 5C</Text>
      </View>
      <View style={styles.scoreContainer}>
        <View style={styles.teamWrapper}>
          <Text style={styles.teamName}>{teamAName}</Text>
        </View>
        <Text style={styles.vs}>VS</Text>
        <View style={styles.teamWrapper}>
          <Text style={styles.teamName}>{teamBName}</Text>
        </View>
      </View>
      <View style={styles.scoreContainer}>
        <View style={styles.teamContainer}>
          <Text style={styles.score}>{scoreA}</Text>
          <Button title="+" onPress={() => increaseScore('A')} />
          <Button title="-" onPress={() => decreaseScore('A')} />
        </View>

        <View style={styles.teamContainer}>
          <Text style={styles.score}>{scoreB}</Text>
          <Button title="+" onPress={() => increaseScore('B')} />
          <Button title="-" onPress={() => decreaseScore('B')} />
        </View>
      </View>

      {winner ? <Text style={styles.winner}>{winner}</Text> : null}

      <Button title="Reset" onPress={resetScores} color="#841584" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  titleContainer: {
    backgroundColor: '#841584',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
    alignItems: 'center',
  },
  teamWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  vs: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginHorizontal: 10,
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  score: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  winner: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 20,
  },
});

export default App;
