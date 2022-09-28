const RainbowFrame = ({ colors, text }) => {
  const initialBlock = <div>{text}</div>;
  let outBlock = initialBlock;
  colors.forEach((item) => {
    outBlock = <div style={{ border: `solid 5px ${item}` }}>{outBlock}</div>;
  });
  return <>{outBlock}</>;
};
export default RainbowFrame;
