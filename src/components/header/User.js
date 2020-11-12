import React, {Component} from "react";

export default class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  }

  toggleConnexion = () => {
    this.setState((state) => ({isLoggedIn: !state.isLoggedIn}));
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let bouton;

    if (isLoggedIn) {
      bouton = <button onClick={this.toggleConnexion}>
                Déconnexion
              </button>
    } else {
      bouton = <button onClick={this.toggleConnexion}>
                Connexion
              </button>;
    }

    return (
      <div>
        {bouton}
      </div>
    );
  }
}
