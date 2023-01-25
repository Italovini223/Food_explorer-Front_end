import { useState } from "react";

import { Container, Content, Form, InputWrapper, SectionIngredients } from "./styles";

import {SlArrowLeft, FiUpload} from 'react-icons/all';

import {Header} from '../../components/Header';
import {Label} from '../../components/Label';
import {IngredientItem} from '../../components/IngredientItem'
import {Textarea} from '../../components/Textarea';
import { Footer } from '../../components/Footer'

export function Update(){

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function addIngredients(){
    setIngredients(prevState => [...prevState, newIngredient])
  }

  function removeIngredient(ingredientDeleted){
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== ingredientDeleted))
  }

  function handleUpdateDish(){
    const stingPrice = price.replace(",", ".")


    console.log(Number(stingPrice))
  }
  return (
    <Container>
      <Header />
      <Content>
        <button>
          <SlArrowLeft />
          Voltar
        </button>
        <h2>Editar prato</h2>
        <Form>
          <InputWrapper>
            <div className="smallBox">
              <label htmlFor="image" id="file">
                Imagem do prato
                  <div>
                    <FiUpload size={24}/>
                    <span>Selecione a imagem</span>
                    <input 
                      id="image" 
                      type="file"
                    />
                  </div>
              </label>
            </div>
            <Label 
                label="name" 
                title="Nome do prato" 
                type="text" 
                placeholder="Ex.: Salada Ceasar"
                onChange={e => setTitle(e.target.value)}
              />
          </InputWrapper>

          <InputWrapper>
              <SectionIngredients>
                <span>Ingredientes</span>
                <div>
                  {
                    ingredients.map((ingredient, index) => (
                      <IngredientItem 
                        key={String(index)} 
                        value={ingredient}
                        onClick={() => removeIngredient(ingredient)} 
                      />
                    ))
                  }
                  <IngredientItem 
                    isNew 
                    value={newIngredient}
                    placeholder="Adicionar"
                    onChange={e => setNewIngredient(e.target.value)}
                    onClick={addIngredients}
                  />
                </div>
              </SectionIngredients>
              <div className="smallBox">
                <Label
                  label="price" 
                  title="Preço" 
                  type="text" 
                  placeholder="R$ 00,00"
                  onChange={e => setPrice(e.target.value)}
                />
              </div>
            </InputWrapper>
            <Textarea 
              label="Description" 
              title="Descrição" 
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={e => setDescription(e.target.value)}
            />
            <button
              type="button"
              disabled={isLoading}
              onClick={handleUpdateDish}
            >
              {isLoading ? "Adicionando pedido" : "Adicionar pedido"}
            </button>
        </Form>
      </Content>
      <Footer />
    </Container>
  )
}