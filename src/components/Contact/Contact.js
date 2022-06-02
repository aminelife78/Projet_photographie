import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <main className="container">
      <h2 className="title">CONTACT</h2>
      <div className="separator"></div>
      <div className="container-forms">
        <article className="container-form">
          <div className="text-form">
            <p>
              Si vous avez des questions à propos de nos produits ou de nos
              services, veuillez nous contacter en remplissant le formulaire
              ci-dessous, nous vous répondrons dans les plus brefs délais.{" "}
            </p>
          </div>
          <div className="content-form">
            <h3>Nous envoyer un message</h3>
            <form name="contact" method="POST" data-netlify="true" >
              <input type="hidden" name="form-name" value="contact" />
              <div className="input-content">
                <label htmlFor="nom">Nom: </label>
                <br />
                <input type="text" name="nom" id="nom" />
              </div>
              <div className="input-content">
                <label htmlFor="email">Email: </label>
                <br />
                <input type="text" name="email" id="email" />
              </div>
              <div className="input-content">
                <label>Objet: </label>
                <br />
                <input type="text" name="objet" id="objet" />
              </div>
              <div className="input-content">
                <label>Message: </label>
                <br />
                <textarea type="text" name="message" id="message" />
              </div>
              <button type="submit" className="validForm">
                Envoyer
              </button>
            </form>
          </div>
        </article>
      </div>
    </main>
  );
};

export default Contact;
