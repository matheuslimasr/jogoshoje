// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// 🔑 Coloque aqui as credenciais do seu app Firebase
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

// Exporta o banco de dados
export const db = getDatabase(app);
