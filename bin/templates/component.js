module.exports = (componentName, componentFileName) =>`
import ${componentName}View from "./${componentFileName}-view";
import use${componentName}ViewController from "./${componentFileName}-view-controller";

interface I${componentName}Props {}

/**
 * 
 * @param props
 * @returns
 */
const ${componentName}: React.FunctionComponent<I${componentName}Props> = (props) => {
    const { } = use${componentName}ViewController({});
  
    return <${componentName}View />;
};
  
export default ${componentName};`