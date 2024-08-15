import { useEffect, useState } from "react";
import CustomButton from "../CustomButton/CustomButton";

export function TodosPage() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    console.log("bağlılıksız çalıştı");
    fetch(`https://jsonplaceholder.typicode.com/todos/${page}`)
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log("bağlılıklı çalıştı");
    fetch(`https://jsonplaceholder.typicode.com/todos/${page}`)
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, [page]);

  return (
    <div>
      {todos.length === 0 && <div>Yükleniyor</div>}
      <div>
        <p>Başlık: {todos.title}</p>
        <p>Kullanıcı Bilgisi: {todos?.id}</p>
        <p>
          Tamamlanma Durumu:
          {todos?.completed === true ? "Tamamlandı" : "Tamamlanmadı"}
        </p>
      </div>
      <CustomButton
        buttonTitle={"Todos Geç"}
        onClick={() => setPage(page + 1)}
      />
    </div>
  );
}
