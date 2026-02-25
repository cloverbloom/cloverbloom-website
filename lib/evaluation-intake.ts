export const OPEN_EVALUATION_DIALOG_EVENT = "open-evaluation-dialog";

export const openEvaluationDialog = () => {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_EVALUATION_DIALOG_EVENT));
};
