import { Container } from "./styles";

import macaImg from '../../assets/maca.png';
import maracujaImg from '../../assets/maracuja.png';;
import farinhaImg from '../../assets/farinha.png';
import clarasImg from '../../assets/clara.png';
import canelaImg from '../../assets/canela.png';
import ameixaImg from '../../assets/ameixa.png';
import amendoasImg from '../../assets/amendoas.png';
import tomateImg from '../../assets/tomate.png';
import massaImg from '../../assets/massa.png';
import paoNanImg from '../../assets/paonan.png';
import paoImg from '../../assets/pao.png';
import rabaneteImg from '../../assets/rabanete.png';
import pepinoImg from '../../assets/pepino.png';
import cafeImg from '../../assets/cafe.png';
import ruculaImg from '../../assets/rucula.png';
import camaraoImg from '../../assets/camarao.png';
import limaoImg from '../../assets/limao.png';
import anizImg from '../../assets/aniz.png';
import pestoImg from '../../assets/pesto.png';
import presuntoImg from '../../assets/presunto.png';
import whiskeyImg from '../../assets/wiskey.png';
import damascoImg from '../../assets/damasco.png';
import pessegoImg from '../../assets/pessego.png';
import alfaceImg from '../../assets/alface.png';



export function Ingredient({name}){
  let ingredient = name.toLowerCase().trim();
  let ingredientImg;

  if (ingredient == "alface") {
   ingredientImg = alfaceImg
  } else if (ingredient == "tomate") {
   ingredientImg = tomateImg
  } else if (ingredient == "rabanete") {
   ingredientImg = rabaneteImg
  } else if (ingredient == "pão naan") {
   ingredientImg = paoNanImg
  } else if (ingredient == "pão") {
   ingredientImg = paoImg
  } else if (ingredient == "presunto") {
   ingredientImg = presuntoImg
  } else if (ingredient == "rúcula") {
   ingredientImg = ruculaImg
  } else if (ingredient == "camarão") {
   ingredientImg = camaraoImg
  } else if (ingredient == "massa") {
   ingredientImg = massaImg
  } else if (ingredient == "pesto") {
   ingredientImg = pestoImg
  } else if (ingredient == "pepino") {
   ingredientImg = pepinoImg
  } else if (ingredient == "ameixa") {
   ingredientImg = ameixaImg
  } else if (ingredient == "farinha") {
   ingredientImg = farinhaImg
  } else if (ingredient == "pêssego") {
   ingredientImg = pessegoImg
  } else if (ingredient == "amêndoas") {
   ingredientImg = amendoasImg
  } else if (ingredient == "claras") {
   ingredientImg = clarasImg
  } else if (ingredient == "damasco") {
   ingredientImg = damascoImg
  } else if (ingredient == "maracujá") {
   ingredientImg = maracujaImg
  } else if (ingredient == "café") {
   ingredientImg = cafeImg
  } else if (ingredient == "canela") {
   ingredientImg = canelaImg
  } else if (ingredient == "aniz") {
   ingredientImg = anizImg                
  } else if (ingredient == "limão") {
   ingredientImg = limaoImg
  } else if (ingredient == "whiskey") {
   ingredientImg = whiskeyImg
  } else if (ingredient == "maçã") {
    ingredientImg = macaImg
  } else {
    ingredientImg = damascoImg
  }

  return(
    <Container>
      <img src={ingredientImg} alt={ingredient} />
      <span>{ingredient}</span>
    </Container>
  )
}