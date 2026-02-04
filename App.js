import { StyleSheet, View, Text, ScrollView } from 'react-native';
import WordCard from './components/WordCard';
import words from './data/words'; // Импортируем наш массив

export default function App() {
    console.log("Данные слов:", words); // Посмотри в терминал на ПК после сохранения
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Мой словарь</Text>
      
      {/* ScrollView позволяет контенту прокручиваться */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {words.map((item) => (
            <View key={item.id} style={styles.cardWrapper}>
                <WordCard {...item}/>
            </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50, // Отступ сверху, чтобы текст не залезал на системную панель
  },
  scrollContainer: {
    alignItems: 'center', // Центрируем карточки по горизонтали
    paddingBottom: 30,    // Отступ снизу, чтобы последняя карточка не прилипала
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#34495e',
  },
  cardWrapper: {
    marginBottom: 20, // Расстояние между карточками
  },
});