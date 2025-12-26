import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";

export default function App() {
  const [tasks, setTasks] = useState([]);

  // TROQUE PELO SEU IP (Mantenha a porta :8080 e /tasks)
  // Exemplo: 'http://192.168.0.15:8080/tasks'
  const API_URL = "http://192.168.3.187:8080/tasks";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log("Dados recebidos:", data);
        setTasks(data);
      })
      .catch((error) => console.error("Erro ao buscar:", error));
  }, []);

  // Função que desenha cada cartão
  const renderItem = ({ item }) => (
    <View
      style={[
        styles.card,
        item.completed ? styles.cardCompleted : styles.cardPending,
      ]}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.desc}>{item.description}</Text>
      <View style={styles.statusBadge}>
        <Text style={styles.statusText}>
          {item.completed ? "Concluída" : "Pendente"}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>OmniTask Mobile</Text>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

// Estilos (tipo CSS, mas em JS)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 50, // Espaço para não colar no topo da tela
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  list: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    borderLeftWidth: 5,
    elevation: 3, // Sombra no Android
    shadowColor: "#000", // Sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  cardPending: { borderLeftColor: "#f1c40f" },
  cardCompleted: { borderLeftColor: "#2ecc71" },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  desc: {
    color: "#666",
    marginBottom: 10,
  },
  statusBadge: {
    backgroundColor: "#eee",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  statusText: {
    fontSize: 12,
    color: "#555",
  },
});
