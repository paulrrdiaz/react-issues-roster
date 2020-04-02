import React, { useState, useRef } from "react";
import { Link } from "@reach/router";
import Reward from "react-rewards";
import random from "lodash/random";

const texts = [
  "You should not click this button 🙅🏻‍♂️",
  "Hey! what I said? 🤨",
  "Come on! Grow up 😒",
  "Seriosly? 😣",
  "Unbelievable 😠",
];

const interations = ["confetti", "emoji"];

export default ({ maxCount = 4 }) => {
  const [count, setCount] = useState(0);
  const rewardRef = useRef();

  const onClick = () => {
    rewardRef.current.rewardMe();
    setCount(count + 1);
  };

  const isLastOne = count === maxCount;
  const Button = () =>
    isLastOne ? (
      <Link to="/nowhere">Fine! I'll take you to somewhere 🤪</Link>
    ) : (
      <button type="button" onClick={onClick}>
        {texts[count]}
      </button>
    );

  return (
    <Reward
      ref={rewardRef}
      type={interations[random(0, 1)]}
      config={{ spread: 150, startVelocity: 15 }}
    >
      <Button />
    </Reward>
  );
};
