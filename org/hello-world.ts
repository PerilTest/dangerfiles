import {markdown, danger} from "danger"

markdown("👍")

markdown(`
### DSL
\`\`\`
${JSON.stringify(danger.github.thisPR, null, "  ")}
\`\`\`

`

// // Try updating the word 'danger' to 'DaNgEr' in issues.
// const body = danger.github.issue.body
// if (body.includes("danger")) {
//   const newBody = body.replace(/danger/, "DaNgEr")
//   warn("Changed word")
//   schedule(async () => {
//     await danger.github.api.issues.edit({ ...danger.github.thisPR, body: newBody })
//   })
// }
