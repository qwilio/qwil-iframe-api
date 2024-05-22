let _injected_version = '(unknown)';
try {
  _injected_version = VERSION_INJECTED_BY_WEBPACK;
} catch (_) {}

// Print simple banner on load to aid debugging and bug reporting
console.log(`Qwil IFrame API (version ${_injected_version})`);

export const LIB_VERSION = _injected_version;
