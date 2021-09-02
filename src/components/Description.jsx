import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import "./all.css";
import { Divider } from "@material-ui/core";

export default function Description(props) {
  return (
    <div>
      <div className="description1">
        <h2>Qu'est ce que la naturopathie ? </h2>

        <Divider />
        <p>
          En 1997, la naturopathie a été reconnue par le Parlement Européen
          comme médecine non conventionnelle puis en 2001, comme une pratique de
          médecine traditionnelle par l'OMS (Organisation Mondiale de la Santé).
          <br />
          C'est une médecine holistique, c'est-à-dire qu'elle prend en compte
          l'individu dans son ensemble au lieu d'isoler une seule partie de
          celui-ci.​ Son but est de chercher les causes du déséquilibre du corps
          et de rétablir les piliers de la santé afin que l'organisme puisse
          s'épanouir à nouveau correctement.
          <br /> En effet, si l'on ne supprime pas les causes d'un mal et que
          l'on tente à chaque fois de réprimer le symptôme, il finira toujours
          par revenir puisque l'on n'a rien changé a son nid douillet.
        </p>
      </div>
      <div className="description2">
        <h2>Pourquoi consulter une naturopathe?</h2>
        <Divider />
        <p>
          Les sphères d'action de la naturopathie sont multiples, dès lors que
          vous êtes confronté(e)s à des maux récurrents, il y a recherche de
          leurs causes et rééquilibrage du corps en fonction de ce que nous
          avons mis en lumière.
        </p>
        <div className="sixreasons">
          <div className="bigcard">
            <span className="smallcard">
              <CardHeader
                title="Troubles génito-urinaires"
                subheader="Aménorrhée, dysménorrhée, cystite, mycose génitale, pertes génitales, ..."
              />
            </span>
            <span className="smallcard">
              <CardHeader
                title="Troubles ostéo-articulaires "
                subheader="Troubles ostéo-articulaires 
    Tendinite, goutte, arthrose, polyarthrite rhumatoïde, ostéoporose, spondylarthrite ankylosante, fibromyalgie, ..."
              />
            </span>
            <span className="smallcard">
              <CardHeader
                title="Troubles ORL"
                subheader="Nez encombré, bronchite chronique, angine et amygdalite à répétition, sinusite, otite, ..."
              />
            </span>
          </div>
          <div className="bigcard">
            <span className="smallcard">
              <CardHeader
                title="Troubles digestifs "
                subheader="Ballonnements, constipation, diarrhée, difficulté à digérer, reflux gastriques, ulcère, gastrite, colopathie fonctionnelle, maladie de Crohn, rectocolite hémorragique, ..."
              />
            </span>
            <span className="smallcard">
              <CardHeader
                title="Troubles de la peau"
                subheader="Acné, psoriasis, eczéma, herpès, mycoses, ..."
              />
            </span>
            <span className="smallcard">
              <CardHeader
                title="Ainsi que:"
                subheader="Volonté de perte ou prise de poids, fatigue chronique, stress, dépression, insomnie, problèmes circulatoires, hémorroïdes, ..."
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
