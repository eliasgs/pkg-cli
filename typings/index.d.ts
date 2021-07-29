declare function get(arg: string, pkg_path?: string, resilient?: boolean): string;
export declare const pkg: {
    get: typeof get;
    path: () => string;
};
export {};
