export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_RE = /^[0-9+\s().-]{7,}$/;

export function validateField(field: Element): boolean {
  const input = field.querySelector<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >("input, select, textarea");
  if (!input) return true;
  let valid = input.checkValidity();
  if (input.type === "email" && input.value) {
    valid = EMAIL_RE.test(input.value);
  }
  if (input.type === "tel" && input.value) {
    valid = PHONE_RE.test(input.value);
  }
  field.classList.toggle("has-error", !valid);
  return valid;
}
