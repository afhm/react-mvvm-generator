module.exports = (componentName, componentFileName) =>`import ${componentName} from "./${componentFileName}";

export default ${componentName};
`