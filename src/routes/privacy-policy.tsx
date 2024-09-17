import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPolicy } from "@/features/PrivacyPolicy/PrivacyPolicy.tsx";

export const Route = createFileRoute("/privacy-policy")({
    component: PrivacyPolicy,
});
