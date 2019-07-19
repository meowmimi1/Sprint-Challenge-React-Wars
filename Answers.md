# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
Websites and applications are getting more and more complex and need to handle more and more data. Rather than have all of that data handled by the DOM in the browser, potentially bogging down the user experience as more data is processed, React removes that data handling from the DOM and only serves the information needed at the time it’s needed. Taking that pressure off of the DOM creates a better, smoother user experience.


1. What does it mean to think in react?
Thinking in React means looking at a web site or application in terms of separate, small, reusable components that come together to form the whole. Ideally, a component should be responsible for only one thing, and it may receive data from other components to do it's job.

1. Describe state.
State allows React components to change their output over time in response to user actions, network responses, and anything else
1. Describe props.
We use props to send data to components, every component is treated as a pure javascript function.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?
A side effect can be anything that affects something outside the scope of the function that is being executed. Geting data from an API could cause side effects, as it asynchronous and when returned may affect other things.