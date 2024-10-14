import { Fragment } from "react";
import Cirlce from "./shapes/Circle";
import Square from "./shapes/Square";
import Triangle from "./shapes/Triangle";
const arr = [
  <Cirlce key={1} />,
  <Square key={2} />,
  <Triangle key={3} />,
  <Cirlce key={4} />,
  <Square key={5} />,
  <Triangle key={6} />,
  <Cirlce key={7} />,
  <Square key={8} />,
  <Triangle key={9} />,
];

function BackgroundShapes() {
  return (
    <Fragment>
      {arr.map((item, index) => {
        const posX = Math.floor(Math.random() * 1000) + 1;
        const posY = Math.floor(Math.random() * 1000) + 1;
        return (
          <span key={index} className={`absolute mt-40`}>
            {item}
          </span>
        );
      })}
    </Fragment>
  );
}

export default BackgroundShapes;
