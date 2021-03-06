export type FindOptionsObject = {
    /**
     * The maximum depth to scan inside
     * the source object for matching data.
     */
    maxDepth?: number;
    /**
     * The current depth of the
     * operation scan.
     */
    currentDepth?: number;
    /**
     * If true, will include the
     * root source object if it matches the query.
     */
    includeRoot?: boolean;
};
/**
 * Chops a `path` string down to the given `level`. Given a `path` string
 * like "foo.bar.ram.you.too", chop will remove any path parts below
 * the given `level`. If we pass 2 as the `level` with that given `path`,
 * the result will be "foo.bar" as foo is level 1 and bar is level 2.
 * If the `path` is shorter than the given `level`, it is returned intact.
 * @param {String} path The path to operate on.
 * @param {Number} level The maximum level of a path.
 * @returns {String} The new path string.
 */
export function chop(path: string, level: number): string;
/**
 * Removes leading period (.) from string and returns new string.
 * @param {String} str The string to clean.
 * @returns {*} The cleaned string.
 */
export function clean(str: string): any;
/**
 * Counts the total number of key leaf nodes in the passed object.
 * @param {Object|Array} obj The object to count key leaf nodes for.
 * @param {Array=} objCache Do not use. Internal array to track
 * visited leafs.
 * @returns {Number} The number of keys.
 */
export function countLeafNodes(obj: any | any[], objCache?: any[] | undefined): number;
/**
 * Tests if the passed object has the paths that are specified and that
 * a value exists in those paths and if so returns the number matched.
 * MAY NOT BE INFINITE RECURSION SAFE.
 * @param {Object|Array} testKeys The object describing the paths to test for.
 * @param {Object|Array} testObj The object to test paths against.
 * @returns {Object<matchedKeys<Number>, matchedKeyCount<Number>, totalKeyCount<Number>>} Stats on the matched keys.
 */
export function countMatchingPathsInObject(testKeys: any | any[], testObj: any | any[]): any;
/**
 * If options.immutable === true then return a new de-referenced
 * instance of the passed object/array. If immutable is false
 * then simply return the same `obj` that was passed.
 * @param {*} obj The object or array to decouple.
 * @param {Object=} options The options object that has the immutable
 * key with a boolean value.
 * @returns {*} The new decoupled instance (if immutable is true)
 * or the original `obj` if immutable is false.
 */
export function decouple(obj: any, options?: any | undefined): any;
/**
 * Compares two provided objects / arrays and returns an array of
 * dot-notation paths to the fields that hold different values.
 * @param {Object|Array} obj1 The first object / array to compare.
 * @param {Object|Array} obj2 The second object / array to compare.
 * @param {String=""} basePath The base path from which to check for
 * differences. Differences outside the base path will not be
 * returned as part of the array of differences. Leave blank to check
 * for all differences between the two objects to compare.
 * @param {Boolean=false} strict If strict is true, diff uses strict
 * equality to determine difference rather than non-strict equality;
 * effectively (=== is strict, == is non-strict).
 * @param {Number=Infinity} maxDepth Specifies the maximum number of
 * path sub-trees to walk down before returning what we have found.
 * For instance, if set to 2, a diff would only check down,
 * "someFieldName.anotherField", or "user.name" and would not go
 * further down than two fields. If anything in the trees further
 * down than this level have changed, the change will not be detected
 * and the path will not be included in the resulting diff array.
 * @param {String=""} parentPath Used internally only.
 * @returns {Array} An array of strings, each string is a path to a
 * field that holds a different value between the two objects being
 * compared.
 */
export function diff(obj1: any | any[], obj2: any | any[], basePath?: string, strict?: boolean, maxDepth?: number, parentPath?: string, objCache?: any[]): any[];
/**
 * Gets the values of the paths in pathArr and returns them as an object
 * with each key matching the path and the value matching the value from
 * obj that was at that path.
 * @param {Object} obj The object to operate on.
 * @param {Array<String>} pathArr Array of path strings.
 * @returns {*} The new object.
 */
