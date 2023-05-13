// Jeu du Morpion

// Créer un plateau de jeu vide
let plateau = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  
  // Variable pour suivre le joueur actuel (X ou O)
  let joueurActuel = 'X';
  
  // Fonction pour effectuer un mouvement
  function jouerCoup(ligne, colonne) {
    // Vérifier si la position sélectionnée est vide
    if (plateau[ligne][colonne] === '') {
      // Placer le symbole du joueur actuel dans la position sélectionnée
      plateau[ligne][colonne] = joueurActuel;
  
      // Mettre à jour l'interface utilisateur avec le symbole du joueur actuel
      document.getElementById('plateau').children[ligne * 3 + colonne].innerText = joueurActuel;
  
      // Changer de joueur
      joueurActuel = (joueurActuel === 'X') ? 'O' : 'X';
  
      // Vérifier s'il y a un gagnant
      if (verifierGagnant()) {
        alert('Le joueur ' + joueurActuel + ' a gagné !');
        // Vous pouvez effectuer d'autres actions lorsque qu'un joueur gagne ici
      } else {
        // Pas encore de gagnant, continuer la partie
        // Vous pouvez effectuer d'autres actions ici
      }
    } else {
      alert('Coup invalide. La position est déjà occupée.');
    }
  }
  
  // Fonction pour vérifier s'il y a un gagnant
  function verifierGagnant() {
    // Vérifier les lignes
    for (let i = 0; i < 3; i++) {
      if (
        plateau[i][0] !== '' &&
        plateau[i][0] === plateau[i][1] &&
        plateau[i][0] === plateau[i][2]
      ) {
        return true;
      }
    }
  
    // Vérifier les colonnes
    for (let j = 0; j < 3; j++) {
      if (
        plateau[0][j] !== '' &&
        plateau[0][j] === plateau[1][j] &&
        plateau[0][j] === plateau[2][j]
      ) {
        return true;
      }
    }
  
    // Vérifier les diagonales
    if (
      plateau[0][0] !== '' &&
      plateau[0][0] === plateau[1][1] &&
      plateau[0][0] === plateau[2][2]
    ) {
      return true;
    }
    if (
      plateau[0][2] !== '' &&
      plateau[0][2] === plateau[1][1] &&
      plateau[0][2] === plateau[2][0]
    ) {
      return true;
    }
  
    return false;
  }
  