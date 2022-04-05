import { useState } from 'react';
import './styles.css';
import  { db } from './index';
import { doc, getDoc } from "firebase/firestore";


import { NameInput } from './components/NameInput';
import { Title } from './components/Title';
import { Counter } from './components/Counter';
import { EnterWords } from './components/EnterWords';
import { WordList } from './components/WordList';
import { Search } from './components/Search';


function App() {
  const [name, setName] = useState('');
  const [word, setWord] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const [wordArray, setWordArray] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  
  

  
  const onChangeName = (e) => setName(e.target.value);
  
  const onChangeWord = (e) => setWord(e.target.value);

  const onChangeSearchWord = (e) => setSearchWord(e.target.value);

  const onClickAddName = () => {
    let formattedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    setName(formattedName);
    setIsOpen(false);
  };

 

  const onClickSearch = () => {
    let formattedWord = searchWord[0].toUpperCase() + searchWord.slice(1).toLowerCase();
    if(wordArray.includes(formattedWord)){
      alert(`${name} have already know that word!😎`);
    } else {
      alert(`${formattedWord} have not added yet. Would you like to add it to the list?`)
    };
  }

  const onClickRemove = (index) => {
    const newArray = [...wordArray];
    newArray.splice(index, 1);
    setWordArray(newArray);
  }

  const count = wordArray.length;

const wordRef = async(wordData) => {
  const noteSnapshot = await getDoc(doc(db, 'wordList', wordData));
  console.log(noteSnapshot);
}

console.log(wordRef);


  const onClickAdd = () => {
    let formattedWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
    if(wordArray.includes(formattedWord)){
      alert('That word already exist');
      return;
    } 
    const newWordArray = [...wordArray, formattedWord];
    setWordArray(newWordArray);
    setWord('');
  }


  return (
    <div className="App">
      {isOpen ? 
        <NameInput 
          name={name} 
          onClick={onClickAddName} 
          onChange={onChangeName} 
        /> : 
        <h2 className='name-area'>Welcome back {name}!</h2>
      }
      {isOpen ? 
        <h2>Word Counter</h2> : 
        <Title name={name}/>
      }
      <Counter count={count} name={name}/>
      <span className='row'>
      <EnterWords word={word} onClick={onClickAdd} onChange={onChangeWord}/>
      <Search onChange={onChangeSearchWord} onClick={onClickSearch} searchWord={searchWord}/>
      </span>
      <WordList wordList={wordArray} onClick={onClickRemove}/>
      
    </div>
  );
}

export default App;
