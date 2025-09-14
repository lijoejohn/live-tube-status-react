/**
 * Loader component to display a loading indicator while data is being fetched.
 * Uses a visually hidden "Loading..." message for accessibility and GOV.UK styling.
 */
import React from "react";

import s from "./Loader.module.scss";
export const Loader: React.FC = () => (
  <div className={s.loader} role="status" aria-live="polite">
    Loading...
  </div>
);
