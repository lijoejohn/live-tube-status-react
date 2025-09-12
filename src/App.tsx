import { Suspense, lazy } from "react";
import ErrorBoundary from "components/common/ErrorBoundary";

const TubeLineStatusContainer = lazy(
  () => import("./components/tubeLineStatus/TubeLineStatusContainer")
);

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <TubeLineStatusContainer />
      </Suspense>
    </ErrorBoundary>
  );
}
export default App;
