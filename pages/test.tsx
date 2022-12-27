import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectData, getData } from "../redux/reducer/dataSlice";

export default function test() {
  const dispatch = useAppDispatch();
  const { data, pending, error } = useAppSelector(selectData);

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  return (
    <div>
      <h2>Generate random data</h2>
      {pending ? <p>Loading...</p> : data["editor's choice"].map((val:any, index:number) => {
        return (
            <p key={index} className="text-2xl font-bold">{val.editor}</p>
        )
      })}
      {/* {error && <p>Oops, something went wrong</p>} */}
      <button onClick={() => dispatch(getData())}>
        Generate Apa aja
      </button>
    </div>
  );
}
