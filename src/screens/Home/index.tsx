import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  const handleParticipantAdd = () => {
    if (participants.includes(participantName)) {
      return Alert.alert('Participante já adicionado', 'Ja existe um participante com esse nome na lista');
    }
    if (participantName === '') {
      return Alert.alert('Nome vazio', 'Digite um nome para adicionar a lista');
    }
    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
  };

  const handleParticipantRemove = (name: string) => {

    Alert.alert('Remover participante', `Deseja remover ${name} da lista?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
      }
    ])
  };

  function handleStates(value: string) {
    console.log(value);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de junho de 2023</Text>

      <View style={styles.form}>
        <TextInput

          style={styles.input}
          placeholder='Digite seu nome'
          placeholderTextColor='#9C98A6'
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguem chegou ainda? Adicione participantes a sua lista de presença
          </Text>
        )}
      />
    </View>
  );
}
