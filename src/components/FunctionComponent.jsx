import { useEffect, useState } from "react";
import CustomButton from "./CustomButton/CustomButton";
import Row from "../components/Row/Row";

const Counter = () => {
  //State Tanımlama
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);

  /**
   * Fonksiyon Comps'larda componentin yaşamını izlemek için useEffect kullanılır.
   * * Yazım Şekilleri
   * 1- useEffect(()=>{},[])
   * 2- useEffect(()=>{})
   * 3- useEffect(()=>{},[state])
   * 4- useEffect(()=>{return()=>{}},[])
   *
   * *Kullanımları
   * 1-) Bileşen ekrana ilk geldiği anda çalışır
   * *Kullanım Amacı => API istekleri, bileşenin render kontrolüi db istekleri...
   * 2-) Bileşen her güncellendiğinde çalışır
   * * Kullanım Amacı => Anlık güncellenen verilere göre durum değişeceği zaman (döviz siteleri)
   * 3-) Bileşendeki belirli bir durumda değişiklik olması halinde çalışır
   * * Kullanım Amacı => instagramda post beğenildiğinde beğeni sayısının artırılması gibi.
   * 4-) Bileşen ekrandan gittiği anda çalışır
   * *
   */

  useEffect(() => {
    console.log("Fonksiyon Component Ekrana Basıldı");
  }, []);

  // Bileşende her değişiklik olduğu anı yakalamak için
  //componentDidMount metounun karşılığı
  useEffect(() => {
    console.log("Bileşen Güncellendi", count);
  });

  // Çalışmak için page state'ini dikkate alır
  useEffect(() => {
    console.log("Sayfa Değişti", page);
  }, [page]);

  useEffect(() => {
    return () => {
      console.log("FOnksiyon Component Ekrandan gitti");
    };
  }, []);

  return (
    <div>
      <Row style={{ width: "200px" }}>
        <CustomButton
          buttonTitle={"Arttır"}
          onClick={() => setCount(count + 1)}
        />
        <p>{count}</p>
        {count >= 0 && (
          <CustomButton
            buttonTitle={"Azalt"}
            onClick={() => setCount(count - 1)}
          />
        )}
      </Row>

      <div>Şu an {page}. Sayfadasınız</div>
      <button onClick={() => setPage(page + 1)}>Sayfayı Değiştir</button>
    </div>
  );
};
export default Counter;
