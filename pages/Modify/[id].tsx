import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { postsAction } from "../../state/posts";
import { RootState } from "../../state";
import ModyFyForm from "../../components/ModifyForm";

function ModifyPage() {
  const router = useRouter();
  const query: any = router.query;
  const postId = query.id;

  const dispatch = useDispatch();

  const post = useSelector((state: RootState) => {
    return state.postsReducer.data.find(
      (post) => post.id === parseInt(postId, 10)
    );
  });

  useEffect(() => {
    const { getData } = postsAction;
    dispatch(getData({ post: "post" }));
  }, []);

  const onSubmit = async (values: { title: string; body: string }) => {
    const { modifyPost } = postsAction;
    const modifyData = {
      title: values.title,
      body: values.body,
      id: postId,
    };
    await dispatch(modifyPost(modifyData));
    router.push(`/post/${postId}`);
  };

  return (
    <div>
      <h1>글수정 페이지 입니다.</h1>
      <ModyFyForm onSubmit={onSubmit} defaultValue={post} />
    </div>
  );
}

export default ModifyPage;
