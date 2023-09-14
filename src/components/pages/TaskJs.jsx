import React, { useState } from "react";

function TaskJs() {
  const [showSolution, setShowSolution] = useState(false);

  const handleToggleSolution = () => {
    setShowSolution(!showSolution);
  };

  const uniqueNumbers = `const uniqueNumbers = (arr) => {
    const uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
      }
    }
    return uniqueArr;
  };`


  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Уникальные числа</h1>
        <h2 className="title-3">Напиши функцию, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные числа из исходного массива.</h2>

        <button className="btn" onClick={handleToggleSolution}>Показать решение</button>
      
        {showSolution && (   
          <div className="answer-task">
            <h3>Решение:</h3>
            <br />
            <pre>
              <code>
                {uniqueNumbers}
              </code>
            </pre>
            <br />
            <h3>Пример использования:</h3>
            <p>
              Входной массив: [1, 2, 3, 4, 4, 5, 2, 6, 7]
              <br />
              Выходной массив: [1, 2, 3, 4, 5, 6, 7]
            </p>
          </div>
        )}
        
      </div>
    </main>
  );
}

export default TaskJs;
