import React from 'react';

const Show = ({ children }) => {
  let content = null;
  let elseContent = null;
  let foundCondition = false;

  React.Children.forEach(children, child => {
    if (child.type === Show.when && !foundCondition && child.props.condition) {
      content = child;
      foundCondition = true;
    } else if (child.type === Show.else && !foundCondition) {
      elseContent = child;
    }
  });

  return content || elseContent || null;
};

const When = ({ condition, children }) => (condition ? children : null);
const Else = ({ children }) => children;

Show.when = When;
Show.else = Else;

export default Show;
