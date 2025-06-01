module.exports = (async () => {
  const profile = require("lobojs/src/core/profile");

  const endpoints = [
    { name: "jsonplaceholder_posts",    url: "https://jsonplaceholder.typicode.com/posts"    },
    { name: "jsonplaceholder_comments", url: "https://jsonplaceholder.typicode.com/comments" },
    { name: "httpbin_get",              url: "https://httpbin.org/get"                     }
  ];

  for (const { name, url } of endpoints) {
    await profile(name, () => fetch(url).then(res => res.json()));
  }
})();