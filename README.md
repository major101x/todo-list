# Todo-List Project
A website that lets you create todos and projects to store them in.

## Lessons Learned
I learned about the `localStorage` web api and how to use it to **store and stringify**, **retrieve and parse** data.

I strengthened my knowledge of classes and factory functions. **I prefer classes** due to its scalable syntax and portability across different programming languages.

This project taught me to plan my data and their relationships before writing code.

I ran into problems with `localStorage` when I was trying to store factories instead of their instances. That was how I learned that you should **NOT** store functions or in-built javascript objects in localStorage. if you have to, use the `eval()` function.

**NOTE**: Please use the `eval()` function with care. **NEVER USE DIRECT EVAL.** [This is why](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_direct_eval!)

I fixed the localStorage problems by storing the data as a normal array of objects, then fetching and instantiating them on page load.
