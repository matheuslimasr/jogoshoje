/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDBRPnzZNY7Ody5rYNVYMFTsKNKq8bx-gM",
  authDomain: "golesya-81d3f.firebaseapp.com",
  databaseURL: "https://golesya-81d3f-default-rtdb.firebaseio.com",
  projectId: "golesya-81d3f",
  storageBucket: "golesya-81d3f.firebasestorage.app",
  messagingSenderId: "1021524638308",
  appId: "1:1021524638308:web:ac392bf1673d0accf8fd71"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Mensagem recebida em background:", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
