const Input = ({ state, setState, children }) => {
  return (
    <input
      type={children === "국가명" ? "text" : "number"}
      value={state}
      placeholder={children === "국가명" ? "국가 입력" : ""}
      onChange={(e) => setState(e.target.value)}
    />
  );
};
export default Input;
