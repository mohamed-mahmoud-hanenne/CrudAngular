Angular CRUD Application
Cette application est un exemple de système CRUD (Create, Read, Update, Delete) développé en utilisant Angular. Elle permet à l'utilisateur de visualiser, créer, modifier et supprimer des éléments à partir d'une interface utilisateur intuitive.

Fonctionnalités
Affichage de la liste des éléments existants.
Création d'un nouvel élément.
Modification des détails d'un élément existant.
Suppression d'un élément.

Technologies Utilisées
Angular: Framework JavaScript pour la construction d'applications côté client.
HTML/CSS: Langages de balisage et de style pour la structure et la présentation de l'interface utilisateur.
TypeScript: Langage de programmation typé utilisé pour écrire du code Angular.
Angular CLI: Interface de ligne de commande pour Angular, utilisée pour générer des composants, des services, etc.
Bootstrap: Framework CSS pour la conception de l'interface utilisateur.
JSON Server: Outil permettant de créer un serveur RESTful à partir d'un fichier JSON pour faciliter le développement et les tests.

Guide d'installation
Cloner ce dépôt sur votre machine locale.
Assurez-vous d'avoir Node.js et npm installés.
Exécutez npm install pour installer les dépendances du projet.
Exécutez npm install -g json-server pour installer JSON Server globalement sur votre machine.
Naviguez vers le dossier server et créez un fichier JSON pour simuler votre base de données.
Exécutez json-server --watch db.json pour démarrer JSON Server et simuler une API REST.
Retournez à la racine du projet et exécutez ng serve pour lancer l'application Angular. Naviguez vers http://localhost:4200/.

Structure du Projet
src/app/components: Contient les composants Angular de l'application.
src/app/services: Contient les services Angular utilisés pour la logique métier et les appels HTTP.
src/app/models: Contient les modèles de données utilisés par l'application.
src/app/shared: Contient les éléments partagés tels que des composants, des directives, des pipes, etc.
src/assets: Contient les ressources statiques comme les images, les fichiers CSS, etc.
server: Contient le fichier JSON simulé pour le serveur JSON.
