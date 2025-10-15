import "./chunk-IXJVFBHV.js";
import {
  AbstractChat,
  EventSourceParserStream,
  ZodFirstPartyTypeKind,
  external_exports,
  safeParseAsync,
  toJSONSchema
} from "./chunk-Q4TY2XMZ.js";
import { require_react } from "./chunk-QLJLW6ED.js";
import { __commonJS, __export, __toESM } from "./chunk-PR4QN5HX.js";

// node_modules/throttleit/index.js
var require_throttleit = __commonJS({
  "node_modules/throttleit/index.js"(exports, module) {
    function throttle2(function_, wait) {
      if (typeof function_ !== "function") {
        throw new TypeError(
          `Expected the first argument to be a \`function\`, got \`${typeof function_}\`.`
        );
      }
      let timeoutId;
      let lastCallTime = 0;
      return function throttled(...arguments_) {
        clearTimeout(timeoutId);
        const now = Date.now();
        const timeSinceLastCall = now - lastCallTime;
        const delayForNextCall = wait - timeSinceLastCall;
        if (delayForNextCall <= 0) {
          lastCallTime = now;
          function_.apply(this, arguments_);
        } else {
          timeoutId = setTimeout(() => {
            lastCallTime = Date.now();
            function_.apply(this, arguments_);
          }, delayForNextCall);
        }
      };
    }
    module.exports = throttle2;
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(
    exports
  ) {
    "use strict";
    (function () {
      function is(x, y) {
        return (
          (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y)
        );
      }
      function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha ||
          void 0 === React4.startTransition ||
          ((didWarnOld18Alpha = true),
          console.error(
            "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
          ));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
          var cachedValue = getSnapshot();
          objectIs(value, cachedValue) ||
            (console.error(
              "The result of getSnapshot should be cached to avoid an infinite loop"
            ),
            (didWarnUncachedGetSnapshot = true));
        }
        cachedValue = useState3({
          inst: { value, getSnapshot }
        });
        var inst = cachedValue[0].inst,
          forceUpdate = cachedValue[1];
        useLayoutEffect2(
          function () {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
          },
          [subscribe, value, getSnapshot]
        );
        useEffect4(
          function () {
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            return subscribe(function () {
              checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            });
          },
          [subscribe]
        );
        useDebugValue2(value);
        return value;
      }
      function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
          var nextValue = latestGetSnapshot();
          return !objectIs(inst, nextValue);
        } catch (error) {
          return true;
        }
      }
      function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        "function" ===
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React4 = require_react(),
        objectIs = "function" === typeof Object.is ? Object.is : is,
        useState3 = React4.useState,
        useEffect4 = React4.useEffect,
        useLayoutEffect2 = React4.useLayoutEffect,
        useDebugValue2 = React4.useDebugValue,
        didWarnOld18Alpha = false,
        didWarnUncachedGetSnapshot = false,
        shim =
          "undefined" === typeof window ||
          "undefined" === typeof window.document ||
          "undefined" === typeof window.document.createElement
            ? useSyncExternalStore$1
            : useSyncExternalStore$2;
      exports.useSyncExternalStore =
        void 0 !== React4.useSyncExternalStore
          ? React4.useSyncExternalStore
          : shim;
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        "function" ===
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/@ai-sdk/react/dist/index.mjs
var import_react4 = __toESM(require_react(), 1);
var import_throttleit = __toESM(require_throttleit(), 1);
var import_react5 = __toESM(require_react(), 1);

// node_modules/swr/dist/index/index.mjs
var import_react3 = __toESM(require_react(), 1);
var import_shim = __toESM(require_shim(), 1);

// node_modules/swr/dist/_internal/config-context-client-Cm1JTDEP.mjs
var import_react = __toESM(require_react(), 1);

// node_modules/swr/dist/_internal/events.mjs
var events_exports = {};
__export(events_exports, {
  ERROR_REVALIDATE_EVENT: () => ERROR_REVALIDATE_EVENT,
  FOCUS_EVENT: () => FOCUS_EVENT,
  MUTATE_EVENT: () => MUTATE_EVENT,
  RECONNECT_EVENT: () => RECONNECT_EVENT
});
var FOCUS_EVENT = 0;
var RECONNECT_EVENT = 1;
var MUTATE_EVENT = 2;
var ERROR_REVALIDATE_EVENT = 3;

// node_modules/dequal/lite/index.mjs
var has = Object.prototype.hasOwnProperty;
function dequal(foo, bar) {
  var ctor, len;
  if (foo === bar) return true;
  if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
    if (ctor === Date) return foo.getTime() === bar.getTime();
    if (ctor === RegExp) return foo.toString() === bar.toString();
    if (ctor === Array) {
      if ((len = foo.length) === bar.length) {
        while (len-- && dequal(foo[len], bar[len]));
      }
      return len === -1;
    }
    if (!ctor || typeof foo === "object") {
      len = 0;
      for (ctor in foo) {
        if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
        if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
      }
      return Object.keys(bar).length === len;
    }
  }
  return foo !== foo && bar !== bar;
}

// node_modules/swr/dist/_internal/config-context-client-Cm1JTDEP.mjs
var SWRGlobalState = /* @__PURE__ */ new WeakMap();
var noop = () => {};
var UNDEFINED =
  /*#__NOINLINE__*/
  noop();
var OBJECT = Object;
var isUndefined = (v) => v === UNDEFINED;
var isFunction = (v) => typeof v == "function";
var mergeObjects = (a, b) => ({
  ...a,
  ...b
});
var isPromiseLike = (x) => isFunction(x.then);
var EMPTY_CACHE = {};
var INITIAL_CACHE = {};
var STR_UNDEFINED = "undefined";
var isWindowDefined = typeof window != STR_UNDEFINED;
var isDocumentDefined = typeof document != STR_UNDEFINED;
var isLegacyDeno = isWindowDefined && "Deno" in window;
var hasRequestAnimationFrame = () =>
  isWindowDefined && typeof window["requestAnimationFrame"] != STR_UNDEFINED;
var createCacheHelper = (cache2, key) => {
  const state = SWRGlobalState.get(cache2);
  return [
    // Getter
    () => (!isUndefined(key) && cache2.get(key)) || EMPTY_CACHE,
    // Setter
    (info) => {
      if (!isUndefined(key)) {
        const prev = cache2.get(key);
        if (!(key in INITIAL_CACHE)) {
          INITIAL_CACHE[key] = prev;
        }
        state[5](key, mergeObjects(prev, info), prev || EMPTY_CACHE);
      }
    },
    // Subscriber
    state[6],
    // Get server cache snapshot
    () => {
      if (!isUndefined(key)) {
        if (key in INITIAL_CACHE) return INITIAL_CACHE[key];
      }
      return (!isUndefined(key) && cache2.get(key)) || EMPTY_CACHE;
    }
  ];
};
var online = true;
var isOnline = () => online;
var [onWindowEvent, offWindowEvent] =
  isWindowDefined && window.addEventListener
    ? [
        window.addEventListener.bind(window),
        window.removeEventListener.bind(window)
      ]
    : [noop, noop];
var isVisible = () => {
  const visibilityState = isDocumentDefined && document.visibilityState;
  return isUndefined(visibilityState) || visibilityState !== "hidden";
};
var initFocus = (callback) => {
  if (isDocumentDefined) {
    document.addEventListener("visibilitychange", callback);
  }
  onWindowEvent("focus", callback);
  return () => {
    if (isDocumentDefined) {
      document.removeEventListener("visibilitychange", callback);
    }
    offWindowEvent("focus", callback);
  };
};
var initReconnect = (callback) => {
  const onOnline = () => {
    online = true;
    callback();
  };
  const onOffline = () => {
    online = false;
  };
  onWindowEvent("online", onOnline);
  onWindowEvent("offline", onOffline);
  return () => {
    offWindowEvent("online", onOnline);
    offWindowEvent("offline", onOffline);
  };
};
var preset = {
  isOnline,
  isVisible
};
var defaultConfigOptions = {
  initFocus,
  initReconnect
};
var IS_REACT_LEGACY = !import_react.default.useId;
var IS_SERVER = !isWindowDefined || isLegacyDeno;
var rAF = (f) =>
  hasRequestAnimationFrame()
    ? window["requestAnimationFrame"](f)
    : setTimeout(f, 1);
var useIsomorphicLayoutEffect = IS_SERVER
  ? import_react.useEffect
  : import_react.useLayoutEffect;
var navigatorConnection =
  typeof navigator !== "undefined" && navigator.connection;
var slowConnection =
  !IS_SERVER &&
  navigatorConnection &&
  (["slow-2g", "2g"].includes(navigatorConnection.effectiveType) ||
    navigatorConnection.saveData);
var table = /* @__PURE__ */ new WeakMap();
var isObjectType = (value, type) =>
  OBJECT.prototype.toString.call(value) === `[object ${type}]`;
var counter = 0;
var stableHash = (arg) => {
  const type = typeof arg;
  const isDate = isObjectType(arg, "Date");
  const isRegex = isObjectType(arg, "RegExp");
  const isPlainObject = isObjectType(arg, "Object");
  let result;
  let index;
  if (OBJECT(arg) === arg && !isDate && !isRegex) {
    result = table.get(arg);
    if (result) return result;
    result = ++counter + "~";
    table.set(arg, result);
    if (Array.isArray(arg)) {
      result = "@";
      for (index = 0; index < arg.length; index++) {
        result += stableHash(arg[index]) + ",";
      }
      table.set(arg, result);
    }
    if (isPlainObject) {
      result = "#";
      const keys = OBJECT.keys(arg).sort();
      while (!isUndefined((index = keys.pop()))) {
        if (!isUndefined(arg[index])) {
          result += index + ":" + stableHash(arg[index]) + ",";
        }
      }
      table.set(arg, result);
    }
  } else {
    result = isDate
      ? arg.toJSON()
      : type == "symbol"
        ? arg.toString()
        : type == "string"
          ? JSON.stringify(arg)
          : "" + arg;
  }
  return result;
};
var serialize = (key) => {
  if (isFunction(key)) {
    try {
      key = key();
    } catch (err) {
      key = "";
    }
  }
  const args = key;
  key =
    typeof key == "string"
      ? key
      : (Array.isArray(key) ? key.length : key)
        ? stableHash(key)
        : "";
  return [key, args];
};
var __timestamp = 0;
var getTimestamp = () => ++__timestamp;
async function internalMutate(...args) {
  const [cache2, _key, _data, _opts] = args;
  const options = mergeObjects(
    {
      populateCache: true,
      throwOnError: true
    },
    typeof _opts === "boolean"
      ? {
          revalidate: _opts
        }
      : _opts || {}
  );
  let populateCache = options.populateCache;
  const rollbackOnErrorOption = options.rollbackOnError;
  let optimisticData = options.optimisticData;
  const rollbackOnError = (error) => {
    return typeof rollbackOnErrorOption === "function"
      ? rollbackOnErrorOption(error)
      : rollbackOnErrorOption !== false;
  };
  const throwOnError = options.throwOnError;
  if (isFunction(_key)) {
    const keyFilter = _key;
    const matchedKeys = [];
    const it = cache2.keys();
    for (const key of it) {
      if (
        // Skip the special useSWRInfinite and useSWRSubscription keys.
        !/^\$(inf|sub)\$/.test(key) &&
        keyFilter(cache2.get(key)._k)
      ) {
        matchedKeys.push(key);
      }
    }
    return Promise.all(matchedKeys.map(mutateByKey));
  }
  return mutateByKey(_key);
  async function mutateByKey(_k) {
    const [key] = serialize(_k);
    if (!key) return;
    const [get, set] = createCacheHelper(cache2, key);
    const [EVENT_REVALIDATORS, MUTATION, FETCH, PRELOAD] =
      SWRGlobalState.get(cache2);
    const startRevalidate = () => {
      const revalidators = EVENT_REVALIDATORS[key];
      const revalidate = isFunction(options.revalidate)
        ? options.revalidate(get().data, _k)
        : options.revalidate !== false;
      if (revalidate) {
        delete FETCH[key];
        delete PRELOAD[key];
        if (revalidators && revalidators[0]) {
          return revalidators[0](MUTATE_EVENT).then(() => get().data);
        }
      }
      return get().data;
    };
    if (args.length < 3) {
      return startRevalidate();
    }
    let data = _data;
    let error;
    const beforeMutationTs = getTimestamp();
    MUTATION[key] = [beforeMutationTs, 0];
    const hasOptimisticData = !isUndefined(optimisticData);
    const state = get();
    const displayedData = state.data;
    const currentData = state._c;
    const committedData = isUndefined(currentData)
      ? displayedData
      : currentData;
    if (hasOptimisticData) {
      optimisticData = isFunction(optimisticData)
        ? optimisticData(committedData, displayedData)
        : optimisticData;
      set({
        data: optimisticData,
        _c: committedData
      });
    }
    if (isFunction(data)) {
      try {
        data = data(committedData);
      } catch (err) {
        error = err;
      }
    }
    if (data && isPromiseLike(data)) {
      data = await data.catch((err) => {
        error = err;
      });
      if (beforeMutationTs !== MUTATION[key][0]) {
        if (error) throw error;
        return data;
      } else if (error && hasOptimisticData && rollbackOnError(error)) {
        populateCache = true;
        set({
          data: committedData,
          _c: UNDEFINED
        });
      }
    }
    if (populateCache) {
      if (!error) {
        if (isFunction(populateCache)) {
          const populateCachedData = populateCache(data, committedData);
          set({
            data: populateCachedData,
            error: UNDEFINED,
            _c: UNDEFINED
          });
        } else {
          set({
            data,
            error: UNDEFINED,
            _c: UNDEFINED
          });
        }
      }
    }
    MUTATION[key][1] = getTimestamp();
    Promise.resolve(startRevalidate()).then(() => {
      set({
        _c: UNDEFINED
      });
    });
    if (error) {
      if (throwOnError) throw error;
      return;
    }
    return data;
  }
}
var revalidateAllKeys = (revalidators, type) => {
  for (const key in revalidators) {
    if (revalidators[key][0]) revalidators[key][0](type);
  }
};
var initCache = (provider, options) => {
  if (!SWRGlobalState.has(provider)) {
    const opts = mergeObjects(defaultConfigOptions, options);
    const EVENT_REVALIDATORS = {};
    const mutate2 = internalMutate.bind(UNDEFINED, provider);
    let unmount = noop;
    const subscriptions = {};
    const subscribe = (key, callback) => {
      const subs = subscriptions[key] || [];
      subscriptions[key] = subs;
      subs.push(callback);
      return () => subs.splice(subs.indexOf(callback), 1);
    };
    const setter = (key, value, prev) => {
      provider.set(key, value);
      const subs = subscriptions[key];
      if (subs) {
        for (const fn of subs) {
          fn(value, prev);
        }
      }
    };
    const initProvider = () => {
      if (!SWRGlobalState.has(provider)) {
        SWRGlobalState.set(provider, [
          EVENT_REVALIDATORS,
          {},
          {},
          {},
          mutate2,
          setter,
          subscribe
        ]);
        if (!IS_SERVER) {
          const releaseFocus = opts.initFocus(
            setTimeout.bind(
              UNDEFINED,
              revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, FOCUS_EVENT)
            )
          );
          const releaseReconnect = opts.initReconnect(
            setTimeout.bind(
              UNDEFINED,
              revalidateAllKeys.bind(
                UNDEFINED,
                EVENT_REVALIDATORS,
                RECONNECT_EVENT
              )
            )
          );
          unmount = () => {
            releaseFocus && releaseFocus();
            releaseReconnect && releaseReconnect();
            SWRGlobalState.delete(provider);
          };
        }
      }
    };
    initProvider();
    return [provider, mutate2, initProvider, unmount];
  }
  return [provider, SWRGlobalState.get(provider)[4]];
};
var onErrorRetry = (_, __, config, revalidate, opts) => {
  const maxRetryCount = config.errorRetryCount;
  const currentRetryCount = opts.retryCount;
  const timeout =
    ~~(
      (Math.random() + 0.5) *
      (1 << (currentRetryCount < 8 ? currentRetryCount : 8))
    ) * config.errorRetryInterval;
  if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
    return;
  }
  setTimeout(revalidate, timeout, opts);
};
var compare = dequal;
var [cache, mutate] = initCache(/* @__PURE__ */ new Map());
var defaultConfig = mergeObjects(
  {
    // events
    onLoadingSlow: noop,
    onSuccess: noop,
    onError: noop,
    onErrorRetry,
    onDiscarded: noop,
    // switches
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: true,
    shouldRetryOnError: true,
    // timeouts
    errorRetryInterval: slowConnection ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: slowConnection ? 5e3 : 3e3,
    // providers
    compare,
    isPaused: () => false,
    cache,
    mutate,
    fallback: {}
  },
  // use web preset by default
  preset
);
var mergeConfigs = (a, b) => {
  const v = mergeObjects(a, b);
  if (b) {
    const { use: u1, fallback: f1 } = a;
    const { use: u2, fallback: f2 } = b;
    if (u1 && u2) {
      v.use = u1.concat(u2);
    }
    if (f1 && f2) {
      v.fallback = mergeObjects(f1, f2);
    }
  }
  return v;
};
var SWRConfigContext = (0, import_react.createContext)({});
var SWRConfig = (props) => {
  const { value } = props;
  const parentConfig = (0, import_react.useContext)(SWRConfigContext);
  const isFunctionalConfig = isFunction(value);
  const config = (0, import_react.useMemo)(
    () => (isFunctionalConfig ? value(parentConfig) : value),
    [isFunctionalConfig, parentConfig, value]
  );
  const extendedConfig = (0, import_react.useMemo)(
    () => (isFunctionalConfig ? config : mergeConfigs(parentConfig, config)),
    [isFunctionalConfig, parentConfig, config]
  );
  const provider = config && config.provider;
  const cacheContextRef = (0, import_react.useRef)(UNDEFINED);
  if (provider && !cacheContextRef.current) {
    cacheContextRef.current = initCache(
      provider(extendedConfig.cache || cache),
      config
    );
  }
  const cacheContext = cacheContextRef.current;
  if (cacheContext) {
    extendedConfig.cache = cacheContext[0];
    extendedConfig.mutate = cacheContext[1];
  }
  useIsomorphicLayoutEffect(() => {
    if (cacheContext) {
      cacheContext[2] && cacheContext[2]();
      return cacheContext[3];
    }
  }, []);
  return (0, import_react.createElement)(
    SWRConfigContext.Provider,
    mergeObjects(props, {
      value: extendedConfig
    })
  );
};

// node_modules/swr/dist/_internal/constants.mjs
var INFINITE_PREFIX = "$inf$";

// node_modules/swr/dist/_internal/index.mjs
var import_react2 = __toESM(require_react(), 1);
var enableDevtools = isWindowDefined && window.__SWR_DEVTOOLS_USE__;
var use = enableDevtools ? window.__SWR_DEVTOOLS_USE__ : [];
var setupDevTools = () => {
  if (enableDevtools) {
    window.__SWR_DEVTOOLS_REACT__ = import_react2.default;
  }
};
var normalize = (args) => {
  return isFunction(args[1])
    ? [args[0], args[1], args[2] || {}]
    : [args[0], null, (args[1] === null ? args[2] : args[1]) || {}];
};
var useSWRConfig = () => {
  return mergeObjects(
    defaultConfig,
    (0, import_react2.useContext)(SWRConfigContext)
  );
};
var middleware = (useSWRNext) => (key_, fetcher_, config) => {
  const fetcher =
    fetcher_ &&
    ((...args) => {
      const [key] = serialize(key_);
      const [, , , PRELOAD] = SWRGlobalState.get(cache);
      if (key.startsWith(INFINITE_PREFIX)) {
        return fetcher_(...args);
      }
      const req = PRELOAD[key];
      if (isUndefined(req)) return fetcher_(...args);
      delete PRELOAD[key];
      return req;
    });
  return useSWRNext(key_, fetcher, config);
};
var BUILT_IN_MIDDLEWARE = use.concat(middleware);
var withArgs = (hook) => {
  return function useSWRArgs(...args) {
    const fallbackConfig = useSWRConfig();
    const [key, fn, _config] = normalize(args);
    const config = mergeConfigs(fallbackConfig, _config);
    let next = hook;
    const { use: use4 } = config;
    const middleware2 = (use4 || []).concat(BUILT_IN_MIDDLEWARE);
    for (let i = middleware2.length; i--; ) {
      next = middleware2[i](next);
    }
    return next(key, fn || config.fetcher || null, config);
  };
};
var subscribeCallback = (key, callbacks, callback) => {
  const keyedRevalidators = callbacks[key] || (callbacks[key] = []);
  keyedRevalidators.push(callback);
  return () => {
    const index = keyedRevalidators.indexOf(callback);
    if (index >= 0) {
      keyedRevalidators[index] =
        keyedRevalidators[keyedRevalidators.length - 1];
      keyedRevalidators.pop();
    }
  };
};
setupDevTools();

// node_modules/swr/dist/index/index.mjs
var noop2 = () => {};
var UNDEFINED2 =
  /*#__NOINLINE__*/
  noop2();
var use2 =
  import_react3.default.use || // This extra generic is to avoid TypeScript mixing up the generic and JSX sytax
  // and emitting an error.
  // We assume that this is only for the `use(thenable)` case, not `use(context)`.
  // https://github.com/facebook/react/blob/aed00dacfb79d17c53218404c52b1c7aa59c4a89/packages/react-server/src/ReactFizzThenable.js#L45
  ((thenable) => {
    switch (thenable.status) {
      case "pending":
        throw thenable;
      case "fulfilled":
        return thenable.value;
      case "rejected":
        throw thenable.reason;
      default:
        thenable.status = "pending";
        thenable.then(
          (v) => {
            thenable.status = "fulfilled";
            thenable.value = v;
          },
          (e) => {
            thenable.status = "rejected";
            thenable.reason = e;
          }
        );
        throw thenable;
    }
  });
