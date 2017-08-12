import {markdown, danger} from "danger"

markdown("👍")

markdown(`
### DSL
\`\`\`
${JSON.stringify(danger.github.thisPR, null, "  ")}
\`\`\`


const issue = danger.github.issue
if (issue.body.includes("danger")) {
  const newBody = issue.body.replace(/danger/, "DaNgEr")
  const repo = issue.repository
  schedule(async () => {
    await danger.github.api.issues.edit({
      owner: repo.owner.login,
      repo: repo.name,
      number: issue.number,
      body: newBody,
    })
  })
}
