import React from "react";

import s from "./Loader.module.scss";
export const Loader: React.FC = () => (
  <div className={s.loader} role="status" aria-live="polite">
    Loading...
  </div>
);
