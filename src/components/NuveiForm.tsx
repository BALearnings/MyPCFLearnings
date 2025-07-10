import React, { useEffect } from "react";

export const NuveiForm = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.safecharge.com/safecharge_resources/v1/websdk/safecharge.js";
        script.async = true;
        script.onload = () => initNuvei();
        document.body.appendChild(script);
    }, []);

    const initNuvei = () => {
        const SafeCharge = (window as any).SafeCharge;
        if (!SafeCharge) return;

        const sc = SafeCharge({
            env: "int",
            merchantId: "YOUR_MERCHANT_ID",
            sessionToken: "YOUR_SESSION_TOKEN",
            clientUniqueId: "client_123",
            locale: "en_US",
        });

        sc.createPayment({
            containerId: "nuvei-form",
            onResult: (res: any) => {
                console.log("Payment Result", res);
                alert("Token: " + res.transactionId);
            },
            onError: (err: any) => {
                console.error("Error", err);
            },
        });
    };

    return (
        <div>
            <h3>Enter Payment Info</h3>
            <div id="nuvei-form"></div>
        </div>
    );
};