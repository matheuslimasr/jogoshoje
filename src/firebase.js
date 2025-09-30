// src/firebase.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDBRPnzZNY7Ody5rYNVYMFTsKNKq8bx-gM",
  authDomain: "golesya-81d3f.firebaseapp.com",
  databaseURL: "https://golesya-81d3f-default-rtdb.firebaseio.com",
  projectId: "golesya-81d3f",
  storageBucket: "golesya-81d3f.firebasestorage.app",
  messagingSenderId: "1021524638308",
  appId: "1:1021524638308:web:ac392bf1673d0accf8fd71"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Função para pedir permissão e pegar o token
export const requestForToken = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey: "BMnsZkiq1vLEMFKyLDlUGiBjctUXpZfUAsE071Dmu4z49oKw21yfIflZeLBy6dUZcUTq_nMaPR-sakQOgiT7mUA" // gerada no Firebase Console
    });

    if (token) {
      console.log("Token do dispositivo:", token);
      // aqui você pode enviar o token para o backend salvar
    } else {
      console.log("Nenhum token recebido. Permissão não concedida.");
    }
  } catch (error) {
    console.error("Erro ao buscar token:", error);
  }
};

// Listener para mensagens em primeiro plano
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
