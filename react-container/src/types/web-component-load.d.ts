// Type definitions for web-component-load 1.0.1
// Project: https://github.com/machinellama/web-component-load
// Definitions by: Benny Guo <https://github.com/bennyxguo>

declare module 'web-component-load' {
  export function load(url: string, option?: { scripts?: string[]; styles?: string[] });
}
