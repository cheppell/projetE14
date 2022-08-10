<!-- 
    Projet fait par : Charles Heppell 
    Date : 2022-07-26
    Révisé le : N/A
    Description : Petite  application  web  fait sur le framework Vue.js qui  sert à interoger un web API de météo (openWeather API) l'aide d'un input, 
    et retoune la météo de la ville écrite dans une card a l'aide d'une requete. 
    Vue : Cette vue sert plus de container au template de l'application on  import le composant de météo retourner  ici (ici c'est comme l'acceuil du  projet et on retourne tout les composant et instance)
-->

<!-- Commande pour l'installation de Vue CLI : npm install -g @vue/cli -->
<!-- Pour démarrer l'application avec le serveur il  faut utiliser la commande : npm run serve -->
<!-- Pour fermer l'application avec le serveur il  faut utiliser les raccourcis clavier  : ctrl + c  et répondre oui pour la fermeture -->

<!-- Chaque vue doit avoir son  template ici c'est plus le visuel on joue avec les composants -->
<template>
  <div  class="container"> <!-- id="app" -->
    <img id="bulleyes" alt="Vue logo" src="./assets/logo.png" class="text-center">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- Ici c'est le nouveau composant que on recoit de la vue maMeteo -->
    <ma-meteo></ma-meteo>
  </div>
</template>

<!-- Chaque vue doit avoir son script ici on  applique la logique et les donnée a manipuler -->
<script>
//import HelloWorld from './components/HelloWorld.vue'
//importation  du composant ici maMeteo
import maMeteo from './components/maMeteo.vue'


export default {
  name: 'App',
  components: {
    //on a besoin de faire du spinalcase (utiliser le trait d'union)  pour avoir accès aux composant
    'ma-meteo': maMeteo
  }
}
</script>

<!-- Chaque vue doit avoir son style les enfant peuvent hériter du style des parents mais tous peuvent être changer -->
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(231,64,165,0.9780287114845938) 29%, rgba(0,212,255,1) 100%);
    color: antiquewhite;
  }
  #bulleyes {
    text-align: center;
    margin-top: 60px;
  }
  body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(231,64,165,0.9780287114845938) 29%, rgba(0,212,255,1) 100%);
    color: antiquewhite;
  }
 
</style>