var WITH_DEDUPE = {
  dedupe: true
};
var useSWRHandler = (_key, fetcher, config) => {
  const {
    cache: cache2,
    compare: compare2,
    suspense,
    fallbackData,
    revalidateOnMount,
    revalidateIfStale,
    refreshInterval,
    refreshWhenHidden,
    refreshWhenOffline,
    keepPreviousData
  } = config;
  const [EVENT_REVALIDATORS, MUTATION, FETCH, PRELOAD] =
    SWRGlobalState.get(cache2);
  const [key, fnArg] = serialize(_key);
  const initialMountedRef = (0, import_react3.useRef)(false);
  const unmountedRef = (0, import_react3.useRef)(false);
  const keyRef = (0, import_react3.useRef)(key);
  const fetcherRef = (0, import_react3.useRef)(fetcher);
  const configRef = (0, import_react3.useRef)(config);
  const getConfig = () => configRef.current;
  const isActive = () => getConfig().isVisible() && getConfig().isOnline();
  const [getCache, setCache, subscribeCache, getInitialCache] =
    createCacheHelper(cache2, key);
  const stateDependencies = (0, import_react3.useRef)({}).current;
  const fallback = isUndefined(fallbackData)
    ? isUndefined(config.fallback)
      ? UNDEFINED
      : config.fallback[key]
    : fallbackData;
  const isEqual = (prev, current) => {
    for (const _ in stateDependencies) {
      const t = _;
      if (t === "data") {
        if (!compare2(prev[t], current[t])) {
          if (!isUndefined(prev[t])) {
            return false;
          }
          if (!compare2(returnedData, current[t])) {
            return false;
          }
        }
      } else {
        if (current[t] !== prev[t]) {
          return false;
        }
      }
    }
    return true;
  };
  const getSnapshot = (0, import_react3.useMemo)(() => {
    const shouldStartRequest = (() => {
      if (!key) return false;
      if (!fetcher) return false;
      if (!isUndefined(revalidateOnMount)) return revalidateOnMount;
      if (getConfig().isPaused()) return false;
      if (suspense) return false;
      return revalidateIfStale !== false;
    })();
    const getSelectedCache = (state) => {
      const snapshot = mergeObjects(state);
      delete snapshot._k;
      if (!shouldStartRequest) {
        return snapshot;
      }
      return {
        isValidating: true,
        isLoading: true,
        ...snapshot
      };
    };
    const cachedData2 = getCache();
    const initialData = getInitialCache();
    const clientSnapshot = getSelectedCache(cachedData2);
    const serverSnapshot =
      cachedData2 === initialData
        ? clientSnapshot
        : getSelectedCache(initialData);
    let memorizedSnapshot = clientSnapshot;
    return [
      () => {
        const newSnapshot = getSelectedCache(getCache());
        const compareResult = isEqual(newSnapshot, memorizedSnapshot);
        if (compareResult) {
          memorizedSnapshot.data = newSnapshot.data;
          memorizedSnapshot.isLoading = newSnapshot.isLoading;
          memorizedSnapshot.isValidating = newSnapshot.isValidating;
          memorizedSnapshot.error = newSnapshot.error;
          return memorizedSnapshot;
        } else {
          memorizedSnapshot = newSnapshot;
          return newSnapshot;
        }
      },
      () => serverSnapshot
    ];
  }, [cache2, key]);
  const cached = (0, import_shim.useSyncExternalStore)(
    (0, import_react3.useCallback)(
      (callback) =>
        subscribeCache(key, (current, prev) => {
          if (!isEqual(prev, current)) callback();
        }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [cache2, key]
    ),
    getSnapshot[0],
    getSnapshot[1]
  );
  const isInitialMount = !initialMountedRef.current;
  const hasRevalidator =
    EVENT_REVALIDATORS[key] && EVENT_REVALIDATORS[key].length > 0;
  const cachedData = cached.data;
  const data = isUndefined(cachedData)
    ? fallback && isPromiseLike(fallback)
      ? use2(fallback)
      : fallback
    : cachedData;
  const error = cached.error;
  const laggyDataRef = (0, import_react3.useRef)(data);
  const returnedData = keepPreviousData
    ? isUndefined(cachedData)
      ? isUndefined(laggyDataRef.current)
        ? data
        : laggyDataRef.current
      : cachedData
    : data;
  const shouldDoInitialRevalidation = (() => {
    if (hasRevalidator && !isUndefined(error)) return false;
    if (isInitialMount && !isUndefined(revalidateOnMount))
      return revalidateOnMount;
    if (getConfig().isPaused()) return false;
    if (suspense) return isUndefined(data) ? false : revalidateIfStale;
    return isUndefined(data) || revalidateIfStale;
  })();
  const defaultValidatingState = !!(
    key &&
    fetcher &&
    isInitialMount &&
    shouldDoInitialRevalidation
  );
  const isValidating = isUndefined(cached.isValidating)
    ? defaultValidatingState
    : cached.isValidating;
  const isLoading = isUndefined(cached.isLoading)
    ? defaultValidatingState
    : cached.isLoading;
  const revalidate = (0, import_react3.useCallback)(
    async (revalidateOpts) => {
      const currentFetcher = fetcherRef.current;
      if (
        !key ||
        !currentFetcher ||
        unmountedRef.current ||
        getConfig().isPaused()
      ) {
        return false;
      }
      let newData;
      let startAt;
      let loading = true;
      const opts = revalidateOpts || {};
      const shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
      const callbackSafeguard = () => {
        if (IS_REACT_LEGACY) {
          return (
            !unmountedRef.current &&
            key === keyRef.current &&
            initialMountedRef.current
          );
        }
        return key === keyRef.current;
      };
      const finalState = {
        isValidating: false,
        isLoading: false
      };
      const finishRequestAndUpdateState = () => {
        setCache(finalState);
      };
      const cleanupState = () => {
        const requestInfo = FETCH[key];
        if (requestInfo && requestInfo[1] === startAt) {
          delete FETCH[key];
        }
      };
      const initialState = {
        isValidating: true
      };
      if (isUndefined(getCache().data)) {
        initialState.isLoading = true;
      }
      try {
        if (shouldStartNewRequest) {
          setCache(initialState);
          if (config.loadingTimeout && isUndefined(getCache().data)) {
            setTimeout(() => {
              if (loading && callbackSafeguard()) {
                getConfig().onLoadingSlow(key, config);
              }
            }, config.loadingTimeout);
          }
          FETCH[key] = [currentFetcher(fnArg), getTimestamp()];
        }
        [newData, startAt] = FETCH[key];
        newData = await newData;
        if (shouldStartNewRequest) {
          setTimeout(cleanupState, config.dedupingInterval);
        }
        if (!FETCH[key] || FETCH[key][1] !== startAt) {
          if (shouldStartNewRequest) {
            if (callbackSafeguard()) {
              getConfig().onDiscarded(key);
            }
          }
          return false;
        }
        finalState.error = UNDEFINED;
        const mutationInfo = MUTATION[key];
        if (
          !isUndefined(mutationInfo) && // case 1
          (startAt <= mutationInfo[0] || // case 2
            startAt <= mutationInfo[1] || // case 3
            mutationInfo[1] === 0)
        ) {
          finishRequestAndUpdateState();
          if (shouldStartNewRequest) {
            if (callbackSafeguard()) {
              getConfig().onDiscarded(key);
            }
          }
          return false;
        }
        const cacheData = getCache().data;
        finalState.data = compare2(cacheData, newData) ? cacheData : newData;
        if (shouldStartNewRequest) {
          if (callbackSafeguard()) {
            getConfig().onSuccess(newData, key, config);
          }
        }
      } catch (err) {
        cleanupState();
        const currentConfig = getConfig();
        const { shouldRetryOnError } = currentConfig;
        if (!currentConfig.isPaused()) {
          finalState.error = err;
          if (shouldStartNewRequest && callbackSafeguard()) {
            currentConfig.onError(err, key, currentConfig);
            if (
              shouldRetryOnError === true ||
              (isFunction(shouldRetryOnError) && shouldRetryOnError(err))
            ) {
              if (
                !getConfig().revalidateOnFocus ||
                !getConfig().revalidateOnReconnect ||
                isActive()
              ) {
                currentConfig.onErrorRetry(
                  err,
                  key,
                  currentConfig,
                  (_opts) => {
                    const revalidators = EVENT_REVALIDATORS[key];
                    if (revalidators && revalidators[0]) {
                      revalidators[0](
                        events_exports.ERROR_REVALIDATE_EVENT,
                        _opts
                      );
                    }
                  },
                  {
                    retryCount: (opts.retryCount || 0) + 1,
                    dedupe: true
                  }
                );
              }
            }
          }
        }
      }
      loading = false;
      finishRequestAndUpdateState();
      return true;
    },
    // `setState` is immutable, and `eventsCallback`, `fnArg`, and
    // `keyValidating` are depending on `key`, so we can exclude them from
    // the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // `useSWR('key', () => fetch('/api/'), { suspense: true })`
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key, cache2]
  );
  const boundMutate = (0, import_react3.useCallback)(
    // Use callback to make sure `keyRef.current` returns latest result every time
    (...args) => {
      return internalMutate(cache2, keyRef.current, ...args);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  useIsomorphicLayoutEffect(() => {
    fetcherRef.current = fetcher;
    configRef.current = config;
    if (!isUndefined(cachedData)) {
      laggyDataRef.current = cachedData;
    }
  });
  useIsomorphicLayoutEffect(() => {
    if (!key) return;
    const softRevalidate = revalidate.bind(UNDEFINED, WITH_DEDUPE);
    let nextFocusRevalidatedAt = 0;
    const onRevalidate = (type, opts = {}) => {
      if (type == events_exports.FOCUS_EVENT) {
        const now = Date.now();
        if (
          getConfig().revalidateOnFocus &&
          now > nextFocusRevalidatedAt &&
          isActive()
        ) {
          nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
          softRevalidate();
        }
      } else if (type == events_exports.RECONNECT_EVENT) {
        if (getConfig().revalidateOnReconnect && isActive()) {
          softRevalidate();
        }
      } else if (type == events_exports.MUTATE_EVENT) {
        return revalidate();
      } else if (type == events_exports.ERROR_REVALIDATE_EVENT) {
        return revalidate(opts);
      }
      return;
    };
    const unsubEvents = subscribeCallback(
      key,
      EVENT_REVALIDATORS,
      onRevalidate
    );
    unmountedRef.current = false;
    keyRef.current = key;
    initialMountedRef.current = true;
    setCache({
      _k: fnArg
    });
    if (shouldDoInitialRevalidation) {
      if (isUndefined(data) || IS_SERVER) {
        softRevalidate();
      } else {
        rAF(softRevalidate);
      }
    }
    return () => {
      unmountedRef.current = true;
      unsubEvents();
    };
  }, [key]);
  useIsomorphicLayoutEffect(() => {
    let timer;
    function next() {
      const interval = isFunction(refreshInterval)
        ? refreshInterval(getCache().data)
        : refreshInterval;
      if (interval && timer !== -1) {
        timer = setTimeout(execute, interval);
      }
    }
    function execute() {
      if (
        !getCache().error &&
        (refreshWhenHidden || getConfig().isVisible()) &&
        (refreshWhenOffline || getConfig().isOnline())
      ) {
        revalidate(WITH_DEDUPE).then(next);
      } else {
        next();
      }
    }
    next();
    return () => {
      if (timer) {
        clearTimeout(timer);
        timer = -1;
      }
    };
  }, [refreshInterval, refreshWhenHidden, refreshWhenOffline, key]);
  (0, import_react3.useDebugValue)(returnedData);
  if (suspense && isUndefined(data) && key) {
    if (!IS_REACT_LEGACY && IS_SERVER) {
      throw new Error("Fallback data is required when using Suspense in SSR.");
    }
    fetcherRef.current = fetcher;
    configRef.current = config;
    unmountedRef.current = false;
    const req = PRELOAD[key];
    if (!isUndefined(req)) {
      const promise = boundMutate(req);
      use2(promise);
    }
    if (isUndefined(error)) {
      const promise = revalidate(WITH_DEDUPE);
      if (!isUndefined(returnedData)) {
        promise.status = "fulfilled";
        promise.value = true;
      }
      use2(promise);
    } else {
      throw error;
    }
  }
  const swrResponse = {
    mutate: boundMutate,
    get data() {
      stateDependencies.data = true;
      return returnedData;
    },
    get error() {
      stateDependencies.error = true;
      return error;
    },
    get isValidating() {
      stateDependencies.isValidating = true;
      return isValidating;
    },
    get isLoading() {
      stateDependencies.isLoading = true;
      return isLoading;
    }
  };
  return swrResponse;
};
var SWRConfig2 = OBJECT.defineProperty(SWRConfig, "defaultValue", {
  value: defaultConfig
});
var useSWR = withArgs(useSWRHandler);

// node_modules/@ai-sdk/react/node_modules/@ai-sdk/provider/dist/index.mjs
var marker = "vercel.ai.error";
var symbol = Symbol.for(marker);
var _a;
var _AISDKError = class _AISDKError2 extends Error {
  /**
   * Creates an AI SDK Error.
   *
   * @param {Object} params - The parameters for creating the error.
   * @param {string} params.name - The name of the error.
   * @param {string} params.message - The error message.
   * @param {unknown} [params.cause] - The underlying cause of the error.
   */
  constructor({ name: name143, message, cause }) {
    super(message);
    this[_a] = true;
    this.name = name143;
    this.cause = cause;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(error) {
    return _AISDKError2.hasMarker(error, marker);
  }
  static hasMarker(error, marker153) {
    const markerSymbol = Symbol.for(marker153);
    return (
      error != null &&
      typeof error === "object" &&
      markerSymbol in error &&
      typeof error[markerSymbol] === "boolean" &&
      error[markerSymbol] === true
    );
  }
};
_a = symbol;
var AISDKError = _AISDKError;
var name = "AI_APICallError";
var marker2 = `vercel.ai.error.${name}`;
var symbol2 = Symbol.for(marker2);
var _a2;
_a2 = symbol2;
var name2 = "AI_EmptyResponseBodyError";
var marker3 = `vercel.ai.error.${name2}`;
var symbol3 = Symbol.for(marker3);
var _a3;
_a3 = symbol3;
var name3 = "AI_InvalidArgumentError";
var marker4 = `vercel.ai.error.${name3}`;
var symbol4 = Symbol.for(marker4);
var _a4;
var InvalidArgumentError = class extends AISDKError {
  constructor({ message, cause, argument }) {
    super({ name: name3, message, cause });
    this[_a4] = true;
    this.argument = argument;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker4);
  }
};
_a4 = symbol4;
var name4 = "AI_InvalidPromptError";
var marker5 = `vercel.ai.error.${name4}`;
var symbol5 = Symbol.for(marker5);
var _a5;
_a5 = symbol5;
var name5 = "AI_InvalidResponseDataError";
var marker6 = `vercel.ai.error.${name5}`;
var symbol6 = Symbol.for(marker6);
var _a6;
_a6 = symbol6;
var name6 = "AI_JSONParseError";
var marker7 = `vercel.ai.error.${name6}`;
var symbol7 = Symbol.for(marker7);
var _a7;
_a7 = symbol7;
var name7 = "AI_LoadAPIKeyError";
var marker8 = `vercel.ai.error.${name7}`;
var symbol8 = Symbol.for(marker8);
var _a8;
_a8 = symbol8;
var name8 = "AI_LoadSettingError";
var marker9 = `vercel.ai.error.${name8}`;
var symbol9 = Symbol.for(marker9);
var _a9;
_a9 = symbol9;
var name9 = "AI_NoContentGeneratedError";
var marker10 = `vercel.ai.error.${name9}`;
var symbol10 = Symbol.for(marker10);
var _a10;
_a10 = symbol10;
var name10 = "AI_NoSuchModelError";
var marker11 = `vercel.ai.error.${name10}`;
var symbol11 = Symbol.for(marker11);
var _a11;
_a11 = symbol11;
var name11 = "AI_TooManyEmbeddingValuesForCallError";
var marker12 = `vercel.ai.error.${name11}`;
var symbol12 = Symbol.for(marker12);
var _a12;
_a12 = symbol12;
var name12 = "AI_TypeValidationError";
var marker13 = `vercel.ai.error.${name12}`;
var symbol13 = Symbol.for(marker13);
var _a13;
_a13 = symbol13;
var name13 = "AI_UnsupportedFunctionalityError";
var marker14 = `vercel.ai.error.${name13}`;
var symbol14 = Symbol.for(marker14);
var _a14;
_a14 = symbol14;

// node_modules/@ai-sdk/react/node_modules/@ai-sdk/provider-utils/dist/index.mjs
var createIdGenerator = ({
  prefix,
  size = 16,
  alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator = "-"
} = {}) => {
  const generator = () => {
    const alphabetLength = alphabet.length;
    const chars = new Array(size);
    for (let i = 0; i < size; i++) {
      chars[i] = alphabet[(Math.random() * alphabetLength) | 0];
    }
    return chars.join("");
  };
  if (prefix == null) {
    return generator;
  }
  if (alphabet.includes(separator)) {
    throw new InvalidArgumentError({
      argument: "separator",
      message: `The separator "${separator}" must not be part of the alphabet "${alphabet}".`
    });
  }
  return () => `${prefix}${separator}${generator()}`;
};
var generateId = createIdGenerator();
var validatorSymbol = Symbol.for("vercel.ai.validator");
var ignoreOverride = Symbol(
  "Let zodToJsonSchema decide on which parser to use"
);
var ALPHA_NUMERIC = new Set(
  "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789"
);
var schemaSymbol = Symbol.for("vercel.ai.schema");
var { btoa, atob } = globalThis;

// node_modules/@ai-sdk/react/dist/index.mjs
var import_react6 = __toESM(require_react(), 1);
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
function throttle(fn, waitMs) {
  return waitMs != null ? (0, import_throttleit.default)(fn, waitMs) : fn;
}
var _messages;
var _status;
var _error;
var _messagesCallbacks;
var _statusCallbacks;
var _errorCallbacks;
var _callMessagesCallbacks;
var _callStatusCallbacks;
var _callErrorCallbacks;
var ReactChatState = class {
  constructor(initialMessages = []) {
    __privateAdd(this, _messages, void 0);
    __privateAdd(this, _status, "ready");
    __privateAdd(this, _error, void 0);
    __privateAdd(this, _messagesCallbacks, /* @__PURE__ */ new Set());
    __privateAdd(this, _statusCallbacks, /* @__PURE__ */ new Set());
    __privateAdd(this, _errorCallbacks, /* @__PURE__ */ new Set());
    this.pushMessage = (message) => {
      __privateSet(
        this,
        _messages,
        __privateGet(this, _messages).concat(message)
      );
      __privateGet(this, _callMessagesCallbacks).call(this);
    };
    this.popMessage = () => {
      __privateSet(this, _messages, __privateGet(this, _messages).slice(0, -1));
      __privateGet(this, _callMessagesCallbacks).call(this);
    };
    this.replaceMessage = (index, message) => {
      __privateSet(this, _messages, [
        ...__privateGet(this, _messages).slice(0, index),
        // We deep clone the message here to ensure the new React Compiler (currently in RC) detects deeply nested parts/metadata changes:
        this.snapshot(message),
        ...__privateGet(this, _messages).slice(index + 1)
      ]);
      __privateGet(this, _callMessagesCallbacks).call(this);
    };
    this.snapshot = (value) => structuredClone(value);
    this["~registerMessagesCallback"] = (onChange, throttleWaitMs) => {
      const callback = throttleWaitMs
        ? throttle(onChange, throttleWaitMs)
        : onChange;
      __privateGet(this, _messagesCallbacks).add(callback);
      return () => {
        __privateGet(this, _messagesCallbacks).delete(callback);
      };
    };
    this["~registerStatusCallback"] = (onChange) => {
      __privateGet(this, _statusCallbacks).add(onChange);
      return () => {
        __privateGet(this, _statusCallbacks).delete(onChange);
      };
    };
    this["~registerErrorCallback"] = (onChange) => {
      __privateGet(this, _errorCallbacks).add(onChange);
      return () => {
        __privateGet(this, _errorCallbacks).delete(onChange);
      };
    };
    __privateAdd(this, _callMessagesCallbacks, () => {
      __privateGet(this, _messagesCallbacks).forEach((callback) => callback());
    });
    __privateAdd(this, _callStatusCallbacks, () => {
      __privateGet(this, _statusCallbacks).forEach((callback) => callback());
    });
    __privateAdd(this, _callErrorCallbacks, () => {
      __privateGet(this, _errorCallbacks).forEach((callback) => callback());
    });
    __privateSet(this, _messages, initialMessages);
  }
  get status() {
    return __privateGet(this, _status);
  }
  set status(newStatus) {
    __privateSet(this, _status, newStatus);
    __privateGet(this, _callStatusCallbacks).call(this);
  }
  get error() {
    return __privateGet(this, _error);
  }
  set error(newError) {
    __privateSet(this, _error, newError);
    __privateGet(this, _callErrorCallbacks).call(this);
  }
  get messages() {
    return __privateGet(this, _messages);
  }
  set messages(newMessages) {
    __privateSet(this, _messages, [...newMessages]);
    __privateGet(this, _callMessagesCallbacks).call(this);
  }
};
_messages = /* @__PURE__ */ new WeakMap();
_status = /* @__PURE__ */ new WeakMap();
_error = /* @__PURE__ */ new WeakMap();
_messagesCallbacks = /* @__PURE__ */ new WeakMap();
_statusCallbacks = /* @__PURE__ */ new WeakMap();
_errorCallbacks = /* @__PURE__ */ new WeakMap();
_callMessagesCallbacks = /* @__PURE__ */ new WeakMap();
_callStatusCallbacks = /* @__PURE__ */ new WeakMap();
_callErrorCallbacks = /* @__PURE__ */ new WeakMap();
var _state;
var Chat = class extends AbstractChat {
  constructor({ messages, ...init }) {
    const state = new ReactChatState(messages);
    super({ ...init, state });
    __privateAdd(this, _state, void 0);
    this["~registerMessagesCallback"] = (onChange, throttleWaitMs) =>
      __privateGet(this, _state)["~registerMessagesCallback"](
        onChange,
        throttleWaitMs
      );
    this["~registerStatusCallback"] = (onChange) =>
      __privateGet(this, _state)["~registerStatusCallback"](onChange);
    this["~registerErrorCallback"] = (onChange) =>
      __privateGet(this, _state)["~registerErrorCallback"](onChange);
    __privateSet(this, _state, state);
  }
};
_state = /* @__PURE__ */ new WeakMap();
function useChat({
  experimental_throttle: throttleWaitMs,
  resume = false,
  ...options
} = {}) {
  const chatRef = (0, import_react4.useRef)(
    "chat" in options ? options.chat : new Chat(options)
  );
  const shouldRecreateChat =
    ("chat" in options && options.chat !== chatRef.current) ||
    ("id" in options && chatRef.current.id !== options.id);
  if (shouldRecreateChat) {
    chatRef.current = "chat" in options ? options.chat : new Chat(options);
  }
  const optionsId = "id" in options ? options.id : null;
  const subscribeToMessages = (0, import_react4.useCallback)(
    (update) =>
      chatRef.current["~registerMessagesCallback"](update, throttleWaitMs),
    // optionsId is required to trigger re-subscription when the chat ID changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [throttleWaitMs, optionsId]
  );
  const messages = (0, import_react4.useSyncExternalStore)(
    subscribeToMessages,
    () => chatRef.current.messages,
    () => chatRef.current.messages
  );
  const status = (0, import_react4.useSyncExternalStore)(
    chatRef.current["~registerStatusCallback"],
    () => chatRef.current.status,
    () => chatRef.current.status
  );
  const error = (0, import_react4.useSyncExternalStore)(
    chatRef.current["~registerErrorCallback"],
    () => chatRef.current.error,
    () => chatRef.current.error
  );
  const setMessages = (0, import_react4.useCallback)(
    (messagesParam) => {
      if (typeof messagesParam === "function") {
        messagesParam = messagesParam(chatRef.current.messages);
      }
      chatRef.current.messages = messagesParam;
    },
    [chatRef]
  );
  (0, import_react4.useEffect)(() => {
    if (resume) {
      chatRef.current.resumeStream();
    }
  }, [resume, chatRef]);
  return {
    id: chatRef.current.id,
    messages,
    setMessages,
    sendMessage: chatRef.current.sendMessage,
    regenerate: chatRef.current.regenerate,
    clearError: chatRef.current.clearError,
    stop: chatRef.current.stop,
    error,
    resumeStream: chatRef.current.resumeStream,
    status,
    addToolResult: chatRef.current.addToolResult
  };
}

// node_modules/agents/node_modules/@ai-sdk/provider/dist/index.mjs
var marker15 = "vercel.ai.error";
var symbol15 = Symbol.for(marker15);
var _a15;
var _AISDKError3 = class _AISDKError4 extends Error {
  /**
   * Creates an AI SDK Error.
   *
   * @param {Object} params - The parameters for creating the error.
   * @param {string} params.name - The name of the error.
   * @param {string} params.message - The error message.
   * @param {unknown} [params.cause] - The underlying cause of the error.
   */
  constructor({ name: name143, message, cause }) {
    super(message);
    this[_a15] = true;
    this.name = name143;
    this.cause = cause;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(error) {
    return _AISDKError4.hasMarker(error, marker15);
  }
  static hasMarker(error, marker153) {
    const markerSymbol = Symbol.for(marker153);
    return (
      error != null &&
      typeof error === "object" &&
      markerSymbol in error &&
      typeof error[markerSymbol] === "boolean" &&
      error[markerSymbol] === true
    );
  }
};
_a15 = symbol15;
var AISDKError2 = _AISDKError3;
var name14 = "AI_APICallError";
var marker22 = `vercel.ai.error.${name14}`;
var symbol22 = Symbol.for(marker22);
var _a22;
var APICallError2 = class extends AISDKError2 {
  constructor({
    message,
    url,
    requestBodyValues,
    statusCode,
    responseHeaders,
    responseBody,
    cause,
    isRetryable = statusCode != null &&
      (statusCode === 408 || // request timeout
        statusCode === 409 || // conflict
        statusCode === 429 || // too many requests
        statusCode >= 500),
    // server error
    data
  }) {
    super({ name: name14, message, cause });
    this[_a22] = true;
    this.url = url;
    this.requestBodyValues = requestBodyValues;
    this.statusCode = statusCode;
    this.responseHeaders = responseHeaders;
    this.responseBody = responseBody;
    this.isRetryable = isRetryable;
    this.data = data;
  }
  static isInstance(error) {
    return AISDKError2.hasMarker(error, marker22);
  }
};
_a22 = symbol22;
var name22 = "AI_EmptyResponseBodyError";
var marker32 = `vercel.ai.error.${name22}`;
var symbol32 = Symbol.for(marker32);
var _a32;
var EmptyResponseBodyError2 = class extends AISDKError2 {
  // used in isInstance
  constructor({ message = "Empty response body" } = {}) {
    super({ name: name22, message });
    this[_a32] = true;
  }
  static isInstance(error) {
    return AISDKError2.hasMarker(error, marker32);
  }
};
_a32 = symbol32;
function getErrorMessage(error) {
  if (error == null) {
    return "unknown error";
  }
  if (typeof error === "string") {
    return error;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return JSON.stringify(error);
}
var name32 = "AI_InvalidArgumentError";
var marker42 = `vercel.ai.error.${name32}`;
var symbol42 = Symbol.for(marker42);
var _a42;
var InvalidArgumentError2 = class extends AISDKError2 {
  constructor({ message, cause, argument }) {
    super({ name: name32, message, cause });
    this[_a42] = true;
    this.argument = argument;
  }
  static isInstance(error) {
    return AISDKError2.hasMarker(error, marker42);
  }
};
_a42 = symbol42;
var name42 = "AI_InvalidPromptError";
var marker52 = `vercel.ai.error.${name42}`;
var symbol52 = Symbol.for(marker52);
var _a52;
_a52 = symbol52;
var name52 = "AI_InvalidResponseDataError";
var marker62 = `vercel.ai.error.${name52}`;
var symbol62 = Symbol.for(marker62);
var _a62;
_a62 = symbol62;
var name62 = "AI_JSONParseError";
var marker72 = `vercel.ai.error.${name62}`;
var symbol72 = Symbol.for(marker72);
var _a72;
var JSONParseError2 = class extends AISDKError2 {
  constructor({ text: text2, cause }) {
    super({
      name: name62,
      message: `JSON parsing failed: Text: ${text2}.
Error message: ${getErrorMessage(cause)}`,
      cause
    });
    this[_a72] = true;
    this.text = text2;
  }
  static isInstance(error) {
    return AISDKError2.hasMarker(error, marker72);
  }
};
_a72 = symbol72;
var name72 = "AI_LoadAPIKeyError";
var marker82 = `vercel.ai.error.${name72}`;
var symbol82 = Symbol.for(marker82);
var _a82;
_a82 = symbol82;
var name82 = "AI_LoadSettingError";
var marker92 = `vercel.ai.error.${name82}`;
var symbol92 = Symbol.for(marker92);
var _a92;
_a92 = symbol92;
var name92 = "AI_NoContentGeneratedError";
var marker102 = `vercel.ai.error.${name92}`;
var symbol102 = Symbol.for(marker102);
var _a102;
_a102 = symbol102;
var name102 = "AI_NoSuchModelError";
var marker112 = `vercel.ai.error.${name102}`;
var symbol112 = Symbol.for(marker112);
var _a112;
var NoSuchModelError = class extends AISDKError2 {
  constructor({
    errorName = name102,
    modelId,
    modelType,
    message = `No such ${modelType}: ${modelId}`
  }) {
    super({ name: errorName, message });
    this[_a112] = true;
    this.modelId = modelId;
    this.modelType = modelType;
  }
  static isInstance(error) {
    return AISDKError2.hasMarker(error, marker112);
  }
};
_a112 = symbol112;
var name112 = "AI_TooManyEmbeddingValuesForCallError";
var marker122 = `vercel.ai.error.${name112}`;
var symbol122 = Symbol.for(marker122);
var _a122;
_a122 = symbol122;
var name122 = "AI_TypeValidationError";
var marker132 = `vercel.ai.error.${name122}`;
var symbol132 = Symbol.for(marker132);
var _a132;
var _TypeValidationError = class _TypeValidationError2 extends AISDKError2 {
  constructor({ value, cause }) {
    super({
      name: name122,
      message: `Type validation failed: Value: ${JSON.stringify(value)}.
Error message: ${getErrorMessage(cause)}`,
      cause
    });
    this[_a132] = true;
    this.value = value;
  }
  static isInstance(error) {
    return AISDKError2.hasMarker(error, marker132);
  }
  /**
   * Wraps an error into a TypeValidationError.
   * If the cause is already a TypeValidationError with the same value, it returns the cause.
   * Otherwise, it creates a new TypeValidationError.
   *
   * @param {Object} params - The parameters for wrapping the error.
   * @param {unknown} params.value - The value that failed validation.
   * @param {unknown} params.cause - The original error or cause of the validation failure.
   * @returns {TypeValidationError} A TypeValidationError instance.
   */
  static wrap({ value, cause }) {
    return _TypeValidationError2.isInstance(cause) && cause.value === value
      ? cause
      : new _TypeValidationError2({ value, cause });
  }
};
_a132 = symbol132;
var TypeValidationError2 = _TypeValidationError;
var name132 = "AI_UnsupportedFunctionalityError";
var marker142 = `vercel.ai.error.${name132}`;
var symbol142 = Symbol.for(marker142);
var _a142;
_a142 = symbol142;

// node_modules/agents/node_modules/ai/node_modules/@ai-sdk/provider-utils/dist/index.mjs
function combineHeaders(...headers) {
  return headers.reduce(
    (combinedHeaders, currentHeaders) => ({
      ...combinedHeaders,
      ...(currentHeaders != null ? currentHeaders : {})
    }),
    {}
  );
}
function extractResponseHeaders(response) {
  return Object.fromEntries([...response.headers]);
}
function getRuntimeEnvironmentUserAgent(globalThisAny = globalThis) {
  var _a18, _b8, _c;
  if (globalThisAny.window) {
    return `runtime/browser`;
  }
  if ((_a18 = globalThisAny.navigator) == null ? void 0 : _a18.userAgent) {
    return `runtime/${globalThisAny.navigator.userAgent.toLowerCase()}`;
  }
  if (
    (_c = (_b8 = globalThisAny.process) == null ? void 0 : _b8.versions) == null
      ? void 0
      : _c.node
  ) {
    return `runtime/node.js/${globalThisAny.process.version.substring(0)}`;
  }
  if (globalThisAny.EdgeRuntime) {
    return `runtime/vercel-edge`;
  }
  return "runtime/unknown";
}
function removeUndefinedEntries(record) {
  return Object.fromEntries(
    Object.entries(record).filter(([_key, value]) => value != null)
  );
}
function withUserAgentSuffix(headers, ...userAgentSuffixParts) {
  const cleanedHeaders = removeUndefinedEntries(headers != null ? headers : {});
  const normalizedHeaders = new Headers(cleanedHeaders);
  const currentUserAgentHeader = normalizedHeaders.get("user-agent") || "";
  normalizedHeaders.set(
    "user-agent",
    [currentUserAgentHeader, ...userAgentSuffixParts].filter(Boolean).join(" ")
  );
  return Object.fromEntries(normalizedHeaders);
}
var createIdGenerator2 = ({
  prefix,
  size = 16,
  alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator = "-"
} = {}) => {
  const generator = () => {
    const alphabetLength = alphabet.length;
    const chars = new Array(size);
    for (let i = 0; i < size; i++) {
      chars[i] = alphabet[(Math.random() * alphabetLength) | 0];
    }
    return chars.join("");
  };
  if (prefix == null) {
    return generator;
  }
  if (alphabet.includes(separator)) {
    throw new InvalidArgumentError2({
      argument: "separator",
      message: `The separator "${separator}" must not be part of the alphabet "${alphabet}".`
    });
  }
  return () => `${prefix}${separator}${generator()}`;
};
var generateId2 = createIdGenerator2();
function isAbortError2(error) {
  return (
    (error instanceof Error || error instanceof DOMException) &&
    (error.name === "AbortError" ||
      error.name === "ResponseAborted" || // Next.js
      error.name === "TimeoutError")
  );
}
var FETCH_FAILED_ERROR_MESSAGES = ["fetch failed", "failed to fetch"];
function handleFetchError({ error, url, requestBodyValues }) {
  if (isAbortError2(error)) {
    return error;
  }
  if (
    error instanceof TypeError &&
    FETCH_FAILED_ERROR_MESSAGES.includes(error.message.toLowerCase())
  ) {
    const cause = error.cause;
    if (cause != null) {
      return new APICallError2({
        message: `Cannot connect to API: ${cause.message}`,
        cause,
        url,
        requestBodyValues,
        isRetryable: true
        // retry when network error
      });
    }
  }
  return error;
}
var VERSION = true ? "3.0.9" : "0.0.0-test";
var getOriginalFetch = () => globalThis.fetch;
var getFromApi = async ({
  url,
  headers = {},
  successfulResponseHandler,
  failedResponseHandler,
  abortSignal,
  fetch: fetch2 = getOriginalFetch()
}) => {
  try {
    const response = await fetch2(url, {
      method: "GET",
      headers: withUserAgentSuffix(
        headers,
        `ai-sdk/provider-utils/${VERSION}`,
        getRuntimeEnvironmentUserAgent()
      ),
      signal: abortSignal
    });
    const responseHeaders = extractResponseHeaders(response);
    if (!response.ok) {
      let errorInformation;
      try {
        errorInformation = await failedResponseHandler({
          response,
          url,
          requestBodyValues: {}
        });
      } catch (error) {
        if (isAbortError2(error) || APICallError2.isInstance(error)) {
          throw error;
        }
        throw new APICallError2({
          message: "Failed to process error response",
          cause: error,
          statusCode: response.status,
          url,
          responseHeaders,
          requestBodyValues: {}
        });
      }
      throw errorInformation.value;
    }
    try {
      return await successfulResponseHandler({
        response,
        url,
        requestBodyValues: {}
      });
    } catch (error) {
      if (error instanceof Error) {
        if (isAbortError2(error) || APICallError2.isInstance(error)) {
          throw error;
        }
      }
      throw new APICallError2({
        message: "Failed to process successful response",
        cause: error,
        statusCode: response.status,
        url,
        responseHeaders,
        requestBodyValues: {}
      });
    }
  } catch (error) {
    throw handleFetchError({ error, url, requestBodyValues: {} });
  }
};
function loadOptionalSetting({ settingValue, environmentVariableName }) {
  if (typeof settingValue === "string") {
    return settingValue;
  }
  if (settingValue != null || typeof process === "undefined") {
    return void 0;
  }
  settingValue = process.env[environmentVariableName];
  if (settingValue == null || typeof settingValue !== "string") {
    return void 0;
  }
  return settingValue;
}
var suspectProtoRx = /"__proto__"\s*:/;
var suspectConstructorRx = /"constructor"\s*:/;
function _parse(text2) {
  const obj = JSON.parse(text2);
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (
    suspectProtoRx.test(text2) === false &&
    suspectConstructorRx.test(text2) === false
  ) {
    return obj;
  }
  return filter(obj);
}
function filter(obj) {
  let next = [obj];
  while (next.length) {
    const nodes = next;
    next = [];
    for (const node of nodes) {
      if (Object.prototype.hasOwnProperty.call(node, "__proto__")) {
        throw new SyntaxError("Object contains forbidden prototype property");
      }
      if (
        Object.prototype.hasOwnProperty.call(node, "constructor") &&
        Object.prototype.hasOwnProperty.call(node.constructor, "prototype")
      ) {
        throw new SyntaxError("Object contains forbidden prototype property");
      }
      for (const key in node) {
        const value = node[key];
        if (value && typeof value === "object") {
          next.push(value);
        }
      }
    }
  }
  return obj;
}
function secureJsonParse(text2) {
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  try {
    return _parse(text2);
  } finally {
    Error.stackTraceLimit = stackTraceLimit;
  }
}
var validatorSymbol2 = Symbol.for("vercel.ai.validator");
function validator(validate) {
  return { [validatorSymbol2]: true, validate };
}
function isValidator(value) {
  return (
    typeof value === "object" &&
    value !== null &&
    validatorSymbol2 in value &&
    value[validatorSymbol2] === true &&
    "validate" in value
  );
}
function asValidator(value) {
  return isValidator(value) ? value : standardSchemaValidator(value);
}
function standardSchemaValidator(standardSchema) {
  return validator(async (value) => {
    const result = await standardSchema["~standard"].validate(value);
    return result.issues == null
      ? { success: true, value: result.value }
      : {
          success: false,
          error: new TypeValidationError2({
            value,
            cause: result.issues
          })
        };
  });
}
async function validateTypes({ value, schema }) {
  const result = await safeValidateTypes2({ value, schema });
  if (!result.success) {
    throw TypeValidationError2.wrap({ value, cause: result.error });
  }
  return result.value;
}
async function safeValidateTypes2({ value, schema }) {
  const validator2 = asValidator(schema);
  try {
    if (validator2.validate == null) {
      return { success: true, value, rawValue: value };
    }
    const result = await validator2.validate(value);
    if (result.success) {
      return { success: true, value: result.value, rawValue: value };
    }
    return {
      success: false,
      error: TypeValidationError2.wrap({ value, cause: result.error }),
      rawValue: value
    };
  } catch (error) {
    return {
      success: false,
      error: TypeValidationError2.wrap({ value, cause: error }),
      rawValue: value
    };
  }
}
async function parseJSON({ text: text2, schema }) {
  try {
    const value = secureJsonParse(text2);
    if (schema == null) {
      return value;
    }
    return validateTypes({ value, schema });
  } catch (error) {
    if (
      JSONParseError2.isInstance(error) ||
      TypeValidationError2.isInstance(error)
    ) {
      throw error;
    }
    throw new JSONParseError2({ text: text2, cause: error });
  }
}
async function safeParseJSON({ text: text2, schema }) {
  try {
    const value = secureJsonParse(text2);
    if (schema == null) {
      return { success: true, value, rawValue: value };
    }
    return await safeValidateTypes2({ value, schema });
  } catch (error) {
    return {
      success: false,
      error: JSONParseError2.isInstance(error)
        ? error
        : new JSONParseError2({ text: text2, cause: error }),
      rawValue: void 0
    };
  }
}
function parseJsonEventStream({ stream, schema }) {
  return stream
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(new EventSourceParserStream())
    .pipeThrough(
      new TransformStream({
        async transform({ data }, controller) {
          if (data === "[DONE]") {
            return;
          }
          controller.enqueue(await safeParseJSON({ text: data, schema }));
        }
      })
    );
}
var getOriginalFetch2 = () => globalThis.fetch;
var postJsonToApi = async ({
  url,
  headers,
  body,
  failedResponseHandler,
  successfulResponseHandler,
  abortSignal,
  fetch: fetch2
}) =>
  postToApi({
    url,
    headers: {
      "Content-Type": "application/json",
      ...headers
    },
    body: {
      content: JSON.stringify(body),
      values: body
    },
    failedResponseHandler,
    successfulResponseHandler,
    abortSignal,
    fetch: fetch2
  });
var postToApi = async ({
  url,
  headers = {},
  body,
  successfulResponseHandler,
  failedResponseHandler,
  abortSignal,
  fetch: fetch2 = getOriginalFetch2()
}) => {
  try {
    const response = await fetch2(url, {
      method: "POST",
      headers: withUserAgentSuffix(
        headers,
        `ai-sdk/provider-utils/${VERSION}`,
        getRuntimeEnvironmentUserAgent()
      ),
      body: body.content,
      signal: abortSignal
    });
    const responseHeaders = extractResponseHeaders(response);
    if (!response.ok) {
      let errorInformation;
      try {
        errorInformation = await failedResponseHandler({
          response,
          url,
          requestBodyValues: body.values
        });
      } catch (error) {
        if (isAbortError2(error) || APICallError2.isInstance(error)) {
          throw error;
        }
        throw new APICallError2({
          message: "Failed to process error response",
          cause: error,
          statusCode: response.status,
          url,
          responseHeaders,
          requestBodyValues: body.values
        });
      }
      throw errorInformation.value;
    }
    try {
      return await successfulResponseHandler({
        response,
        url,
        requestBodyValues: body.values
      });
    } catch (error) {
      if (error instanceof Error) {
        if (isAbortError2(error) || APICallError2.isInstance(error)) {
          throw error;
        }
      }
      throw new APICallError2({
        message: "Failed to process successful response",
        cause: error,
        statusCode: response.status,
        url,
        responseHeaders,
        requestBodyValues: body.values
      });
    }
  } catch (error) {
    throw handleFetchError({ error, url, requestBodyValues: body.values });
  }
};
async function resolve(value) {
  if (typeof value === "function") {
    value = value();
  }
  return Promise.resolve(value);
}
var createJsonErrorResponseHandler =
  ({ errorSchema, errorToMessage, isRetryable }) =>
  async ({ response, url, requestBodyValues }) => {
    const responseBody = await response.text();
    const responseHeaders = extractResponseHeaders(response);
    if (responseBody.trim() === "") {
      return {
        responseHeaders,
        value: new APICallError2({
          message: response.statusText,
          url,
          requestBodyValues,
          statusCode: response.status,
          responseHeaders,
          responseBody,
          isRetryable: isRetryable == null ? void 0 : isRetryable(response)
        })
      };
    }
    try {
      const parsedError = await parseJSON({
        text: responseBody,
        schema: errorSchema
      });
      return {
        responseHeaders,
        value: new APICallError2({
          message: errorToMessage(parsedError),
          url,
          requestBodyValues,
          statusCode: response.status,
          responseHeaders,
          responseBody,
          data: parsedError,
          isRetryable:
            isRetryable == null ? void 0 : isRetryable(response, parsedError)
        })
      };
    } catch (parseError) {
      return {
        responseHeaders,
        value: new APICallError2({
          message: response.statusText,
          url,
          requestBodyValues,
          statusCode: response.status,
          responseHeaders,
          responseBody,
          isRetryable: isRetryable == null ? void 0 : isRetryable(response)
        })
      };
    }
  };
var createEventSourceResponseHandler =
  (chunkSchema) =>
  async ({ response }) => {
    const responseHeaders = extractResponseHeaders(response);
    if (response.body == null) {
      throw new EmptyResponseBodyError2({});
    }
    return {
      responseHeaders,
      value: parseJsonEventStream({
        stream: response.body,
        schema: chunkSchema
      })
    };
  };
var createJsonResponseHandler =
  (responseSchema) =>
  async ({ response, url, requestBodyValues }) => {
    const responseBody = await response.text();
    const parsedResult = await safeParseJSON({
      text: responseBody,
      schema: responseSchema
    });
    const responseHeaders = extractResponseHeaders(response);
    if (!parsedResult.success) {
      throw new APICallError2({
        message: "Invalid JSON response",
        cause: parsedResult.error,
        statusCode: response.status,
        responseHeaders,
        responseBody,
        url,
        requestBodyValues
      });
    }
    return {
      responseHeaders,
      value: parsedResult.value,
      rawValue: parsedResult.rawValue
    };
  };
var getRelativePath = (pathA, pathB) => {
  let i = 0;
  for (; i < pathA.length && i < pathB.length; i++) {
    if (pathA[i] !== pathB[i]) break;
  }
  return [(pathA.length - i).toString(), ...pathB.slice(i)].join("/");
};
var ignoreOverride2 = Symbol(
  "Let zodToJsonSchema decide on which parser to use"
);
var defaultOptions = {
  name: void 0,
  $refStrategy: "root",
  basePath: ["#"],
  effectStrategy: "input",
  pipeStrategy: "all",
  dateStrategy: "format:date-time",
  mapStrategy: "entries",
  removeAdditionalStrategy: "passthrough",
  allowedAdditionalProperties: true,
  rejectedAdditionalProperties: false,
  definitionPath: "definitions",
  strictUnions: false,
  definitions: {},
  errorMessages: false,
  patternStrategy: "escape",
  applyRegexFlags: false,
  emailStrategy: "format:email",
  base64Strategy: "contentEncoding:base64",
  nameStrategy: "ref"
};
var getDefaultOptions = (options) =>
  typeof options === "string"
    ? {
        ...defaultOptions,
        name: options
      }
    : {
        ...defaultOptions,
        ...options
      };
function parseAnyDef() {
  return {};
}
function parseArrayDef(def, refs) {
  var _a18, _b8, _c;
  const res = {
    type: "array"
  };
  if (
    ((_a18 = def.type) == null ? void 0 : _a18._def) &&
    ((_c = (_b8 = def.type) == null ? void 0 : _b8._def) == null
      ? void 0
      : _c.typeName) !== ZodFirstPartyTypeKind.ZodAny
  ) {
    res.items = parseDef(def.type._def, {
      ...refs,
      currentPath: [...refs.currentPath, "items"]
    });
  }
  if (def.minLength) {
    res.minItems = def.minLength.value;
  }
  if (def.maxLength) {
    res.maxItems = def.maxLength.value;
  }
  if (def.exactLength) {
    res.minItems = def.exactLength.value;
    res.maxItems = def.exactLength.value;
  }
  return res;
}
function parseBigintDef(def) {
  const res = {
    type: "integer",
    format: "int64"
  };
  if (!def.checks) return res;
  for (const check of def.checks) {
    switch (check.kind) {
      case "min":
        if (check.inclusive) {
          res.minimum = check.value;
        } else {
          res.exclusiveMinimum = check.value;
        }
        break;
      case "max":
        if (check.inclusive) {
          res.maximum = check.value;
        } else {
          res.exclusiveMaximum = check.value;
        }
        break;
      case "multipleOf":
        res.multipleOf = check.value;
        break;
    }
  }
  return res;
}
function parseBooleanDef() {
  return { type: "boolean" };
}
function parseBrandedDef(_def, refs) {
  return parseDef(_def.type._def, refs);
}
var parseCatchDef = (def, refs) => {
  return parseDef(def.innerType._def, refs);
};
function parseDateDef(def, refs, overrideDateStrategy) {
  const strategy =
    overrideDateStrategy != null ? overrideDateStrategy : refs.dateStrategy;
  if (Array.isArray(strategy)) {
    return {
      anyOf: strategy.map((item, i) => parseDateDef(def, refs, item))
    };
  }
  switch (strategy) {
    case "string":
    case "format:date-time":
      return {
        type: "string",
        format: "date-time"
      };
    case "format:date":
      return {
        type: "string",
        format: "date"
      };
    case "integer":
      return integerDateParser(def);
  }
}
var integerDateParser = (def) => {
  const res = {
    type: "integer",
    format: "unix-time"
  };
  for (const check of def.checks) {
    switch (check.kind) {
      case "min":
        res.minimum = check.value;
        break;
      case "max":
        res.maximum = check.value;
        break;
    }
  }
  return res;
};
function parseDefaultDef(_def, refs) {
  return {
    ...parseDef(_def.innerType._def, refs),
    default: _def.defaultValue()
  };
}
function parseEffectsDef(_def, refs) {
  return refs.effectStrategy === "input"
    ? parseDef(_def.schema._def, refs)
    : parseAnyDef();
}
function parseEnumDef(def) {
  return {
    type: "string",
    enum: Array.from(def.values)
  };
}
var isJsonSchema7AllOfType = (type) => {
  if ("type" in type && type.type === "string") return false;
  return "allOf" in type;
};
function parseIntersectionDef(def, refs) {
  const allOf = [
    parseDef(def.left._def, {
      ...refs,
      currentPath: [...refs.currentPath, "allOf", "0"]
    }),
    parseDef(def.right._def, {
      ...refs,
      currentPath: [...refs.currentPath, "allOf", "1"]
    })
  ].filter((x) => !!x);
  const mergedAllOf = [];
  allOf.forEach((schema) => {
    if (isJsonSchema7AllOfType(schema)) {
      mergedAllOf.push(...schema.allOf);
    } else {
      let nestedSchema = schema;
      if (
        "additionalProperties" in schema &&
        schema.additionalProperties === false
      ) {
        const { additionalProperties, ...rest } = schema;
        nestedSchema = rest;
      }
      mergedAllOf.push(nestedSchema);
    }
  });
  return mergedAllOf.length ? { allOf: mergedAllOf } : void 0;
}
function parseLiteralDef(def) {
  const parsedType = typeof def.value;
  if (
    parsedType !== "bigint" &&
    parsedType !== "number" &&
    parsedType !== "boolean" &&
    parsedType !== "string"
  ) {
    return {
      type: Array.isArray(def.value) ? "array" : "object"
    };
  }
  return {
    type: parsedType === "bigint" ? "integer" : parsedType,
    const: def.value
  };
}
var emojiRegex = void 0;
var zodPatterns = {
  /**
   * `c` was changed to `[cC]` to replicate /i flag
   */
  cuid: /^[cC][^\s-]{8,}$/,
  cuid2: /^[0-9a-z]+$/,
  ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
  /**
   * `a-z` was added to replicate /i flag
   */
  email:
    /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
  /**
   * Constructed a valid Unicode RegExp
   *
   * Lazily instantiate since this type of regex isn't supported
   * in all envs (e.g. React Native).
   *
   * See:
   * https://github.com/colinhacks/zod/issues/2433
   * Fix in Zod:
   * https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
   */
  emoji: () => {
    if (emojiRegex === void 0) {
      emojiRegex = RegExp(
        "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
        "u"
      );
    }
    return emojiRegex;
  },
  /**
   * Unused
   */
  uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
  /**
   * Unused
   */
  ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  ipv4Cidr:
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  /**
   * Unused
   */
  ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  ipv6Cidr:
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  base64url:
    /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  nanoid: /^[a-zA-Z0-9_-]{21}$/,
  jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function parseStringDef(def, refs) {
  const res = {
    type: "string"
  };
  if (def.checks) {
    for (const check of def.checks) {
      switch (check.kind) {
        case "min":
          res.minLength =
            typeof res.minLength === "number"
              ? Math.max(res.minLength, check.value)
              : check.value;
          break;
        case "max":
          res.maxLength =
            typeof res.maxLength === "number"
              ? Math.min(res.maxLength, check.value)
              : check.value;
          break;
        case "email":
          switch (refs.emailStrategy) {
            case "format:email":
              addFormat(res, "email", check.message, refs);
              break;
            case "format:idn-email":
              addFormat(res, "idn-email", check.message, refs);
              break;
            case "pattern:zod":
              addPattern(res, zodPatterns.email, check.message, refs);
              break;
          }
          break;
        case "url":
          addFormat(res, "uri", check.message, refs);
          break;
        case "uuid":
          addFormat(res, "uuid", check.message, refs);
          break;
        case "regex":
          addPattern(res, check.regex, check.message, refs);
          break;
        case "cuid":
          addPattern(res, zodPatterns.cuid, check.message, refs);
          break;
        case "cuid2":
          addPattern(res, zodPatterns.cuid2, check.message, refs);
          break;
        case "startsWith":
          addPattern(
            res,
            RegExp(`^${escapeLiteralCheckValue(check.value, refs)}`),
            check.message,
            refs
          );
          break;
        case "endsWith":
          addPattern(
            res,
            RegExp(`${escapeLiteralCheckValue(check.value, refs)}$`),
            check.message,
            refs
          );
          break;
        case "datetime":
          addFormat(res, "date-time", check.message, refs);
          break;
        case "date":
          addFormat(res, "date", check.message, refs);
          break;
        case "time":
          addFormat(res, "time", check.message, refs);
          break;
        case "duration":
          addFormat(res, "duration", check.message, refs);
          break;
        case "length":
          res.minLength =
            typeof res.minLength === "number"
              ? Math.max(res.minLength, check.value)
              : check.value;
          res.maxLength =
            typeof res.maxLength === "number"
              ? Math.min(res.maxLength, check.value)
              : check.value;
          break;
        case "includes": {
          addPattern(
            res,
            RegExp(escapeLiteralCheckValue(check.value, refs)),
            check.message,
            refs
          );
          break;
        }
        case "ip": {
          if (check.version !== "v6") {
            addFormat(res, "ipv4", check.message, refs);
          }
          if (check.version !== "v4") {
            addFormat(res, "ipv6", check.message, refs);
          }
          break;
        }
        case "base64url":
          addPattern(res, zodPatterns.base64url, check.message, refs);
          break;
        case "jwt":
          addPattern(res, zodPatterns.jwt, check.message, refs);
          break;
        case "cidr": {
          if (check.version !== "v6") {
            addPattern(res, zodPatterns.ipv4Cidr, check.message, refs);
          }
          if (check.version !== "v4") {
            addPattern(res, zodPatterns.ipv6Cidr, check.message, refs);
          }
          break;
        }
        case "emoji":
          addPattern(res, zodPatterns.emoji(), check.message, refs);
          break;
        case "ulid": {
          addPattern(res, zodPatterns.ulid, check.message, refs);
          break;
        }
        case "base64": {
          switch (refs.base64Strategy) {
            case "format:binary": {
              addFormat(res, "binary", check.message, refs);
              break;
            }
            case "contentEncoding:base64": {
              res.contentEncoding = "base64";
              break;
            }
            case "pattern:zod": {
              addPattern(res, zodPatterns.base64, check.message, refs);
              break;
            }
          }
          break;
        }
        case "nanoid": {
          addPattern(res, zodPatterns.nanoid, check.message, refs);
        }
        case "toLowerCase":
        case "toUpperCase":
        case "trim":
          break;
        default:
          /* @__PURE__ */ ((_) => {})(check);
      }
    }
  }
  return res;
}
function escapeLiteralCheckValue(literal, refs) {
  return refs.patternStrategy === "escape"
    ? escapeNonAlphaNumeric(literal)
    : literal;
}
var ALPHA_NUMERIC2 = new Set(
  "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789"
);
function escapeNonAlphaNumeric(source) {
  let result = "";
  for (let i = 0; i < source.length; i++) {
    if (!ALPHA_NUMERIC2.has(source[i])) {
      result += "\\";
    }
    result += source[i];
  }
  return result;
}
function addFormat(schema, value, message, refs) {
  var _a18;
  if (
    schema.format ||
    ((_a18 = schema.anyOf) == null ? void 0 : _a18.some((x) => x.format))
  ) {
    if (!schema.anyOf) {
      schema.anyOf = [];
    }
    if (schema.format) {
      schema.anyOf.push({
        format: schema.format
      });
      delete schema.format;
    }
    schema.anyOf.push({
      format: value,
      ...(message &&
        refs.errorMessages && { errorMessage: { format: message } })
    });
  } else {
    schema.format = value;
  }
}
function addPattern(schema, regex, message, refs) {
  var _a18;
  if (
    schema.pattern ||
    ((_a18 = schema.allOf) == null ? void 0 : _a18.some((x) => x.pattern))
  ) {
    if (!schema.allOf) {
      schema.allOf = [];
    }
    if (schema.pattern) {
      schema.allOf.push({
        pattern: schema.pattern
      });
      delete schema.pattern;
    }
    schema.allOf.push({
      pattern: stringifyRegExpWithFlags(regex, refs),
      ...(message &&
        refs.errorMessages && { errorMessage: { pattern: message } })
    });
  } else {
    schema.pattern = stringifyRegExpWithFlags(regex, refs);
  }
}
function stringifyRegExpWithFlags(regex, refs) {
  var _a18;
  if (!refs.applyRegexFlags || !regex.flags) {
    return regex.source;
  }
  const flags = {
    i: regex.flags.includes("i"),
    // Case-insensitive
    m: regex.flags.includes("m"),
    // `^` and `$` matches adjacent to newline characters
    s: regex.flags.includes("s")
    // `.` matches newlines
  };
  const source = flags.i ? regex.source.toLowerCase() : regex.source;
  let pattern = "";
  let isEscaped = false;
  let inCharGroup = false;
  let inCharRange = false;
  for (let i = 0; i < source.length; i++) {
    if (isEscaped) {
      pattern += source[i];
      isEscaped = false;
      continue;
    }
    if (flags.i) {
      if (inCharGroup) {
        if (source[i].match(/[a-z]/)) {
          if (inCharRange) {
            pattern += source[i];
            pattern += `${source[i - 2]}-${source[i]}`.toUpperCase();
            inCharRange = false;
          } else if (
            source[i + 1] === "-" &&
            ((_a18 = source[i + 2]) == null ? void 0 : _a18.match(/[a-z]/))
          ) {
            pattern += source[i];
            inCharRange = true;
          } else {
            pattern += `${source[i]}${source[i].toUpperCase()}`;
          }
          continue;
        }
      } else if (source[i].match(/[a-z]/)) {
        pattern += `[${source[i]}${source[i].toUpperCase()}]`;
        continue;
      }
    }
    if (flags.m) {
      if (source[i] === "^") {
        pattern += `(^|(?<=[\r
]))`;
        continue;
      } else if (source[i] === "$") {
        pattern += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (flags.s && source[i] === ".") {
      pattern += inCharGroup
        ? `${source[i]}\r
`
        : `[${source[i]}\r
]`;
      continue;
    }
    pattern += source[i];
    if (source[i] === "\\") {
      isEscaped = true;
    } else if (inCharGroup && source[i] === "]") {
      inCharGroup = false;
    } else if (!inCharGroup && source[i] === "[") {
      inCharGroup = true;
    }
  }
  try {
    new RegExp(pattern);
  } catch (e) {
    console.warn(
      `Could not convert regex pattern at ${refs.currentPath.join(
        "/"
      )} to a flag-independent form! Falling back to the flag-ignorant source`
    );
    return regex.source;
  }
  return pattern;
}
function parseRecordDef(def, refs) {
  var _a18, _b8, _c, _d, _e, _f;
  const schema = {
    type: "object",
    additionalProperties:
      (_a18 = parseDef(def.valueType._def, {
        ...refs,
        currentPath: [...refs.currentPath, "additionalProperties"]
      })) != null
        ? _a18
        : refs.allowedAdditionalProperties
  };
  if (
    ((_b8 = def.keyType) == null ? void 0 : _b8._def.typeName) ===
      ZodFirstPartyTypeKind.ZodString &&
    ((_c = def.keyType._def.checks) == null ? void 0 : _c.length)
  ) {
    const { type, ...keyType } = parseStringDef(def.keyType._def, refs);
    return {
      ...schema,
      propertyNames: keyType
    };
  } else if (
    ((_d = def.keyType) == null ? void 0 : _d._def.typeName) ===
    ZodFirstPartyTypeKind.ZodEnum
  ) {
    return {
      ...schema,
      propertyNames: {
        enum: def.keyType._def.values
      }
    };
  } else if (
    ((_e = def.keyType) == null ? void 0 : _e._def.typeName) ===
      ZodFirstPartyTypeKind.ZodBranded &&
    def.keyType._def.type._def.typeName === ZodFirstPartyTypeKind.ZodString &&
    ((_f = def.keyType._def.type._def.checks) == null ? void 0 : _f.length)
  ) {
    const { type, ...keyType } = parseBrandedDef(def.keyType._def, refs);
    return {
      ...schema,
      propertyNames: keyType
    };
  }
  return schema;
}
function parseMapDef(def, refs) {
  if (refs.mapStrategy === "record") {
    return parseRecordDef(def, refs);
  }
  const keys =
    parseDef(def.keyType._def, {
      ...refs,
      currentPath: [...refs.currentPath, "items", "items", "0"]
    }) || parseAnyDef();
  const values =
    parseDef(def.valueType._def, {
      ...refs,
      currentPath: [...refs.currentPath, "items", "items", "1"]
    }) || parseAnyDef();
  return {
    type: "array",
    maxItems: 125,
    items: {
      type: "array",
      items: [keys, values],
      minItems: 2,
      maxItems: 2
    }
  };
}
function parseNativeEnumDef(def) {
  const object2 = def.values;
  const actualKeys = Object.keys(def.values).filter((key) => {
    return typeof object2[object2[key]] !== "number";
  });
  const actualValues = actualKeys.map((key) => object2[key]);
  const parsedTypes = Array.from(
    new Set(actualValues.map((values) => typeof values))
  );
  return {
    type:
      parsedTypes.length === 1
        ? parsedTypes[0] === "string"
          ? "string"
          : "number"
        : ["string", "number"],
    enum: actualValues
  };
}
function parseNeverDef() {
  return { not: parseAnyDef() };
}
function parseNullDef() {
  return {
    type: "null"
  };
}
var primitiveMappings = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function parseUnionDef(def, refs) {
  const options =
    def.options instanceof Map ? Array.from(def.options.values()) : def.options;
  if (
    options.every(
      (x) =>
        x._def.typeName in primitiveMappings &&
        (!x._def.checks || !x._def.checks.length)
    )
  ) {
    const types = options.reduce((types2, x) => {
      const type = primitiveMappings[x._def.typeName];
      return type && !types2.includes(type) ? [...types2, type] : types2;
    }, []);
    return {
      type: types.length > 1 ? types : types[0]
    };
  } else if (
    options.every((x) => x._def.typeName === "ZodLiteral" && !x.description)
  ) {
    const types = options.reduce((acc, x) => {
      const type = typeof x._def.value;
      switch (type) {
        case "string":
        case "number":
        case "boolean":
          return [...acc, type];
        case "bigint":
          return [...acc, "integer"];
        case "object":
          if (x._def.value === null) return [...acc, "null"];
        case "symbol":
        case "undefined":
        case "function":
        default:
          return acc;
      }
    }, []);
    if (types.length === options.length) {
      const uniqueTypes = types.filter((x, i, a) => a.indexOf(x) === i);
      return {
        type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
        enum: options.reduce((acc, x) => {
          return acc.includes(x._def.value) ? acc : [...acc, x._def.value];
        }, [])
      };
    }
  } else if (options.every((x) => x._def.typeName === "ZodEnum")) {
    return {
      type: "string",
      enum: options.reduce(
        (acc, x) => [
          ...acc,
          ...x._def.values.filter((x2) => !acc.includes(x2))
        ],
        []
      )
    };
  }
  return asAnyOf(def, refs);
}
var asAnyOf = (def, refs) => {
  const anyOf = (
    def.options instanceof Map ? Array.from(def.options.values()) : def.options
  )
    .map((x, i) =>
      parseDef(x._def, {
        ...refs,
        currentPath: [...refs.currentPath, "anyOf", `${i}`]
      })
    )
    .filter(
      (x) =>
        !!x &&
        (!refs.strictUnions ||
          (typeof x === "object" && Object.keys(x).length > 0))
    );
  return anyOf.length ? { anyOf } : void 0;
};
function parseNullableDef(def, refs) {
  if (
    ["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(
      def.innerType._def.typeName
    ) &&
    (!def.innerType._def.checks || !def.innerType._def.checks.length)
  ) {
    return {
      type: [primitiveMappings[def.innerType._def.typeName], "null"]
    };
  }
  const base = parseDef(def.innerType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "anyOf", "0"]
  });
  return base && { anyOf: [base, { type: "null" }] };
}
function parseNumberDef(def) {
  const res = {
    type: "number"
  };
  if (!def.checks) return res;
  for (const check of def.checks) {
    switch (check.kind) {
      case "int":
        res.type = "integer";
        break;
      case "min":
        if (check.inclusive) {
          res.minimum = check.value;
        } else {
          res.exclusiveMinimum = check.value;
        }
        break;
      case "max":
        if (check.inclusive) {
          res.maximum = check.value;
        } else {
          res.exclusiveMaximum = check.value;
        }
        break;
      case "multipleOf":
        res.multipleOf = check.value;
        break;
    }
  }
  return res;
}
function parseObjectDef(def, refs) {
  const result = {
    type: "object",
    properties: {}
  };
  const required = [];
  const shape = def.shape();
  for (const propName in shape) {
    let propDef = shape[propName];
    if (propDef === void 0 || propDef._def === void 0) {
      continue;
    }
    const propOptional = safeIsOptional(propDef);
    const parsedDef = parseDef(propDef._def, {
      ...refs,
      currentPath: [...refs.currentPath, "properties", propName],
      propertyPath: [...refs.currentPath, "properties", propName]
    });
    if (parsedDef === void 0) {
      continue;
    }
    result.properties[propName] = parsedDef;
    if (!propOptional) {
      required.push(propName);
    }
  }
  if (required.length) {
    result.required = required;
  }
  const additionalProperties = decideAdditionalProperties(def, refs);
  if (additionalProperties !== void 0) {
    result.additionalProperties = additionalProperties;
  }
  return result;
}
function decideAdditionalProperties(def, refs) {
  if (def.catchall._def.typeName !== "ZodNever") {
    return parseDef(def.catchall._def, {
      ...refs,
      currentPath: [...refs.currentPath, "additionalProperties"]
    });
  }
  switch (def.unknownKeys) {
    case "passthrough":
      return refs.allowedAdditionalProperties;
    case "strict":
      return refs.rejectedAdditionalProperties;
    case "strip":
      return refs.removeAdditionalStrategy === "strict"
        ? refs.allowedAdditionalProperties
        : refs.rejectedAdditionalProperties;
  }
}
function safeIsOptional(schema) {
  try {
    return schema.isOptional();
  } catch (e) {
    return true;
  }
}
var parseOptionalDef = (def, refs) => {
  var _a18;
  if (
    refs.currentPath.toString() ===
    ((_a18 = refs.propertyPath) == null ? void 0 : _a18.toString())
  ) {
    return parseDef(def.innerType._def, refs);
  }
  const innerSchema = parseDef(def.innerType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "anyOf", "1"]
  });
  return innerSchema
    ? { anyOf: [{ not: parseAnyDef() }, innerSchema] }
    : parseAnyDef();
};
var parsePipelineDef = (def, refs) => {
  if (refs.pipeStrategy === "input") {
    return parseDef(def.in._def, refs);
  } else if (refs.pipeStrategy === "output") {
    return parseDef(def.out._def, refs);
  }
  const a = parseDef(def.in._def, {
    ...refs,
    currentPath: [...refs.currentPath, "allOf", "0"]
  });
  const b = parseDef(def.out._def, {
    ...refs,
    currentPath: [...refs.currentPath, "allOf", a ? "1" : "0"]
  });
  return {
    allOf: [a, b].filter((x) => x !== void 0)
  };
};
function parsePromiseDef(def, refs) {
  return parseDef(def.type._def, refs);
}
function parseSetDef(def, refs) {
  const items = parseDef(def.valueType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "items"]
  });
  const schema = {
    type: "array",
    uniqueItems: true,
    items
  };
  if (def.minSize) {
    schema.minItems = def.minSize.value;
  }
  if (def.maxSize) {
    schema.maxItems = def.maxSize.value;
  }
  return schema;
}
function parseTupleDef(def, refs) {
  if (def.rest) {
    return {
      type: "array",
      minItems: def.items.length,
      items: def.items
        .map((x, i) =>
          parseDef(x._def, {
            ...refs,
            currentPath: [...refs.currentPath, "items", `${i}`]
          })
        )
        .reduce((acc, x) => (x === void 0 ? acc : [...acc, x]), []),
      additionalItems: parseDef(def.rest._def, {
        ...refs,
        currentPath: [...refs.currentPath, "additionalItems"]
      })
    };
  } else {
    return {
      type: "array",
      minItems: def.items.length,
      maxItems: def.items.length,
      items: def.items
        .map((x, i) =>
          parseDef(x._def, {
            ...refs,
            currentPath: [...refs.currentPath, "items", `${i}`]
          })
        )
        .reduce((acc, x) => (x === void 0 ? acc : [...acc, x]), [])
    };
  }
}
function parseUndefinedDef() {
  return {
    not: parseAnyDef()
  };
}
function parseUnknownDef() {
  return parseAnyDef();
}
var parseReadonlyDef = (def, refs) => {
  return parseDef(def.innerType._def, refs);
};
var selectParser = (def, typeName, refs) => {
  switch (typeName) {
    case ZodFirstPartyTypeKind.ZodString:
      return parseStringDef(def, refs);
    case ZodFirstPartyTypeKind.ZodNumber:
      return parseNumberDef(def);
    case ZodFirstPartyTypeKind.ZodObject:
      return parseObjectDef(def, refs);
    case ZodFirstPartyTypeKind.ZodBigInt:
      return parseBigintDef(def);
    case ZodFirstPartyTypeKind.ZodBoolean:
      return parseBooleanDef();
    case ZodFirstPartyTypeKind.ZodDate:
      return parseDateDef(def, refs);
    case ZodFirstPartyTypeKind.ZodUndefined:
      return parseUndefinedDef();
    case ZodFirstPartyTypeKind.ZodNull:
      return parseNullDef();
    case ZodFirstPartyTypeKind.ZodArray:
      return parseArrayDef(def, refs);
    case ZodFirstPartyTypeKind.ZodUnion:
    case ZodFirstPartyTypeKind.ZodDiscriminatedUnion:
      return parseUnionDef(def, refs);
    case ZodFirstPartyTypeKind.ZodIntersection:
      return parseIntersectionDef(def, refs);
    case ZodFirstPartyTypeKind.ZodTuple:
      return parseTupleDef(def, refs);
    case ZodFirstPartyTypeKind.ZodRecord:
      return parseRecordDef(def, refs);
    case ZodFirstPartyTypeKind.ZodLiteral:
      return parseLiteralDef(def);
    case ZodFirstPartyTypeKind.ZodEnum:
      return parseEnumDef(def);
    case ZodFirstPartyTypeKind.ZodNativeEnum:
      return parseNativeEnumDef(def);
    case ZodFirstPartyTypeKind.ZodNullable:
      return parseNullableDef(def, refs);
    case ZodFirstPartyTypeKind.ZodOptional:
      return parseOptionalDef(def, refs);
    case ZodFirstPartyTypeKind.ZodMap:
      return parseMapDef(def, refs);
    case ZodFirstPartyTypeKind.ZodSet:
      return parseSetDef(def, refs);
    case ZodFirstPartyTypeKind.ZodLazy:
      return () => def.getter()._def;
    case ZodFirstPartyTypeKind.ZodPromise:
      return parsePromiseDef(def, refs);
    case ZodFirstPartyTypeKind.ZodNaN:
    case ZodFirstPartyTypeKind.ZodNever:
      return parseNeverDef();
    case ZodFirstPartyTypeKind.ZodEffects:
      return parseEffectsDef(def, refs);
    case ZodFirstPartyTypeKind.ZodAny:
      return parseAnyDef();
    case ZodFirstPartyTypeKind.ZodUnknown:
      return parseUnknownDef();
    case ZodFirstPartyTypeKind.ZodDefault:
      return parseDefaultDef(def, refs);
    case ZodFirstPartyTypeKind.ZodBranded:
      return parseBrandedDef(def, refs);
    case ZodFirstPartyTypeKind.ZodReadonly:
      return parseReadonlyDef(def, refs);
    case ZodFirstPartyTypeKind.ZodCatch:
      return parseCatchDef(def, refs);
    case ZodFirstPartyTypeKind.ZodPipeline:
      return parsePipelineDef(def, refs);
    case ZodFirstPartyTypeKind.ZodFunction:
    case ZodFirstPartyTypeKind.ZodVoid:
    case ZodFirstPartyTypeKind.ZodSymbol:
      return void 0;
    default:
      return /* @__PURE__ */ ((_) => void 0)(typeName);
  }
};
function parseDef(def, refs, forceResolution = false) {
  var _a18;
  const seenItem = refs.seen.get(def);
  if (refs.override) {
    const overrideResult =
      (_a18 = refs.override) == null
        ? void 0
        : _a18.call(refs, def, refs, seenItem, forceResolution);
    if (overrideResult !== ignoreOverride2) {
      return overrideResult;
    }
  }
  if (seenItem && !forceResolution) {
    const seenSchema = get$ref(seenItem, refs);
    if (seenSchema !== void 0) {
      return seenSchema;
    }
  }
  const newItem = { def, path: refs.currentPath, jsonSchema: void 0 };
  refs.seen.set(def, newItem);
  const jsonSchemaOrGetter = selectParser(def, def.typeName, refs);
  const jsonSchema2 =
    typeof jsonSchemaOrGetter === "function"
      ? parseDef(jsonSchemaOrGetter(), refs)
      : jsonSchemaOrGetter;
  if (jsonSchema2) {
    addMeta(def, refs, jsonSchema2);
  }
  if (refs.postProcess) {
    const postProcessResult = refs.postProcess(jsonSchema2, def, refs);
    newItem.jsonSchema = jsonSchema2;
    return postProcessResult;
  }
  newItem.jsonSchema = jsonSchema2;
  return jsonSchema2;
}
var get$ref = (item, refs) => {
  switch (refs.$refStrategy) {
    case "root":
      return { $ref: item.path.join("/") };
    case "relative":
      return { $ref: getRelativePath(refs.currentPath, item.path) };
    case "none":
    case "seen": {
      if (
        item.path.length < refs.currentPath.length &&
        item.path.every((value, index) => refs.currentPath[index] === value)
      ) {
        console.warn(
          `Recursive reference detected at ${refs.currentPath.join(
            "/"
          )}! Defaulting to any`
        );
        return parseAnyDef();
      }
      return refs.$refStrategy === "seen" ? parseAnyDef() : void 0;
    }
  }
};
var addMeta = (def, refs, jsonSchema2) => {
  if (def.description) {
    jsonSchema2.description = def.description;
  }
  return jsonSchema2;
};
var getRefs = (options) => {
  const _options = getDefaultOptions(options);
  const currentPath =
    _options.name !== void 0
      ? [..._options.basePath, _options.definitionPath, _options.name]
      : _options.basePath;
  return {
    ..._options,
    currentPath,
    propertyPath: void 0,
    seen: new Map(
      Object.entries(_options.definitions).map(([name17, def]) => [
        def._def,
        {
          def: def._def,
          path: [..._options.basePath, _options.definitionPath, name17],
          // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
          jsonSchema: void 0
        }
      ])
    )
  };
};
var zodToJsonSchema = (schema, options) => {
  var _a18;
  const refs = getRefs(options);
  let definitions =
    typeof options === "object" && options.definitions
      ? Object.entries(options.definitions).reduce((acc, [name25, schema2]) => {
          var _a25;
          return {
            ...acc,
            [name25]:
              (_a25 = parseDef(
                schema2._def,
                {
                  ...refs,
                  currentPath: [...refs.basePath, refs.definitionPath, name25]
                },
                true
              )) != null
                ? _a25
                : parseAnyDef()
          };
        }, {})
      : void 0;
  const name17 =
    typeof options === "string"
      ? options
      : (options == null ? void 0 : options.nameStrategy) === "title"
        ? void 0
        : options == null
          ? void 0
          : options.name;
  const main =
    (_a18 = parseDef(
      schema._def,
      name17 === void 0
        ? refs
        : {
            ...refs,
            currentPath: [...refs.basePath, refs.definitionPath, name17]
          },
      false
    )) != null
      ? _a18
      : parseAnyDef();
  const title =
    typeof options === "object" &&
    options.name !== void 0 &&
    options.nameStrategy === "title"
      ? options.name
      : void 0;
  if (title !== void 0) {
    main.title = title;
  }
  const combined =
    name17 === void 0
      ? definitions
        ? {
            ...main,
            [refs.definitionPath]: definitions
          }
        : main
      : {
          $ref: [
            ...(refs.$refStrategy === "relative" ? [] : refs.basePath),
            refs.definitionPath,
            name17
          ].join("/"),
          [refs.definitionPath]: {
            ...definitions,
            [name17]: main
          }
        };
  combined.$schema = "http://json-schema.org/draft-07/schema#";
  return combined;
};
var zod_to_json_schema_default = zodToJsonSchema;
function zod3Schema(zodSchema2, options) {
  var _a18;
  const useReferences =
    (_a18 = options == null ? void 0 : options.useReferences) != null
      ? _a18
      : false;
  return jsonSchema(
    zod_to_json_schema_default(zodSchema2, {
      $refStrategy: useReferences ? "root" : "none"
    }),
    {
      validate: async (value) => {
        const result = await zodSchema2.safeParseAsync(value);
        return result.success
          ? { success: true, value: result.data }
          : { success: false, error: result.error };
      }
    }
  );
}
function zod4Schema(zodSchema2, options) {
  var _a18;
  const useReferences =
    (_a18 = options == null ? void 0 : options.useReferences) != null
      ? _a18
      : false;
  const z4JSONSchema = toJSONSchema(zodSchema2, {
    target: "draft-7",
    io: "output",
    reused: useReferences ? "ref" : "inline"
  });
  return jsonSchema(z4JSONSchema, {
    validate: async (value) => {
      const result = await safeParseAsync(zodSchema2, value);
      return result.success
        ? { success: true, value: result.data }
        : { success: false, error: result.error };
    }
  });
}
function isZod4Schema(zodSchema2) {
  return "_zod" in zodSchema2;
}
function zodSchema(zodSchema2, options) {
  if (isZod4Schema(zodSchema2)) {
    return zod4Schema(zodSchema2, options);
  } else {
    return zod3Schema(zodSchema2, options);
  }
}
var schemaSymbol2 = Symbol.for("vercel.ai.schema");
function jsonSchema(jsonSchema2, { validate } = {}) {
  return {
    [schemaSymbol2]: true,
    _type: void 0,
    // should never be used directly
    [validatorSymbol2]: true,
    jsonSchema: jsonSchema2,
    validate
  };
}
function isSchema(value) {
  return (
    typeof value === "object" &&
    value !== null &&
    schemaSymbol2 in value &&
    value[schemaSymbol2] === true &&
    "jsonSchema" in value &&
    "validate" in value
  );
}
function asSchema2(schema) {
  return schema == null
    ? jsonSchema({
        properties: {},
        additionalProperties: false
      })
    : isSchema(schema)
      ? schema
      : zodSchema(schema);
}
var { btoa: btoa2, atob: atob2 } = globalThis;
function withoutTrailingSlash(url) {
  return url == null ? void 0 : url.replace(/\/$/, "");
}

// node_modules/agents/node_modules/ai/node_modules/@ai-sdk/gateway/dist/index.mjs
var marker16 = "vercel.ai.gateway.error";
var symbol16 = Symbol.for(marker16);
var _a16;
var _b;
var GatewayError = class _GatewayError extends ((_b = Error),
(_a16 = symbol16),
_b) {
  constructor({ message, statusCode = 500, cause }) {
    super(message);
    this[_a16] = true;
    this.statusCode = statusCode;
    this.cause = cause;
  }
  /**
   * Checks if the given error is a Gateway Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is a Gateway Error, false otherwise.
   */
  static isInstance(error) {
    return _GatewayError.hasMarker(error);
  }
  static hasMarker(error) {
    return (
      typeof error === "object" &&
      error !== null &&
      symbol16 in error &&
      error[symbol16] === true
    );
  }
};
var name15 = "GatewayAuthenticationError";
var marker23 = `vercel.ai.gateway.error.${name15}`;
var symbol23 = Symbol.for(marker23);
var _a23;
var _b2;
var GatewayAuthenticationError = class _GatewayAuthenticationError extends ((_b2 =
  GatewayError),
(_a23 = symbol23),
_b2) {
  constructor({
    message = "Authentication failed",
    statusCode = 401,
    cause
  } = {}) {
    super({ message, statusCode, cause });
    this[_a23] = true;
    this.name = name15;
    this.type = "authentication_error";
  }
  static isInstance(error) {
    return GatewayError.hasMarker(error) && symbol23 in error;
  }
  /**
   * Creates a contextual error message when authentication fails
   */
  static createContextualError({
    apiKeyProvided,
    oidcTokenProvided,
    message = "Authentication failed",
    statusCode = 401,
    cause
  }) {
    let contextualMessage;
    if (apiKeyProvided) {
      contextualMessage = `AI Gateway authentication failed: Invalid API key provided.

The token is expected to be provided via the 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.`;
    } else if (oidcTokenProvided) {
      contextualMessage = `AI Gateway authentication failed: Invalid OIDC token provided.

The token is expected to be provided via the 'VERCEL_OIDC_TOKEN' environment variable. It expires every 12 hours.
- make sure your Vercel project settings have OIDC enabled
- if running locally with 'vercel dev', the token is automatically obtained and refreshed
- if running locally with your own dev server, run 'vercel env pull' to fetch the token
- in production/preview, the token is automatically obtained and refreshed

Alternative: Provide an API key via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.`;
    } else {
      contextualMessage = `AI Gateway authentication failed: No authentication provided.

Provide either an API key or OIDC token.

API key instructions:

The token is expected to be provided via the 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.

OIDC token instructions:

The token is expected to be provided via the 'VERCEL_OIDC_TOKEN' environment variable. It expires every 12 hours.
- make sure your Vercel project settings have OIDC enabled
- if running locally with 'vercel dev', the token is automatically obtained and refreshed
- if running locally with your own dev server, run 'vercel env pull' to fetch the token
- in production/preview, the token is automatically obtained and refreshed`;
    }
    return new _GatewayAuthenticationError({
      message: contextualMessage,
      statusCode,
      cause
    });
  }
};
var name23 = "GatewayInvalidRequestError";
var marker33 = `vercel.ai.gateway.error.${name23}`;
var symbol33 = Symbol.for(marker33);
var _a33;
var _b3;
var GatewayInvalidRequestError = class extends ((_b3 = GatewayError),
(_a33 = symbol33),
_b3) {
  constructor({ message = "Invalid request", statusCode = 400, cause } = {}) {
    super({ message, statusCode, cause });
    this[_a33] = true;
    this.name = name23;
    this.type = "invalid_request_error";
  }
  static isInstance(error) {
    return GatewayError.hasMarker(error) && symbol33 in error;
  }
};
var name33 = "GatewayRateLimitError";
var marker43 = `vercel.ai.gateway.error.${name33}`;
var symbol43 = Symbol.for(marker43);
var _a43;
var _b4;
var GatewayRateLimitError = class extends ((_b4 = GatewayError),
(_a43 = symbol43),
_b4) {
  constructor({
    message = "Rate limit exceeded",
    statusCode = 429,
    cause
  } = {}) {
    super({ message, statusCode, cause });
    this[_a43] = true;
    this.name = name33;
    this.type = "rate_limit_exceeded";
  }
  static isInstance(error) {
    return GatewayError.hasMarker(error) && symbol43 in error;
  }
};
var name43 = "GatewayModelNotFoundError";
var marker53 = `vercel.ai.gateway.error.${name43}`;
var symbol53 = Symbol.for(marker53);
var modelNotFoundParamSchema = external_exports.object({
  modelId: external_exports.string()
});
var _a53;
var _b5;
var GatewayModelNotFoundError = class extends ((_b5 = GatewayError),
(_a53 = symbol53),
_b5) {
  constructor({
    message = "Model not found",
    statusCode = 404,
    modelId,
    cause
  } = {}) {
    super({ message, statusCode, cause });
    this[_a53] = true;
    this.name = name43;
    this.type = "model_not_found";
    this.modelId = modelId;
  }
  static isInstance(error) {
    return GatewayError.hasMarker(error) && symbol53 in error;
  }
};
var name53 = "GatewayInternalServerError";
var marker63 = `vercel.ai.gateway.error.${name53}`;
var symbol63 = Symbol.for(marker63);
var _a63;
var _b6;
var GatewayInternalServerError = class extends ((_b6 = GatewayError),
(_a63 = symbol63),
_b6) {
  constructor({
    message = "Internal server error",
    statusCode = 500,
    cause
  } = {}) {
    super({ message, statusCode, cause });
    this[_a63] = true;
    this.name = name53;
    this.type = "internal_server_error";
  }
  static isInstance(error) {
    return GatewayError.hasMarker(error) && symbol63 in error;
  }
};
var name63 = "GatewayResponseError";
var marker73 = `vercel.ai.gateway.error.${name63}`;
var symbol73 = Symbol.for(marker73);
var _a73;
var _b7;
var GatewayResponseError = class extends ((_b7 = GatewayError),
(_a73 = symbol73),
_b7) {
  constructor({
    message = "Invalid response from Gateway",
    statusCode = 502,
    response,
    validationError,
    cause
  } = {}) {
    super({ message, statusCode, cause });
    this[_a73] = true;
    this.name = name63;
    this.type = "response_error";
    this.response = response;
    this.validationError = validationError;
  }
  static isInstance(error) {
    return GatewayError.hasMarker(error) && symbol73 in error;
  }
};
function createGatewayErrorFromResponse({
  response,
  statusCode,
  defaultMessage = "Gateway request failed",
  cause,
  authMethod
}) {
  const parseResult = gatewayErrorResponseSchema.safeParse(response);
  if (!parseResult.success) {
    return new GatewayResponseError({
      message: `Invalid error response format: ${defaultMessage}`,
      statusCode,
      response,
      validationError: parseResult.error,
      cause
    });
  }
  const validatedResponse = parseResult.data;
  const errorType = validatedResponse.error.type;
  const message = validatedResponse.error.message;
  switch (errorType) {
    case "authentication_error":
      return GatewayAuthenticationError.createContextualError({
        apiKeyProvided: authMethod === "api-key",
        oidcTokenProvided: authMethod === "oidc",
        statusCode,
        cause
      });
    case "invalid_request_error":
      return new GatewayInvalidRequestError({ message, statusCode, cause });
    case "rate_limit_exceeded":
      return new GatewayRateLimitError({ message, statusCode, cause });
    case "model_not_found": {
      const modelResult = modelNotFoundParamSchema.safeParse(
        validatedResponse.error.param
      );
      return new GatewayModelNotFoundError({
        message,
        statusCode,
        modelId: modelResult.success ? modelResult.data.modelId : void 0,
        cause
      });
    }
    case "internal_server_error":
      return new GatewayInternalServerError({ message, statusCode, cause });
    default:
      return new GatewayInternalServerError({ message, statusCode, cause });
  }
}
var gatewayErrorResponseSchema = external_exports.object({
  error: external_exports.object({
    message: external_exports.string(),
    type: external_exports.string().nullish(),
    param: external_exports.unknown().nullish(),
    code: external_exports
      .union([external_exports.string(), external_exports.number()])
      .nullish()
  })
});
function asGatewayError(error, authMethod) {
  var _a84;
  if (GatewayError.isInstance(error)) {
    return error;
  }
  if (APICallError2.isInstance(error)) {
    return createGatewayErrorFromResponse({
      response: extractApiCallResponse(error),
      statusCode: (_a84 = error.statusCode) != null ? _a84 : 500,
      defaultMessage: "Gateway request failed",
      cause: error,
      authMethod
    });
  }
  return createGatewayErrorFromResponse({
    response: {},
    statusCode: 500,
    defaultMessage:
      error instanceof Error
        ? `Gateway request failed: ${error.message}`
        : "Unknown Gateway error",
    cause: error,
    authMethod
  });
}
function extractApiCallResponse(error) {
  if (error.data !== void 0) {
    return error.data;
  }
  if (error.responseBody != null) {
    try {
      return JSON.parse(error.responseBody);
    } catch (e) {
      return error.responseBody;
    }
  }
  return {};
}
var GATEWAY_AUTH_METHOD_HEADER = "ai-gateway-auth-method";
function parseAuthMethod(headers) {
  const result = gatewayAuthMethodSchema.safeParse(
    headers[GATEWAY_AUTH_METHOD_HEADER]
  );
  return result.success ? result.data : void 0;
}
var gatewayAuthMethodSchema = external_exports.union([
  external_exports.literal("api-key"),
  external_exports.literal("oidc")
]);
var GatewayFetchMetadata = class {
  constructor(config) {
    this.config = config;
  }
  async getAvailableModels() {
    try {
      const { value } = await getFromApi({
        url: `${this.config.baseURL}/config`,
        headers: await resolve(this.config.headers()),
        successfulResponseHandler: createJsonResponseHandler(
          gatewayFetchMetadataSchema
        ),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports.any(),
          errorToMessage: (data) => data
        }),
        fetch: this.config.fetch
      });
      return value;
    } catch (error) {
      throw asGatewayError(error);
    }
  }
  async getCredits() {
    try {
      const baseUrl = new URL(this.config.baseURL);
      const { value } = await getFromApi({
        url: `${baseUrl.origin}/v1/credits`,
        headers: await resolve(this.config.headers()),
        successfulResponseHandler:
          createJsonResponseHandler(gatewayCreditsSchema),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports.any(),
          errorToMessage: (data) => data
        }),
        fetch: this.config.fetch
      });
      return value;
    } catch (error) {
      throw asGatewayError(error);
    }
  }
};
var gatewayLanguageModelSpecificationSchema = external_exports.object({
  specificationVersion: external_exports.literal("v2"),
  provider: external_exports.string(),
  modelId: external_exports.string()
});
var gatewayLanguageModelPricingSchema = external_exports
  .object({
    input: external_exports.string(),
    output: external_exports.string(),
    input_cache_read: external_exports.string().nullish(),
    input_cache_write: external_exports.string().nullish()
  })
  .transform(({ input, output, input_cache_read, input_cache_write }) => ({
    input,
    output,
    ...(input_cache_read ? { cachedInputTokens: input_cache_read } : {}),
    ...(input_cache_write
      ? { cacheCreationInputTokens: input_cache_write }
      : {})
  }));
