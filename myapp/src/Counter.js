import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("컴포넌트가 마운트되었습니다.");
    return () => {
      console.log("컴포넌트가 언마운트되었습니다.");
    };
  }, []);

  useEffect(() => {
    console.log("카운트가 변경되었습니다:", count);
    return () => {
      console.log("카운트 변경 전에 정리 작업을 수행합니다:", count);
    };
  }, [count]);

  return (
    <div>
      <h1>카운트: {count}</h1>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
    </div>
  );
};

export default Counter;
