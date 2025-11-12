// Problem Statement
// Create a function that observes all <input> elements inside a form and dynamically adds a red border to any input that becomes empty after losing focus (blur event). Additionally, if the user starts typing again, the border should be removed in real time (input event). The function should handle dynamically added inputs as well (using MutationObserver).

function validateDynamicInputs(formSelector) {
  const form = document.querySelector(formSelector);
  if (!form) return;

  function handleInputEvents(input) {
    input.addEventListener('blur', () => {
      if (!input.value.trim()) input.style.border = '2px solid red';
    });
    input.addEventListener('input', () => {
      input.style.border = input.value.trim() ? '' : '2px solid red';
    });
  }

  form.querySelectorAll('input').forEach(handleInputEvents);

  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.tagName === 'INPUT') handleInputEvents(node);
        else if (node.querySelectorAll) {
          node.querySelectorAll('input').forEach(handleInputEvents);
        }
      });
    });
  });

  observer.observe(form, { childList: true, subtree: true });
}
