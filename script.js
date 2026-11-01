"use strict";

// Custom error for missing or corrupted keys
class InvalidKeyError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidKeyError";
    }
}

// Custom error for incorrect keys
class VaultLockedError extends Error {
    constructor(message) {
        super(message);
        this.name = "VaultLockedError";
    }
}

// Checks the provided key
function accessVault(key) {
    if (key === undefined || Number.isNaN(key)) {
        throw new InvalidKeyError("Key is missing or corrupted");
    }

    if (key !== "SECRET_123") {
        throw new VaultLockedError("Incorrect key provided");
    }

    return "Access Granted";
}

// Handles vault access attempts and errors
function attemptEntry(key) {
    try {
        console.log(accessVault(key));
    } catch (e) {
        if (e instanceof InvalidKeyError) {
            console.log("Security Alert: System corruption detected.");
        } else if (e instanceof VaultLockedError) {
            console.log("User Error: Please try again.");
        } else {
            throw e;
        }
    } finally {
        console.log("Vault attempt completed.");
    }
}

// Runs an individual test and reports the result
function runTest(testName, testFunction) {
    try {
        if (testFunction()) {
            console.log("PASS: " + testName);
        } else {
            console.log("FAIL: " + testName);
        }
    } catch (e) {
        console.log("FAIL: " + testName);
    }
}

// Tests successful vault access
function testCorrectKey() {
    return accessVault("SECRET_123") === "Access Granted";
}

// Tests whether an invalid key throws InvalidKeyError
function testInvalidKey(key) {
    try {
        accessVault(key);
        return false;
    } catch (e) {
        return e instanceof InvalidKeyError;
    }
}

// Tests whether an incorrect key throws VaultLockedError
function testWrongKey() {
    try {
        accessVault("WRONG_KEY");
        return false;
    } catch (e) {
        return e instanceof VaultLockedError;
    }
}

// Demonstrates normal vault access attempts
console.log("=== Vault Access Demonstrations ===");
attemptEntry("SECRET_123");
attemptEntry("WRONG_KEY");
attemptEntry(undefined);
attemptEntry(NaN);

// Runs the automated audit tests
console.log("\n=== Automated Audit Tests ===");

runTest("Correct key grants access", testCorrectKey);
runTest("Undefined key throws InvalidKeyError", () => testInvalidKey(undefined));
runTest("NaN key throws InvalidKeyError", () => testInvalidKey(NaN));
runTest("Wrong key throws VaultLockedError", testWrongKey);