# web_dev2 4주차

Props: 컴포넌트에 전달되는 데이터(생략 가능), 상위 컴포넌트에서 하위 컴포넌트로 전달되는 읽기 전용 데이터

함수의 매개변수 개념 유사, (불리언, 숫자, 배열 다양한 형태의 데이터)

<컴포넌트명 props이름 = "값"/>

*<Time type = {"1234"}/>

*<Time type = {{id:7, name:"다이진"}}/>

*<Drink fav="coke">
Drink 컴포넌트에 사용한 props의 이름은 fav/ props에 있는 데이터는 중괄호{}를 사용하고 객체에 있는 값 . 사용 =>{} 중괄호로 감싸서 전달

state: 컴포넌트의 상태를 저장하고 변경할 수 있는 데이터

context: 부모 컴포넌트에서 생성, 모든 자식 컴포넌트에 전달

## component => SOC(Separation of Concerns)

별도의 문제를 처리하도록 하는 설계 원칙

html을 반환하는 함수

컴포넌트에 데이터를 흘려보내면 설계된로 UI가 조립되어 사용자에게 보여진다.

Header,Footer 등 각 부분을 독립된 컴포넌트로 만들고, 컴포넌트들을 조립해 화면을 구성한다.

기능단위, UI단위로 쪼개어 코드를 관리한다.

*function Star1() {
  return <div style = {{color : "red"}}>★</div>;
}
왜 괄호가 두개일까?

*{{자바스크립트 문법을 사용하기 때문}}




