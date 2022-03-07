const path = require("path");
const Adapter = require("@next-boost/hybrid-disk-cache").Adapter;

/** @type {import('@next-boost/next-boost/dist/types').HandlerConfig} */
module.exports = {
  rules: [
    {
      regex: ".*",
      ttl: 200,
    },
  ],
  paramFilter: (p) => {
    p === "fbclid" || p.startsWith("utm_") ? false : true;
  },
  cacheAdapter: new Adapter({
    path: path.resolve("./.cache"),
    ttl: 60,
    tbd: 3600,
  }),
};