export function distill(obj: any, pathArr: Array<string>): any;
/**
 * Returns the given path after removing the first
 * leaf from the path. E.g. "foo.bar.thing" becomes
 * "bar.thing".
 * @param {String} path The path to operate on.
 * @param {Number=} levels The number of levels to
 * move down.
 * @returns {String} The new path string.
 */
export function down(path: string, levels?: number | undefined): string;
/**
 * Escapes any periods in the passed string so they will
 * not be identified as part of a path. Useful if you have
 * a path like "domains.www.google.com.data" where the
 * "www.google.com" should not be considered part of the
 * traversal as it is actually in an object like:
 * {
 * 	"domains": {
 * 		"www.google.com": {
 * 			"data": "foo"
 * 		}
 * 	}
 * }
 * @param {String} str The string to escape periods in.
 * @return {String} The escaped string.
 */
export function escape(str: string): string;
/**
 * Finds the first item that matches the structure of `query`
 * and returns the path to it.
 * @param {*} source The source to test.
 * @param {*} query The query to match.
 * @param {FindOptionsObject} [options] Options object.
 * @param {String=""} parentPath Do not use. The aggregated
 * path to the current structure in source.
 * @returns {Object} Contains match<Boolean> and path<String>.
 */
export function findOnePath(source: any, query: any, options?: FindOptionsObject, parentPath?: string): any;
/**
 * @typedef {object} FindOptionsObject
 * @property {number} [maxDepth=Infinity] The maximum depth to scan inside
 * the source object for matching data.
 * @property {number} [currentDepth=0] The current depth of the
 * operation scan.
 * @property {boolean} [includeRoot=true] If true, will include the
 * root source object if it matches the query.
 */
/**
 * Finds all items in `source` that match the structure of `query` and
 * returns the path to them as an array of strings.
 * @param {*} source The source to test.
 * @param {*} query The query to match.
 * @param {FindOptionsObject} [options] Options object.
 * @param {String=""} parentPath Do not use. The aggregated
 * path to the current structure in source.
 * @returns {Object} Contains match<Boolean> and path<Array>.
 */
export function findPath(source: any, query: any, options?: FindOptionsObject, parentPath?: string): any;
/**
 * Takes an object and finds all paths, then returns the paths as an
 * array of strings.
 * @param {Object|Array} obj The object to scan.
 * @param {Array=} finalArr An object used to collect the path keys.
 * (Do not pass this in directly - use undefined).
 * @param {String=} parentPath The path of the parent object. (Do not
 * pass this in directly - use undefined).
 * @param {Object=} options An options object.
 * @returns {Array<String>} An array containing path strings.
 */
export function flatten(obj: any | any[], finalArr?: any[] | undefined, parentPath?: string | undefined, options?: any | undefined, objCache?: any[]): Array<string>;
/**
 * Takes an object and finds all paths, then returns the paths as keys
 * and the values of each path as the values.
 * @param {Object|Array} obj The object to scan.
 * @param {Object=} finalObj An object used to collect the path keys.
 * (Do not pass this in directly).
 * @param {String=} parentPath The path of the parent object. (Do not
 * pass this in directly).
 * @param {Object=} options An options object.
 * @returns {Object|Array} An object containing path keys and their values.
 */
export function flattenValues(obj: any | any[], finalObj?: any | undefined, parentPath?: string | undefined, options?: any | undefined, objCache?: any[]): any | any[];
/**
 * Given a path and an object, determines the outermost leaf node
 * that can be reached where the leaf value is not undefined.
 * @param {Object|Array} obj The object to operate on.
 * @param {String} path The path to retrieve data from.
 * @param {Object=} options Optional options object.
 * @returns {String} The path to the furthest non-undefined value.
 */
export function furthest(obj: any | any[], path: string, options?: any | undefined): string;
/**
 * Gets a single value from the passed object and given path.
 * @param {Object|Array} obj The object to operate on.
 * @param {String} path The path to retrieve data from.
 * @param {*=} defaultVal Optional default to return if the
 * value retrieved from the given object and path equals undefined.
 * @param {Object=} options Optional options object.
 * @returns {*} The value retrieved from the passed object at
 * the passed path.
 */
