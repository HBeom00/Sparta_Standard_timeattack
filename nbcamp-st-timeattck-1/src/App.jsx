import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

const List = () => {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [goldMd, setGold] = useState(0);
  const [silverMd, setSilver] = useState(0);
  const [bronzeMd, setBronze] = useState(0);

  const addBtn = () => {
    if (name.length === 0) {
      alert("국가명을 입력해 주세요");
    } else if (list.filter((el) => el.name === name).length > 0) {
      alert("이미 존재하는 국가 입니다.");
    } else {
      const newPost = {
        id: crypto.randomUUID(),
        name: name,
        gold: +goldMd,
        silver: +silverMd,
        bronze: +bronzeMd,
      };

      setList([...list, newPost]);
      setName("");
      setGold(0);
      setSilver(0);
      setBronze(0);
    }
  };

  const deleteBtn = (id) => {
    const filterList = list.filter((el) => el.id !== id);
    setList(filterList);
  };

  const updateBtn = () => {
    if (list.filter((el) => el.name === name).length > 0) {
      const postIdx = list.indexOf(list.filter((el) => el.name === name)[0]);
      const copyList = [...list];
      const updatePost = {
        id: crypto.randomUUID(),
        name: name,
        gold: +goldMd,
        silver: +silverMd,
        bronze: +bronzeMd,
      };
      copyList[postIdx] = updatePost;
      setList(copyList);
      setName("");
      setGold(0);
      setSilver(0);
      setBronze(0);
    } else alert("해당 국가가 없습니다.");
  };

  return (
    <>
      <div>
        <Input state={name} setState={setName}>
          국가명
        </Input>
        <Input state={goldMd} setState={setGold} />
        <Input state={silverMd} setState={setSilver} />
        <Input state={bronzeMd} setState={setBronze} />
        <Button onClick={addBtn} style={{ border: "1px solid blue" }}>
          추가
        </Button>
        <Button onClick={updateBtn} style={{ border: "1px solid blue" }}>
          업데이트
        </Button>
      </div>
      <div>
        {list
          .sort((a, b) => b.gold - a.gold)
          .map((el) => {
            return (
              <div key={el.id} style={{ display: "flex", gap: "20px" }}>
                <div>{el.name}</div>
                <div>{el.gold}</div>
                <div>{el.silver}</div>
                <div>{el.bronze}</div>
                <Button
                  onClick={() => deleteBtn(el.id)}
                  style={{ border: "1px solid blue" }}
                >
                  삭제
                </Button>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default List;
