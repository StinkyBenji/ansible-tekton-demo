module.exports = {
  branches: [
    "+([0-9])?(.{+([0-9]),x}).x",
    "main",
    "feature/*",
    "feat/*",
    "HEAD",
  ],
  preset: "conventionalcommits",
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        releaseRules: [
          { type: "docs", scope: "README", release: "patch" },
          { type: "refactor", release: "patch" },
          { type: "style", release: "patch" },
        ],
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"],
          noteKeywords: ["feat", "feature"],
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
    // [
    //   "@codedependant/semantic-release-docker", {
    //     dockerContext: "examples/ansible-ee",
    //     dockerRegistry: "quay.io",
    //     dockerImage: "custom-ansible-ee",
    //   }
    // ]
  ],
};
