module.exports = componentName => `interface I${componentName}ViewProps {}

/**
 * View for ${componentName}
 * @param props
 * @returns
 */
 const ${componentName}View: React.FunctionComponent<I${componentName}ViewProps> = ({ }) => {
  return (
    <div></div>
  );
};

export default ${componentName}View;`
