module.exports =
  componentName => `interface I${componentName}ViewControllerProps {}

/**
 * View Controller for ${componentName}
 * @param props
 * @returns
 */
function ${componentName}({prop1,prop2}:I${componentName}ViewControllerProps) {

};



export default use${componentName}ViewController;`
