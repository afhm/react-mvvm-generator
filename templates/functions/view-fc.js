module.exports = componentName => `interface I${componentName}ViewProps {}

/**
 * View for ${componentName}
 * @param props
 * @returns
 */
function ${componentName}({prop1,prop2}:I${componentName}ViewProps) => {
  const { } = use${componentName}ViewController({});

  return <${componentName}View />;
};
  
export default ${componentName}View;`
