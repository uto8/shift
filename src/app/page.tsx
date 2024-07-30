"use client";
import { addPost, deletePost } from "@/features/Post";
import { useAppDispatch, useAppSelector } from "@/stores";
import { decrement, increment, setValue } from "@/stores/reducers/CountersReducer";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Home() {

  const postList = useSelector((state) => state.posts.value)
  console.log(postList)

  const dispatch = useDispatch();

  const handleClick = () => {
    console.log('add click')
    dispatch(addPost({
        name: "メンマ(本人)"
      })
    );
  }
  const handleDelete = (index: number) => {
    console.log('click')
    dispatch(deletePost(index));
  };

  return (
    <main className="min-h-screen p-24">
      <h1>React-Redux 掲示板</h1>
      <button onClick={()=>{handleClick()}}>追加</button>
      <div>
        {
          postList.map((post, index) => (
            <div key={post.index}>
              <h1>{post.name}</h1>
              <button onClick={()=>{handleDelete(index)}}>削除</button>
            </div>
          ))
        }
      </div>
    </main>
  );
}
