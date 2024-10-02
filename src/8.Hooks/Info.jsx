import { useState, useEffect, useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

// function Info() {
//   const [name, setName] = useState('');
//   const [nickname, setNickname] = useState('');

//   useEffect(() => {
//     console.log('effect');
//     console.log('effect:', name);
//     return () => {
//       console.log('cleanup');
//       console.log('cleanup:', name);
//     };
//   }, [name]);

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };

//   const onChangeNickname = (e) => {
//     setNickname(e.target.value);
//   };

//   return (
//     <>
//       <div>
//         <input value={name} onChange={onChangeName} />
//         <input value={nickname} onChange={onChangeNickname} />
//       </div>
//       <div>
//         <div>
//           <b>이름 :</b>
//           {name}
//         </div>
//         <div>
//           <b>닉네임 :</b>
//           {nickname}
//         </div>
//       </div>
//     </>
//   );
// }

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: '',
  });

  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름 :</b>
          {name}
        </div>
        <div>
          <b>닉네임 :</b>
          {nickname}
        </div>
      </div>
    </>
  );
};

export default Info;
