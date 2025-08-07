import { useState } from 'react';

// type으로 정의하기
type JSXElement = () => JSX.Element;
type MainType = boolean;
type ClickType = () => void;

// interface로 정의하기
interface IJSXElement {
  (): JSX.Element;
}
interface IClickType {
  (): void;
}

const ToggleSwitch: JSXElement | IJSXElement = () => {
  // ts 자리
  const [isOn, setIsOn] = useState<MainType>(false);
  const handleClick: ClickType | IClickType = () => {
    setIsOn(!isOn);
  };
  // tsx 자리
  return (
    <div>
      <h2>ToggleSwitch: {isOn ? '밝아요' : '어두워요'}</h2>
      <div>
        <button onClick={handleClick}>토글</button>
      </div>
    </div>
  );
};

export default ToggleSwitch;
