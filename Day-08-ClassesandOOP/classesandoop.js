/* Problem Statement
Design a plugin-based task automation system.
You must create a TaskRunner class that can register and execute different task “plugins.”
A plugin is any class that implements:

A unique name string
A run(input: any): any method
A version number
A static supports(input: any): boolean method that indicates whether this plugin can handle a given input.

Requirements:
TaskRunner.register(pluginClass)
Registers a plugin class.
Throws an error if another plugin with the same name is already registered OR
if the plugin does not fulfill the required interface.
TaskRunner.execute(input)
Finds the first registered plugin whose supports(input) returns true.
Instantiates it and calls run(input).
Throws an error if no plugin supports the given input.

Demonstrate this with:
A MathPlugin that supports numbers and returns { squared, cubed }.
A TextPlugin that supports strings and returns { length, upper, lower }. */

// Base validation helper
function validatePlugin(Plugin) {
  if (typeof Plugin !== "function") throw new Error("Plugin must be a class");
  const required = ["name", "version"];
  for (const prop of required) {
    if (!Plugin.prototype.hasOwnProperty(prop) && !Plugin[prop]) {
      throw new Error(`Plugin missing required property: ${prop}`);
    }
  }
  if (typeof Plugin.prototype.run !== "function") {
    throw new Error("Plugin must implement run()");
  }
  if (typeof Plugin.supports !== "function") {
    throw new Error("Plugin must implement static supports()");
  }
}

class TaskRunner {
  constructor() {
    this.plugins = new Map();
  }

  register(Plugin) {
    validatePlugin(Plugin);
    if (this.plugins.has(Plugin.name)) {
      throw new Error(`Plugin "${Plugin.name}" already registered`);
    }
    this.plugins.set(Plugin.name, Plugin);
  }

  execute(input) {
    for (const Plugin of this.plugins.values()) {
      if (Plugin.supports(input)) {
        const instance = new Plugin();
        return instance.run(input);
      }
    }
    throw new Error("No plugin found that supports this input");
  }
}

class MathPlugin {
  static name = "MathPlugin";
  static version = 1.0;

  static supports(x) {
    return typeof x === "number";
  }

  run(n) {
    return { squared: n * n, cubed: n * n * n };
  }
}

class TextPlugin {
  static name = "TextPlugin";
  static version = 1.0;

  static supports(x) {
    return typeof x === "string";
  }

  run(str) {
    return {
      length: str.length,
      upper: str.toUpperCase(),
      lower: str.toLowerCase()
    };
  }
}

const runner = new TaskRunner();
runner.register(MathPlugin);
runner.register(TextPlugin);

console.log(runner.execute(4));
console.log(runner.execute("Hi"));
