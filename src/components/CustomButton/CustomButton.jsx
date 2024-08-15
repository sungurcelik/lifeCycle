import { useEffect } from "react";

const CustomButton = ({ buttonTitle, onClick }) => {
  useEffect(() => {
    console.log("Ekrana Geldi");
    return () => {
      console.log("Ekrandan Gitti", buttonTitle);
    };
  }, []);

  return <button onClick={onClick}>{buttonTitle}</button>;
};

export default CustomButton;
