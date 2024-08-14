import { useEffect, useState } from "react";

const Counter = () => {
  //State Tanımlama
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);

  /**
   * Fonksiyon Comps'larda componentin yaşamını izlemek için useEffect kullanılır. Bileşeni ekrana ilk basıldığı anı yakalamak için  componentDidMount metodunun karşılığı
   */

  useEffect(() => {
    console.log("Bileşen ekrana basıldı");
  }, []);

  // Bileşende her değişiklik olduğu anı yakalamak için

  useEffect(() => {
    console.log("Bileşen Güncellendi", count);
  });

  useEffect(() => {
    console.log("Sayfa Değişti", page);
  }, [page]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>ARTTIR</button>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>AZALT</button>

      <div>Şu an {page}. Sayfadasınız</div>
    </div>
  );
};
export default Counter;
