import React, { useState } from "react";
import { Link } from "@reach/router";

const texts = [
  "You should not click this button 🙅🏻‍♂️",
  "Hey! what I said? 🤨",
  "Come on! Grow up 😒",
  "Seriosly? 😣",
  "Unbelievable 😠",
];

export default ({ maxCount = 4 }) => {
  const [count, setCount] = useState(0);

  const isLastOne = count === maxCount;
  const Button = isLastOne ? (
    <Link to="/nowhere">Fine! I'll take to (some|no)where 😏</Link>
  ) : (
    <button onClick={() => setCount(count + 1)}>{texts[count]}</button>
  );

  return Button;
};
