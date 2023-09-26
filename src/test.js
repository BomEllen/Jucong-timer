import './Reset.css';
import styled from "styled-components";
import kiki from './image/run.gif'
import {useEffect, useState} from "react";

function App() {
    const [inputTime, setInputTime] = useState(0);  //핵심! usestate    // 초기값 0, 상태 업데이트 하기 위한 react hook
    const [timeChecker, setTimeChecker] = useState(false); //true : 타이머가 안끝난거

    useEffect(() => {
        const intervalId = setInterval(function () {
            if(inputTime>=1)
                setInputTime(inputTime - 1);
        }, 1000); // 1000 밀리초 (1초)에 한번씩 위 if를 실행해서 1초에 -1씩 되게 만듬
        if(inputTime===0 && timeChecker === false){
            clearInterval(intervalId); // setInterval로 반환된 ID를 사용하여 중지합니다.
        }
    }, [inputTime]);


    const TimerHandler = () => {
        console.log("타이머 시작합니당~~");
        setTimeChecker(true);

        setTimeout(function() {
            setTimeChecker(false);
            alert("타임아웃");
        }, inputTime);
    }

    // const ResetHandler = () => {
    //     alert("리셋됨");
    // }

    const InputHandler = (evnet) => {  // 값을 넣어준걸 넣어주는 역할
        // console.log("이벤트",evnet);
        console.log("값",evnet.target.value);  //사용자의 입력 값.
        setInputTime(evnet.target.value);
    }

    return (
        <Container>
            <Title>
                You're Late!!
            </Title>
            <Image src={kiki}/>

            <Input
                type="number"
                onChange={InputHandler}  // 인풋에 변화가 생길 때 마다 인풋 핸들러 실행해라~
                placeholder={"타이머 시간을 입력하세요"}
            />
            <TimeText>{inputTime}</TimeText>  {/*인풋 타임 출력*/}
            <ButtonLayer>
                <Button onClick={TimerHandler}>시작</Button>
                {/*<Button onClick={ResetHandler}>리셋</Button>*/}
            </ButtonLayer>
        </Container>
    );
}




export default App;

const Container = styled.div`
  width: 100vw;  // 보이는 화면 다 채우기
  height: 100vh;
  text-align: center;
  //display: flex;                  //외우기 아래 두줄까지  ((검색))
  //align-items: center;            //세로의 중앙
  //justify-content: center;        //가로의 중앙
  padding-top: 10%;
`;

const Title = styled.h1`
  color: #FAD15C;
  font-size: 2rem;  //사이즈에 따라 바뀌는 것
  font-family: "Squashy Flow";
`;

const Image = styled.img`
  width: 40%;
  margin-top: 35px;
  border-radius: 15px;
`;

const Input = styled.input`
  display: block;
  margin: 20px auto;
  height: 30px;
  border: solid #4C7295 2px;
  border-radius: 15px;
  text-align: center;
  width: 40%;
  font-family: Mapo한아름;
  font-weight: bolder;
  letter-spacing: 5px;
`;

const TimeText = styled.p`
  padding: 2%;
  font-size: 40px;
  font-family: "롯데리아 촵땡겨체";
`;

const ButtonLayer = styled.div`
  color: black;
  font-size: 3rem;  //사이즈에 따라 바뀌는 것
  display: flex;
  justify-content: space-around;  // 버튼 사이 공간주기 ((검색)) 일단 버튼 한개라 없앰
`;

const Button = styled.button`
  margin-top: 30px;
  //display: block;  //버튼을 블록화 (( 한 줄에 나만 있을 수 있어 ))
  width: 90px;
  height: 50px;
  border: none;
  border-radius: 13px;
  background-color: #FAD15C;
  font-size: 23px;
  font-family: "롯데리아 촵땡겨체";
  color: #4C7295;
  letter-spacing: 5px;
`;





