import React from "react";
import s from "./TubeLineStatusColumn.module.scss";
import { TubeLine } from "../../types/index";
import { TubeLineStatusColumn } from "./TubeLineStatusColumn";

type Props = {
  items: TubeLine[];
};
/**
 * TubeLineStatusList component to display Tube line statuses in two columns.
 * Splits the list of TubeLine items into two columns for balanced display.
 * Renders a message if no records are available.
 *
 * @param items - Array of TubeLine objects to display.
 */
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
