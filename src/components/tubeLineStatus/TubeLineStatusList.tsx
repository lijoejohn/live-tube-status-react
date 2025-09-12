import React from "react";
import s from "./TubeLineStatusColumn.module.scss";
import { TubeLine } from "../../types/index";
import { TubeLineStatusColumn } from "./TubeLineStatusColumn";

type Props = {
  items: TubeLine[];
};

export const TubeLineStatusList: React.FC<Props> = ({ items }) => {
  const mid = Math.ceil(items.length / 2);
  const left: TubeLine[] = items.slice(0, mid);
  const right: TubeLine[] = items.slice(mid);

  return items?.length ? (
    <div className={s.listGrid}>
      <TubeLineStatusColumn lines={left} />
      <TubeLineStatusColumn lines={right} />
    </div>
  ) : (
    <div className="govuk-body-s">No Records Available</div>
  );
};
