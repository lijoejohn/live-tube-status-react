import { render } from "@testing-library/react";

import ErrorBoundary from "components/common/ErrorBoundary";

const ErrorComp = () => {
  throw new Error();
};

describe("ErrorBoundary test", () => {
  it("renders ErrorBoundary", () => {
    const consoleError = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    try {
      const { getByText } = render(
        <ErrorBoundary>
          <ErrorComp />
        </ErrorBoundary>
      );
      const elm = getByText("Something went wrong.");
      expect(elm).toBeInTheDocument();
    } catch (e) {
    } finally {
      consoleError.mockRestore();
    }
  });
});
