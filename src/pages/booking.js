import React from "react";
import Layout from "@theme/Layout";

export default function BookingPage() {
  return (
    <Layout
      title="Book a Session"
      description="Schedule your Classic WoW Buddy session"
    >
      <main
        style={{
          padding: "2rem",
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1>📅 Book a Session</h1>

        <p>
          Ready to play together? I offer several session types depending on
          your schedule. All bookings are shown in your **local time zone**, and
          I'm based in Thailand (UTC+7).
        </p>

        <p>
          I play on **US Classic servers only**. After booking, I’ll contact you
          via Discord to confirm and send payment details.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          <a
            href="https://tidycal.com/m868861/classic-wow-buddy-1-hour-session"
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
          >
            🧙 1-Hour Session – $12
          </a>

          <a
            href="https://tidycal.com/m868861/classic-wow-buddy-2-hour-session-m5rq7ol"
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
          >
            🐉 2-Hour Adventure – $20
          </a>

          <a
            href="mailto:info@classicwowbuddy.com?subject=5-Session%20Pack"
            style={{ ...buttonStyle, backgroundColor: "#888" }}
          >
            📦 5-Session Pack – $50 (Contact to Schedule)
          </a>
        </div>

        <p style={{ marginTop: "3rem", color: "#aaa" }}>
          💬 Discord: <code>markusm</code>
          <br />
          📧 Email:{" "}
          <a href="mailto:info@classicwowbuddy.com">info@classicwowbuddy.com</a>
        </p>
      </main>
    </Layout>
  );
}

const buttonStyle = {
  display: "inline-block",
  padding: "1rem 2rem",
  backgroundColor: "#ccaa66",
  color: "#1b1208",
  borderRadius: "6px",
  fontWeight: "bold",
  fontSize: "1.1rem",
  textDecoration: "none",
};
