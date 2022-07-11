module.exports = (componentName, componentFileName) => `import { renderHook, act } from "@testing-library/react-hooks";
import use${componentName}Controller from "../${componentFileName}-view-controller";

test("Something to test", () => {
  const { result } = renderHook(() => use${componentName}Controller({}));

});
`;
