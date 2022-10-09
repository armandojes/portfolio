interface Colors {
  [key:string]: string
}

const transformObjectIntoCssVariables = (colors: Colors) => {
  const entries = Object.entries(colors);

  const cssResult = entries.reduce((accumulator, currentValue) => {
    const key = currentValue[0];
    const value = currentValue[1];
    const currentCssDeclaration = `--${key}: ${value};`;
    return ` ${accumulator} ${currentCssDeclaration} `;
  }, '');

  return cssResult;
};

export default transformObjectIntoCssVariables;
