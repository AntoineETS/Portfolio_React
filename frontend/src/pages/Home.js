import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <main>
          <section className="welcome-section">
            <h2>Bienvenue sur mon portfolio web</h2>
            <p>Je suis ravis de vous voir ici. Découvrez moi et apprenez-en plus sur ce que je fais en vous promenant sur ce site.</p>
          </section>
        </main>
        <footer>
          <p>&copy; 2024 Antoine Lamontagne. Tous droits réservés.</p>
        </footer>
      </div>
    );
  }
}

export default Home;
