export const classnames = (className: string, externalClassName?: string | string[] | Record<string, boolean>) => {
  if (!externalClassName) {
    return className;
  }

  if (typeof externalClassName === "string") {
    return `${className} ${externalClassName}`;
  }

  if (Array.isArray(externalClassName)) {
    return [className, externalClassName].join(" ");
  }

  if (typeof externalClassName === "object") {
    const classes = [className];
    Object.entries(externalClassName).forEach(([key, value]) => {
      if (value) {
        classes.push(key);
      }
    });
    return classes.join(" ");
  }
}
