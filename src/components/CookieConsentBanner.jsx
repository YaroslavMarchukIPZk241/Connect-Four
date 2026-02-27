import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const COOKIE_NAME = "cookie_consent";

/**
 * Cookie Consent Banner component.
 * Blocks access to the application until user accepts cookies.
 *
 * Stores consent decision in browser cookies.
 *
 * @component
 * @returns {JSX.Element|null}
 */
export default function CookieConsentBanner() {
    const [consent, setConsent] = useState(null);

    useEffect(() => {
        const savedConsent = Cookies.get(COOKIE_NAME);
        setConsent(savedConsent || null);
    }, []);

    const acceptCookies = () => {
        Cookies.set(COOKIE_NAME, "accepted", { expires: 365 });
        setConsent("accepted");
    };

    const declineCookies = () => {
        Cookies.set(COOKIE_NAME, "declined", { expires: 365 });
        setConsent("declined");
    };

    if (consent === "accepted") return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white text-black p-6 rounded-lg max-w-md text-center shadow-lg">
                <h2 className="text-lg font-bold mb-3">
                    Cookie Consent Required
                </h2>

                <p className="mb-4 text-sm">
                    This website requires cookies to function properly.
                    Please accept cookies to continue using the application.
                </p>



                <div className="flex justify-center gap-3">
                    <button
                        onClick={declineCookies}
                        className="px-4 py-2 border rounded"
                    >
                        Decline
                    </button>

                    <button
                        onClick={acceptCookies}
                        className="px-4 py-2 bg-green-500 text-white rounded"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
}