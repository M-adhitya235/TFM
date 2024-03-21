import React from 'react';
import { View, Text, Image, Button } from 'react-native';

const Account = ({ user }) => {
  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{ uri: 'https://placeimg.com/100/100/people' }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{user.nama}</Text>
          <Text style={{ fontSize: 16 }}>{user.email}</Text>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18 }}>Informasi Akun</Text>
        <View style={{ borderBottomWidth: 1, borderColor: '#ddd', padding: 10 }}>
          <Text>Alamat: {user.alamat}</Text>
          <Text>Telepon: {user.telepon}</Text>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Button title="Ubah Kata Sandi" />
      </View>
    </View>
  );
};

export default Account;
