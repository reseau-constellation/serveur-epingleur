<p align="center">
  <a href="https://réseau-constellation.ca" title="Constellation">
    <img src="./src/assets/logo.svg"
        alt="Logo Constellation.jl" width="244" 
    />
  </a>
</p>

<h1 align="center">Porte-épingles</h1>

<p align="center">Un serveur pour épingler des données de Constellation</p>

## Un serveur ?! Mais pourquoi ?
L'avantage de [Constellation](https://réseau-constellation.ca) est justement qu'elle ne nécessite pas de serveur, et que les données vivent sur les dispositifs (téléphones, ordinateurs) de vos utilisateurs et utilisatrices et que ces données sont partagées automatiquement entre toutes les personnes qui participent au réseau.

Mais, parfois, s'il y a des données qui sont importantes pour vous, vous voudrez peut-être être sûrs qu'elles seront toujours disponibles, même si la personne qui les a contribuées ferme son ordinateur avant d'aller se coucher, même si son téléphone tombe dans un égout[^1], même ses données sont peu populaires et donc répliquées sur peu de dispositifs d'autres utilisatrices. Dans ce cas, vous pouvez configurer un serveur qui *épinglera* et garantira la disponibilité des données qui vous intéressent.

Mais ne vous inquiétez pas ! Ce n'est pas un « vrai » serveur, seulement un (super) pair Constellation qui participe au réseau comme tous les autres pairs, mais qui est configuré pour rester connecté au réseau en tout temps et pour suivre les données qui vous importent afin d'améliorer leur disponibilité.

<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #8a6d3b;; background-color: #fcf8e3; border-color: #faebcc;">
<b>! Attention : Porte-épingles est un projet en cours de développement.</b> Il peut contenir des erreurs et il est toujours possible qu'une telle erreur puisse mener à une perte de données. Il est donc recommendable d'utiliser Porte-épingles pour augmenter la disponibilité des données qui vous intéressent, mais de toujours en garder une copie locale épinglée sur l'appli Constellation et exportée dans le format (LibreOffice, Excel) de votre choix sur un ordinateur qui vous appartient. Cette exportation peut même être automatisée dans Constellation. Comme ça, si le pire devait arriver, vous pourrez toujours accepter mes plus plates excuses, réinitialiser le serveur, et repartager vous données sauvegardées.
</div>

## Comment ça fonctionne ?
Pour utiliser Porte-épingles, vous devrez en déployer une copie sur le serveur de votre choix [voir ci-dessous](#déploiement). 

L'accès ne se fait pas par mot de passe, sinon par votre compte Constellation. Incluez la variable d'environnement suivante dans votre déploiement :
```
COMPTE_AUTORISÉ="/orbitdb/zdpuAnESL9ntuxLXY7aU7YkGQgKuYaga7NeWRCckjSA7EGMn3/racine"
```

...en remplaçant, bien entendu, l'adresse commençant en `zdpu...` ci-dessus par votre propre adresse de compte Constellation (à moins, évidemment, que vous ne vouliez donner le contrôle de votre serveur à [moi](https://github.com/julienmalard)).

Vous pourrez ensuite suivre l'état de votre serveur et décider ce que vous voulez y épingler directement dans l'interface de Constellation (onglet « Porte-épingles »).

## Options d'épingles
Dans l'interface Constellation, vous pouvez configurer chaque serveur Porte-épingles vous appartenent afin qu'il suive les données, projets, ou comptes Constellation dont vous voulez garantir la disponibilité.

## Déploiement
Vous pouvez déployer Porte-Épingles sur le serveur de votre choix. Voici, ci-dessous, des instructions pour quelques plateformes commerciales communes.

### Back4App

### Digital Ocean

### Google

### AWS

### Heroku


[^1]: Situation entièrement hypothétique.
