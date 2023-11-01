## [1.1.2](https://github.com/StinkyBenji/ansible-tekton-demo/compare/v1.1.1...v1.1.2) (2023-11-01)


### Bug Fixes

* ansible-lint version ([7c77f7b](https://github.com/StinkyBenji/ansible-tekton-demo/commit/7c77f7b38485fc985cebbbc1907426d4dadb8337))
* semantic release version result new line ([64ec38d](https://github.com/StinkyBenji/ansible-tekton-demo/commit/64ec38d85d36a8746bdb121b40deebb2a525ddad))

## [1.1.1](https://github.com/StinkyBenji/ansible-tekton-demo/compare/v1.1.0...v1.1.1) (2023-11-01)


### Bug Fixes

* add echo -n ([8fd7991](https://github.com/StinkyBenji/ansible-tekton-demo/commit/8fd7991e9194bc36d62604535713970a991cfbe8))

## [1.1.0](https://github.com/StinkyBenji/ansible-tekton-demo/compare/v1.0.0...v1.1.0) (2023-11-01)


### Features

* add task for updating and pushing image to quay.io with new tag ([#14](https://github.com/StinkyBenji/ansible-tekton-demo/issues/14)) ([0ccb5da](https://github.com/StinkyBenji/ansible-tekton-demo/commit/0ccb5da55f4704c79ce75ca1b2cedf2ac6dc403c))


### Bug Fixes

* add double quotes to skopeo copy params ([61b51de](https://github.com/StinkyBenji/ansible-tekton-demo/commit/61b51dea621233f10f4b101ec1cdbece84c0b253))
* blank space in task script ([b24b88a](https://github.com/StinkyBenji/ansible-tekton-demo/commit/b24b88aa2d510d0ead5a35a146616b9ece0dff8b))
* env in skopeo copy ([1433b55](https://github.com/StinkyBenji/ansible-tekton-demo/commit/1433b551c594c077e9757cc6b344fff975090635))
* remove pull request specific params ([#18](https://github.com/StinkyBenji/ansible-tekton-demo/issues/18)) ([b8b79ea](https://github.com/StinkyBenji/ansible-tekton-demo/commit/b8b79ea819c43167291dd552571d5d929d097e05))

## 1.0.0 (2023-10-30)


### Features

* add ansible execution environment build pipeline  ([#6](https://github.com/StinkyBenji/ansible-tekton-demo/issues/6)) ([52639b1](https://github.com/StinkyBenji/ansible-tekton-demo/commit/52639b1331cb1a922b7e8298c98abaeabce6f4bc))
* add image scan and final cleanup task ([#13](https://github.com/StinkyBenji/ansible-tekton-demo/issues/13)) ([669f7db](https://github.com/StinkyBenji/ansible-tekton-demo/commit/669f7dbe55a0950f5ffbfc1357dbdbf5ca8ccf13))
* add semantic-release to ansible ee build pipeline ([#7](https://github.com/StinkyBenji/ansible-tekton-demo/issues/7)) ([1af95e3](https://github.com/StinkyBenji/ansible-tekton-demo/commit/1af95e36f761448b72020890d6828ddb0b7d69d5))


### Bug Fixes

* **deps:** update commitlint monorepo to v18.1.0 ([#8](https://github.com/StinkyBenji/ansible-tekton-demo/issues/8)) ([a27b469](https://github.com/StinkyBenji/ansible-tekton-demo/commit/a27b469c9b9247911a9aa83846372e45de4ff11d))
* semantic-release task condition ([#11](https://github.com/StinkyBenji/ansible-tekton-demo/issues/11)) ([7c93cbb](https://github.com/StinkyBenji/ansible-tekton-demo/commit/7c93cbb91a5f7028bbe663c022c590678db8f3a4))
* update git-clone to pass the branch for semantic-release  ([#10](https://github.com/StinkyBenji/ansible-tekton-demo/issues/10)) ([44633ab](https://github.com/StinkyBenji/ansible-tekton-demo/commit/44633abc76643c0834cad920bafef15c13f77e60))
