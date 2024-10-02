import { useState } from 'react';

function IterationSample() {
  // const names = ['눈사람', '얼음', '눈', '바람'];
  // const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  // return <ul>{nameList}</ul>;

  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '바람' },
    { id: 4, text: '눈' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  // 배열에 추가
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId, // nextId 값을 Id로 설정
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };

  // 배열에서 삭제
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <>
      <input type="text" value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>;
    </>
  );
}

export default IterationSample;
