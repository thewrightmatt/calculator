# Workflow Setup

## Trigger Markdown Page Workflow

This repository includes a workflow that automatically triggers a workflow in the `thewrightmatt/markdown-page` repository whenever a release is created.

### Setup Requirements

To enable this workflow, you need to configure a GitHub Personal Access Token (PAT) with the following permissions:

1. **Create a Personal Access Token:**
   - Go to GitHub Settings → Developer settings → Personal access tokens → Fine-grained tokens
   - Create a new token with the following permissions:
     - Repository access: Select `thewrightmatt/markdown-page`
     - Repository permissions: `Contents: Read and write` (or `Actions: Read and write` if triggering workflows)

2. **Add the token as a repository secret:**
   - Go to this repository's Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `WORKFLOW_TRIGGER_TOKEN`
   - Value: Paste your Personal Access Token

### How It Works

When a release is published on this repository, the workflow:
1. Triggers on `release` events (published, created, or released)
2. Sends a `repository_dispatch` event to `thewrightmatt/markdown-page`
3. Includes release information in the payload:
   - `release_tag`: The tag name of the release
   - `release_name`: The name of the release
   - `release_url`: The URL to the release page
   - `repository`: The full name of this repository

### Target Repository Configuration

The `thewrightmatt/markdown-page` repository needs to have a workflow that listens for the `repository_dispatch` event:

```yaml
on:
  repository_dispatch:
    types: [calculator-release]
```

The workflow can then access the release information via:
- `${{ github.event.client_payload.release_tag }}`
- `${{ github.event.client_payload.release_name }}`
- `${{ github.event.client_payload.release_url }}`
- `${{ github.event.client_payload.repository }}`
