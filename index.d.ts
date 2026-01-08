declare const ruleModule: import("@eslint/core").Plugin & {
    rules: {
        error: import("@eslint/core").RuleDefinition;
        warn: import("@eslint/core").RuleDefinition;
    };
};

export = ruleModule;
