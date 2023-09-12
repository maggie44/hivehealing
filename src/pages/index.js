import React from "react";
import clsx from "clsx";
import TawkMessengerWrapper from "@site/src/components/HomepageFeatures/tawk";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1
          className="hero__title"
          style={{
            fontFamily: "Cormorant Garamond",
            fontStyle: "italic",
            color: "black",
            fontSizeAdjust: "0.50",
          }}
        >
          {siteConfig.title}
        </h1>
        <p
          style={{
            color: "black",
          }}
          className="hero__subtitle"
        >
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}></div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <TawkMessengerWrapper />
      </main>
    </Layout>
  );
}
