# Ansible Tekton Demo

The goal is to automate the full release cycle of an Ansible Execution Environment,
including code linting, testing and image build, testing, push to the registry
or automation hub, semantic release and SBOM generator.

## Tools used in the demo

- pre-commit 3.4.0
- OpenShift 4.13.12
- Ansible
- OpenShift Pipelines 1.12.0

## Setup pre-commit

Install [pre-commit](https://pre-commit.com/) on your local (virtual)
machine: `pip3 install pre-commit==<version>`

In your repo path, please run: `pre-commit install`,

If you want to use your own pre-commit config, please do:
`pre-commit install -c <your-config>`

## Setup Pipeline As Code

This demo uses GitHub webhook as an example, but you can refer to
[pipeline as code](https://pipelinesascode.com/) for other configurations.

By default, OpenShift Pipelines enables the pipeline as code.

Following the [instruction](https://pipelinesascode.com/docs/install/github_webhook/)
to configure GitHub webhook for the repo.

After that, create a new namespace in your OpenShift cluster and create the resouces
in `.tekton/pac/` in the corresponding namespace with the correct values.
