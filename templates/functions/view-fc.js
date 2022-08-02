module.exports = componentName => `interface I${componentName}ViewProps {}

/**
 * View for ${componentName}
 * @param props
 * @returns
 */
function ${componentName}View({prop1,prop2}:I${componentName}ViewProps) {

  return <div></div>
  
};
  
export default ${componentName}View;`