export function get(obj: any | any[], path: string, defaultVal?: any | undefined, options?: any | undefined): any;
/**
 * Gets multiple values from the passed arr and given path.
 * @param {Object|Array} data The array or object to operate on.
 * @param {String} path The path to retrieve data from.
 * @param {*=} defaultVal Optional default to return if the
 * value retrieved from the given object and path equals undefined.
 * @param {Object=} options Optional options object.
 * @returns {Array}
 */
export function getMany(data: any | any[], path: string, defaultVal?: any | undefined, options?: any | undefined): any[];
/**
 * Tests if the passed object has the paths that are specified and that
 * a value exists in those paths. MAY NOT BE INFINITE RECURSION SAFE.
 * @param {Object|Array} testKeys The object describing the paths to test for.
 * @param {Object|Array} testObj The object to test paths against.
 * @returns {Boolean} True if the object paths exist.
 */
export function hasMatchingPathsInObject(testKeys: any | any[], testObj: any | any[]): boolean;
/**
 * A boolean check to see if the values at the given path or paths
 * are the same in both given objects.
 * @param {*} obj1 The first object to check values in.
 * @param {*} obj2 The second object to check values in.
 * @param {Array<String>|String}path A path or array of paths to check
 * values in. If this is an array, all values at the paths in the array
 * must be the same for the function to provide a true result.
 * @param {Boolean} deep If true will traverse all objects and arrays
 * to check for equality. Defaults to false.
 * @param {Boolean} strict If true, values must be strict-equal.
 * Defaults to false.
 * @returns {Boolean} True if path values match, false if not.
 */
export function isEqual(obj1: any, obj2: any, path: Array<string> | string, deep?: boolean, strict?: boolean): boolean;
/**
 * A boolean check to see if the values at the given path or paths
 * are different in both given objects.
 * @param {*} obj1 The first object to check values in.
 * @param {*} obj2 The second object to check values in.
 * @param {Array<String>|String}path A path or array of paths to
 * check values in. If this is an array, all values at the paths
 * in the array must be different for the function to provide a
 * true result.
 * @param {Boolean} deep If true will traverse all objects and arrays
 * to check for inequality. Defaults to false.
 * @param {Boolean} strict If true, values must be strict-not-equal.
 * Defaults to false.
 * @returns {Boolean} True if path values differ, false if not.
 */
export function isNotEqual(obj1: any, obj2: any, path: Array<string> | string, deep?: boolean, strict?: boolean): boolean;
/**
 * Joins multiple string arguments into a path string.
 * Ignores blank or undefined path parts and also ensures
 * that each part is escaped so passing "foo.bar" will
 * result in an escaped version.
 * @param {...String} args args Path to join.
 * @returns {String} A final path string.
 */
export function join(...args: string[]): string;
/**
 * Joins multiple string arguments into a path string.
 * Ignores blank or undefined path parts and also ensures
 * that each part is escaped so passing "foo.bar" will
 * result in an escaped version.
 * @param {...String} args Path to join.
 * @returns {String} A final path string.
 */
export function joinEscaped(...args: string[]): string;
/**
 * Finds all the leaf nodes for a given object and returns an array of paths
 * to them. This is different from `flatten()` in that it only includes leaf
 * nodes and will not include every intermediary path traversed to get to a
 * leaf node.
 * @param {Object|Array} obj The object to traverse.
 * @param {String} [parentPath=""] The path to use as a root/base path to
 * start scanning for leaf nodes under.
 * @param {Object} [objCache=[]] Internal usage to check for cyclic structures.
 * @returns {[]}
 */
export function leafNodes(obj: any | any[], parentPath?: string, objCache?: any): [];
/**
 * Determines if the query data exists anywhere inside the source
 * data. Will recurse into arrays and objects to find query.
 * @param {*} source The source data to check.
 * @param {*} query The query data to find.
 * @param {Object} [options] An options object.
 * @returns {Boolean} True if query was matched, false if not.
 */
