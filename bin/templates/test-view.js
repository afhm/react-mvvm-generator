module.exports = (componentName, componentFileName) => `import { render } from "@testing-library/react";
import ${componentName}View from "../${componentFileName}-view";

test("Something to test", () => {
  const { getByText, getByTestId } = render(<${componentName}View />);
});`;
