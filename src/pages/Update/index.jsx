import { useState, useEffect } from "react";

import { api } from "../../service/api";

import { useParams } from "react-router-dom";

import { Container, Content, Form, InputWrapper, SectionIngredients } from "./styles";

import {SlArrowLeft, FiUpload} from 'react-icons/all';

import {Header} from '../../components/Header';
import {Label} from '../../components/Label';
import {IngredientItem} from '../../components/IngredientItem'
import {Textarea} from '../../components/Textarea';
import { Footer } from '../../components/Footer'

export function Update(){
  const [avatarFile, setAvatarFile] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();

  function addIngredients(){
    setIngredients(prevState => [...prevState, newIngredient])
  }

  function removeIngredient(ingredientDeleted){
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== ingredientDeleted))
  }


  async function handleUpdateDish({name, description, ingredients, price}){ 
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
    formData.append("price", Number(replacePrice));
    ingredients.map(ingredient => formData.append("ingredients", ingredient));

    await api.put(`/dish/update/${params.id}`, formData);

    alert("Prato atualizado com com sucesso");

    setIsLoading(false);
  }

  useEffect(() => {
    async function getProduct(){
      const response = await api.get(`/dish/show/${params.id}`);
      const {name, description, price, ingredients} = response.data;

      setName(name);
      setDescription(description);
      setPrice(String(price/100).replace(".", ","));
      setIngredients(ingredients.map(ingredient => ingredient.name));
      
    }

    getProduct();
  }, [])


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
                value={name}
                onChange={e => setName(e.target.value)}
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
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                />
              </div>
            </InputWrapper>
            <Textarea 
              label="Description" 
              title="Descrição" 
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              defaultValue={description}
              onChange={e => setDescription(e.target.value)}
            />
            <button
              type="button"
              disabled={isLoading}
              onClick={() => handleUpdateDish({name, description, ingredients, price})}
            >
              {isLoading ? "Atualizando pedido" : "Atualizar pedido"}
            </button>
        </Form>
      </Content>
      <Footer />
    </Container>
  )
}