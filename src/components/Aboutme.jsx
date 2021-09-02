import { Divider } from "@material-ui/core";
import React from "react";
import "./all.css";

export default function Aboutme(props) {
  return (
    <div className="aboutme">
      <h2>A mon propos</h2>
      <Divider />
      <div className="aboutme2">
      <img src="/coco.jpg" alt="profile-coralie-guyon" className="profile" />
      <p className="profile-description" >
        Une enthousiaste de la vie et de ces péripéties ! J'aime, et ai toujours
        aimé, me laisser porter par les défis et surprises que la vie m'apporte.
        Cependant, lorsque ces surprises ont été portées sur ma santé,
        l'enthousiasme a été beaucoup moins présent. Je me suis donc penchée sur
        les causes et le pourquoi .. Jusqu'à trouver les réponses dans la
        naturopathie et devenir une passionnée et professionnelle dans ce
        domaine. Après une formation et certification dans la naturopathie et
        les neurosciences, je me suis spécialisée dans les troubles digestifs,
        domaine qui m'intéresse tout particulièrement par son impact sur
        beaucoup d'autres troubles. J'ai également rejoint l'équipe de
        naturopathes de Coralie Beguin en 2020 <br/>
    
      <h2>Quelle est mon approche en consultation ? </h2>
   
        Mon rôle en tant que naturopathe est de vous aider à rétablir les
        piliers de votre santé et de retrouver l'équilibre de votre organisme.
        Une fois que nous avons mis en lumière les différentes sphères d'action,
        je souhaite également vous donner les clés de la motivation, au travers
        des neurosciences, qui permettront une pérennité de votre mise en
        action.
      </p>   
      </div>
    </div>
  );
}

