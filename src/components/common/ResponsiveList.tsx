import React from "react";
import s from "./ResponsiveList.module.scss";
import { TUBE_LINE_COLORCODES } from "../../constants";

export interface ResponsiveListProps {
  items: { id: string; name: string }[];
}

const getColorClass = (tubeId: string) => {
  const className = "bg-color-red";
  const record = TUBE_LINE_COLORCODES.find((items) => {
    return items.id === tubeId;
  });
  return record?.color || className;
};

export const ResponsiveList: React.FC<ResponsiveListProps> = ({ items }) => {
  const left:{ id: string; name: string }[] = [];
  const right:{ id: string; name: string }[] = [];
  items.forEach((item, i) => (i % 2 === 0 ? left : right).push(item));

  console.log(process.env.BACK_END_URL);
  return (
    <div className={s.listGrid}>
    <ul 
      className={s.column}
      aria-label="List of tube lines with status updates"
    >
      {left.map((item, i) => (
        <li className={`${s.listItem} `} key={i}>
          <div
            aria-hidden="true"
            className={`${s.colourTag} govuk-!-margin-right-1 ${getColorClass(
              item.id
            )}`}
          ></div>
          <details>
            <summary className={`${s.listItemTitle}`}>{item.name} : Suspended</summary>
            <div>
              <p className="govuk-body-s">Status update available</p>
            </div>
          </details>
          <span className="govuk-visually-hidden">Status update available</span>
        </li>
      ))}
    </ul>
    <ul 
      className={s.column }
      aria-label="List of tube lines with status updates"
    >
      {right.map((item, i) => (
        <li className={`${s.listItem} `} key={i}>
          <div
            aria-hidden="true"
            className={`${s.colourTag} govuk-!-margin-right-1 ${getColorClass(
              item.id
            )}`}
          ></div>
          <details>
            <summary className={`${s.listItemTitle}`}>{item.name}</summary>
            <div>
              <p className="govuk-body-s">Status update available</p>
            </div>
          </details>
          <span className="govuk-visually-hidden">Status update available</span>
        </li>
      ))}
    </ul>
    </div>
  );
};
