import React from 'react';
import { useImmer } from 'use-immer';
import './Academy.css';

export default function Academy() {
  const [academy, updateAcademy] = useImmer(currentAcademy);
  const handleChangeName = () => {
    const name = prompt('어떤 수강생의 이름을 변경하겠습니까?');
    const changeName = prompt(`${name} 수강생의 이름을 무엇을 변경하겠습니까?`);
    updateAcademy((academy) => {
      const student = academy.students.find(
        (findStudent) => findStudent.name === name
      );
      student.name = changeName;
    });
  };
  const handleChangeAge = () => {
    const name = prompt('어떤 수강생의 나이를 변경하겠습니까?');
    const changeAge = prompt(`${name} 수강생의 나이를 몇 살로 변경하겠습니까?`);
    updateAcademy((academy) => {
      const student = academy.students.find(
        (findStudent) => findStudent.name === name
      );
      student.age = changeAge;
    });
  };
  const handleAdd = () => {
    const addName = prompt('추가할 수강생의 이름을 입력하세요');
    const addAge = prompt(`${addName} 수강생의 나이를 입력하세요`);
    updateAcademy((academy) =>
      academy.students.push({ name: addName, age: addAge })
    );
  };
  const handleDelete = () => {
    const name = prompt('어떤 수강생을 삭제하겠습니까?');
    updateAcademy((academy) => {
      const index = academy.students.findIndex(
        (findStudent) => findStudent.name === name
      );
      if (index < 0) return;
      academy.students.splice(index, 1);
    });
  };
  return (
    <div className='text'>
      <h1>{`${academy.class}의 명단`}</h1>
      <ul>
        {academy.students.map((student) => (
          <li>{`${student.name}의 나이 ${student.age}살`}</li>
        ))}
      </ul>
      <button onClick={handleChangeName}>수강생 이름 변경</button>
      <button onClick={handleChangeAge}>수강생 나이 변경</button>
      <br />
      <button onClick={handleAdd}>수강생 추가하기</button>
      <button onClick={handleDelete}>수강생 삭제하기</button>
    </div>
  );
}

const currentAcademy = {
  class: '취업반',
  students: [
    {
      name: '김도영',
      age: '25',
    },
    {
      name: '유지예',
      age: '23',
    },
    {
      name: '호지운',
      age: '28',
    },
  ],
};
