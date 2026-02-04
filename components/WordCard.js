import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const WordCard = ({ word, translation, example }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <View style={styles.card}>
            <TouchableOpacity 
                style={styles.touchable} 
                onPress={() => setIsFlipped(!isFlipped)}
                activeOpacity={0.7} // Эффект при нажатии
            >
                {/* 2. Условие: если не перевернуто — слово, иначе — перевод + пример */}
                {!isFlipped ? (
                <Text style={styles.wordText}>{word}</Text>
                ) : (
                <View style={styles.backContainer}>
                    <Text style={styles.translationText}>{translation}</Text>
                    <Text style={styles.exampleText}>{example}</Text>
                </View>
                )}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: 300, // Дадим карточке фиксированную ширину
    minHeight: 180,
    borderRadius: 15,
    justifyContent: 'center',
    // Тени
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  wordText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  backContainer: {
    alignItems: 'center',
  },
  translationText: {
    fontSize: 24,
    color: '#27ae60',
    fontWeight: '600',
  },
  exampleText: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 10,
    textAlign: 'center',
    color: '#7f8c8d',
  },
});

export default WordCard;