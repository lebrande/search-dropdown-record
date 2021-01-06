export const getSelectedItemOnKey = (key, selected, listLength) => {
  if (key === 'ArrowUp') {
    const newSelected = selected - 1;

    if (newSelected < 0) {
      return selected;
    }

    return newSelected;
  }

  if (key === 'ArrowDown') {
    const newSelected = selected + 1;

    if (newSelected > listLength - 1) {
      return selected;
    }

    return newSelected;
  }

  return selected;
}
