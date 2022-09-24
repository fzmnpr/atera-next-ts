import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Layout.module.css";
import Navigation from "./Navigation";
interface layoutPropTypes {
  title?: string;
  children: React.ReactNode;
}
function Layout({ title, children }: layoutPropTypes) {
  return (
    <>
      <Head>
        <title>{title ? title : "atera"}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Navigation />
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}

export default Layout;
