// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import ScreenLayout from "../components/ScreenLayout";
// import FooterLayout from "../components/FooterLayout";
// import Banners from "../components/Banners";
// import Categories from "../components/Categories";
// import Link from "next/link";
// import Test from "./test";
// import Head from "next/head";
// // import { localListAction } from "../actions/advertiseActions";
// import { localListAction } from "../redux/actions/advertiseActions";
// import { advertiseListAction } from "../redux/actions/advertiseActions";

// export default function HomePage() {
//   const dispatch = useDispatch();

// return (
//   <div>
//     <Head>
//       <meta
//         name="viewport"
//         content="width=device-width, initial-scale=1"
//       ></meta>
//       <meta name="description" content="Home page of inmatown"></meta>
//       <meta charSet="utf-8"></meta>
//       <link rel="icon" href="/favicon.ico"></link>
//       <title>Inmatown</title>
//     </Head>

{
  /* <Banners /> */
}
{
  /* <Categories /> */
}

{
  /* <ScreenLayout header1='News' header2="Advertise" datas={listLocal} datas2={listAdvertise} /> */
}
{
  /* <FooterLayout /> */
}
{
  /* </div>
  );
} */
}

import Page from "../components/Page";
import { incrementCounter } from "../store/counterSlice";
import { addUser } from "../store/usersSlice";
import { wrapper } from "../store/store";

const Index = (props) => {
  return (
    <div>
      <h2>test</h2>
      <Page title="Index Page" linkTo="/others" />)
    </div>
  );
};

// export const getStaticProps = wrapper.getStaticProps((store) => () => {
//   store.dispatch(incrementCounter())
// })

export default Index;

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async () => {
//       store.dispatch(addUser(`${data.first_name} ${data.last_name}`))
//       store.dispatch(increment())
//     }

// );
