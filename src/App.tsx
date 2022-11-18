import Card from "Components/Card/Card";
import PostAddModal from "Components/Modal/PostAddModal";

import { useState, useEffect } from "react";


function App() {
  const [isOpen, setIsOpen] = useState(false)

  const handleModalControl = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Card />
      <button onClick={handleModalControl}>모달 오픈 테스트</button>
      {isOpen === true ? <PostAddModal /> : <></>}
    </div>
  );
}

export default App;
