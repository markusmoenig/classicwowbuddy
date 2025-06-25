import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Play World of Warcraft Classic with a real human companion – not a bot, not a boost – just a buddy."
    >
      <main className={styles.main}>
        <div className={styles.hero}>
          <img
            src="/img/cwb.png"
            alt="Classic WoW Buddy Logo"
            className={styles.logo}
          />
          <h1>Classic WoW Buddy</h1>
          <p className={styles.tagline}>
            Tired of playing alone in Azeroth? Wish you had someone to quest,
            chat, or just explore with?
            <strong> I’m a real player </strong> offering laid-back WoW Classic
            companionship – no boosting, no rushing – just good old-fashioned
            fun.
          </p>
          <a className={styles.ctaButton} href="/booking">
            Book a Session
          </a>
        </div>

        <section className={styles.intro}>
          <h2>What Is This?</h2>
          <p>
            <strong>Classic WoW Buddy</strong> is a personal service for players
            who want more out of their WoW Classic experience – someone to group
            with, chat with, and enjoy the world alongside. Think of me as your
            dungeon partner, quest helper, or travel companion – always
            friendly, never sweaty.
          </p>
          <p>
            I’ve been playing WoW since the early days, and I know how empty it
            can feel when you’re online but no one to group with. Whether you’re
            new, returning, or just want to enjoy the game without pressure, I’m
            here.
          </p>
          I play on the <strong>US realms</strong>. If you’re on any US Classic
          server, we can group up and go questing.
        </section>

        <section className={styles.features}>
          <div className={styles.feature}>
            <h3>Real Human Connection</h3>
            <p>
              I’m not a bot or a carry. I’ll actually play with you — exploring,
              chatting, and helping where I can.
            </p>
          </div>
          <div className={styles.feature}>
            <h3>Chill & Casual</h3>
            <p>
              No stress, no pressure, no rushing. Just slow, classic WoW the way
              it was meant to be played.
            </p>
          </div>
          <div className={styles.feature}>
            <h3>Timezone Advantage</h3>
            <p>
              I’m based in Thailand (UTC+7), which means I’m online when your
              server might be quiet — perfect for night owls or daytime
              grinders.
            </p>
          </div>
          <div className={styles.feature}>
            <h3>Flexible Sessions</h3>
            <p>
              Book an hour, a whole evening, or even a multi-session pack. Let’s
              play when it fits your schedule.
            </p>
          </div>
        </section>

        <section className={styles.closer}>
          <h2>Let’s Quest Together</h2>
          <p>
            Whether you're leveling your first toon, working on professions, or
            just want someone to ride alongside,
            <strong> Classic WoW Buddy</strong> is here for you.
          </p>
          <p>
            You don’t need a guild or voice chat — just your character, a bit of
            gold for your mount, and the spirit of adventure.
          </p>
          <a className={styles.ctaButton} href="/booking">
            See Available Times
          </a>
        </section>
      </main>
    </Layout>
  );
}
