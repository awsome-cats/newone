import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyAqmojtzUygoCWROiQEOqSYJQ_LSjwq830',
    authDomain: 'test-news-for-blog.firebaseapp.com',
    databaseURL: 'https://test-news-for-blog.firebaseio.com',
    projectId: 'test-news-for-blog',
    storageBucket: 'test-news-for-blog.appspot.com',
    messagingSenderId: '561335639855',
    appId: '1:561335639855:web:9ad9efd0c65f6198944bda',
    measurementId: 'G-TPBH1LZK3H'
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