var gatewayLanguageModelEntrySchema = external_exports.object({
  id: external_exports.string(),
  name: external_exports.string(),
  description: external_exports.string().nullish(),
  pricing: gatewayLanguageModelPricingSchema.nullish(),
  specification: gatewayLanguageModelSpecificationSchema,
  modelType: external_exports.enum(["language", "embedding", "image"]).nullish()
});
var gatewayFetchMetadataSchema = external_exports.object({
  models: external_exports.array(gatewayLanguageModelEntrySchema)
});
var gatewayCreditsSchema = external_exports
  .object({
    balance: external_exports.string(),
    total_used: external_exports.string()
  })
  .transform(({ balance, total_used }) => ({
    balance,
    totalUsed: total_used
  }));
var GatewayLanguageModel = class {
  constructor(modelId, config) {
    this.modelId = modelId;
    this.config = config;
    this.specificationVersion = "v2";
    this.supportedUrls = { "*/*": [/.*/] };
  }
  get provider() {
    return this.config.provider;
  }
  async getArgs(options) {
    const { abortSignal: _abortSignal, ...optionsWithoutSignal } = options;
    return {
      args: this.maybeEncodeFileParts(optionsWithoutSignal),
      warnings: []
    };
  }
  async doGenerate(options) {
    const { args, warnings } = await this.getArgs(options);
    const { abortSignal } = options;
    const resolvedHeaders = await resolve(this.config.headers());
    try {
      const {
        responseHeaders,
        value: responseBody,
        rawValue: rawResponse
      } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(
          resolvedHeaders,
          options.headers,
          this.getModelConfigHeaders(this.modelId, false),
          await resolve(this.config.o11yHeaders)
        ),
        body: args,
        successfulResponseHandler: createJsonResponseHandler(
          external_exports.any()
        ),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports.any(),
          errorToMessage: (data) => data
        }),
        ...(abortSignal && { abortSignal }),
        fetch: this.config.fetch
      });
      return {
        ...responseBody,
        request: { body: args },
        response: { headers: responseHeaders, body: rawResponse },
        warnings
      };
    } catch (error) {
      throw asGatewayError(error, parseAuthMethod(resolvedHeaders));
    }
  }
  async doStream(options) {
    const { args, warnings } = await this.getArgs(options);
    const { abortSignal } = options;
    const resolvedHeaders = await resolve(this.config.headers());
    try {
      const { value: response, responseHeaders } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(
          resolvedHeaders,
          options.headers,
          this.getModelConfigHeaders(this.modelId, true),
          await resolve(this.config.o11yHeaders)
        ),
        body: args,
        successfulResponseHandler: createEventSourceResponseHandler(
          external_exports.any()
        ),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports.any(),
          errorToMessage: (data) => data
        }),
        ...(abortSignal && { abortSignal }),
        fetch: this.config.fetch
      });
      return {
        stream: response.pipeThrough(
          new TransformStream({
            start(controller) {
              if (warnings.length > 0) {
                controller.enqueue({ type: "stream-start", warnings });
              }
            },
            transform(chunk, controller) {
              if (chunk.success) {
                const streamPart = chunk.value;
                if (streamPart.type === "raw" && !options.includeRawChunks) {
                  return;
                }
                if (
                  streamPart.type === "response-metadata" &&
                  streamPart.timestamp &&
                  typeof streamPart.timestamp === "string"
                ) {
                  streamPart.timestamp = new Date(streamPart.timestamp);
                }
                controller.enqueue(streamPart);
              } else {
                controller.error(chunk.error);
              }
            }
          })
        ),
        request: { body: args },
        response: { headers: responseHeaders }
      };
    } catch (error) {
      throw asGatewayError(error, parseAuthMethod(resolvedHeaders));
    }
  }
  isFilePart(part) {
    return (
      part && typeof part === "object" && "type" in part && part.type === "file"
    );
  }
  /**
   * Encodes file parts in the prompt to base64. Mutates the passed options
   * instance directly to avoid copying the file data.
   * @param options - The options to encode.
   * @returns The options with the file parts encoded.
   */
  maybeEncodeFileParts(options) {
    for (const message of options.prompt) {
      for (const part of message.content) {
        if (this.isFilePart(part)) {
          const filePart = part;
          if (filePart.data instanceof Uint8Array) {
            const buffer = Uint8Array.from(filePart.data);
            const base64Data = Buffer.from(buffer).toString("base64");
            filePart.data = new URL(
              `data:${filePart.mediaType || "application/octet-stream"};base64,${base64Data}`
            );
          }
        }
      }
    }
    return options;
  }
  getUrl() {
    return `${this.config.baseURL}/language-model`;
  }
  getModelConfigHeaders(modelId, streaming) {
    return {
      "ai-language-model-specification-version": "2",
      "ai-language-model-id": modelId,
      "ai-language-model-streaming": String(streaming)
    };
  }
};
var GatewayEmbeddingModel = class {
  constructor(modelId, config) {
    this.modelId = modelId;
    this.config = config;
    this.specificationVersion = "v2";
    this.maxEmbeddingsPerCall = 2048;
    this.supportsParallelCalls = true;
  }
  get provider() {
    return this.config.provider;
  }
  async doEmbed({ values, headers, abortSignal, providerOptions }) {
    var _a84;
    const resolvedHeaders = await resolve(this.config.headers());
    try {
      const {
        responseHeaders,
        value: responseBody,
        rawValue
      } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(
          resolvedHeaders,
          headers != null ? headers : {},
          this.getModelConfigHeaders(),
          await resolve(this.config.o11yHeaders)
        ),
        body: {
          input: values.length === 1 ? values[0] : values,
          ...(providerOptions ? { providerOptions } : {})
        },
        successfulResponseHandler: createJsonResponseHandler(
          gatewayEmbeddingResponseSchema
        ),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports.any(),
          errorToMessage: (data) => data
        }),
        ...(abortSignal && { abortSignal }),
        fetch: this.config.fetch
      });
      return {
        embeddings: responseBody.embeddings,
        usage: (_a84 = responseBody.usage) != null ? _a84 : void 0,
        providerMetadata: responseBody.providerMetadata,
        response: { headers: responseHeaders, body: rawValue }
      };
    } catch (error) {
      throw asGatewayError(error, parseAuthMethod(resolvedHeaders));
    }
  }
  getUrl() {
    return `${this.config.baseURL}/embedding-model`;
  }
  getModelConfigHeaders() {
    return {
      "ai-embedding-model-specification-version": "2",
      "ai-model-id": this.modelId
    };
  }
};
var gatewayEmbeddingResponseSchema = external_exports.object({
  embeddings: external_exports.array(
    external_exports.array(external_exports.number())
  ),
  usage: external_exports
    .object({ tokens: external_exports.number() })
    .nullish(),
  providerMetadata: external_exports
    .record(
      external_exports.string(),
      external_exports.record(
        external_exports.string(),
        external_exports.unknown()
      )
    )
    .optional()
});
async function getVercelOidcToken() {
  var _a84, _b8;
  const token =
    (_b8 =
      (_a84 = getContext().headers) == null
        ? void 0
        : _a84["x-vercel-oidc-token"]) != null
      ? _b8
      : process.env.VERCEL_OIDC_TOKEN;
  if (!token) {
    throw new GatewayAuthenticationError({
      message: "OIDC token not available",
      statusCode: 401
    });
  }
  return token;
}
async function getVercelRequestId() {
  var _a84;
  return (_a84 = getContext().headers) == null ? void 0 : _a84["x-vercel-id"];
}
var SYMBOL_FOR_REQ_CONTEXT = Symbol.for("@vercel/request-context");
function getContext() {
  var _a84, _b8, _c;
  const fromSymbol = globalThis;
  return (_c =
    (_b8 =
      (_a84 = fromSymbol[SYMBOL_FOR_REQ_CONTEXT]) == null
        ? void 0
        : _a84.get) == null
      ? void 0
      : _b8.call(_a84)) != null
    ? _c
    : {};
}
var AI_GATEWAY_PROTOCOL_VERSION = "0.0.1";
function createGatewayProvider(options = {}) {
  var _a84, _b8;
  let pendingMetadata = null;
  let metadataCache = null;
  const cacheRefreshMillis =
    (_a84 = options.metadataCacheRefreshMillis) != null ? _a84 : 1e3 * 60 * 5;
  let lastFetchTime = 0;
  const baseURL =
    (_b8 = withoutTrailingSlash(options.baseURL)) != null
      ? _b8
      : "https://ai-gateway.vercel.sh/v1/ai";
  const getHeaders = async () => {
    const auth = await getGatewayAuthToken(options);
    if (auth) {
      return {
        Authorization: `Bearer ${auth.token}`,
        "ai-gateway-protocol-version": AI_GATEWAY_PROTOCOL_VERSION,
        [GATEWAY_AUTH_METHOD_HEADER]: auth.authMethod,
        ...options.headers
      };
    }
    throw GatewayAuthenticationError.createContextualError({
      apiKeyProvided: false,
      oidcTokenProvided: false,
      statusCode: 401
    });
  };
  const createO11yHeaders = () => {
    const deploymentId = loadOptionalSetting({
      settingValue: void 0,
      environmentVariableName: "VERCEL_DEPLOYMENT_ID"
    });
    const environment = loadOptionalSetting({
      settingValue: void 0,
      environmentVariableName: "VERCEL_ENV"
    });
    const region = loadOptionalSetting({
      settingValue: void 0,
      environmentVariableName: "VERCEL_REGION"
    });
    return async () => {
      const requestId = await getVercelRequestId();
      return {
        ...(deploymentId && { "ai-o11y-deployment-id": deploymentId }),
        ...(environment && { "ai-o11y-environment": environment }),
        ...(region && { "ai-o11y-region": region }),
        ...(requestId && { "ai-o11y-request-id": requestId })
      };
    };
  };
  const createLanguageModel = (modelId) => {
    return new GatewayLanguageModel(modelId, {
      provider: "gateway",
      baseURL,
      headers: getHeaders,
      fetch: options.fetch,
      o11yHeaders: createO11yHeaders()
    });
  };
  const getAvailableModels = async () => {
    var _a94, _b9, _c;
    const now =
      (_c =
        (_b9 =
          (_a94 = options._internal) == null ? void 0 : _a94.currentDate) ==
        null
          ? void 0
          : _b9.call(_a94).getTime()) != null
        ? _c
        : Date.now();
    if (!pendingMetadata || now - lastFetchTime > cacheRefreshMillis) {
      lastFetchTime = now;
      pendingMetadata = new GatewayFetchMetadata({
        baseURL,
        headers: getHeaders,
        fetch: options.fetch
      })
        .getAvailableModels()
        .then((metadata) => {
          metadataCache = metadata;
          return metadata;
        })
        .catch(async (error) => {
          throw asGatewayError(error, parseAuthMethod(await getHeaders()));
        });
    }
    return metadataCache ? Promise.resolve(metadataCache) : pendingMetadata;
  };
  const getCredits = async () => {
    return new GatewayFetchMetadata({
      baseURL,
      headers: getHeaders,
      fetch: options.fetch
    })
      .getCredits()
      .catch(async (error) => {
        throw asGatewayError(error, parseAuthMethod(await getHeaders()));
      });
  };
  const provider = function (modelId) {
    if (new.target) {
      throw new Error(
        "The Gateway Provider model function cannot be called with the new keyword."
      );
    }
    return createLanguageModel(modelId);
  };
  provider.getAvailableModels = getAvailableModels;
  provider.getCredits = getCredits;
  provider.imageModel = (modelId) => {
    throw new NoSuchModelError({ modelId, modelType: "imageModel" });
  };
  provider.languageModel = createLanguageModel;
  provider.textEmbeddingModel = (modelId) => {
    return new GatewayEmbeddingModel(modelId, {
      provider: "gateway",
      baseURL,
      headers: getHeaders,
      fetch: options.fetch,
      o11yHeaders: createO11yHeaders()
    });
  };
  return provider;
}
var gateway = createGatewayProvider();
async function getGatewayAuthToken(options) {
  const apiKey = loadOptionalSetting({
    settingValue: options.apiKey,
    environmentVariableName: "AI_GATEWAY_API_KEY"
  });
  if (apiKey) {
    return {
      token: apiKey,
      authMethod: "api-key"
    };
  }
  try {
    const oidcToken = await getVercelOidcToken();
    return {
      token: oidcToken,
      authMethod: "oidc"
    };
  } catch (e) {
    return null;
  }
}

