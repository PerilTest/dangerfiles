import {markdown, danger} from "danger"

markdown("👍")

markdown(JSON.stringify(danger, null, "  ").substring(0, 45000))

// // Try updating the word 'danger' to 'DaNgEr' in issues.
// const body = danger.github.issue.body
// if (body.includes("danger")) {
//   const newBody = body.replace(/danger/, "DaNgEr")
//   warn("Changed word")
//   schedule(async () => {
//     await danger.github.api.issues.edit({ ...danger.github.thisPR, body: newBody })
//   })
// }
