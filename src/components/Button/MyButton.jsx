import React from "react";

function Button({ text, color }) {
  return (
    <div>
      <button className={styles.button} style={{ backgroundColor: color}}>
        {text}
      </button>
    </div>
  );
}

export default Button;
