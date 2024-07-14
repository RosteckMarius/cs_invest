import { createFileRoute } from "@tanstack/react-router";
import { CaseOpeningView } from "@/features/CaseOpening/CaseOpeningView.tsx";

export const Route = createFileRoute("/case-opening")({
    component: () => CaseOpeningView(),
});
