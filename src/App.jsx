import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";
import { useReducer, useRef, createContext } from "react";

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      state;
  }
  return state;
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

// 1. "/" : 모든 일기를 조회하는 화면
// 2. "/new" : 새로운 일기를 작성하는 화면
// 3. "/Diary" : 일기를 상세조회하는 화면
// 4. "*" : path경로가 맞지않으면 이동하는 화면
export default function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };
  // 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };
  // 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };
  return (
    <>
      <button
        onClick={() => {
          onCreate(new Date().getTime(), 1, "Hello");
        }}
      >
        생성
      </button>
      <button
        onClick={() => {
          onUpdate(1, new Date().getTime(), 3, "수정된 일기");
        }}
      >
        수정
      </button>
      <button
        onClick={() => {
          onDelete(1);
        }}
      >
        삭제
      </button>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onDelete, onUpdate }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}
