import { TubeLine } from "types";
import s from "./TubeLineStatusColumn.module.scss";
import { getColorClass } from "../../utils/tubeStatus";

/**
 * TubeLineStatusColumn component to display a list of Tube lines and their statuses.
 * Each line is shown with a colored tag, name, and status description.
 * If a reason is provided, it is shown in a collapsible details section.
 * Includes visually hidden text for accessibility.
 *
 * @param lines - Array of TubeLine objects to display in the column.
 */
export const TubeLineStatusColumn: React.FC<{ lines: TubeLine[] }> = ({
  lines,
}) => {
  return (
    <ul
      className={s.column}
      aria-label="List of tube lines with status updates"
    >
      {lines.map((item, i) => {
        const lineStatus = item?.lineStatuses[0] || {};
        const reason = lineStatus?.reason;
        return (
          <li className={`${s.listItem} `} key={i}>
            <div
              aria-hidden="true"
              className={`${s.colourTag} govuk-!-margin-right-1 ${getColorClass(
                item.id
              )}`}
            ></div>
            <div className={s.listItemContent}>
              {reason ? (
                <details>
                  <summary className={`${s.listItemTitle}`}>
                    {item.name} : {lineStatus.statusSeverityDescription}
                  </summary>
                  <div>
                    <p className="govuk-body-s">{reason}</p>
                  </div>
                </details>
              ) : (
                <span className={`${s.goodService}`}>
                  {item.name} : {lineStatus.statusSeverityDescription}
                </span>
              )}
            </div>
            {/* A11 */}
            <span className="govuk-visually-hidden">
              {item.lineStatuses[0].reason}
            </span>
          </li>
        );
      })}
    </ul>
  );
};