// node_modules/agents/node_modules/ai/dist/index.mjs
var __defProp = Object.defineProperty;
var __export2 = (target, all) => {
  for (var name17 in all)
    __defProp(target, name17, { get: all[name17], enumerable: true });
};
var name16 = "AI_NoOutputSpecifiedError";
var marker17 = `vercel.ai.error.${name16}`;
var symbol17 = Symbol.for(marker17);
var _a17;
_a17 = symbol17;
var name24 = "AI_InvalidArgumentError";
var marker24 = `vercel.ai.error.${name24}`;
var symbol24 = Symbol.for(marker24);
var _a24;
_a24 = symbol24;
var name34 = "AI_InvalidStreamPartError";
var marker34 = `vercel.ai.error.${name34}`;
var symbol34 = Symbol.for(marker34);
var _a34;
_a34 = symbol34;
var name44 = "AI_InvalidToolInputError";
var marker44 = `vercel.ai.error.${name44}`;
var symbol44 = Symbol.for(marker44);
var _a44;
_a44 = symbol44;
var name54 = "AI_MCPClientError";
var marker54 = `vercel.ai.error.${name54}`;
var symbol54 = Symbol.for(marker54);
var _a54;
_a54 = symbol54;
var name64 = "AI_NoImageGeneratedError";
var marker64 = `vercel.ai.error.${name64}`;
var symbol64 = Symbol.for(marker64);
var _a64;
_a64 = symbol64;
var name73 = "AI_NoObjectGeneratedError";
var marker74 = `vercel.ai.error.${name73}`;
var symbol74 = Symbol.for(marker74);
var _a74;
var NoObjectGeneratedError = class extends AISDKError2 {
  constructor({
    message = "No object generated.",
    cause,
    text: text2,
    response,
    usage,
    finishReason
  }) {
    super({ name: name73, message, cause });
    this[_a74] = true;
    this.text = text2;
    this.response = response;
    this.usage = usage;
    this.finishReason = finishReason;
  }
  static isInstance(error) {
    return AISDKError2.hasMarker(error, marker74);
  }
};
_a74 = symbol74;
var name83 = "AI_NoOutputGeneratedError";
var marker83 = `vercel.ai.error.${name83}`;
var symbol83 = Symbol.for(marker83);
var _a83;
_a83 = symbol83;
var name93 = "AI_NoSuchToolError";
var marker93 = `vercel.ai.error.${name93}`;
var symbol93 = Symbol.for(marker93);
var _a93;
_a93 = symbol93;
var name103 = "AI_ToolCallRepairError";
var marker103 = `vercel.ai.error.${name103}`;
var symbol103 = Symbol.for(marker103);
var _a103;
_a103 = symbol103;
var name113 = "AI_InvalidDataContentError";
var marker113 = `vercel.ai.error.${name113}`;
var symbol113 = Symbol.for(marker113);
var _a113;
_a113 = symbol113;
var name123 = "AI_InvalidMessageRoleError";
var marker123 = `vercel.ai.error.${name123}`;
var symbol123 = Symbol.for(marker123);
var _a123;
_a123 = symbol123;
var name133 = "AI_MessageConversionError";
var marker133 = `vercel.ai.error.${name133}`;
var symbol133 = Symbol.for(marker133);
var _a133;
_a133 = symbol133;
var name142 = "AI_DownloadError";
var marker143 = `vercel.ai.error.${name142}`;
var symbol143 = Symbol.for(marker143);
var _a143;
_a143 = symbol143;
var name152 = "AI_RetryError";
var marker152 = `vercel.ai.error.${name152}`;
var symbol152 = Symbol.for(marker152);
var _a152;
_a152 = symbol152;
var VERSION2 = true ? "5.0.48" : "0.0.0-test";
var dataContentSchema = external_exports.union([
  external_exports.string(),
  external_exports.instanceof(Uint8Array),
  external_exports.instanceof(ArrayBuffer),
  external_exports.custom(
    // Buffer might not be available in some environments such as CloudFlare:
    (value) => {
      var _a172, _b8;
      return (_b8 =
        (_a172 = globalThis.Buffer) == null ? void 0 : _a172.isBuffer(value)) !=
        null
        ? _b8
        : false;
    },
    { message: "Must be a Buffer" }
  )
]);
var jsonValueSchema = external_exports.lazy(() =>
  external_exports.union([
    external_exports.null(),
    external_exports.string(),
    external_exports.number(),
    external_exports.boolean(),
    external_exports.record(external_exports.string(), jsonValueSchema),
    external_exports.array(jsonValueSchema)
  ])
);
var providerMetadataSchema = external_exports.record(
  external_exports.string(),
  external_exports.record(external_exports.string(), jsonValueSchema)
);
var textPartSchema = external_exports.object({
  type: external_exports.literal("text"),
  text: external_exports.string(),
  providerOptions: providerMetadataSchema.optional()
});
var imagePartSchema = external_exports.object({
  type: external_exports.literal("image"),
  image: external_exports.union([
    dataContentSchema,
    external_exports.instanceof(URL)
  ]),
  mediaType: external_exports.string().optional(),
  providerOptions: providerMetadataSchema.optional()
});
var filePartSchema = external_exports.object({
  type: external_exports.literal("file"),
  data: external_exports.union([
    dataContentSchema,
    external_exports.instanceof(URL)
  ]),
  filename: external_exports.string().optional(),
  mediaType: external_exports.string(),
  providerOptions: providerMetadataSchema.optional()
});
var reasoningPartSchema = external_exports.object({
  type: external_exports.literal("reasoning"),
  text: external_exports.string(),
  providerOptions: providerMetadataSchema.optional()
});
var toolCallPartSchema = external_exports.object({
  type: external_exports.literal("tool-call"),
  toolCallId: external_exports.string(),
  toolName: external_exports.string(),
  input: external_exports.unknown(),
  providerOptions: providerMetadataSchema.optional(),
  providerExecuted: external_exports.boolean().optional()
});
var outputSchema = external_exports.discriminatedUnion("type", [
  external_exports.object({
    type: external_exports.literal("text"),
    value: external_exports.string()
  }),
  external_exports.object({
    type: external_exports.literal("json"),
    value: jsonValueSchema
  }),
  external_exports.object({
    type: external_exports.literal("error-text"),
    value: external_exports.string()
  }),
  external_exports.object({
    type: external_exports.literal("error-json"),
    value: jsonValueSchema
  }),
  external_exports.object({
    type: external_exports.literal("content"),
    value: external_exports.array(
      external_exports.union([
        external_exports.object({
          type: external_exports.literal("text"),
          text: external_exports.string()
        }),
        external_exports.object({
          type: external_exports.literal("media"),
          data: external_exports.string(),
          mediaType: external_exports.string()
        })
      ])
    )
  })
]);
var toolResultPartSchema = external_exports.object({
  type: external_exports.literal("tool-result"),
  toolCallId: external_exports.string(),
  toolName: external_exports.string(),
  output: outputSchema,
  providerOptions: providerMetadataSchema.optional()
});
var systemModelMessageSchema = external_exports.object({
  role: external_exports.literal("system"),
  content: external_exports.string(),
  providerOptions: providerMetadataSchema.optional()
});
var userModelMessageSchema = external_exports.object({
  role: external_exports.literal("user"),
  content: external_exports.union([
    external_exports.string(),
    external_exports.array(
      external_exports.union([textPartSchema, imagePartSchema, filePartSchema])
    )
  ]),
  providerOptions: providerMetadataSchema.optional()
});
var assistantModelMessageSchema = external_exports.object({
  role: external_exports.literal("assistant"),
  content: external_exports.union([
    external_exports.string(),
    external_exports.array(
      external_exports.union([
        textPartSchema,
        filePartSchema,
        reasoningPartSchema,
        toolCallPartSchema,
        toolResultPartSchema
      ])
    )
  ]),
  providerOptions: providerMetadataSchema.optional()
});
var toolModelMessageSchema = external_exports.object({
  role: external_exports.literal("tool"),
  content: external_exports.array(toolResultPartSchema),
  providerOptions: providerMetadataSchema.optional()
});
var modelMessageSchema = external_exports.union([
  systemModelMessageSchema,
  userModelMessageSchema,
  assistantModelMessageSchema,
  toolModelMessageSchema
]);
var originalGenerateId = createIdGenerator2({
  prefix: "aitxt",
  size: 24
});
var JsonToSseTransformStream = class extends TransformStream {
  constructor() {
    super({
      transform(part, controller) {
        controller.enqueue(`data: ${JSON.stringify(part)}

`);
      },
      flush(controller) {
        controller.enqueue("data: [DONE]\n\n");
      }
    });
  }
};
var uiMessageChunkSchema = external_exports.union([
  external_exports.strictObject({
    type: external_exports.literal("text-start"),
    id: external_exports.string(),
    providerMetadata: providerMetadataSchema.optional()
  }),
  external_exports.strictObject({
    type: external_exports.literal("text-delta"),
    id: external_exports.string(),
    delta: external_exports.string(),
    providerMetadata: providerMetadataSchema.optional()
  }),
  external_exports.strictObject({
    type: external_exports.literal("text-end"),
    id: external_exports.string(),
    providerMetadata: providerMetadataSchema.optional()
  }),
  external_exports.strictObject({
    type: external_exports.literal("error"),
    errorText: external_exports.string()
  }),
  external_exports.strictObject({
    type: external_exports.literal("tool-input-start"),
    toolCallId: external_exports.string(),
    toolName: external_exports.string(),
    providerExecuted: external_exports.boolean().optional(),
    dynamic: external_exports.boolean().optional()
  }),
  external_exports.strictObject({
    type: external_exports.literal("tool-input-delta"),
    toolCallId: external_exports.string(),
    inputTextDelta: external_exports.string()
  }),
  external_exports.strictObject({
    type: external_exports.literal("tool-input-available"),
    toolCallId: external_exports.string(),
    toolName: external_exports.string(),
    input: external_exports.unknown(),
    providerExecuted: external_exports.boolean().optional(),
    providerMetadata: providerMetadataSchema.optional(),
    dynamic: external_exports.boolean().optional()
  }),
  external_exports.strictObject({
    type: external_exports.literal("tool-input-error"),
    toolCallId: external_exports.string(),
    toolName: external_exports.string(),
    input: external_exports.unknown(),
    providerExecuted: external_exports.boolean().optional(),
    providerMetadata: providerMetadataSchema.optional(),
    dynamic: external_exports.boolean().optional(),
    errorText: external_exports.string()
  }),
  external_exports.strictObject({
    type: external_exports.literal("tool-output-available"),
    toolCallId: external_exports.string(),
    output: external_exports.unknown(),
    providerExecuted: external_exports.boolean().optional(),
    dynamic: external_exports.boolean().optional(),
    preliminary: external_exports.boolean().optional()
  }),
  external_exports.strictObject({
    type: external_exports.literal("tool-output-error"),
    toolCallId: external_exports.string(),
    errorText: external_exports.string(),
    providerExecuted: external_exports.boolean().optional(),
    dynamic: external_exports.boolean().optional()
  }),
  external_exports.strictObject({
    type: external_exports.literal("reasoning"),
    text: external_exports.string(),
    providerMetadata: providerMetadataSchema.optional()
  }),
  external_exports.strictObject({
    type: external_exports.literal("reasoning-start"),
    id: external_exports.string(),
    providerMetadata: providerMetadataSchema.optional()
  }),
  external_exports.strictObject({
    type: external_exports.literal("reasoning-delta"),
    id: external_exports.string(),
    delta: external_exports.string(),
    providerMetadata: providerMetadataSchema.optional()
  }),
  external_exports.strictObject({
    type: external_exports.literal("reasoning-end"),
    id: external_exports.string(),
    providerMetadata: providerMetadataSchema.optional()
  }),
  external_exports.strictObject({
    type: external_exports.literal("reasoning-part-finish")
  }),
  external_exports.strictObject({
    type: external_exports.literal("source-url"),
    sourceId: external_exports.string(),
    url: external_exports.string(),
    title: external_exports.string().optional(),
    providerMetadata: providerMetadataSchema.optional()
  }),
  external_exports.strictObject({
    type: external_exports.literal("source-document"),
    sourceId: external_exports.string(),
    mediaType: external_exports.string(),
    title: external_exports.string(),
    filename: external_exports.string().optional(),
    providerMetadata: providerMetadataSchema.optional()
  }),
  external_exports.strictObject({
    type: external_exports.literal("file"),
    url: external_exports.string(),
    mediaType: external_exports.string(),
    providerMetadata: providerMetadataSchema.optional()
  }),
  external_exports.strictObject({
    type: external_exports.string().startsWith("data-"),
    id: external_exports.string().optional(),
    data: external_exports.unknown(),
    transient: external_exports.boolean().optional()
  }),
  external_exports.strictObject({
    type: external_exports.literal("start-step")
  }),
  external_exports.strictObject({
    type: external_exports.literal("finish-step")
  }),
  external_exports.strictObject({
    type: external_exports.literal("start"),
    messageId: external_exports.string().optional(),
    messageMetadata: external_exports.unknown().optional()
  }),
  external_exports.strictObject({
    type: external_exports.literal("finish"),
    messageMetadata: external_exports.unknown().optional()
  }),
  external_exports.strictObject({
    type: external_exports.literal("abort")
  }),
  external_exports.strictObject({
    type: external_exports.literal("message-metadata"),
    messageMetadata: external_exports.unknown()
  })
]);
function fixJson(input) {
  const stack = ["ROOT"];
  let lastValidIndex = -1;
  let literalStart = null;
  function processValueStart(char, i, swapState) {
    {
      switch (char) {
        case '"': {
          lastValidIndex = i;
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_STRING");
          break;
        }
        case "f":
        case "t":
        case "n": {
          lastValidIndex = i;
          literalStart = i;
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_LITERAL");
          break;
        }
        case "-": {
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_NUMBER");
          break;
        }
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9": {
          lastValidIndex = i;
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_NUMBER");
          break;
        }
        case "{": {
          lastValidIndex = i;
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_OBJECT_START");
          break;
        }
        case "[": {
          lastValidIndex = i;
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_ARRAY_START");
          break;
        }
      }
    }
  }
  function processAfterObjectValue(char, i) {
    switch (char) {
      case ",": {
        stack.pop();
        stack.push("INSIDE_OBJECT_AFTER_COMMA");
        break;
      }
      case "}": {
        lastValidIndex = i;
        stack.pop();
        break;
      }
    }
  }
  function processAfterArrayValue(char, i) {
    switch (char) {
      case ",": {
        stack.pop();
        stack.push("INSIDE_ARRAY_AFTER_COMMA");
        break;
      }
      case "]": {
        lastValidIndex = i;
        stack.pop();
        break;
      }
    }
  }
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const currentState = stack[stack.length - 1];
    switch (currentState) {
      case "ROOT":
        processValueStart(char, i, "FINISH");
        break;
      case "INSIDE_OBJECT_START": {
        switch (char) {
          case '"': {
            stack.pop();
            stack.push("INSIDE_OBJECT_KEY");
            break;
          }
          case "}": {
            lastValidIndex = i;
            stack.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_COMMA": {
        switch (char) {
          case '"': {
            stack.pop();
            stack.push("INSIDE_OBJECT_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_KEY": {
        switch (char) {
          case '"': {
            stack.pop();
            stack.push("INSIDE_OBJECT_AFTER_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_KEY": {
        switch (char) {
          case ":": {
            stack.pop();
            stack.push("INSIDE_OBJECT_BEFORE_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_BEFORE_VALUE": {
        processValueStart(char, i, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      }
      case "INSIDE_OBJECT_AFTER_VALUE": {
        processAfterObjectValue(char, i);
        break;
      }
      case "INSIDE_STRING": {
        switch (char) {
          case '"': {
            stack.pop();
            lastValidIndex = i;
            break;
          }
          case "\\": {
            stack.push("INSIDE_STRING_ESCAPE");
            break;
          }
          default: {
            lastValidIndex = i;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_START": {
        switch (char) {
          case "]": {
            lastValidIndex = i;
            stack.pop();
            break;
          }
          default: {
            lastValidIndex = i;
            processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_VALUE": {
        switch (char) {
          case ",": {
            stack.pop();
            stack.push("INSIDE_ARRAY_AFTER_COMMA");
            break;
          }
          case "]": {
            lastValidIndex = i;
            stack.pop();
            break;
          }
          default: {
            lastValidIndex = i;
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_COMMA": {
        processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      }
      case "INSIDE_STRING_ESCAPE": {
        stack.pop();
        lastValidIndex = i;
        break;
      }
      case "INSIDE_NUMBER": {
        switch (char) {
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9": {
            lastValidIndex = i;
            break;
          }
          case "e":
          case "E":
          case "-":
          case ".": {
            break;
          }
          case ",": {
            stack.pop();
            if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") {
              processAfterArrayValue(char, i);
            }
            if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") {
              processAfterObjectValue(char, i);
            }
            break;
          }
          case "}": {
            stack.pop();
            if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") {
              processAfterObjectValue(char, i);
            }
            break;
          }
          case "]": {
            stack.pop();
            if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") {
              processAfterArrayValue(char, i);
            }
            break;
          }
          default: {
            stack.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_LITERAL": {
        const partialLiteral = input.substring(literalStart, i + 1);
        if (
          !"false".startsWith(partialLiteral) &&
          !"true".startsWith(partialLiteral) &&
          !"null".startsWith(partialLiteral)
        ) {
          stack.pop();
          if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") {
            processAfterObjectValue(char, i);
          } else if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") {
            processAfterArrayValue(char, i);
          }
        } else {
          lastValidIndex = i;
        }
        break;
      }
    }
  }
  let result = input.slice(0, lastValidIndex + 1);
  for (let i = stack.length - 1; i >= 0; i--) {
    const state = stack[i];
    switch (state) {
      case "INSIDE_STRING": {
        result += '"';
        break;
      }
      case "INSIDE_OBJECT_KEY":
      case "INSIDE_OBJECT_AFTER_KEY":
      case "INSIDE_OBJECT_AFTER_COMMA":
      case "INSIDE_OBJECT_START":
      case "INSIDE_OBJECT_BEFORE_VALUE":
      case "INSIDE_OBJECT_AFTER_VALUE": {
        result += "}";
        break;
      }
      case "INSIDE_ARRAY_START":
      case "INSIDE_ARRAY_AFTER_COMMA":
      case "INSIDE_ARRAY_AFTER_VALUE": {
        result += "]";
        break;
      }
      case "INSIDE_LITERAL": {
        const partialLiteral = input.substring(literalStart, input.length);
        if ("true".startsWith(partialLiteral)) {
          result += "true".slice(partialLiteral.length);
        } else if ("false".startsWith(partialLiteral)) {
          result += "false".slice(partialLiteral.length);
        } else if ("null".startsWith(partialLiteral)) {
          result += "null".slice(partialLiteral.length);
        }
      }
    }
  }
  return result;
}
async function parsePartialJson2(jsonText) {
  if (jsonText === void 0) {
    return { value: void 0, state: "undefined-input" };
  }
  let result = await safeParseJSON({ text: jsonText });
  if (result.success) {
    return { value: result.value, state: "successful-parse" };
  }
  result = await safeParseJSON({ text: fixJson(jsonText) });
  if (result.success) {
    return { value: result.value, state: "repaired-parse" };
  }
  return { value: void 0, state: "failed-parse" };
}
function isToolUIPart(part) {
  return part.type.startsWith("tool-");
}
function getToolName(part) {
  return part.type.split("-").slice(1).join("-");
}
var originalGenerateId2 = createIdGenerator2({
  prefix: "aitxt",
  size: 24
});
var originalGenerateId3 = createIdGenerator2({ prefix: "aiobj", size: 24 });
var originalGenerateId4 = createIdGenerator2({ prefix: "aiobj", size: 24 });
var output_exports = {};
__export2(output_exports, {
  object: () => object,
  text: () => text
});
var text = () => ({
  type: "text",
  responseFormat: { type: "text" },
  async parsePartial({ text: text2 }) {
    return { partial: text2 };
  },
  async parseOutput({ text: text2 }) {
    return text2;
  }
});
var object = ({ schema: inputSchema }) => {
  const schema = asSchema2(inputSchema);
  return {
    type: "object",
    responseFormat: {
      type: "json",
      schema: schema.jsonSchema
    },
    async parsePartial({ text: text2 }) {
      const result = await parsePartialJson2(text2);
      switch (result.state) {
        case "failed-parse":
        case "undefined-input":
          return void 0;
        case "repaired-parse":
        case "successful-parse":
          return {
            // Note: currently no validation of partial results:
            partial: result.value
          };
        default: {
          const _exhaustiveCheck = result.state;
          throw new Error(`Unsupported parse state: ${_exhaustiveCheck}`);
        }
      }
    },
    async parseOutput({ text: text2 }, context) {
      const parseResult = await safeParseJSON({ text: text2 });
      if (!parseResult.success) {
        throw new NoObjectGeneratedError({
          message: "No object generated: could not parse the response.",
          cause: parseResult.error,
          text: text2,
          response: context.response,
          usage: context.usage,
          finishReason: context.finishReason
        });
      }
      const validationResult = await safeValidateTypes2({
        value: parseResult.value,
        schema
      });
      if (!validationResult.success) {
        throw new NoObjectGeneratedError({
          message: "No object generated: response did not match schema.",
          cause: validationResult.error,
          text: text2,
          response: context.response,
          usage: context.usage,
          finishReason: context.finishReason
        });
      }
      return validationResult.value;
    }
  };
};
var name162 = "AI_NoSuchProviderError";
var marker162 = `vercel.ai.error.${name162}`;
var symbol162 = Symbol.for(marker162);
var _a162;
_a162 = symbol162;
var ClientOrServerImplementationSchema = external_exports.looseObject({
  name: external_exports.string(),
  version: external_exports.string()
});
var BaseParamsSchema = external_exports.looseObject({
  _meta: external_exports.optional(external_exports.object({}).loose())
});
var ResultSchema = BaseParamsSchema;
var RequestSchema = external_exports.object({
  method: external_exports.string(),
  params: external_exports.optional(BaseParamsSchema)
});
var ServerCapabilitiesSchema = external_exports.looseObject({
  experimental: external_exports.optional(external_exports.object({}).loose()),
  logging: external_exports.optional(external_exports.object({}).loose()),
  prompts: external_exports.optional(
    external_exports.looseObject({
      listChanged: external_exports.optional(external_exports.boolean())
    })
  ),
  resources: external_exports.optional(
    external_exports.looseObject({
      subscribe: external_exports.optional(external_exports.boolean()),
      listChanged: external_exports.optional(external_exports.boolean())
    })
  ),
  tools: external_exports.optional(
    external_exports.looseObject({
      listChanged: external_exports.optional(external_exports.boolean())
    })
  )
});
var InitializeResultSchema = ResultSchema.extend({
  protocolVersion: external_exports.string(),
  capabilities: ServerCapabilitiesSchema,
  serverInfo: ClientOrServerImplementationSchema,
  instructions: external_exports.optional(external_exports.string())
});
var PaginatedResultSchema = ResultSchema.extend({
  nextCursor: external_exports.optional(external_exports.string())
});
var ToolSchema = external_exports
  .object({
    name: external_exports.string(),
    description: external_exports.optional(external_exports.string()),
    inputSchema: external_exports
      .object({
        type: external_exports.literal("object"),
        properties: external_exports.optional(
          external_exports.object({}).loose()
        )
      })
      .loose()
  })
  .loose();
var ListToolsResultSchema = PaginatedResultSchema.extend({
  tools: external_exports.array(ToolSchema)
});
var TextContentSchema = external_exports
  .object({
    type: external_exports.literal("text"),
    text: external_exports.string()
  })
  .loose();
var ImageContentSchema = external_exports
  .object({
    type: external_exports.literal("image"),
    data: external_exports.base64(),
    mimeType: external_exports.string()
  })
  .loose();
var ResourceContentsSchema = external_exports
  .object({
    /**
     * The URI of this resource.
     */
    uri: external_exports.string(),
    /**
     * The MIME type of this resource, if known.
     */
    mimeType: external_exports.optional(external_exports.string())
  })
  .loose();
var TextResourceContentsSchema = ResourceContentsSchema.extend({
  text: external_exports.string()
});
var BlobResourceContentsSchema = ResourceContentsSchema.extend({
  blob: external_exports.base64()
});
var EmbeddedResourceSchema = external_exports
  .object({
    type: external_exports.literal("resource"),
    resource: external_exports.union([
      TextResourceContentsSchema,
      BlobResourceContentsSchema
    ])
  })
  .loose();
var CallToolResultSchema = ResultSchema.extend({
  content: external_exports.array(
    external_exports.union([
      TextContentSchema,
      ImageContentSchema,
      EmbeddedResourceSchema
    ])
  ),
  isError: external_exports.boolean().default(false).optional()
}).or(
  ResultSchema.extend({
    toolResult: external_exports.unknown()
  })
);
var JSONRPC_VERSION = "2.0";
var JSONRPCRequestSchema = external_exports
  .object({
    jsonrpc: external_exports.literal(JSONRPC_VERSION),
    id: external_exports.union([
      external_exports.string(),
      external_exports.number().int()
    ])
  })
  .merge(RequestSchema)
  .strict();
var JSONRPCResponseSchema = external_exports
  .object({
    jsonrpc: external_exports.literal(JSONRPC_VERSION),
    id: external_exports.union([
      external_exports.string(),
      external_exports.number().int()
    ]),
    result: ResultSchema
  })
  .strict();
var JSONRPCErrorSchema = external_exports
  .object({
    jsonrpc: external_exports.literal(JSONRPC_VERSION),
    id: external_exports.union([
      external_exports.string(),
      external_exports.number().int()
    ]),
    error: external_exports.object({
      code: external_exports.number().int(),
      message: external_exports.string(),
      data: external_exports.optional(external_exports.unknown())
    })
  })
  .strict();
var JSONRPCNotificationSchema = external_exports
  .object({
    jsonrpc: external_exports.literal(JSONRPC_VERSION)
  })
  .merge(
    external_exports.object({
      method: external_exports.string(),
      params: external_exports.optional(BaseParamsSchema)
    })
  )
  .strict();
var JSONRPCMessageSchema = external_exports.union([
  JSONRPCRequestSchema,
  JSONRPCNotificationSchema,
  JSONRPCResponseSchema,
  JSONRPCErrorSchema
]);
var HttpChatTransport = class {
  constructor({
    api = "/api/chat",
    credentials,
    headers,
    body,
    fetch: fetch2,
    prepareSendMessagesRequest,
    prepareReconnectToStreamRequest
  }) {
    this.api = api;
    this.credentials = credentials;
    this.headers = headers;
    this.body = body;
    this.fetch = fetch2;
    this.prepareSendMessagesRequest = prepareSendMessagesRequest;
    this.prepareReconnectToStreamRequest = prepareReconnectToStreamRequest;
  }
  async sendMessages({ abortSignal, ...options }) {
    var _a172, _b8, _c, _d, _e;
    const resolvedBody = await resolve(this.body);
    const resolvedHeaders = await resolve(this.headers);
    const resolvedCredentials = await resolve(this.credentials);
    const preparedRequest = await ((_a172 = this.prepareSendMessagesRequest) ==
    null
      ? void 0
      : _a172.call(this, {
          api: this.api,
          id: options.chatId,
          messages: options.messages,
          body: { ...resolvedBody, ...options.body },
          headers: { ...resolvedHeaders, ...options.headers },
          credentials: resolvedCredentials,
          requestMetadata: options.metadata,
          trigger: options.trigger,
          messageId: options.messageId
        }));
    const api =
      (_b8 = preparedRequest == null ? void 0 : preparedRequest.api) != null
        ? _b8
        : this.api;
    const headers =
      (preparedRequest == null ? void 0 : preparedRequest.headers) !== void 0
        ? preparedRequest.headers
        : { ...resolvedHeaders, ...options.headers };
    const body =
      (preparedRequest == null ? void 0 : preparedRequest.body) !== void 0
        ? preparedRequest.body
        : {
            ...resolvedBody,
            ...options.body,
            id: options.chatId,
            messages: options.messages,
            trigger: options.trigger,
            messageId: options.messageId
          };
    const credentials =
      (_c = preparedRequest == null ? void 0 : preparedRequest.credentials) !=
      null
        ? _c
        : resolvedCredentials;
    const fetch2 = (_d = this.fetch) != null ? _d : globalThis.fetch;
    const response = await fetch2(api, {
      method: "POST",
      headers: withUserAgentSuffix(
        {
          "Content-Type": "application/json",
          ...headers
        },
        `ai-sdk/${VERSION2}`,
        getRuntimeEnvironmentUserAgent()
      ),
      body: JSON.stringify(body),
      credentials,
      signal: abortSignal
    });
    if (!response.ok) {
      throw new Error(
        (_e = await response.text()) != null
          ? _e
          : "Failed to fetch the chat response."
      );
    }
    if (!response.body) {
      throw new Error("The response body is empty.");
    }
    return this.processResponseStream(response.body);
  }
  async reconnectToStream(options) {
    var _a172, _b8, _c, _d, _e;
    const resolvedBody = await resolve(this.body);
    const resolvedHeaders = await resolve(this.headers);
    const resolvedCredentials = await resolve(this.credentials);
    const preparedRequest = await ((_a172 =
      this.prepareReconnectToStreamRequest) == null
      ? void 0
      : _a172.call(this, {
          api: this.api,
          id: options.chatId,
          body: { ...resolvedBody, ...options.body },
          headers: { ...resolvedHeaders, ...options.headers },
          credentials: resolvedCredentials,
          requestMetadata: options.metadata
        }));
    const api =
      (_b8 = preparedRequest == null ? void 0 : preparedRequest.api) != null
        ? _b8
        : `${this.api}/${options.chatId}/stream`;
    const headers =
      (preparedRequest == null ? void 0 : preparedRequest.headers) !== void 0
        ? preparedRequest.headers
        : { ...resolvedHeaders, ...options.headers };
    const credentials =
      (_c = preparedRequest == null ? void 0 : preparedRequest.credentials) !=
      null
        ? _c
        : resolvedCredentials;
    const fetch2 = (_d = this.fetch) != null ? _d : globalThis.fetch;
    const response = await fetch2(api, {
      method: "GET",
      headers: withUserAgentSuffix(
        headers,
        `ai-sdk/${VERSION2}`,
        getRuntimeEnvironmentUserAgent()
      ),
      credentials
    });
    if (response.status === 204) {
      return null;
    }
    if (!response.ok) {
      throw new Error(
        (_e = await response.text()) != null
          ? _e
          : "Failed to fetch the chat response."
      );
    }
    if (!response.body) {
      throw new Error("The response body is empty.");
    }
    return this.processResponseStream(response.body);
  }
};
var DefaultChatTransport = class extends HttpChatTransport {
  constructor(options = {}) {
    super(options);
  }
  processResponseStream(stream) {
    return parseJsonEventStream({
      stream,
      schema: uiMessageChunkSchema
    }).pipeThrough(
      new TransformStream({
        async transform(chunk, controller) {
          if (!chunk.success) {
            throw chunk.error;
          }
          controller.enqueue(chunk.value);
        }
      })
    );
  }
};
var textUIPartSchema = external_exports.object({
  type: external_exports.literal("text"),
  text: external_exports.string(),
  state: external_exports.enum(["streaming", "done"]).optional(),
  providerMetadata: providerMetadataSchema.optional()
});
var reasoningUIPartSchema = external_exports.object({
  type: external_exports.literal("reasoning"),
  text: external_exports.string(),
  state: external_exports.enum(["streaming", "done"]).optional(),
  providerMetadata: providerMetadataSchema.optional()
});
var sourceUrlUIPartSchema = external_exports.object({
  type: external_exports.literal("source-url"),
  sourceId: external_exports.string(),
  url: external_exports.string(),
  title: external_exports.string().optional(),
  providerMetadata: providerMetadataSchema.optional()
});
var sourceDocumentUIPartSchema = external_exports.object({
  type: external_exports.literal("source-document"),
  sourceId: external_exports.string(),
  mediaType: external_exports.string(),
  title: external_exports.string(),
  filename: external_exports.string().optional(),
  providerMetadata: providerMetadataSchema.optional()
});
var fileUIPartSchema = external_exports.object({
  type: external_exports.literal("file"),
  mediaType: external_exports.string(),
  filename: external_exports.string().optional(),
  url: external_exports.string(),
  providerMetadata: providerMetadataSchema.optional()
});
var stepStartUIPartSchema = external_exports.object({
  type: external_exports.literal("step-start")
});
var dataUIPartSchema = external_exports.object({
  type: external_exports.string().startsWith("data-"),
  id: external_exports.string().optional(),
  data: external_exports.unknown()
});
var dynamicToolUIPartSchemas = [
  external_exports.object({
    type: external_exports.literal("dynamic-tool"),
    toolName: external_exports.string(),
    toolCallId: external_exports.string(),
    state: external_exports.literal("input-streaming"),
    input: external_exports.unknown().optional(),
    output: external_exports.never().optional(),
    errorText: external_exports.never().optional()
  }),
  external_exports.object({
    type: external_exports.literal("dynamic-tool"),
    toolName: external_exports.string(),
    toolCallId: external_exports.string(),
    state: external_exports.literal("input-available"),
    input: external_exports.unknown(),
    output: external_exports.never().optional(),
    errorText: external_exports.never().optional(),
    callProviderMetadata: providerMetadataSchema.optional()
  }),
  external_exports.object({
    type: external_exports.literal("dynamic-tool"),
    toolName: external_exports.string(),
    toolCallId: external_exports.string(),
    state: external_exports.literal("output-available"),
    input: external_exports.unknown(),
    output: external_exports.unknown(),
    errorText: external_exports.never().optional(),
    callProviderMetadata: providerMetadataSchema.optional(),
    preliminary: external_exports.boolean().optional()
  }),
  external_exports.object({
    type: external_exports.literal("dynamic-tool"),
    toolName: external_exports.string(),
    toolCallId: external_exports.string(),
    state: external_exports.literal("output-error"),
    input: external_exports.unknown(),
    output: external_exports.never().optional(),
    errorText: external_exports.string(),
    callProviderMetadata: providerMetadataSchema.optional()
  })
];
var toolUIPartSchemas = [
  external_exports.object({
    type: external_exports.string().startsWith("tool-"),
    toolCallId: external_exports.string(),
    state: external_exports.literal("input-streaming"),
    providerExecuted: external_exports.boolean().optional(),
    input: external_exports.unknown().optional(),
    output: external_exports.never().optional(),
    errorText: external_exports.never().optional()
  }),
  external_exports.object({
    type: external_exports.string().startsWith("tool-"),
    toolCallId: external_exports.string(),
    state: external_exports.literal("input-available"),
    providerExecuted: external_exports.boolean().optional(),
    input: external_exports.unknown(),
    output: external_exports.never().optional(),
    errorText: external_exports.never().optional(),
    callProviderMetadata: providerMetadataSchema.optional()
  }),
  external_exports.object({
    type: external_exports.string().startsWith("tool-"),
    toolCallId: external_exports.string(),
    state: external_exports.literal("output-available"),
    providerExecuted: external_exports.boolean().optional(),
    input: external_exports.unknown(),
    output: external_exports.unknown(),
    errorText: external_exports.never().optional(),
    callProviderMetadata: providerMetadataSchema.optional(),
    preliminary: external_exports.boolean().optional()
  }),
  external_exports.object({
    type: external_exports.string().startsWith("tool-"),
    toolCallId: external_exports.string(),
    state: external_exports.literal("output-error"),
    providerExecuted: external_exports.boolean().optional(),
    input: external_exports.unknown(),
    output: external_exports.never().optional(),
    errorText: external_exports.string(),
    callProviderMetadata: providerMetadataSchema.optional()
  })
];
var uiMessageSchema = external_exports.object({
  id: external_exports.string(),
  role: external_exports.enum(["system", "user", "assistant"]),
  metadata: external_exports.unknown().optional(),
  parts: external_exports.array(
    external_exports.union([
      textUIPartSchema,
      reasoningUIPartSchema,
      sourceUrlUIPartSchema,
      sourceDocumentUIPartSchema,
      fileUIPartSchema,
      stepStartUIPartSchema,
      dataUIPartSchema,
      ...dynamicToolUIPartSchemas,
      ...toolUIPartSchemas
    ])
  )
});

// node_modules/agents/node_modules/nanoid/url-alphabet/index.js
var urlAlphabet =
  "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";

// node_modules/agents/node_modules/nanoid/index.browser.js
var nanoid = (size = 21) => {
  let id = "";
  let bytes = crypto.getRandomValues(new Uint8Array((size |= 0)));
  while (size--) {
    id += urlAlphabet[bytes[size] & 63];
  }
  return id;
};

// node_modules/agents/dist/ai-react.js
var import_react8 = __toESM(require_react());
var requestCache = /* @__PURE__ */ new Map();
function detectToolsRequiringConfirmation(tools) {
  if (!tools) return [];
  return Object.entries(tools)
    .filter(([_name, tool2]) => !tool2.execute)
    .map(([name17]) => name17);
}
function useAgentChat(options) {
  const {
    agent,
    getInitialMessages,
    messages: optionsInitialMessages,
    experimental_automaticToolResolution,
    tools,
    toolsRequiringConfirmation: manualToolsRequiringConfirmation,
    autoSendAfterAllConfirmationsResolved = true,
    ...rest
  } = options;
  const toolsRequiringConfirmation =
    manualToolsRequiringConfirmation ?? detectToolsRequiringConfirmation(tools);
  const agentUrl = new URL(
    `${
      // @ts-expect-error we're using a protected _url property that includes query params
      (agent._url || agent._pkurl)
        ?.replace("ws://", "http://")
        .replace("wss://", "https://")
    }`
  );
  agentUrl.searchParams.delete("_pk");
  const agentUrlString = agentUrl.toString();
  const agentRef = (0, import_react8.useRef)(agent);
  (0, import_react8.useEffect)(() => {
    agentRef.current = agent;
  }, [agent]);
  async function defaultGetInitialMessagesFetch({ url }) {
    const getMessagesUrl = new URL(url);
    getMessagesUrl.pathname += "/get-messages";
    const response = await fetch(getMessagesUrl.toString(), {
      credentials: options.credentials,
      headers: options.headers
    });
    if (!response.ok) {
      console.warn(
        `Failed to fetch initial messages: ${response.status} ${response.statusText}`
      );
      return [];
    }
    const text2 = await response.text();
    if (!text2.trim()) {
      return [];
    }
    try {
      return JSON.parse(text2);
    } catch (error) {
      console.warn("Failed to parse initial messages JSON:", error);
      return [];
    }
  }
  const getInitialMessagesFetch =
    getInitialMessages || defaultGetInitialMessagesFetch;
  function doGetInitialMessages(getInitialMessagesOptions) {
    if (requestCache.has(agentUrlString)) {
      return requestCache.get(agentUrlString);
    }
    const promise = getInitialMessagesFetch(getInitialMessagesOptions);
    requestCache.set(agentUrlString, promise);
    return promise;
  }
  const initialMessagesPromise =
    getInitialMessages === null
      ? null
      : doGetInitialMessages({
          agent: agent.agent,
          name: agent.name,
          url: agentUrlString
        });
  const initialMessages = initialMessagesPromise
    ? (0, import_react8.use)(initialMessagesPromise)
    : (optionsInitialMessages ?? []);
  (0, import_react8.useEffect)(() => {
    if (!initialMessagesPromise) {
      return;
    }
    requestCache.set(agentUrlString, initialMessagesPromise);
    return () => {
      if (requestCache.get(agentUrlString) === initialMessagesPromise) {
        requestCache.delete(agentUrlString);
      }
    };
  }, [agentUrlString, initialMessagesPromise]);
  const aiFetch = (0, import_react8.useCallback)(
    async (request, options2 = {}) => {
      const {
        method,
        keepalive,
        headers,
        body,
        redirect,
        integrity,
        signal,
        credentials,
        mode,
        referrer,
        referrerPolicy,
        window: window2
      } = options2;
      const id = nanoid(8);
      const abortController = new AbortController();
      let controller;
      let isToolCallInProgress = false;
      const currentAgent = agentRef.current;
      signal?.addEventListener("abort", () => {
        currentAgent.send(
          JSON.stringify({
            id,
            type: "cf_agent_chat_request_cancel"
            /* CF_AGENT_CHAT_REQUEST_CANCEL */
          })
        );
        abortController.abort();
        if (!isToolCallInProgress) {
          controller.close();
        }
      });
      currentAgent.addEventListener(
        "message",
        (event) => {
          let data;
          try {
            data = JSON.parse(event.data);
          } catch (_error2) {
            return;
          }
          if (data.type === "cf_agent_use_chat_response") {
            if (data.id === id) {
              if (data.error) {
                controller.error(new Error(data.body));
                abortController.abort();
              } else {
                if (data.body?.trim()) {
                  if (data.body.includes('"tool_calls"')) {
                    isToolCallInProgress = true;
                  }
                  controller.enqueue(
                    new TextEncoder().encode(`data: ${data.body}

`)
                  );
                }
                if (data.done && !isToolCallInProgress) {
                  controller.close();
                  abortController.abort();
                }
              }
            }
          }
        },
        { signal: abortController.signal }
      );
      const stream = new ReadableStream({
        start(c) {
          controller = c;
        }
      });
      currentAgent.send(
        JSON.stringify({
          id,
          init: {
            body,
            credentials,
            headers,
            integrity,
            keepalive,
            method,
            mode,
            redirect,
            referrer,
            referrerPolicy,
            window: window2
          },
          type: "cf_agent_use_chat_request",
          url: request.toString()
        })
      );
      return new Response(stream);
    },
    []
  );
  const customTransport = (0, import_react8.useMemo)(
    () => ({
      sendMessages: async (options2) => {
        const transport = new DefaultChatTransport({
          api: agentUrlString,
          fetch: aiFetch
        });
        return transport.sendMessages(options2);
      },
      reconnectToStream: async (options2) => {
        const transport = new DefaultChatTransport({
          api: agentUrlString,
          fetch: aiFetch
        });
        return transport.reconnectToStream(options2);
      }
    }),
    [agentUrlString, aiFetch]
  );
  const useChatHelpers = useChat({
    ...rest,
    messages: initialMessages,
    transport: customTransport,
    id: agent._pk
  });
  const processedToolCalls = (0, import_react8.useRef)(
    /* @__PURE__ */ new Set()
  );
  const lastMessage =
    useChatHelpers.messages[useChatHelpers.messages.length - 1];
  const pendingConfirmations = (() => {
    if (!lastMessage || lastMessage.role !== "assistant") {
      return { messageId: void 0, toolCallIds: /* @__PURE__ */ new Set() };
    }
    const pendingIds = /* @__PURE__ */ new Set();
    for (const part of lastMessage.parts ?? []) {
      if (
        isToolUIPart(part) &&
        part.state === "input-available" &&
        toolsRequiringConfirmation.includes(getToolName(part))
      ) {
        pendingIds.add(part.toolCallId);
      }
    }
    return { messageId: lastMessage.id, toolCallIds: pendingIds };
  })();
  const pendingConfirmationsRef = (0, import_react8.useRef)(
    pendingConfirmations
  );
  pendingConfirmationsRef.current = pendingConfirmations;
  (0, import_react8.useEffect)(() => {
    if (!experimental_automaticToolResolution) {
      return;
    }
    const lastMessage2 =
      useChatHelpers.messages[useChatHelpers.messages.length - 1];
    if (!lastMessage2 || lastMessage2.role !== "assistant") {
      return;
    }
    const toolCalls = lastMessage2.parts.filter(
      (part) =>
        isToolUIPart(part) &&
        part.state === "input-available" &&
        !processedToolCalls.current.has(part.toolCallId)
    );
    if (toolCalls.length > 0) {
      (async () => {
        const toolCallsToResolve = toolCalls.filter(
          (part) =>
            isToolUIPart(part) &&
            !toolsRequiringConfirmation.includes(getToolName(part)) &&
            tools?.[getToolName(part)]?.execute
          // Only execute if client has execute function
        );
        if (toolCallsToResolve.length > 0) {
          for (const part of toolCallsToResolve) {
            if (isToolUIPart(part)) {
              processedToolCalls.current.add(part.toolCallId);
              let toolOutput = null;
              const toolName = getToolName(part);
              const tool2 = tools?.[toolName];
              if (tool2?.execute && part.input) {
                try {
                  toolOutput = await tool2.execute(part.input);
                } catch (error) {
                  toolOutput = `Error executing tool: ${error instanceof Error ? error.message : String(error)}`;
                }
              }
              await useChatHelpers.addToolResult({
                toolCallId: part.toolCallId,
                tool: toolName,
                output: toolOutput
              });
            }
          }
          if (pendingConfirmationsRef.current.toolCallIds.size === 0) {
            useChatHelpers.sendMessage();
          }
        }
      })();
    }
  }, [
    useChatHelpers.messages,
    experimental_automaticToolResolution,
    useChatHelpers.addToolResult,
    useChatHelpers.sendMessage,
    toolsRequiringConfirmation
  ]);
  (0, import_react8.useEffect)(() => {
    function onClearHistory(event) {
      if (typeof event.data !== "string") return;
      let data;
      try {
        data = JSON.parse(event.data);
      } catch (_error2) {
        return;
      }
      if (data.type === "cf_agent_chat_clear") {
        useChatHelpers.setMessages([]);
      }
    }
    function onMessages(event) {
      if (typeof event.data !== "string") return;
      let data;
      try {
        data = JSON.parse(event.data);
      } catch (_error2) {
        return;
      }
      if (data.type === "cf_agent_chat_messages") {
        useChatHelpers.setMessages(data.messages);
      }
    }
    agent.addEventListener("message", onClearHistory);
    agent.addEventListener("message", onMessages);
    return () => {
      agent.removeEventListener("message", onClearHistory);
      agent.removeEventListener("message", onMessages);
    };
  }, [agent, useChatHelpers.setMessages]);
  const addToolResultAndSendMessage = async (args) => {
    const { toolCallId } = args;
    await useChatHelpers.addToolResult(args);
    if (!autoSendAfterAllConfirmationsResolved) {
      useChatHelpers.sendMessage();
      return;
    }
    const pending = pendingConfirmationsRef.current?.toolCallIds;
    if (!pending) {
      useChatHelpers.sendMessage();
      return;
    }
    const wasLast = pending.size === 1 && pending.has(toolCallId);
    if (pending.has(toolCallId)) {
      pending.delete(toolCallId);
    }
    if (wasLast || pending.size === 0) {
      useChatHelpers.sendMessage();
    }
  };
  return {
    ...useChatHelpers,
    addToolResult: addToolResultAndSendMessage,
    clearHistory: () => {
      useChatHelpers.setMessages([]);
      agent.send(
        JSON.stringify({
          type: "cf_agent_chat_clear"
          /* CF_AGENT_CHAT_CLEAR */
        })
      );
    },
    setMessages: (messages) => {
      useChatHelpers.setMessages(messages);
      agent.send(
        JSON.stringify({
          messages: Array.isArray(messages) ? messages : [],
          type: "cf_agent_chat_messages"
          /* CF_AGENT_CHAT_MESSAGES */
        })
      );
    }
  };
}
export { detectToolsRequiringConfirmation, useAgentChat };
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=agents_ai-react.js.map
