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

interface PluginClass {
  new(): { run(input: any): any };
  pluginName: string;
  version: number;
  supports(input: any): boolean;
}

class TaskRunner {
  private plugins: PluginClass[] = [];

  register(Plugin: PluginClass) {
    if (!Plugin.supports || !Plugin.prototype.run)
      throw new Error("Invalid plugin");
    if (this.plugins.some(p => p.pluginName === Plugin.pluginName))
      throw new Error("Duplicate plugin");
    this.plugins.push(Plugin);
  }

  execute(input: any) {
    const Plugin = this.plugins.find(p => p.supports(input));
    if (!Plugin) throw new Error("No matching plugin");
    return new Plugin().run(input);
  }
}

class MathPlugin {
  static pluginName = "MathPlugin";
  static version = 1;

  static supports(x: any) {
    return typeof x === "number";
  }

  run(n: number) {
    return { squared: n ** 2, cubed: n ** 3 };
  }
}

class TextPlugin {
  static pluginName = "TextPlugin";
  static version = 1;

  static supports(x: any) {
    return typeof x === "string";
  }

  run(str: string) {
    return {
      length: str.length,
      upper: str.toUpperCase(),
      lower: str.toLowerCase(),
    };
  }
}

// Demo
const r = new TaskRunner();
r.register(MathPlugin);
r.register(TextPlugin);

console.log(r.execute(5));
console.log(r.execute("Hello"));
