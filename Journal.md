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



# Phase 3: The Safety Protocol

**How does the finally block behave differently than the catch block?**

The `catch` block is responsible for handling errors when they occur, while the `finally` block executes regardless of whether an error happens. In this phase, I used `catch` to identify the different custom errors and display appropriate messages. I used `finally` to confirm that every vault access attempt was completed.

**Describe a real-world scenario where a finally block would be critical for a program's stability.**

A good example would be a program that opens a file to read or modify information. If an error occurs while processing the file, the program still needs to close it properly. A `finally` block can ensure that the file is closed whether the operation succeeds or fails. This helps prevent resources from being left open unnecessarily.