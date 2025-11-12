// Problem Statement

// Create a function that observes all <input> elements inside a form and
// dynamically adds a red border to any input that becomes empty after losing focus (blur event).
// Additionally, if the user starts typing again, the border should be removed in real time (input event). 
// The function should handle dynamically added inputs as well (using MutationObserver).

function validateDynamicInputs(formSelector: string) {
  const form = document.querySelector(formSelector) as HTMLFormElement | null;
  if (!form) return;

  function handleInputEvents(input: HTMLInputElement) {
    input.addEventListener('blur', () => {
      if (!input.value.trim()) {
        input.style.border = '2px solid red';
      }
    });

    input.addEventListener('input', () => {
      input.style.border = input.value.trim() ? '' : '2px solid red';
    });
  }

  // Attach events to existing inputs
  form.querySelectorAll('input').forEach(input => handleInputEvents(input as HTMLInputElement));

  // Observe dynamically added inputs
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node instanceof HTMLInputElement) {
          // Node is an input
          handleInputEvents(node);
        } else if (node instanceof HTMLElement) {
          // Node is some other element that may contain inputs
          node.querySelectorAll('input').forEach(input =>
            handleInputEvents(input as HTMLInputElement)
          );
        }
      });
    });
  });

  observer.observe(form, { childList: true, subtree: true });
}
