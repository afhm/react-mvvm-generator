module.exports = (componentName, componentFileName) => `
import ${componentName}View from "./${componentFileName}-view";
import use${componentName}ViewController from "./${componentFileName}-view-controller";

interface I${componentName}Props {}

/**
 * 
 * @param props
 * @returns
 */
function ${componentName}({prop1,prop2}:I${componentName}Props) => {
    const { } = use${componentName}ViewController({});
  
    return <${componentName}View />;
};
  
export default ${componentName};`
