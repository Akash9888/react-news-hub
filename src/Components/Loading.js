import loading from "./Loader.gif";

import React from "react";

export default function Loading() {
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <div>
                <img src={loading} alt="loading" />
            </div>
        </div>
    );
}
