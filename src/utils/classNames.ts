type ClassesType = {
  [K: string]: any;
};

const classNames = (classes: ClassesType): string => {
  if (typeof classes != "object" || classes == null || Array.isArray(classes)) {
    return "";
  }
  let classesStr = "";
  Object.entries(classes).forEach((entry) => {
    const [key, value] = entry;
    if (value) {
      classesStr += `${key} `;
    }
  });
  return classesStr;
};

export default classNames;
