export declare function registerHook(hook: SVNHook): void;
export declare function getRegisteredHooks(): SVNHook[];

/**
 * This is the current version of the SVNHookApi.
 * Your extension should the registerHook function once per activation.
 * For more details see this project's README.md
 *
 * @export
 * @interface SVNHookApi
 */
export declare interface SVNHookApi {
  registerHook(hook: SVNHook): void;
}

/**
 * Provides an interface for this extension's API.
 * If the onPreCommit or onPreRevert functions throw an error, the action
 * will be aborted.
 *
 * @export
 * @interface SVNHook
 */
export declare interface SVNHook {
  onPreCommit?(documents: string[]): Promise<void>;
  onPostCommit?(documents: string[]): Promise<void>;
  onPreRevert?(documents: string[]): Promise<void>;
  onPostRevert?(documents: string[]): Promise<void>;
  onUpdate?(): Promise<void>;
}
