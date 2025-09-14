import React from "react";
import { Header } from "components/layout/Header";
import { Footer } from "components/layout/Footer";
import { TubeLineStatusList } from "components/tubeLineStatus/TubeLineStatusList";
import s from "./TubeLineStatusContainer.module.scss";
import useFecthTubeStatus from "../../hooks/useFecthTubeStatus";
import { Loader } from "components/common/Loader";
import { Error } from "components/common/Error";
/**
 * Container component for displaying Tube line status updates.
 * Handles fetching Tube status data, loading and error states,
 * and renders the Header, Footer, Loader, Error, and TubeLineStatusList components.
 */
export const TubeLineStatusContainer: React.FC = () => {
  const [loading, data, error] = useFecthTubeStatus();
  return (
    <div className={s.pageWrapper}>
      <Header />
      <main>
        <div className="govuk-width-container">
          <div className="govuk-main-wrapper">
            <h1 className="govuk-heading-s">Tube Status updates</h1>
            {!!loading && <Loader />}
            {!!data && <TubeLineStatusList items={data} />}
            {error !== false && error != null && <Error />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TubeLineStatusContainer;
