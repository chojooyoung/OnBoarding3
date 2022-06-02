import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { postsAction } from "../state/posts";
import { RootState, wrapper } from "../state";
import rootReducer from "state/rootReducer";
import { GetServerSideProps } from "next";
import { END } from "redux-saga";

interface Post {
  title: string;
  body: string;
  id: number;
}

interface Props {
  data: Post[];
}

const Page = ({ data }: Props) => {
  console.log(data);
  return (
    <div>
      getServerSideProps 테스트
      <ul>
        {data.map((data) => {
          return <li key={data.id}>{data.title}</li>;
        })}
      </ul>
    </div>
  );
};

// export const getServerSideProps = async () => {
//   const posts = await axios.get("http://localhost:3001/post");
//   const postList = posts.data;
//   return { props: { postList } };
// };
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const { getData } = postsAction;
    store.dispatch(getData({ post: "post" }));
    store.dispatch(END);
    await store.sagaTask.toPromise();
    const data = store.getState().postsReducer.data;
    return {
      props: { data },
    };
  }
);

export default Page;
