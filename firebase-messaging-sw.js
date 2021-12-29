// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyCtFMtwRSc-YetlNoG6NIH4WknPnKh76Ls",
  authDomain: "notification-system-7d1a2.firebaseapp.com",
  projectId: "notification-system-7d1a2",
  storageBucket: "notification-system-7d1a2.appspot.com",
  messagingSenderId: "327795312923",
  appId: "1:327795312923:web:557079104d0d21f71b6bbe"
};


firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
