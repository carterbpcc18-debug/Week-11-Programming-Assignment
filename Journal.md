# Phase 1: The Vault Foundation

**What did you accomplish in this phase?**

In this phase, I created the foundation of the Aegis Digital Vault by implementing the `accessVault()` function. The function checks whether the provided key matches the correct password and returns either "Access Granted" or "Access Denied." I also tested the function using several different inputs to verify that it responds correctly.

**Why is using `"use strict";` considered a safety net for developers?**

Using `"use strict";` is considered a safety net because it makes JavaScript enforce stricter rules and helps identify common programming mistakes. For example, it prevents certain accidental variable declarations and catches errors that might otherwise go unnoticed. This makes code more predictable and easier to maintain.



# Phase 2: The Security Layer

**What is the difference between returning a value and throwing an error?**

Returning a value allows a function to finish normally and provide a result to the code that called it. Throwing an error interrupts the normal execution of the function and signals that something went wrong. In this phase, I changed the vault so that incorrect or invalid keys generate specific errors instead of simply returning "Access Denied."

**Why would a developer prefer throwing a custom error class over a generic Error?**

Custom error classes allow developers to identify exactly what type of problem occurred. Instead of treating every issue the same way, the program can distinguish between a missing or corrupted key and an incorrect password. This makes error handling more organized and allows different problems to receive different responses.