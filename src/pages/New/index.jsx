import { useState } from "react";

import { api } from "../../service/api";

import { useNavigate } from "react-router-dom";

import { Container, Content, Form, InputWrapper, SectionIngredients } from "./styles";

import {SlArrowLeft, FiUpload} from 'react-icons/all';

import {Header} from '../../components/Header';
import {Label} from '../../components/Label';
import {IngredientItem} from '../../components/IngredientItem'
import {Textarea} from '../../components/Textarea';
import { Footer } from '../../components/Footer'

export function New(){

  const [ingredients, setIngredients] = useState([]);

  const [newIngredient, setNewIngredient] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate();


  function addIngredients(){
    setIngredients(prevState => [...prevState, newIngredient])
  }

  function removeIngredient(ingredientDeleted){
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== ingredientDeleted))
  }

  async function handleNewDish({name, description, ingredients, price}){
    try{

      setIsLoading(true);

      if(!name || !description || !ingredients || !price) {
        setIsLoading(false);
        return alert("Preencha todos os campos")
      }

      const replacePrice = price.replace(",", ".")

      const formData = new FormData();
      formData.append("avatar", avatarFile)
      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("price", Number(replacePrice));
      ingredients.map(ingredient => formData.append("ingredients", ingredient));


      await api.post("/dish/create", formData);

      alert("Prato criado com sucesso");

      setIsLoading(false);

    } catch(error){
      alert("Nao foi possível cadastrar o prato")
      setIsLoading(false);
      console.log(error);
    }
  } 
  return (
    <Container>
      <Header />
      <Content>
        <button onClick={() => navigate(-1)}>
          <SlArrowLeft />
          Voltar
        </button>
        <h2>Criar um prato</h2>
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
                      onChange={e => setAvatarFile(e.target.files[0])}
                    />
                  </div>
              </label>
            </div>
            <Label 
                label="name" 
                title="Nome do prato" 
                type="text" 
                placeholder="Ex.: Salada Ceasar"
                onChange={e => setName(e.target.value)}
              />
              <Label
                label="category"
                title="Categoria"
                type="text"
                placeholder="pratos principais" 
                onChange={e => setCategory(e.target.value)}
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
              onClick={() => handleNewDish({name, description, price, ingredients, })}
            >
              {isLoading ? "Adicionando pedido" : "Adicionar pedido"}
            </button>
        </Form>
      </Content>
      <Footer />
    </Container>
  )
}