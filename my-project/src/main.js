/*
<!-- 
    Projet fait par : Charles Heppell 
    Date : 2022-07-26
    Révisé le : N/A
    Description : Petite  application  web  fait sur le framework Vue.js qui  sert à interoger un web API de météo (openWeather API) l'aide d'un input, 
    et retoune la météo de la ville écrite dans une card a l'aide d'une requete. 
    Main: Sert ici a créé l'application on  import les librairie ici 
-->
*/
import { createApp } from 'vue'
import App from './App.vue'
// Les importation on été fait pour amener la librairie bootstrap a l'intérieur du projet ici mais avant tout il a fallu que j'installe dans le terminal la librairie 
// J'ai installer  bootstrap dans le projet a l'aide de la commande --> npm install bootstrap poppers.js jquery
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).mount('#app')
