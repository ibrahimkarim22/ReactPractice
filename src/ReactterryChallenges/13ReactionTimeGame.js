/** https://www.reacterry.com/portal/challenges/reaction-time-game*/
/** Reaction time game
In this coding challenge you’re asked to write a small web game that tests the user’s
reaction time. The game will initially display a red box, the goal is to click on the 
box as soon the box changes color from red to green. The game should display the reaction
time in ms.

You should write all of your game logic in the ReactionTest component.
 By default, it should display a button with the text “Start Game”. 
 This button will be used to start the game.

Once the button is pressed, your app should display a 
red box for anywhere between 1 and 6s.

If the users click on the red box, they failed the game and you should display 
You clicked too early! message and end the game immediately.

If the users click on the green box, they finished the game successfully and you
 should display You took <time>ms! the message, where time indicates the time it
  took them to react in milliseconds.*/

  /** my solution */

import { useState, useEffect } from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background-color: gold;
`;
const Butt = styled.button`
  background-color: green;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: red;
    opacity: 0.3;
  }
`;

const RedBox = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  background-color: red;
  border-radius: 4px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;

const ReactionTime = styled.p`
  font-size: 22px;
  color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClickedRed = styled.p`
  font-size: 22px;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GreenBox = styled.div`
  background-color: green;
  width: 300px;
  height: 100px;
  display: flex;
  border-radius: 4px;
`;

const ReactionTest = () => {
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [isRedBox, setIsRedBox] = useState(false);
    const [isGreenBox, setIsGreenBox] = useState(false);
    const [isGreenBoxTimer, setIsGreenBoxTimer] = useState(false);

    const handleStartGame = () => {
        setIsGameStarted(true);

        const countDown = Math.floor(Math.random() * 6 + 1) * 1000;

        const boxx = () => setTimeout(() => setIsGreenBoxTimer(true), countDown);

        return () => {
            clearTimeout(boxx);
            setIsGreenBoxTimer(false);
        };
    };

    const handleRedClick = () => {
        setIsRedBox(true);
        setIsGameStarted(false);
    };

    const handleGreenClick = () => {
        setIsGreenBox(true);
        setIsGameStarted(false);
    };

    return (
        <>
            <Main>
                {!isGameStarted && <Butt onClick={handleStartGame}>Start Game!</Butt>}
                {isGameStarted && !isGreenBox && !isRedBox && (
                    <RedBox onClick={handleRedClick} />
                )}
                {isGreenBox && <GreenBox />}
                {isGreenBox && <ReactionTime>Your Reaction speed: ms! </ReactionTime>}
                {isRedBox && <ClickedRed>You Clicked Too Early!</ClickedRed>}
            </Main>
        </>
    );
};

export default ReactionTest;
