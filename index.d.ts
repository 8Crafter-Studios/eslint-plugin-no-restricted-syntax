declare const ruleModule: import("@eslint/core").Plugin & {
    rules: {
        error: import("@eslint/core").RuleDefinition;
        warn: import("@eslint/core").RuleDefinition;
    };
    meta: {
        name: "eslint-plugin-no-restricted-syntax";
        namespace: "no-restricted-syntax";
    };
};

export = ruleModule;
