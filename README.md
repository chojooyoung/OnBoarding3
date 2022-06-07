# Onboarding 3차 발표

## 목차

- 프로젝트 셋팅
- 프로젝트 폴더 구조와 설계 의도
- 주 사용 라이브러리와 사용 의도
- 마무리

- 깃허브 링크
    
    [https://github.com/chojooyoung/OnBoarding3](https://github.com/chojooyoung/OnBoarding3)
    
- 

## 1. 프로젝트 셋팅

**npx create-next-app**을 통해 프로젝트 셋팅을 간편히 하였습니다.

## 2. 폴더 구조
![image](https://user-images.githubusercontent.com/66211721/172274744-3d8fd7e8-8f7b-4f21-8b97-7f6ba67c0d0f.png)

## 3. 사용 라이브러리 / 프레임워크

### 라이브러리

<img width="670" alt="image" src="https://user-images.githubusercontent.com/66211721/172275367-1ee755b5-c0ff-4dd5-9bb0-883198299988.png">


### 프레임워크

<img width="714" alt="image" src="https://user-images.githubusercontent.com/66211721/172275438-3953a064-949d-46f8-bfd5-b59250aa0a71.png">
**next js**는 React로 만드는 서버사이드 렌더링 프레임 워크입니다.

## Server Side Rendering?

단어 그대로 서버에서 렌더링 작업을 하는것을 의미합니다. 기존에 존재하던 방식으로 사용자가 웹페이지에 접근할 때 서버에서 페이지에 대한 요청을 하며 서버에서는 html, view와 같은 리소스들을 어떻게 보여질지 해석하고 렌더링하여 사용자에게 반환합니다.

### 순서

<img width="709" alt="image" src="https://user-images.githubusercontent.com/66211721/172275479-a0747d08-0618-40a1-a017-4f5852ee5a7a.png">
1. User가 Website 요청을 보냄.
2. Server는 'Ready to Render'. 즉, 즉시 렌더링 가능한 `html`파일을 만든다.(리소스 체크, 컴파일 후 완성된 HTML 컨텐츠로 만든다.)
3. 클라이언트에 전달되는 순간, 이미 렌더링 준비가 되어있기 때문에 HTML은 즉시 렌더링 된다. 그러나 사이트 자체는 조작 불가능하다. (Javascript가 읽히기 전이다.)
4. 클라이언트가 자바스크립트를 다운받는다.
5. 다운 받아지고 있는 사이에 유저는 컨텐츠는 볼 수 있지만 사이트를 조작 할 수는 없다. 이때의 사용자 조작을 기억하고 있는다.
6. 브라우저가 Javascript 프레임워크를 실행한다.
7. JS까지 성공적으로 컴파일 되었기 때문에 기억하고 있던 사용자 조작이 실행되고 이제 웹 페이지는 상호작용 가능해진다.

## CSR

CSR이란 최초에 1번 서버에서 전체 페이지를 로딩하여 보여주고 이후에는 사용자의 요청이 올 때마다, 리소스를 서버에서 제공한후 클라이언트가 해석하고 렌더링을 하는 방식입니다.

Angular js, Backbone js 같이 SPA개발이 쉬운 js프레임워크가 등장했습니다.

### 순서

<img width="707" alt="image" src="https://user-images.githubusercontent.com/66211721/172275503-623363fc-4acc-4bc0-992a-930b9ee6250f.png">

1. User가 Website 요청을 보냄.
2. CDN이 HTML 파일과 JS로 접근할 수 있는 링크를 클라이언트로 보낸다. 
(CDN? 유저의 요청에 '물리적'으로 가까운 서버에서 요청에 응답하는 방식) 
3. 클라이언트는 HTML과 JS를 다운로드 받는다.(이때 SSR과 달리 유저는 아무것도 볼 수 없다.)
4. (js파일 다운로드 완료)
5. 다운이 완료된 JS가 실행된다. 데이터를 위한 `API`가 호출된다.(이때 유저들은 `placeholder`를 보게된다. )
6. 서버가 API로부터의 요청에 응답한다.
7. API로부터 받아온 data를 placeholder 자리에 넣어준다. 이제 페이지는 상호작용이 가능해진다

## ssr을 하는 이유???

- 검색 엔진 최적화(SEO)
- 더 빠른 초기 로딩 속도

## SEO?

SEO는 **검색 엔진 최적화** 를 의미합니다 . SEO의 목표는 검색 엔진 결과에서 순위를 높이는 전략을 만드는 것입니다. 순위가 높을수록 사이트에 더 많은 유기적 트래픽이 발생하여 궁극적으로 더 많은 비즈니스로 이어집니다!

### CSR 장점

- 첫 로딩에 HTML과 static파일들만 다 받으면, 동적으로 빠르게 Rendering하기 때문에 사용자 UX가 뛰어나다.
- 서버에 요청하는 횟수가 훨씬 적기 때문에 서버 부담이 덜하다.

### CSR 단점

- 모든 HTML과 static파일이 로드될 때까지 기다려야 한다.(리소스를 Chunk(청크) 단위로 묶어서 요청할 때만 다운받에 하는 방식으로 완화시킬 수는 있지만 해결할 수는 없다.)
- SEO(검색엔진 최적화) 문제가 발생할 수 있다.(검색엔진이 크롤링을 하는데 어려움을 겪기 때문에, 구글 검색엔진은 javascript까지 크롤링을 하지만 다른 검색엔진의 경우 그렇지 않다.)

### SSR 장점

- 장점초기 로딩 속도가 빠르기 때문에 사용자가 컨텐츠를 빨리 볼 수 있다.
- 모든 검색엔진에 대한 SEO(검색엔진 최적화)가 가능하다.

### SSR 단점

- 단점매번 페이지를 요청할 때마다 새로고침 되기 때문에 사용자 UX가 다소 떨어진다.
- 서버에 매번 요청을 하기 때문에 트래픽, 서버 부하가 커진다.

## Next.js 의 특별함?

### 기존 SSR의 문제점

Server-Side와 Client-side에서 각각 렌더링을 위한 코드를 따로 만들어야 한다!

이를 해결하기위해 

**Isomorphic(Universal) 방식** 등장

### **Isomorphic(Universal) 방식?**

같은 코드로 server와 client에서 동일하게 실행되는 환경

같은언어로 서버를 사용하는 경우가 많음(node.js)

<img width="692" alt="image" src="https://user-images.githubusercontent.com/66211721/172275549-b63119b1-c283-4afc-a326-d3adb4bebfe2.png">
그래서 ssr을 Isomorphic 방식을 제공해주는 프레임워크가 **Next.js입니다.**

## 그 외 장점

- ****코드 분할(Code Splitting) 자동화****
- **자동 이미지 최적화**
- **Fast Refresh - HMR(Hot Module Replacement)**

## Next.js

### Routing 방식

기존 react 라우터와의 차이
<img width="748" alt="image" src="https://user-images.githubusercontent.com/66211721/172275571-82f2a60c-229b-4a15-a363-4dfcb14ec94d.png">

### 렌더링 방식

****Pre-rendering****

<img width="699" alt="image" src="https://user-images.githubusercontent.com/66211721/172275602-932c6537-066c-40b5-9ba7-a404fb74a1b7.png">
Next.js의 가장 중요한 컨셉중에 하나인 Pre-rendering 에 대해 살펴보겠습니다.

기본적으로, Next.js의 모든 페이지는 pre-rendering 되어집니다. 

(이것은 Next.js가 각각의 HTML 페이지를 생성한다는것을 의미합니다.)

각각의 생성된 HTML은 각 페이지에 꼭 필요로하는 최소한의 Javascript 코드로 이루어져있고, 브라우저에서 페이지가 로드될때 Javascript 코드가 실행되고, 인터렉티브를 생성합니다.

javascript 코드가 동작하면서 인터렉션을 생성하는 과정을 **hydration** 이라고 합니다.

이러한 과정을 통해 Pre-rendering은 사용자가 보기에 초기에 빠른 속도와 SEO를 할 수 있습니다.

### Hydration?

**Hydration는 Server Side 단에서 렌더링 된 정적 페이지와 번들링된 JS파일을 클라이언트에게 보낸 뒤, 클라이언트 단에서 HTML 코드와 React인 JS코드를 서로 매칭 시키는 과정입니다.**

Next.js는 Server Side 단에서 미리 웹 페이지를 Pre-Rendering 한다. 그리고 Pre-Redering으로 인해 생성된 HTML document를 클라이언트에게 전송한다.

이 시점에서 현재 클라이언트가 받은 웹 페이지는 단순히 웹 화면만 보여주는 HTML일 뿐이고, 자바스크립트 요소들이 하나도 없는 상태이다. 이는 웹 화면을 보여주고 있지만, 특정 JS 모듈 뿐 아니라 단순 클릭과 같은 이벤트 리스너들이 각 웹 페이지의 DOM 요소에 하나도 적용되어 있지 않은 상태임을 말한다.

그러면 이렇게 페이지만 보여주고 동작조차 하지 못하는 마치 빈 껍데기 같은 웹 페이지가 나중에는 어떻게 정상적으로 동작하게 되는 것일까요?

Next.js Server에서는 Pre-Rendering된 웹 페이지를 클라이언트에게 보내고 나서, 바로 리액트가 번들링 된 자바스크립트 코드들을 클라이언트에게 전송한다.

<img width="1224" alt="image" src="https://user-images.githubusercontent.com/66211721/172275648-342008b5-78a2-4e2b-b82f-53e5566385f1.png">
네트워크 탭을 보면, 맨 처음 응답받는 요소가 document Type의 파일이고, 이후에 React 코드들이 렌더링 된 JS 파일들이 Chunk 단위로 다운로드되는 것을 확인할 수 있습니다.

그리고 이 자바스크립트 코드들이 이전에 보내진 HTML DOM 요소 위에서 한번 더 렌더링을 하면서, 각자 자기 자리를 찾아가며 매칭이 됩니다.

이 과정을 Hydrate라고 부른다.

## PreRendering을 하기위한  방식

<img width="660" alt="image" src="https://user-images.githubusercontent.com/66211721/172275670-46be5300-5ccb-4031-a85b-276f9077426a.png">
Static Generation을 사용한다면, 페이지의 HTML은 build-time(빌드 시점)에 생성됩니다.

즉, production에 페이지의 HTML은 'next build'가 실행되는 시점에 생성된다는 점이 SSR과의 차이입니다.

- **Static Generation**은 HTML을 빌드 타임에 생성한다. pre-render된 HTML은 그 다음에 리퀘스트에서 재사용된다.
- **Server-side Rendering**은 요청이 올때마다 HTML을 생성하는 방식이다.

이 생성된 HTML은 각각의 모든 요청(request)에서 재사용 되고, CDN에 의해 캐싱될 수 있습니다.

그러나 생성되는 페이지에서 외부 데이터를 포함하냐 안 하냐에 따라 Static Generation이 달라집니다.

**Next.js는 SSR을 기반으로 하지만, 페이지가 로드된 이후엔 React에서 CSR을 이용하는 방식을 차용합니다.** 

1. 페이지는 서버가 그립니다. pages/안에 폴더를 만들면, 해당 라우팅의 페이지들은 서버측에서 먼저 로드해줍니다.

2. 페이지가 그려진 이후에 페이지 내부에서 동적인 데이터를 패치하는 과정(axios 등을 이용)은 CSR의 방식을 따릅니다. 이때의 데이터들은 일단 페이지가 로드된 이후에 클라이언트 측에서 다시 렌더되며 불러와집니다. 그렇기 때문에 SEO에 걸리지 않습니다.

**그렇기 때문에 만약 페이지가 로드될 때 함께 데이터가 패칭되어야 하는 상황이라면(pre-rendering) next.js의 데이터 패칭 방식 (getStaticProps, getStaticPath, getServerSideProps)을 이용해 첫 렌더에 데이터가 패칭될 수 있도록 처리를 해주어야 합니다.**

### getStaticProps

getStaticProps는 빌드시 고정되는 값으로 빌드 이후에는 수정이 불가능합니다.

### **getStaticPaths**

**동적라우팅 + getStaticProps를 원할 때 사용합니다.**

페이지가 동적 라우팅을 쓰고 있고, getStaticProps를 쓰는 경우, getStaticPaths을 통해 빌드 타임 때 정적으로 렌더링할 경로를 설정해야합니다. 여기서 정의하지 않은 하위 경로는 접근해도 화면이 뜨지 않습니다. 동적라우팅 할 때, 라우팅 되는 경우의 수를 하나하나 집어넣어야 합니다.

### **getServerSideProps**

getServerSideProps는 빌드와 상관없이, 매 페이지 요청마다 데이터를 서버로부터 가져옵니다.

getServerSideProps는 페이지를 렌더링하기전에 반드시 fetch해야할 데이터가 있을 때 사용합니다. 매 페이지 요청시마다 호출되므로 getStaticProps보다 느리지만, 빌드 이후에도 페이지 요청마다 실행된다는 특징이 있습니다.

- getServerSideProps는 서버사이드에서만 실행되고, 절대로 브라우저에서 실행되지 않는다.
- getServerSideProps는 매 요청시 마다 실행되고, 그 결과에 따른 값을 props로 넘겨준 뒤 렌더링을 한다.

### 외부 데이터가 없는 경우

```jsx
function About() {
    return <div>About</div>
}
```

### 외부 데이터가 있는 경우(W.getServerSideProps)

ex) 게시물 리스트를 미리 받아오고 싶다면

```jsx
interface Post {
  title: string;
  body: string;
  id: number;
}

interface Props {
  data: Post[];
}

const Page = ({ data }: Props) => {
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

export const getServerSideProps = async () => {
  const posts = await axios.get("http://localhost:3001/post");
  const data = posts.data;
  return { props: { data } };
};
```

<img width="1399" alt="image" src="https://user-images.githubusercontent.com/66211721/172275724-904c9ac4-5f45-4ed9-9077-06d4fe0ef754.png">

### 외부 데이터가 있는 경우(With.redux,redux-saga)

상태관리를 redux로 하고, 비동기 처리를 saga로 진행하였기 때문에, 

**Next.js가 제공하는 getServerSideProps등에서 리덕스 스토어에 접근할 수 있어야 합니다.**

따라서  **next-redux-wrapper를 이용하여 편리하게 가능합니다.**

### next-redux-wrapper

리액트에서는 단 하나의 리덕스 스토어만 존재.

**Next.js는 유저가 요청할때마다 redux store를 새로 생성한다.**

**Next.js가 제공하는 getServerSideProps등에서 리덕스 스토어에 접근할 수 있어야 한다.** 

1차때 진행했던 redux-toolkit을 이용한 `configureStore`를 이용하여, store를 만들고,

유저가 페이지를 요청할때마다 리덕스 스토어를 생성해야 하기 때문에 store를 next-redux-wrapper의 createWrapper로 감쌉니다.

```jsx
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

const configureStores = () => {
						...
};

export const wrapper = createWrapper(configureStores);
```

_app.tsx에서 해당 wrapper를 감싸면 getServerSideProps, getStaticProps등에서 리덕스 스토어에 접근이 가능해집니다.

```jsx
import { wrapper } from "../state/";

export default wrapper.withRedux(App);
```

그러나 next.js에서 생성한 redux store와 client에서 생성한 redux store는 다르기 때문에 이 둘을 합쳐야 합니다.

```jsx
const rootReducer = combineReducers({
  index: (state, action) => {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };

      default:
        return state;
    }
  },
  postsReducer,
}); 
```

그래서 이렇게 서버에서 생성한 스토어의 상태를 **HYDRATE** 액션을 통해서 클라이언트에 합쳐주는 작업이 필요합니다.

action.payload에는 서버에서 생성한 스토어의 상태가 담겨있고, 이 둘을 합쳐 새로운 클라이언트의 리덕스 스토어의 상태를 만든다.

getServerSideProps에서 사용합니다.

```jsx
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
```

- 최종 게시물 리스트 코드
    
    ```jsx
    import axios from "axios";
    import { postsAction } from "../state/posts";
    import { wrapper } from "../state";
    import rootReducer from "state/rootReducer";
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
    // export const getServerSideProps = async () => {
    //   const posts = await axios.get("http://localhost:3001/post");
    //   const postList = posts.data;
    //   return { props: { postList } };
    // };
    export default Page;
    ```
    

# 회고

### next js

- next.js를 사용해보면서 csr / ssr이 무엇인지, 각각의 장/단점이 무엇인지 알 수 있었다.
- 프로젝트에 도입한 것 이외의 기능들(자동 이미지 최적화 등등)도 공부가 필요하다고 생각했습니다.
