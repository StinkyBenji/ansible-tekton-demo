module.exports = {
<<<<<<< HEAD
  branches: ["+([0-9])?(.{+([0-9]),x}).x", "main", "feature/*", "feat/*"],
=======
  branches: "main",
>>>>>>> baf1e51 (feat: add semantic release and its dependencies and configuration)
  preset: "conventionalcommits",
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        releaseRules: [
          { type: "docs", scope: "README", release: "patch" },
          { type: "refactor", release: "patch" },
          { type: "style", release: "patch" },
          { scope: "no-release", release: "false" },
        ],
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"],
        },
      },
    ],
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    "@semantic-release/git",
    "@semantic-release/github",
<<<<<<< HEAD
=======
    "@codedependant/semantic-release-docker",
>>>>>>> baf1e51 (feat: add semantic release and its dependencies and configuration)
  ],
};
