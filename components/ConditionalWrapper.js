// Conditionally wrap an element in a wrapper
// If "condition" is true, wrap "children" within "wrapper"
// from https://blog.hackages.io/conditionally-wrap-an-element-in-react-a8b9a47fab2

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children

export default ConditionalWrapper