export function match(source: any, query: any, options?: any): boolean;
/**
 * If a key is a number, will return a wildcard, otherwise
 * will return the originally passed key.
 * @param {String} key The key to test.
 * @returns {String} The original key or a wildcard.
 */
export function numberToWildcard(key: string): string;
/**
 * Returns the last leaf from the path. E.g.
 * "foo.bar.thing" returns "thing".
 * @param {String} path The path to operate on.
 * @param {Number=} levels The number of levels to
 * pop.
 * @returns {String} The new path string.
 */
export function pop(path: string, levels?: number | undefined): string;
/**
 * Pull a value to from an array at the specified path. Removes the first
 * matching value, not every matching value.
 * @param {Object|Array} obj The object to update.
 * @param {String} path The path to the array to pull from.
 * @param {*} val The value to pull from the array.
 * @param {Object=} options An options object.
 * @returns {Object|Array} The original object passed in "obj" but with
 * the array at the path specified having the newly pushed value.
 */
export function pullVal(obj: any | any[], path: string, val: any, options?: any | undefined): any | any[];
/**
 * Same as pullVal() but will not change or modify the existing `obj`.
 * References to objects that were not modified remain the same.
 * @param {Object|Array} obj The object to operate on.
 * @param {String} path The path to operate on.
 * @param {*} val The value to use for the operation.
 * @param {Object=} options The options object.
 * @returns {*} The new object with the modified data.
 */
export function pullValImmutable(obj: any | any[], path: string, val: any, options?: any | undefined): any;
/**
 * Adds a leaf to the end of the path. E.g.
 * pushing "goo" to path "foo.bar.thing" returns
 * "foo.bar.thing.goo".
 * @param {String} path The path to operate on.
 * @param {String} val The string value to push
 * to the end of the path.
 * @returns {String} The new path string.
 */
export function push(path: string, val?: string): string;
/**
 * Push a value to an array on an object for the specified path.
 * @param {Object|Array} obj The object to update.
 * @param {String} path The path to the array to push to.
 * @param {*} val The value to push to the array at the object path.
 * @param {Object=} options An options object.
 * @returns {Object|Array} The original object passed in "obj" but with
 * the array at the path specified having the newly pushed value.
 */
export function pushVal(obj: any | any[], path: string, val: any, options?: any | undefined): any | any[];
/**
 * Same as pushVal() but will not change or modify the existing `obj`.
 * References to objects that were not modified remain the same.
 * @param {Object|Array} obj The object to operate on.
 * @param {String} path The path to operate on.
 * @param {*} val The value to use for the operation.
 * @param {Object=} options The options object.
 * @returns {*} The new object with the modified data.
 */
export function pushValImmutable(obj: any | any[], path: string, val: any, options?: any | undefined): any;
/**
 * Sets a single value on the passed object and given path. This
 * will directly modify the "obj" object. If you need immutable
 * updates, use setImmutable() instead.
 * @param {Object|Array} obj The object to operate on.
 * @param {String} path The path to set data on.
 * @param {*} val The value to assign to the obj at the path.
 * @param {Object=} options The options object.
 * @returns {*} Nothing.
 */
export function set(obj: any | any[], path: string, val: any, options?: any | undefined): any;
/**
 * Same as set() but will not change or modify the existing `obj`.
 * References to objects that were not modified remain the same.
 * @param {Object|Array} obj The object to operate on.
 * @param {String} path The path to operate on.
 * @param {*} val The value to use for the operation.
 * @param {Object=} options The options object.
 * @returns {*} The new object with the modified data.
 */
export function setImmutable(obj: any | any[], path: string, val: any, options?: any | undefined): any;
/**
 * Returns the first leaf from the path. E.g.
 * "foo.bar.thing" returns "foo".
 * @param {String} path The path to operate on.
 * @param {Number=} levels The number of levels to
 * shift.
 * @returns {String} The new path string.
 */
