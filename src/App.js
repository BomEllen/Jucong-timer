import './Reset.css';
import styled from "styled-components";
import kiki from './image/run.gif'
import { useEffect, useState } from "react";

function App() {
    const [inputTime, setInputTime] = useState(0);
    const [timeChecker, setTimeChecker] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        if (inputTime === 0 && timeChecker === false) {
            if (intervalId !== null) {
                clearInterval(intervalId);
            }
        }
    }, [inputTime, timeChecker, intervalId]);

    const TimerHandler = () => {
        if (inputTime > 0 && !timeChecker) {
            setTimeChecker(true);

            const newIntervalId = setInterval(function () {
                if (inputTime >= 1) {
                    setInputTime(prevInputTime => prevInputTime - 1);
                }
            }, 1000);

            setIntervalId(newIntervalId);

            setTimeout(function () {
                setTimeChecker(false);
                alert("🚨🚨🚨 !!! 타임아웃 !!! 🚨🚨🚨");
                clearInterval(newIntervalId);
            }, inputTime * 1000);
        }
    }

    const InputHandler = (event) => {
        setInputTime(event.target.value);
    }

    return (
        <Container>
            <Title>
                You're Late!!
            </Title>
            <Image src={kiki} />

            <Input
                type="number"
                onChange={InputHandler}
                placeholder={"타이머 시간을 입력하세요"}
            />
            <TimeText>{inputTime}</TimeText>
            <ButtonLayer>
                <Button onClick={TimerHandler}>시작</Button>
            </ButtonLayer>
        </Container>
    );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  padding-top: 10%;
`;

const Title = styled.h1`
  color: #FAD15C;
  font-size: 2rem;
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
  font-size: 3rem;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  margin-top: 30px;
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

export default App;
