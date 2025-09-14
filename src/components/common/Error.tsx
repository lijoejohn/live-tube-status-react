/**
 * Error component to display a user-friendly error message
 * when there is a problem loading the tube status.
 * Uses GOV.UK styling for error messages.
 */
export const Error = () => {
  return (
    <div className="govuk-error-message" role="alert">
      Sorry, there was a problem loading the tube status.
      <div className="govuk-!-margin-top-4">Please try again later.</div>
    </div>
  );
};
