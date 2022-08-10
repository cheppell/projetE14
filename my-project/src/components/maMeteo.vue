<!-- 
    Projet fait par : Charles Heppell 
    Date : 2022-07-26
    Révisé le : N/A
    Description : Petite  application  web  fait sur le framework Vue.js qui  sert à interoger un web API de météo (openWeather API) l'aide d'un input, 
    et retoune la météo de la ville écrite dans une card a l'aide d'une requete. 
    Vue : Cette vue sert plus de template a l'application
-->
<!-- Ici template propre a cette vue qui  stock tout dans son composant qui  est relier avec la requete de l'API -->
<template>
    <!-- Peu retourner 1 seul composant a la fois alors si on a besoin de retourner plusieur les entourer d'un container -->
    <div class="container">
       <h1 class="my-4 text-center textColor">Votre App météo avec Vue.js</h1>
       <div class="form-groupe mb-5">
            <label for="position" class="textColor">Entrez le nom d'une ville</label>
            <!-- Ici avec v-model (On fait du 2way databinding avec v-model) on va chercher la requete qui  est le nom d'une ville saisie a l'aide de l'évènement Keypress  -->
            <input 
            id="position" 
            type="text"
            class="form-control"
            placeholder="Entrez votre ville ici et appuyer sur la touche 'Enter'."
            v-model="requete"
            v-on:keypress="getMeteo"
            >
       </div> 
       <!-- div pour afficher dans la carte le résultat de la requete ce bloque s'affiche si la variable temps est remplis -->
       <!-- Condition  if faut que le  if et le else soit coller dans le dom note a savoir -->
       <div class="w-75 m-auto" v-if="temps">
            <h3 class="text-center mb-3">Position: {{ temps.name }}</h3>
            <div class="card text-center p-5">
                <p class="texte-affichage">
                    Température : {{ temps.main.temp.toFixed() }}º Celcius
                </p>
                <p class="texte-affichage">
                    Température max : {{ temps.main.temp_max.toFixed() }}º Celcius
                </p>
                <p class="texte-affichage">
                    Température min : {{ temps.main.temp_min.toFixed() }}º Celcius
                </p>
                <p class="texte-affichage">
                    Humidité : {{ temps.main.humidity }}
                </p>
                
                <p class="texte-affichage">
                    Temps: {{ temps.weather[0].description }}
                </p>
            </div>
       </div>
       <!-- Petite gestion d'affichage d'erreur dans la requete -->
       <div class="w-75 m-auto" v-if="erreur">
            <h3 class="text-center mb-3">Error: {{ erreur.message }}</h3>
            <p class="text-center">Erreur dans le nom de la ville.</p>
       </div>
       <div class="texte-affichage mt-3">
            <p>
                Merci d'utiliser nos service météo © 2022 Charles Heppell
            </p>
       </div>
    </div>
</template>


<!-- Ici script propre a cette vue  avec la logique pour questionner l'API-->
<script>
    // Axios est un outils  pour pouvoir faire des requete http. Pour pouvoir utiliser axios dans mon projet j'ai du l'installer a l'aide de la commande : npm install axios
    import axios from 'axios'
    // Pour utiliser du data et des method et l'exporter vers les components
    export default {
        //Faire attention il faut utiliser le nom avec plusieur mot et les joindre avec le traits d'union sinon  donner erreur avec estlin.
        name: 'ma-meteo',
        // Sert a stocker et manipuler les donner ici
        data(){
            return{
                // La donner saisie l'input
                requete: '',
                // Variable pour stocker le résultat de la requete
                temps: undefined,
                // Clé ou token de l'API openweather
                api_code: 'ffb627e6542e92a4c7b7e4f0daa72fc5',
                //L'URL qui  sert d'outils pour faire la requete puis ensuite nous retourner notre json
                url_recherche: 'https://api.openweathermap.org/data/2.5/weather?',
                // Variable pour stocker une erreur de requête.
                erreur: undefined,
            }
        },
        // methods ici sert a faire des petit bloque de code comme les  function et procédure mais surtout des fonctions
        methods: {
            getMeteo(e){
                //Ici la condition pour dire que tu fait la requete seulement si Enter est appuyer
                if(e.key == "Enter"){
                    axios
                    // Ici on par de l'url de recherche pour la ville de base.
                    .get(`${this.url_recherche}q=${this.requete}&units=metric&appid=${this.api_code}&lang=fr`)
                    
                    //Ici quand on a recu les donner et que sa fonctionne va remplir la variable temps
                    
                    .then(reponse => {

                        //console.log(reponse);//<-- pour voir la réponse en json dans la console
                        this.temps = reponse.data;//<-- on rempli la variable temps
                        console.log(this.temps);//<-- pour voir la réponse en json dans la console avec le résultat de la variable temps
                    })
                    // Ici ses pour attraper une potentiel erreur de requête 
                    .catch((error) => {
                        console.error({ error });
                        this.erreur = error.message;
                        console.log(this.erreur);// <-- pour voir la réponse du message d'erreur dans la console
                    });
                    // Ici vide l'input de la saisie de la ville.
                    this.requete = ''
                }
            }
        },
        // permet  de surveiller des actions et faire un  action avec celle-ci
        watch: {
            erreur: function(){
                //remet  erreur a undefined pour cacher la div.
                // Pour utiliser le this sans la function  du fat arrow le mettre en haut du setTimeout (autre exemple).
                // exemple  avec le fat arrow 
                // setTimeout(() => {
                //     cacher.erreur = undefined;
                // }, 3500)
                var cacher = this;
                setTimeout(function(){
                    cacher.erreur = undefined;
                }, 3500)
            },
            // Cacher le résultat de la requete positive.
            temps: function(){
                var cacher = this;
                setTimeout(function(){
                    cacher.temps = undefined;
                }, 5500)
            },
        },
      
    }
</script>

<!-- Ici style propre a cette vue -->
<style>
    .texte-affichage{
        font-size: 30px;
        font-weight: 300;
        line-height: 1.2;
        color: black;
    }
    body{
        background: #9ac54a;
        background: linear-gradient();
    }
    .textColor {
        color: antiquewhite;
    }
</style>