export function shift(path: string, levels?: number | undefined): string;
/**
 * Splits a path by period character, taking into account
 * escaped period characters.
 * @param {String} path The path to split into an array.
 * @return {Array<String>} The component parts of the path, split
 * by period character.
 */
export function split(path: string): Array<string>;
/**
 * Returns the type from the item passed. Similar to JavaScript's
 * built-in typeof except it will distinguish between arrays, nulls
 * and objects as well.
 * @param {*} item The item to get the type of.
 * @returns {string|"undefined"|"object"|"boolean"|"number"|"string"|"function"|"symbol"|"null"|"array"}
 */
export function type(item: any): string | "undefined" | "object" | "boolean" | "number" | "string" | "function" | "symbol" | "null" | "array";
/**
 * Deletes a key from an object by the given path.
 * @param {Object|Array} obj The object to operate on.
 * @param {String} path The path to delete.
 * @param {Object=} options The options object.
 * @param {Object=} tracking Do not use.
 */
export function unSet(obj: any | any[], path: string, options?: any | undefined, tracking?: any | undefined): any;
/**
 * Same as unSet() but will not change or modify the existing `obj`.
 * References to objects that were not modified remain the same.
 * @param {Object|Array} obj The object to operate on.
 * @param {String} path The path to operate on.
 * @param {Object=} options The options object.
 * @returns {*} The new object with the modified data.
 */
export function unSetImmutable(obj: any | any[], path: string, options?: any | undefined): any;
/**
 * Returns the given path after removing the last
 * leaf from the path. E.g. "foo.bar.thing" becomes
 * "foo.bar".
 * @param {String} path The path to operate on.
 * @param {Number=} levels The number of levels to
 * move up.
 * @returns {String} The new path string.
 */
export function up(path: string, levels?: number | undefined): string;
/**
 * Takes an update object or array and iterates the keys of it, then
 * sets data on the target object or array at the specified path with
 * the corresponding value from the path key, effectively doing
 * multiple set() operations in a single call. This will directly
 * modify the "obj" object. If you need immutable updates, use
 * updateImmutable() instead.
 * @param {Object|Array} obj The object to operate on.
 * @param {String} [basePath=""] The path to the object to operate on relative
 * to the `obj`. If `obj` is the object to be directly operated on, leave
 * `basePath` as an empty string.
 * @param {Object|Array} updateData The update data to apply with
 * keys as string paths.
 * @param {Object=} options The options object.
 * @returns {*} The object with the modified data.
 */
export function update(obj: any | any[], basePath?: string, updateData: any | any[], options?: any | undefined): any;
/**
 * Same as update() but will not change or modify the existing `obj`.
 * References to objects that were not modified remain the same.
 * @param {Object|Array} obj The object to operate on.
 * @param {String} [basePath=""] The path to the object to operate on relative
 * to the `obj`. If `obj` is the object to be directly operated on, leave
 * `basePath` as an empty string.
 * @param {Object|Array} updateData The update data to apply with
 * keys as string paths.
 * @param {Object=} options The options object.
 * @returns {*} The new object with the modified data.
 */
export function updateImmutable(obj: any | any[], basePath?: string, updateData: any | any[], options?: any | undefined): any;
/**
 * Traverses the object by the given path and returns an object where
 * each key is a path pointing to a leaf node and contains the value
 * from the leaf node from the overall object in the obj argument,
 * essentially providing all available paths in an object and all the
 * values for each path.
 * @param {Object|Array} obj The object to operate on.
 * @param {String} path The path to retrieve data from.
 * @param {Object=} options Optional options object.
 * @returns {Object|Array} The result of the traversal.
 */
export function values(obj: any | any[], path: string, options?: any | undefined): any | any[];
/**
 * Converts any key matching the wildcard to a zero.
 * @param {String} key The key to test.
 * @param {*} [currentObj] The current object hierarchy.
 * @returns {String} The key.
 */
export function wildcardToZero(key: string, currentObj?: any): string;
