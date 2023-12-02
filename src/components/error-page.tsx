import { ErrorResponse, useRouteError } from "react-router-dom";

export function ErrorPage() {
    const error = useRouteError() as ErrorResponse;

    console.error("error", error);
    return (
        <>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <div className={"pt-4"}>
                {error.status + " " + error.statusText}
            </div>
            <div>{error.data}</div>
        </>
    );
}
